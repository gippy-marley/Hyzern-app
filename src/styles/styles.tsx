import {StyleSheet} from 'react-native';
import Lodash from 'lodash';

const useStyles = () => {
  return StyleSheet.create({});
};

export const combineStyles = (globalStyles: any, localStyles: any) => {
  return Lodash.mergeWith(globalStyles, localStyles, customizer);
};

export default useStyles;

const customizer = (objValue: any, srcValue: any) => {
  if (srcValue) {
    return {...objValue, ...srcValue};
  }
};
