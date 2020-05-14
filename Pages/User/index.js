import React from 'react';
import {View, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {getBalance} from '../../action/balance';

const User = () => {
  const balance = useSelector(state => state.balanceReducer.balance);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Your Balance:</Text>
      <Text style={styles.number}>{balance}</Text>
      <Button title="Show Balance" onPress={() => dispatch(getBalance())} />
    </View>
  );
};

export default User;
