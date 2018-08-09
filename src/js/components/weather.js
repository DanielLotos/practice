import React, {Component} from 'react';
import { render } from 'react-dom';

class Weather extends Component {

    state = {
        loaded: false,
        getedWeather: {}
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.599998&lon=33.533333&units=metric&appid=e647cc147e1ae0ca7459de1b7c73b53a')
            .then(response => response.json())
            .then(data => this.setState({
                getedWeather: {
                    temp: Math.round(data.main.temp),
                    clouds: data.clouds.all,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    icon: data.weather[0].icon
                },
                loaded: true
            }));
    };

    render() {
        const {getedWeather, loaded} = this.state;
        if (loaded) return(
            <ul className="weather__list">
                <li className="weather__item">
                  Температура
                    <span className="weather__value">
                      {' ' + getedWeather.temp + ' '}
                    </span>
                  градусов
                </li>
                <li className="weather__item">
                  Ветер
                  <span className="weather__value">
                  {' ' + getedWeather.wind + ' '} м/с
                  </span>
                </li>
                <li className="weather__item">
                  Облачность
                  <span className="weather__value">
                  {' ' + getedWeather.clouds}
                  </span>
                </li>
            </ul>
        );
        return(
            <h1> Загрузочка... </h1>
        );
    };
};

export default Weather
