/**
 * @fileoverview BookFooterComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default class Footer extends Component {

  render() {
    return (
      <View style={styles.footer}>
        <Text>
          Data from the New York Times.
        </Text>
      </View>
    );
  }
}
