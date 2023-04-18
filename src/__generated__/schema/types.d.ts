/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Account: { // root type
    email: string; // String!
    id: string; // ID!
    password?: string | null; // String
  }
  Comment: { // root type
    id: string; // ID!
    postId: string; // String!
  }
  CommentContent: { // root type
    id: string; // ID!
    text: string; // String!
  }
  Domain: { // root type
    domain: string; // String!
    icon?: string | null; // String
    id: string; // ID!
  }
  Like: { // root type
    id: string; // ID!
    postId: string; // String!
    profileId: string; // String!
  }
  Mutation: {};
  Post: { // root type
    _count?: NexusGenRootTypes['PostCount'] | null; // PostCount
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    previewImage?: string | null; // String
    title: string; // String!
  }
  PostCount: { // root type
    comments?: number | null; // Int
    likes?: number | null; // Int
  }
  Profile: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Query: {};
  WebAddress: { // root type
    domainId: string; // String!
    hash: string; // String!
    id: string; // ID!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Account: { // field return type
    email: string; // String!
    id: string; // ID!
    password: string | null; // String
    profiles: NexusGenRootTypes['Profile'][]; // [Profile!]!
  }
  Comment: { // field return type
    content: NexusGenRootTypes['CommentContent'] | null; // CommentContent
    id: string; // ID!
    postId: string; // String!
    profile: NexusGenRootTypes['Profile'] | null; // Profile
  }
  CommentContent: { // field return type
    id: string; // ID!
    text: string; // String!
  }
  Domain: { // field return type
    domain: string; // String!
    icon: string | null; // String
    id: string; // ID!
    webAddresses: NexusGenRootTypes['WebAddress'][]; // [WebAddress!]!
  }
  Like: { // field return type
    id: string; // ID!
    post: NexusGenRootTypes['Post'] | null; // Post
    postId: string; // String!
    profileId: string; // String!
  }
  Mutation: { // field return type
    createComment: NexusGenRootTypes['Comment']; // Comment!
    createProfile: NexusGenRootTypes['Profile']; // Profile!
    likePost: NexusGenRootTypes['Like']; // Like!
    unlikePost: NexusGenRootTypes['Like']; // Like!
  }
  Post: { // field return type
    _count: NexusGenRootTypes['PostCount'] | null; // PostCount
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    liked: boolean; // Boolean!
    likes: NexusGenRootTypes['Like'][]; // [Like!]!
    previewImage: string | null; // String
    title: string; // String!
    webAddress: NexusGenRootTypes['WebAddress'] | null; // WebAddress
  }
  PostCount: { // field return type
    comments: number | null; // Int
    likes: number | null; // Int
  }
  Profile: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    accounts: Array<NexusGenRootTypes['Account'] | null> | null; // [Account]
    comment: NexusGenRootTypes['Comment'] | null; // Comment
    comments: NexusGenRootTypes['Comment'][] | null; // [Comment!]
    domain: NexusGenRootTypes['Domain'] | null; // Domain
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
    postsOnDomain: NexusGenRootTypes['Post'][] | null; // [Post!]
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    profiles: Array<NexusGenRootTypes['Profile'] | null> | null; // [Profile]
  }
  WebAddress: { // field return type
    domain: NexusGenRootTypes['Domain'] | null; // Domain
    domainId: string; // String!
    hash: string; // String!
    id: string; // ID!
    post: NexusGenRootTypes['Post'] | null; // Post
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    email: 'String'
    id: 'ID'
    password: 'String'
    profiles: 'Profile'
  }
  Comment: { // field return type name
    content: 'CommentContent'
    id: 'ID'
    postId: 'String'
    profile: 'Profile'
  }
  CommentContent: { // field return type name
    id: 'ID'
    text: 'String'
  }
  Domain: { // field return type name
    domain: 'String'
    icon: 'String'
    id: 'ID'
    webAddresses: 'WebAddress'
  }
  Like: { // field return type name
    id: 'ID'
    post: 'Post'
    postId: 'String'
    profileId: 'String'
  }
  Mutation: { // field return type name
    createComment: 'Comment'
    createProfile: 'Profile'
    likePost: 'Like'
    unlikePost: 'Like'
  }
  Post: { // field return type name
    _count: 'PostCount'
    comments: 'Comment'
    createdAt: 'DateTime'
    id: 'ID'
    liked: 'Boolean'
    likes: 'Like'
    previewImage: 'String'
    title: 'String'
    webAddress: 'WebAddress'
  }
  PostCount: { // field return type name
    comments: 'Int'
    likes: 'Int'
  }
  Profile: { // field return type name
    id: 'ID'
    name: 'String'
  }
  Query: { // field return type name
    account: 'Account'
    accounts: 'Account'
    comment: 'Comment'
    comments: 'Comment'
    domain: 'Domain'
    post: 'Post'
    posts: 'Post'
    postsOnDomain: 'Post'
    profile: 'Profile'
    profiles: 'Profile'
  }
  WebAddress: { // field return type name
    domain: 'Domain'
    domainId: 'String'
    hash: 'String'
    id: 'ID'
    post: 'Post'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createComment: { // args
      contentText: string; // String!
      postId?: string | null; // ID
      url?: string | null; // String
    }
    createProfile: { // args
      accountId: string; // String!
      name: string; // String!
    }
    likePost: { // args
      postId: string; // ID!
    }
    unlikePost: { // args
      postId: string; // ID!
    }
  }
  Query: {
    account: { // args
      id: string; // ID!
    }
    comment: { // args
      id: string; // ID!
    }
    comments: { // args
      postId: string; // ID!
    }
    domain: { // args
      id: string; // ID!
    }
    post: { // args
      id: string; // ID!
    }
    postsOnDomain: { // args
      domain: string; // String!
    }
    profile: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}