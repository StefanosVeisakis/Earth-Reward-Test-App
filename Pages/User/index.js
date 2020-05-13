import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';
import Web3 from 'web3';
import abi from '../../json/abi.json';

const tokenAddress = "0x8EB6D2CE2Db73Fb058dd9e7CB7961F67c42fEfa1";
const walletAddress = "0xb984cd9fea5bbb4b8a645af9859d27dab9b3b19c";

const web3 = new Web3(new Web3.providers.HttpProvider(`https://kovan.infura.io/v3/505763a0a40d4e46b9a611b8f5877672`));
const contract = new web3.eth.Contract(abi, tokenAddress);

const User = () => {
    const [number, setNumber] = useState(0);

    const getBalance = () => {
        const data = contract.methods.balanceOf(walletAddress).call();
        data.then(setNumber);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}
                label="Your Balance:">
                Your Balance:
            </Text>
            <Text style={styles.number}
                label="Balance Number">
                {number}
            </Text>
            <Button
                title="Show Balance"
                onPress={() => getBalance()}
            />
        </View>
    );
}

export default User