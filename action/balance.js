import Web3 from 'web3';
import abi from '../json/abi.json';
import {TOKEN_ADDRESS, WALLET_ADDRESS} from '../environment/addresses';
import {
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILURE,
  GET_BALANCE_STARTED
} from './type';

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://kovan.infura.io/v3/505763a0a40d4e46b9a611b8f5877672',
  ),
);
const contract = new web3.eth.Contract(abi, TOKEN_ADDRESS);

export const getBalance = () => {
  return async dispatch => {
    dispatch(getBalanceStarted());
    try {
      const balance = await contract.methods.balanceOf(WALLET_ADDRESS).call();

      dispatch(getBalanceSuccess(balance));
    } catch (err) {
      dispatch(getBalanceFailure(err));
    }
  };
};

export const getBalanceSuccess = data => ({
  type: GET_BALANCE_SUCCESS,
  data: data
});

export const getBalanceFailure = error => ({
  type: GET_BALANCE_FAILURE,
  error: error
});

export const getBalanceStarted = () => ({
  type: GET_BALANCE_STARTED
});
