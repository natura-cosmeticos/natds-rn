/* eslint-disable */
import { Platform, Modal as ModalNative } from 'react-native';

let Modal: typeof ModalNative;

if (Platform.OS !== 'web') {
  Modal = require('react-native').Modal;
} else {
  Modal = require('./WebModal').default;
}

export default Modal;
