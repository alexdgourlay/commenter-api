
// import {type Comment, type Post, type User} from 'nexus-prisma';
// import * as NexusCore from 'nexus/dist/core';

// import {type client} from '../prisma';
// import {camelCase, sentenceCase} from 'change-case';

// # Example use
// import {User} from 'nexus-prisma';
// import {client} from '../../prisma';
// const prismaDelegate = client.user as PrismaDelegate;

// Const userSchemaFactory = new SchemaFactory(User, t => {
// 	t.field(User.id);
// 	t.field(User.name);
// 	t.field(User.email);
// }, prismaDelegate)
// 	.extendQueryType(t => {
// 		t.list.field('firstUser', {
// 			type: User.$name,
// 			description: 'Returns the first user.',
// 			resolve: async () => prismaDelegate.findFirst({
// 				where: {
// 					name: 'Alex Gourlay',
// 				},
// 			}),
// 		});
// 	});

// type NexusObject = typeof User | typeof Post | typeof Comment;

// export type PrismaDelegate = typeof client.user & typeof client.post & typeof client.comment;

// type NexusQueryTypeDef = NexusCore.NexusExtendTypeConfig<'Query'>['definition'];

// class SchemaFactory<T extends NexusObject> {
// 	private queryTypeDefExtension?: NexusQueryTypeDef;

// 	constructor(
// 		public nexusObject: T,
// 		public nexusObjectDefinition: (t: NexusCore.ObjectDefinitionBlock<T['$name']>) => void,
// 		public prismaDelegate: PrismaDelegate,
// 	) {}

// 	private get camelCaseName() {
// 		return camelCase(this.nexusObject.$name);
// 	}

// 	private get sentenceCaseName() {
// 		return sentenceCase(this.nexusObject.$name).toLowerCase();
// 	}

// 	private get objectType() {
// 		return NexusCore.objectType({
// 			name: this.nexusObject.$name,
// 			description: this.nexusObject.$description,
// 			definition: this.nexusObjectDefinition,
// 		});
// 	}

// 	private get queryType() {
// 		return NexusCore.extendType({
// 			type: 'Query',
// 			definition: t => {
// 				this.queryTypeDef(t);
// 			},
// 		});
// 	}

// 	public extendQueryType(extension: NexusQueryTypeDef) {
// 		this.queryTypeDefExtension = extension;
// 		return this;
// 	}

// 	private queryTypeDef(t: Parameters<NexusQueryTypeDef>[0]) {
// 		t.list.field(`${this.camelCaseName}s`, {
// 			type: this.nexusObject.$name,
// 			description: `Returns all ${this.sentenceCaseName}s.`,
// 			resolve: async () => this.prismaDelegate.findMany(),
// 		});

// 		t.field(this.camelCaseName, {
// 			type: this.nexusObject.$name,
// 			description: `Returns a unique ${this.sentenceCaseName} by id.`,
// 			args: {
// 				id: this.nexusObject.id.type,
// 			},
// 			resolve: async (_, args) =>
// 				this.prismaDelegate.findUnique({
// 					where: {
// 						id: args.id,
// 					},
// 				}),
// 		});

// 		this.queryTypeDefExtension?.(t);
// 	}

// 	get types() {
// 		return {
// 			object: this.objectType,
// 			query: this.queryType,
// 		};
// 	}
// }

// export default SchemaFactory;
