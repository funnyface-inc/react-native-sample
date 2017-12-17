/**
 * @fileoverview App.jsx
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';
import Weather from './components/Weather';
import PressDemo from './components/PressDemo';
import BookList from './components/BookList';
import Switch from './components/Switch';

export default class App extends Component {
  render() {
    return <Switch />;
  }
}
