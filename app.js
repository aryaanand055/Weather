const weather = new Weather;
const ui = new Ui;
let place;
const cityInput = document.getElementById("floatingInput");



window.addEventListener("load", function () {
    restoreFromLocalStorage(localStorage.getItem("city"));
})

cityInput.addEventListener("keyup", function (e) {

    const input = cityInput.value;
    if (e.keyCode === 13) {
        document.getElementById("floatingInput").input = "";
        place = input;

        set();
        restoreFromLocalStorage(input);

    } else {

    }
})

document.addEventListener("click", function (e) {

    if (e.target.id === "refresh") {
        console.log("Fetching")
        weather.fetchCurrentWeather(place).then(data => {
            ui.showWeather(data, true)
        });
    }

})

function set() {
    weather.fetchCurrentWeather(place).then(data => {
        if (data === "No Location found") {
            document.getElementById("city").innerText = "Location is not found or cannot be accessed";
            document.getElementById("city").classList.remove("text-light");
            document.getElementById("city").classList.add("text-warning");
            //             console.log(data);
        } else {

            ui.showWeather(data);
            document.getElementById("city").classList.add("text-light");
        }
    });
}

// restoreFromLocalStorage();

function restoreFromLocalStorage(input = localStorage.getItem("city")) {
    //     console.log(input);
    if (input !== null) {

        localStorage.setItem("city", input)
        place = localStorage.getItem("city");
        set();
    } else {
        getGeo().then(d => {
            place = d;
            set();
        })

    }

}
async function getGeo(token = "202b82ccc4d570") {
    let url = `https://ipinfo.io/json?token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    getCity(data);
    return data.city;

}

function getCity(data) {
    console.log(data.city)
    return data.city
}
getGeo()

//Include Navabar
//Include Setting with 