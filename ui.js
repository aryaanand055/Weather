class Ui {
    constructor() {
        this.card_container = document.getElementById('card-content');
        this.img;
    }
    showWeather(weatherDetails, refresh = false) {
        const time = this.getTime();
        const iconUrl = weatherDetails.current.condition.icon;
        document.getElementById("imgIcon").src = `https:${iconUrl}`;
        document.getElementById("iconInfo").innerText = `${weatherDetails.current.condition.text}`;
        document.getElementById("city").innerText = weatherDetails.location.name;
        this.card_container.innerHTML = `
     <ul class="list-group">
                        <li class="list-group-item border-top border-bootom rounded">Temperature: ${weatherDetails.current.temp_c} &#8451;</li>
                        <li class="list-group-item border-top border-bootom rounded">Wind-Speed: ${weatherDetails.current.wind_kph} kph</li>
                        <li class="list-group-item border-top border-bootom rounded">Visibility: ${weatherDetails.current.vis_km} km</li>
                        <li class="list-group-item border-top border-bootom rounded">Humidity: ${weatherDetails.current.humidity} %</li>
                    </ul>
                    <h6 class = "text-right text-small mt-2 font-italic"><small>Last Updated: ${time.year}-${time.month}-${time.date} ${time.hour}:${time.minutes}  <img id="refresh" src="refresh.png" width="15px" height="15px" class="ref" alt="Refresh Icon"></small></h6>
                     
          
      
        `
        this.refreshFun(refresh);
    }

    refreshFun(e) {
        if (e === true) {
            const refreshButt = document.getElementById("refresh");

            refreshButt.classList.add("refresh");
            setTimeout(() => {
                refreshButt.classList.remove("refresh");
            }, 2000)
        }
    }
    getTime() {
        const time = new Date;
        return {
            year: time.getFullYear(),
            month: time.getMonth(),
            date: time.getDate(),
            hour: time.getHours(),
            minutes: time.getSeconds(),
            miliseconds: time.getMilliseconds()
        };
    }
}