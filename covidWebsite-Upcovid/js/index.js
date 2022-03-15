fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-i", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c6c9db9489mshe10e37ebd39073fp1a39c0jsnb10108da187b",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(err => {
	console.error(err);
});