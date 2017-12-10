/**
 * @fileoverview ForecastComponent
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default class Forecast extends Component {
  render() {
    return (
      <View>
        <Text style={styles.bigText} >
          {this.props.main}
        </Text>
        <Text style={styles.mainText} >
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText} >
          {this.props.temp} F
        </Text>
      </View>
    );
  }
}
