import {asNexusMethod, makeSchema} from 'nexus';
import path from 'path';

import profileSchema from './Profile/schema';
import commentSchema from './Comment/schema';
import commentContentSchema from './CommentContent/schema';
import postSchema from './Post/schema';
import accountSchema from './Account/schema';
import domainSchema from './Domain/schema';
import webAddressSchema from './WebAddress/schema'
import likeSchema from './Like/schema';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';


const dateTimeScalar = new GraphQLScalarType(DateTimeResolver)

export const schema = makeSchema({
  types: [
    asNexusMethod(dateTimeScalar, 'dateTime'),
    profileSchema,
    commentSchema,
    commentContentSchema,
    postSchema,
    accountSchema,
    domainSchema,
    webAddressSchema,
    likeSchema
  ],
  outputs: {
    typegen: path.join(__dirname, '../__generated__/schema/types.d.ts'),
  },
});
