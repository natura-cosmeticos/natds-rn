/**
 * This file is used to split the Modal imports from react-native
 * so we can replace the import with a web implementation of the Modal
 * This is done using the resolve alias config on /storybook-web/main.js file
 */

import { Modal } from 'react-native'

export default Modal
