import { Mongo } from 'meteor/mongo';

import { IOneLive } from '../definitions/IOneLive';
import { IData } from '../definitions/IData';
import { IFile } from '../definitions/IFile';
import { ISecret } from '../definitions/ISecret';

/**
 * Keep the collection name for debug only
 * Once it is done, remove it to avoid hacking
 */
export const OneLiveCollection = new Mongo.Collection<IOneLive>('onelive');
export const DataCollection = new Mongo.Collection<IData>('data');
export const SecretCollection = new Mongo.Collection<IFile>('secret');
export const FileCollection = new Mongo.Collection<ISecret>('file');

/* export const OneLiveCollection = new Mongo.Collection<IOneLive>(null);
export const DataCollection = new Mongo.Collection<IData>(null);
export const SecretCollection = new Mongo.Collection<IFile>(null);
export const FileCollection = new Mongo.Collection<ISecret>(null); */