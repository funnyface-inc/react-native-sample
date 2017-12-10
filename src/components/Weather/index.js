/**
 * @fileoverview WeatherComponents
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, TextInput, View, ImageBackground } from 'react-native';
import axios from 'axios';
import styles from './style';
import Forecast from '../Forecast';
import config from '../../../config/development';

export default class Weather extends Component {
  constructor() {
    super();
    this._handleTextChange = this._handleTextChange.bind(this);
    this._fetchWeather = this._fetchWeather.bind(this);
    this.state = {
      zip: '',
      forecast: {
        main: '-',
        description: '-',
        temp: '-',
      }
    };
  }

  componentDidMount() {
    this._fetchWeather().then((result) => {
      this.setState({
        zip: 'tokyo',
        forecast: result.forecast,
      });
    });
  }

  _fetchWeather(region=null) {
    const url = config.WEATHER_API_HOST;
    const params = {
      q: `${region || 'tokyo'},jp`,
      APPID: config.WEATHER_API_KEY,
    };
    return axios.get(url, { params }).then((res) => {
      const weather = res.data.list[0].weather[0];
      const main = res.data.list[0].main;
      const forecast = {
        main: weather.main,
        description: weather.description,
        temp: main.temp,
      };
      return new Promise((resolve) => {
        resolve({ forecast });
      });
    }).catch((e) => {
      console.log(e);
    });
  }

  _handleTextChange(e) {
    const text = e.nativeEvent.text;
    this._fetchWeather(text).then((result) => {
      this.setState({
        zip: text,
        forecast: result.forecast,
      });
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../../assets/img/background.png')}
      >
        <View style={styles.container}>
          <View style={styles.overay}>
            <Text style={styles.welcome} >
              you input {this.state.zip}
            </Text>
            <Forecast
              main={this.state.forecast.main}
              description={this.state.forecast.description}
              temp={this.state.forecast.temp}
            />
            <TextInput style={styles.input} returnkeyType='go' onSubmitEditing={this._handleTextChange} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
