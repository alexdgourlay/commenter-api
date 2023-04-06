import {CommentContent} from 'nexus-prisma';
import {objectType} from 'nexus';

export default [
  objectType({
    name: CommentContent.$name,
    description: CommentContent.$description,
    definition(t) {
      t.field(CommentContent.id);
      t.field(CommentContent.text);
    },
  }),
];
