/**
 * @fileoverview ItemStyle
 * @name style.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  module: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    width: '95%',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 4,
  },
  cover: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    padding: 10,
  },
  author: {
    fontSize: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
