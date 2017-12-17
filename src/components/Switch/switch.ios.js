/**
 * @fileoverview SwitchIOSComponent
 * @name switch.ios.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import { Switch } from 'react-native';

export default class SwitchIOS extends Component {

  constructor() {
    super();
    this.state = { value: false };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(value) {
    this.setState({ value: value });
    if (this.props.onChangeValue) {
      this.props.onChangeValue(value);
    }
  }

  render() {
    return (
      <Switch
        onTintColor="blue"
        onValueChange={this.onChangeValue}
        value={this.state.value}
      />
    );
  }
}
