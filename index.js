
//www.openweathermap.org

let API = 'e89a87b8e9ec6ded5a3095dcbfb81aa4';
let url = `http://api.openweathermap.org/data/2.5/weather?q=kandahar&units=metric&appid=${API}`;
let container = document.querySelector('.container');
const getWeather = async()=>{
  let data = await fetch(url);
  let json = await data.json();
  console.log(json);

  let card = `
  <div class="card" style="width: 18rem;">
  <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" display=flex width="50" height="300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">${json.name}</h5>
    <p class="card-text">${json.main.temp}&deg;</p>
    <a href="#" class="btn btn-primary">See Forecast</a>
  </div>
</div>`

container.insertAdjacentHTML('beforeend',card)

}
getWeather();



// http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${API}