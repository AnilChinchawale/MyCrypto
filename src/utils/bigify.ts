import BigNumber from 'bignumber.js';
import BN from 'bn.js';
import { BigNumber as BigNumberish } from 'ethers/utils';

export const bigify = (v: BigNumber.Value | BigNumber | BigNumberish): BigNumber => {
  if (BigNumberish.isBigNumber(v)) {
    return new BigNumber(v.toString());
  } else {
    return new BigNumber(v);
  }
};

export const isBigish = (v: any): boolean => {
  if (BN.isBN(v)) {
    return true;
  } else if (BigNumber.isBigNumber(v)) {
    return true;
  } else if (BigNumberish.isBigNumber(v)) {
    return true;
  } else {
    return false;
  }
};
