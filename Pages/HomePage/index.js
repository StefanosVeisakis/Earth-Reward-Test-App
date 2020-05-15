import React from 'react';
import {Image, View, Text, Button} from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.jpg';

const Home = props => {
  const {navigation} = props;

  const navigateToUser = () => {
    navigation.navigate('User');
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.text}>
        At Earth Rewards®, we believe that keeping things simple and fun is the
        best way to help you measure, reduce and balance the carbon impacts of
        your lifestyle and live a more environmentally-conscious life. your bit
        your bit for the planet has never been easier….
      </Text>
      <Button title="My Account" onPress={navigateToUser} />
    </View>
  );
};

export default Home;
