/**
 * @fileoverview GridComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default class Grid extends Component {

  render() {
    return (
      <View style={styles.module} >
        <View style={styles.left}>
          <View style={styles.leftTop}>
            <Text> 1 </Text>
          </View>
          <View style={styles.leftCenter}>
            <Text> 2 </Text>
          </View>
          <View style={styles.leftBottom}>
            <Text> 3 </Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.rightTop}>
            <Text> 4 </Text>
          </View>
          <View style={styles.rightBottom}>
            <View style={styles.rightBottomLeft}>
              <Text> 5 </Text>
            </View>
            <View style={styles.rightBottomRight}>
              <View style={styles.rightBottomRightTop}>
                <Text> 6 </Text>
              </View>
              <View style={styles.rightBottomRightBottom}>
                <Text> 7 </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
