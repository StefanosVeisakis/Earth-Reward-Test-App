import React from 'react';
import {
  Image,
  View,
  Text,
  Button,
} from 'react-native';

import styles from './styles';

const Home = (props) => {
  const {navigation}= props;
  
        return (
            <View style={styles.body}>
              <Image
                style={styles.logo}
                source={require
                  ('../../logo.jpg')}
              />
              <Text style={styles.text}>
                At Earth Rewards®, we believe that keeping things simple and fun is the best way to help you measure, reduce and balance the carbon impacts of your lifestyle and live a more environmentally-conscious life.
        
                Doing your bit for the planet has never been easier….
                </Text>
                <Button
                  title="My Account"
                  onPress={() =>
                    navigation.navigate('User')
                }
                />
            </View>
          );
}


export default Home