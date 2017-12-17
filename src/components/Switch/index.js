/**
 * @fileoverview SwitchComponent
 * @name index.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Switch from './switch';

export default class CrossPlatForm extends Component {
  constructor() {
    super();
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(value) {
    this.setState({value: value});
  }

  render() {
    return (
      <View>
        <Text> cross platform test </Text>
        <Switch onChangeValue={this.onChangeValue} />
      </View>
    );
  }
}
