calculateAge = () => {
	// birthday is a date
	const birthday = new Date('20 Dec 1996');
	const curr = Date.now();
	const diff = curr - birthday;

	const age = (diff / 31557600000).toFixed(7); // Divide by 1000*60*60*24*365.25
	document.getElementById('my_age').innerHTML = age;
};

getRank = async () => {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			const { tier, rank } = JSON.parse(xhr.responseText)[0];
			document.getElementById('tier').innerHTML = tier;
			document.getElementById('rank').innerHTML = rank;
		}
	};
	xhr.open('GET', 'http://ashraystats.azurewebsites.net/lol/rank', true);
	xhr.send();
};

getMovies = async () => {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			const response = JSON.parse(xhr.responseText);
			document.getElementById('movie_1').innerHTML = response[0].Title;
			document.getElementById('movie_2').innerHTML = response[1].Title;
			document.getElementById('movie_3').innerHTML = response[2].Title;
		}
	};
	xhr.open('GET', 'http://ashraystats.azurewebsites.net/cinebuzz/getpastbookings', true);
	xhr.send();
};

getSteamGames = async () => {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			const { response } = JSON.parse(xhr.responseText);
			const { name, playtime_forever } = response.games[0];
			document.getElementById('game_name').innerHTML = name;
			document.getElementById('game_time').innerHTML = playtime_forever / 60;
		}
	};
	xhr.open('GET', 'http://ashraystats.azurewebsites.net/steam/latestgames', true);
	xhr.send();
};

$(document).ready(() => {
	calculateAge();
	setInterval(calculateAge, 1000);
	getRank();
	getMovies();
	getSteamGames();
});
