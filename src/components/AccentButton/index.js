/**
 * @fileoverview AccentButton
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const style =  StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 50,
    width: 50,
    margin: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#99CCFF',
  },
  accentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default class AccesntButton extends Component {
  render() {
    return (
      <Text style={[style.button, style.accentText]}>
        Hello World.
      </Text>
    );
  }
}
