import IRecord from './IRecord';

export type IDataType = 'secret' | 'file';

export interface IData extends IRecord {
  oneLiveId: string;
  type: IDataType;
  dataId: string;
}