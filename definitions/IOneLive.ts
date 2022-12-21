import IRecord from './IRecord';

export interface IOneLive extends IRecord {
  expiredAt: Date;
  passphrase: string;
}
