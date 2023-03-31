// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StatusUpdates } = initSchema(schema);

export {
  StatusUpdates
};