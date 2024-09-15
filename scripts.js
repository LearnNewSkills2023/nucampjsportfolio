const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})   

async function fetchWeather(){
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "Paradise City";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${euless}&appid=${c3f74824c4a3401bb405908842795ff3}&units=imperial`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);  
        //console.log(data);      
    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayWeather(objectJSON) {
    let temp = objectJSON.main.temp;
    let weatherDescription = objectJSON.weather[0].description;
    let icon = objectJSON.weather[0].icon;
    //console.log(temp, weatherDescription, icon);

    const image = document.createElement('img');
    image.src = `https://openweathermap.org/img/w/${c3f74824c4a3401bb405908842795ff3}.png`;
    document.querySelector('#weather-icon').appendChild(image);
    document.querySelector('#weather-temp').textContent = `${temp}\u00B0`;
    document.querySelector('#weather-description').textContent = weatherDescription;

}

fetchWeather();
