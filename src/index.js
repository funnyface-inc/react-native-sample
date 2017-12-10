/**
 * @fileoverview App.jsx
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import Weather from './components/Weather';

export default class App extends Component {
  render() {
    return <Weather />;
  }
}
