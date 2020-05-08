import { Platform } from 'react-native';

const roboto = {
  bold: 'Roboto-Bold',
  regular: 'Roboto-Regular',
};

const sanfrancisco = {
  bold: 'System',
  regular: 'System',
};

type FontWeigth = 'bold'| 'regular';

export const getFont = (size: FontWeigth) => (
  Platform.OS === 'ios' ? sanfrancisco[size] : roboto[size]
);
