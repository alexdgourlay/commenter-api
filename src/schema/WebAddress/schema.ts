import {WebAddress} from 'nexus-prisma';
import {objectType} from 'nexus';

export default [
  objectType({
    name: WebAddress.$name,
    description: WebAddress.$description,
    definition(t) {
      t.field(WebAddress.id);
      t.field(WebAddress.hash);
      t.field(WebAddress.domain);
      t.field(WebAddress.domainId);
      t.field(WebAddress.post);
    },
  }),
];
