fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=1000,mk&appid=24df485f0859fe1d61a4dcc9ed1bd02f&units=metric"
)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);

    let city = document.getElementById("city");
    city.innerHTML = data.name;

    let sky = document.getElementById("sky");
    sky.innerHTML = data.weather[0].description;

    let temp = document.getElementById("temp");
    temp.innerHTML = Math.round(data.main.temp) + "&deg";

    let wind = document.getElementById("wind");
    wind.innerHTML = "Wind Speed " + Math.round(data.wind.speed) + " m/s";
  });

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?zip=1000,mk&appid=24df485f0859fe1d61a4dcc9ed1bd02f&units=metric"
)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);

    if (data.cod === "200") {
      //first row
      let data_time = data.list[0].dt_txt;
      data_time = data_time.substring(5, 11);
      document.getElementById("r1d1").innerHTML = data_time;

      let icon_code = data.list[0].weather[0].icon;
      console.log(icon_code + " first");
      let icon_path = "http://openweathermap.org/img/w/" + icon_code + ".png";
      if (icon_code === "01n") {
        document.getElementById("r1d2").src = "icons/sun_shine.png";
      }
      if (icon_code === "01d") {
        document.getElementById("r1d2").src = "icons/sun_shine.png";
      }
      if (icon_code === "03n") {
        document.getElementById("r1d2").src = "icons/cloud.png";
      }
      if (icon_code === "03d") {
        document.getElementById("r1d2").src = "icons/cloud.png";
      }
      if (icon_code === "04n") {
        document.getElementById("r1d2").src = "icons/d_cloud.png";
      }
      if (icon_code === "04d") {
        document.getElementById("r1d2").src = "icons/d_cloud.png";
      }
      if (icon_code === "02d") {
        document.getElementById("r1d2").src = "icons/cloud_sun.png";
      }
      if (icon_code === "02n") {
        document.getElementById("r1d2").src = "icons/cloud_sun.png";
      }
      if (icon_code === "10d") {
        document.getElementById("r1d2").src = "icons/rain.png";
      }
      if (icon_code === "10n") {
        document.getElementById("r1d2").src = "icons/rain.png";
      }

      let r1d3 = document.getElementById("r1d3");
      r1d3.innerHTML = Math.round(data.list[1].main.temp_min) + "&deg;";

      let r1d4 = document.getElementById("r1d4");
      r1d4.innerHTML = Math.round(data.list[5].main.temp_max) + "&deg;";

      //second row
      let data_time1 = data.list[8].dt_txt;
      data_time1 = data_time1.substring(5, 11);
      document.getElementById("r2d1").innerHTML = data_time1;

      let icon_code1 = data.list[8].weather[0].icon;
      console.log(icon_code1 + " second");
      let icon_path1 = "http://openweathermap.org/img/w/" + icon_code1 + ".png";
      if (icon_code1 === "03n") {
        document.getElementById("r2d2").src = "icons/cloud.png";
      }
      if (icon_code1 === "03d") {
        document.getElementById("r2d2").src = "icons/cloud.png";
      }
      if (icon_code1 === "01n") {
        document.getElementById("r2d2").src = "icons/sun_shine.png";
      }
      if (icon_code1 === "01d") {
        document.getElementById("r2d2").src = "icons/sun_shine.png";
      }
      if (icon_code1 === "04n") {
        document.getElementById("r2d2").src = "icons/d_cloud.png";
      }
      if (icon_code1 === "04d") {
        document.getElementById("r2d2").src = "icons/d_cloud.png";
      }
      if (icon_code1 === "02d") {
        document.getElementById("r2d2").src = "icons/cloud_sun.png";
      }
      if (icon_code1 === "02n") {
        document.getElementById("r2d2").src = "icons/cloud_sun.png";
      }
      if (icon_code1 === "10d") {
        document.getElementById("r2d2").src = "icons/rain.png";
      }
      if (icon_code1 === "10n") {
        document.getElementById("r2d2").src = "icons/rain.png";
      }

      let r2d3 = document.getElementById("r2d3");
      r2d3.innerHTML = Math.round(data.list[9].main.temp_min) + "&deg;";

      let r2d4 = document.getElementById("r2d4");
      r2d4.innerHTML = Math.round(data.list[12].main.temp_max) + "&deg;";

      //third row
      let data_time2 = data.list[16].dt_txt;
      data_time2 = data_time2.substring(5, 11);
      document.getElementById("r3d1").innerHTML = data_time2;

      let icon_code2 = data.list[16].weather[0].icon;
      console.log(icon_code2 + " third");
      let icon_path2 = "http://openweathermap.org/img/w/" + icon_code2 + ".png";
      if (icon_code2 === "03n") {
        document.getElementById("r3d2").src = "icons/cloud.png";
      }
      if (icon_code2 === "03d") {
        document.getElementById("r3d2").src = "icons/cloud.png";
      }
      if (icon_code2 === "01n") {
        document.getElementById("r3d2").src = "icons/sun_shine.png";
      }
      if (icon_code2 === "01d") {
        document.getElementById("r3d2").src = "icons/sun_shine.png";
      }
      if (icon_code2 === "04n") {
        document.getElementById("r3d2").src = "icons/d_cloud.png";
      }
      if (icon_code2 === "04d") {
        document.getElementById("r3d2").src = "icons/d_cloud.png";
      }
      if (icon_code2 === "02d") {
        document.getElementById("r3d2").src = "icons/cloud_sun.png";
      }
      if (icon_code2 === "02n") {
        document.getElementById("r3d2").src = "icons/cloud_sun.png";
      }
      if (icon_code2 === "10d") {
        document.getElementById("r3d2").src = "icons/rain.png";
      }
      if (icon_code2 === "10n") {
        document.getElementById("r3d2").src = "icons/rain.png";
      }

      let r3d3 = document.getElementById("r3d3");
      r3d3.innerHTML = Math.round(data.list[17].main.temp_min) + "&deg;";

      let r3d4 = document.getElementById("r3d4");
      r3d4.innerHTML = Math.round(data.list[20].main.temp_max) + "&deg;";

      //fourth row
      let data_time3 = data.list[24].dt_txt;
      data_time3 = data_time3.substring(5, 11);
      document.getElementById("r4d1").innerHTML = data_time3;

      let icon_code3 = data.list[24].weather[0].icon;
      console.log(icon_code3 + " fourth");
      let icon_path3 = "http://openweathermap.org/img/w/" + icon_code3 + ".png";

      if (icon_code3 === "03n") {
        document.getElementById("r4d2").src = "icons/cloud.png";
      }
      if (icon_code3 === "03d") {
        document.getElementById("r4d2").src = "icons/cloud.png";
      }
      if (icon_code3 === "01n") {
        document.getElementById("r4d2").src = "icons/sun_shine.png";
      }
      if (icon_code3 === "01d") {
        document.getElementById("r4d2").src = "icons/sun_shine.png";
      }
      if (icon_code3 === "04n") {
        document.getElementById("r4d2").src = "icons/d_cloud.png";
      }
      if (icon_code3 === "04d") {
        document.getElementById("r4d2").src = "icons/d_cloud.png";
      }
      if (icon_code3 === "02d") {
        document.getElementById("r4d2").src = "icons/cloud_sun.png";
      }
      if (icon_code3 === "02n") {
        document.getElementById("r4d2").src = "icons/cloud_sun.png";
      }
      if (icon_code3 === "10d") {
        document.getElementById("r4d2").src = "icons/rain.png";
      }
      if (icon_code3 === "10n") {
        document.getElementById("r4d2").src = "icons/rain.png";
      }

      let r4d3 = document.getElementById("r4d3");
      r4d3.innerHTML = Math.round(data.list[25].main.temp_min) + "&deg;";

      let r4d4 = document.getElementById("r4d4");
      r4d4.innerHTML = Math.round(data.list[28].main.temp_max) + "&deg;";

      //fifth row
      let data_time4 = data.list[32].dt_txt;
      data_time4 = data_time4.substring(5, 11);
      document.getElementById("r5d1").innerHTML = data_time4;

      let icon_code4 = data.list[32].weather[0].icon;
      let icon_path4 = "http://openweathermap.org/img/w/" + icon_code4 + ".png";
      console.log(icon_code4 + " fifth");
      if (icon_code4 === "01n") {
        document.getElementById("r5d2").src = "icons/sun_shine.png";
      }
      if (icon_code4 === "03n") {
        document.getElementById("r5d2").src = "icons/cloud.png";
      }
      if (icon_code4 === "03d") {
        document.getElementById("r5d2").src = "icons/cloud.png";
      }
      if (icon_code4 === "04n") {
        document.getElementById("r5d2").src = "icons/d_cloud.png";
      }
      if (icon_code4 === "04d") {
        document.getElementById("r5d2").src = "icons/d_cloud.png";
      }
      if (icon_code4 === "02d") {
        document.getElementById("r5d2").src = "icons/cloud_sun.png";
      }
      if (icon_code4 === "02n") {
        document.getElementById("r5d2").src = "icons/cloud_sun.png";
      }
      if (icon_code4 === "10d") {
        document.getElementById("r5d2").src = "icons/rain.png";
      }
      if (icon_code4 === "10n") {
        document.getElementById("r5d2").src = "icons/rain.png";
      }
      if (icon_code4 === "01d") {
        document.getElementById("r5d2").src = "icons/sun_shine.png";
      }

      let r5d3 = document.getElementById("r5d3");
      r5d3.innerHTML = Math.round(data.list[33].main.temp_min) + "&deg;";

      let r5d4 = document.getElementById("r5d4");
      r5d4.innerHTML = Math.round(data.list[36].main.temp_max) + "&deg;";

      //test icons

      // let icon = document.getElementById("icon");
      // icon.src = icon_path;

      // let icon1 = document.getElementById("icon1");
      // icon1.src = icon_path1;

      // let icon2 = document.getElementById("icon2");
      // icon2.src = icon_path2;

      // let icon3 = document.getElementById("icon3");
      // icon3.src = icon_path3;

      // let icon4 = document.getElementById("icon4");
      // icon4.src = icon_path4;
    }
  });

const render = () => {
  let time = new Date().toLocaleTimeString();
  let d_n = new Date().toLocaleTimeString();
  time = time.substring(0, 4);
  d_n = d_n.substring(8, 11);

  let day = new Date();
  day = day.toString();
  day = day.substring(0, 3);

  let month = new Date();
  month = month.toString();
  month = month.substring(4, 7);

  let date = new Date().toLocaleDateString();
  date = date.substring(0, 4);

  let time_day = document.getElementById("time_day");
  time_day.innerHTML =
    day + "," + " " + month + " " + date + " " + time + " " + d_n;
};

setInterval(render, 100);
