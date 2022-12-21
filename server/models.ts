import { Mongo } from 'meteor/mongo';

import { IOneLive } from '../definitions/IOneLive';
import { IData } from '../definitions/IData';
import { IFile } from '../definitions/IFile';
import { ISecret } from '../definitions/ISecret';

export const OneLiveCollection = new Mongo.Collection<IOneLive>('onelive');
export const DataCollection = new Mongo.Collection<IData>('data');
export const SecretCollection = new Mongo.Collection<IFile>('secret');
export const FileCollection = new Mongo.Collection<ISecret>('file');