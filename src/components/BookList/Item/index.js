/**
 * @fileoverview BookItemComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default class Item extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.module}>
        <View>
          <Image style={styles.cover} source={{uri: this.props.image}} />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}> {this.props.title} </Text>
          <Text style={styles.author}> {this.props.author} </Text>
        </View>
      </View>
    );
  }
}
