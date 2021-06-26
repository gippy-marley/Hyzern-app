import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box} from '../../components';
import {useStyles} from './styles';
import RoomModule from '../../modules/Room/RoomHome/index';

const Room: React.FC = ({}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Box style={styles.container}>
        <RoomModule />
      </Box>
    </SafeAreaView>
  );
};

export default Room;
