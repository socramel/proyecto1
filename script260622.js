"use strict";

function error() {
    node.textContent = 'Unable to retrieve your location';
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

const apiKey = "d7356011dd7f51055dbae8f847b0ea9d";

function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let url = 'https://api.openweathermap.org/data/2.5/onecall?&lat='+lat+'&lon='+lon+'&lang=es&exclude=current,minutely,daily&units=metric&appid='
        + apiKey
    //console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data.hourly[0].weather[0].main);})
            let llueve="no";
            for (let i = 0; i < 8; i++) {
                console.log(data.hourly[i].weather[0].main);
                if(data.hourly[i].weather[0].main=="Rain")
                    llueve="yes";
            }
            let x = document.getElementById("llueve");
            if(llueve=="yes"){
                x.innerText ="Si";
            }else{
                x.innerText ="No";
            }
        })
}


/*displayWeather: function(data) {

    const {name} = data;

    document.querySelector (."city").innerText= name; 
}*/