/**
 * @fileoverview PressDemoComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './style';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      pressing: false,
    };
    this._onPressIn = this._onPressIn.bind(this);
    this._onPressOut = this._onPressOut.bind(this);
  }

  _onPressIn() {
    this.setState({
      pressing: true,
    });
  }

  _onPressOut() {
    this.setState({
      pressing: false,
    });
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          style={styles.touchable}
        >
          <View style={styles.button} >
            <Text style={styles.welcome} >
              { this.state.pressing ? 'ON' : 'OFF' }
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
