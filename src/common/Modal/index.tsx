/* eslint-disable */
import { Platform } from 'react-native';

let Modal;

if (Platform.OS !== 'web') {
  Modal = require('react-native').Modal;
} else {
  Modal = require('./WebModal').default;
}

export default Modal;
