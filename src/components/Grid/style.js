/**
 * @fileoverview StyleComponent
 * @name style.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  module: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  left: {
    flex: 2,
    flexDirection: 'column',
    margin: 1,
  },
  right: {
    flex: 5,
    flexDirection: 'column',
    margin: 1,
  },

  leftTop: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 2,
  },
  leftCenter: {
    flex: 4,
    backgroundColor: '#FFF',
    margin: 2,
  },
  leftBottom: {
    flex: 2,
    backgroundColor: '#FFF',
    margin: 2,
  },

  rightTop: {
    flex: 5,
    backgroundColor: '#FFF',
    margin: 2,
  },
  rightBottom: {
    flex: 2,
    flexDirection: 'row',
    margin: 2,
  },

  rightBottomRight: {
    flex: 1,
    margin: 1,
  },

  rightBottomLeft: {
    flex: 3,
    backgroundColor: '#FFF',
    margin: 2,
  },

  rightBottomRightTop: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 1,
  },
  rightBottomRightBottom: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 1,
  }
});
