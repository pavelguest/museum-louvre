import {langEn} from './settings-page.js';

const weatherIco = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const inputCity = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

export async function getWeather() {
  let url;
  if(localStorage.lang === 'en' || langEn.checked) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=en&appid=116cf96821b5cad9a9f4a3cb96dbf6bb&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=ru&appid=116cf96821b5cad9a9f4a3cb96dbf6bb&units=metric`;
  }
  const res = await fetch(url);
  const data = await res.json();

  weatherIco.className = 'weather-icon owf';

  if(data.message === 'city not found' || inputCity.value == '') {
    if(localStorage.lang === 'en' || langEn.checked) {
      inputCity.placeholder = 'Enter City';
      weatherError.textContent = `Error. City "${inputCity.value}" not found`;
    } else {
      inputCity.placeholder = 'Введите город';
      weatherError.textContent = `Ошибка. Город "${inputCity.value}" не найден`;
    }
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
  } else {
    weatherError.textContent = '';
    weatherIco.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp.toFixed(0))}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if(localStorage.lang === 'en' || langEn.checked) {
      if(inputCity.value === 'Минск') {
        inputCity.value = 'Minsk';
      }
      inputCity.placeholder = 'Enter City';
      wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    } else {
      if(inputCity.value === 'Minsk') {
        inputCity.value = 'Минск';
      }
      inputCity.placeholder = 'Введите город';
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
    }
  }
}

function changeCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    inputCity.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
inputCity.addEventListener('keypress', changeCity);


function setLocal() {
  localStorage.setItem('city', inputCity.value);
}

function getLocal() {
  if(localStorage.getItem('city')) {
    inputCity.value = localStorage.getItem('city');
    getWeather();
  }
}

window.addEventListener('beforeunload', setLocal)
window.addEventListener('load', getLocal)
