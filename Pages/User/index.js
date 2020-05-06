import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';

const Web3 = require("web3");
// const web3 = new Web3('https://kovan.infura.io/v3/505763a0a40d4e46b9a611b8f5877672');

const User = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
    }, [])


    return (
        <View style={styles.body}>
            <Button
                title="Show Balance"
                onPress={() => setNumber(number + 1)}
            />
            <Text
                label="Your Balance:"
                value={number.count}>
                {number}
            </Text>
        </View>
    );
}

export default User