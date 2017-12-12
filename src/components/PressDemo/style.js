/**
 * @fileoverview PressDemoStyle
 * @name style.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
  touchable: {
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
});
