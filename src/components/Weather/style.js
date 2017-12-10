/**
 * @fileoverview WeatherStyle
 * @name style.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  overay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 40,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    alignSelf: 'center',
  },
});
