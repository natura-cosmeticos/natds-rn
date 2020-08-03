import { Platform } from 'react-native';

export const getFont = () => (
  Platform.OS === 'ios' ? 'System' : 'Roboto'
);
