import {
    GET_BALANCE_SUCCESS,
    GET_BALANCE_FAILURE,
    GET_BALANCE_STARTED
} from './type';

import Web3 from 'web3';
import abi from '../json/abi.json';

const tokenAddress = "0x8EB6D2CE2Db73Fb058dd9e7CB7961F67c42fEfa1";
const walletAddress = "0xb984cd9fea5bbb4b8a645af9859d27dab9b3b19c";

const web3 = new Web3(new Web3.providers.HttpProvider(`https://kovan.infura.io/v3/505763a0a40d4e46b9a611b8f5877672`));
const contract = new web3.eth.Contract(abi, tokenAddress);

export const getBalance = () => {
    return dispatch => {
        dispatch(getBalanceStarted());
        
        contract.methods.balanceOf(walletAddress).call().then(res => {
            dispatch(getBalanceSuccess(res));
        })
        .catch(err => {
            dispatch(getBalanceFailure(err));
        });
    };
};

export const getBalanceSuccess = (data) => (
    {
        type: GET_BALANCE_SUCCESS,
        data: data
    }
);

export const getBalanceFailure = (error) => (
    {
        type: GET_BALANCE_FAILURE,
        error: error
    }
);

export const getBalanceStarted = () => (
    {
        type: GET_BALANCE_STARTED,
    }
);