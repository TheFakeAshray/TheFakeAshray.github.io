function UserAction() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var response = JSON.parse(xhttp.responseText);
			document.getElementById('game_name').innerHTML = response.response.games[0].name;
			document.getElementById('game_time').innerHTML = response.response.games[0].playtime_forever / 60;
		}
	};
	xhttp.open('GET', 'http://ashraystats.azurewebsites.net/steam/latestgames', true);
	xhttp.send();
}

function calculateAge() {
	// birthday is a date
	var birthday = new Date('20 Dec 1996');
	var curr = Date.now();
	var diff = curr - birthday;

	var age = (diff / 31557600000).toFixed(7); // Divide by 1000*60*60*24*365.25
	document.getElementById('my_age').innerHTML = age;
}

function GetRank() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			//Bronze, Silver, Gold, Diamond, Platinum, Master, Challenger
			const { tier, rank } = JSON.parse(xhttp.responseText)[0];
			document.getElementById('tier').innerHTML = tier;
			document.getElementById('rank').innerHTML = rank;
		}
	};
	xhttp.open('GET', 'http://ashraystats.azurewebsites.net/lol/rank', true);
	xhttp.send();
}

function GetMovies() {
    var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			// Bronze, Silver, Gold, Diamond, Platinum, Master, Challenger
            const response = JSON.parse(xhttp.responseText);
			document.getElementById('movie_1').innerHTML = response[0].Title;
			document.getElementById('movie_2').innerHTML = response[1].Title;
			document.getElementById('movie_3').innerHTML = response[2].Title;
		}
	};
	xhttp.open('GET', 'http://ashraystats.azurewebsites.net/cinebuzz/getpastbookings', true);
	xhttp.send();
}

$(document).ready(function() {
	calculateAge();
	setInterval(calculateAge, 1000);
	UserAction();
    GetRank();
    GetMovies();
});
