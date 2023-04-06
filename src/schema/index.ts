import {makeSchema} from 'nexus';
import path from 'path';

import profileSchema from './Profile/schema';
import commentSchema from './Comment/schema';
import commentContentSchema from './CommentContent/schema';
import postSchema from './Post/schema';
import accountSchema from './Account/schema';
import domainSchema from './Domain/schema';
import webAddressSchema from './WebAddress/schema'

export const schema = makeSchema({
  types: [
    profileSchema,
    commentSchema,
    commentContentSchema,
    postSchema,
    accountSchema,
    domainSchema,
    webAddressSchema
  ],
  outputs: {
    typegen: path.join(__dirname, './__generated__/types.d.ts'),
  },
});
