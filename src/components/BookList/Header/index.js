/**
 * @fileoverview BookHeaderComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>
          Bestsellers in Hardcover Fiction
        </Text>
      </View>
    );
  }
}
