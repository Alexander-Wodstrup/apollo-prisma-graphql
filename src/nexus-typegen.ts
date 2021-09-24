/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { ContextType } from "./types/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BuyItemArgs: { // input type
    itemId: string; // ID!
    userId: string; // ID!
  }
  GetUserByUsernameInputArgs: { // input type
    username: string; // String!
  }
  GetUserDetailsInputArgs: { // input type
    id: string; // ID!
  }
  GetUserInputArgs: { // input type
    id: string; // ID!
  }
  ItemArgs: { // input type
    partDescription?: string | null; // String
    partName?: string | null; // String
    saberPart?: string | null; // String
  }
  UserAuthInput: { // input type
    username: string; // String!
  }
  UserCreateInputArgs: { // input type
    username: string; // String!
  }
  UserDetailsInputArgs: { // input type
    firstName?: string | null; // String
    lastName?: string | null; // String
    user: NexusGenInputs['UserDetailsInputArgsUser']; // UserDetailsInputArgsUser!
  }
  UserDetailsInputArgsUser: { // input type
    id: string; // ID!
  }
  UserDetailsUpdateArgs: { // input type
    firstName?: string | null; // String
    id?: string | null; // ID
    lastName?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Item: { // root type
    id: string; // ID!
    saberPart?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    id: string; // ID!
    username: string; // String!
  }
  UserDetails: { // root type
    firstName?: string | null; // String
    id: string; // ID!
    lastName?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Item: { // field return type
    id: string; // ID!
    saberPart: string | null; // String
  }
  Mutation: { // field return type
    _deprecated_field: string | null; // String
    userCreate: NexusGenRootTypes['User'] | null; // User
    userDetailsCreate: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    userDetailsUpdate: NexusGenRootTypes['UserDetails'] | null; // UserDetails
  }
  Query: { // field return type
    GetAllUserDetails: Array<NexusGenRootTypes['UserDetails'] | null> | null; // [UserDetails]
    GetUser: NexusGenRootTypes['User'] | null; // User
    GetUserByUsername: NexusGenRootTypes['User'] | null; // User
    GetUserDetails: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    GetUsersList: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    _deprecated_field: string | null; // String
  }
  User: { // field return type
    details: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    id: string; // ID!
    username: string; // String!
  }
  UserDetails: { // field return type
    firstName: string | null; // String
    id: string; // ID!
    lastName: string | null; // String
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenFieldTypeNames {
  Item: { // field return type name
    id: 'ID'
    saberPart: 'String'
  }
  Mutation: { // field return type name
    _deprecated_field: 'String'
    userCreate: 'User'
    userDetailsCreate: 'UserDetails'
    userDetailsUpdate: 'UserDetails'
  }
  Query: { // field return type name
    GetAllUserDetails: 'UserDetails'
    GetUser: 'User'
    GetUserByUsername: 'User'
    GetUserDetails: 'UserDetails'
    GetUsersList: 'User'
    _deprecated_field: 'String'
  }
  User: { // field return type name
    details: 'UserDetails'
    id: 'ID'
    username: 'String'
  }
  UserDetails: { // field return type name
    firstName: 'String'
    id: 'ID'
    lastName: 'String'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    userCreate: { // args
      input: NexusGenInputs['UserCreateInputArgs']; // UserCreateInputArgs!
    }
    userDetailsCreate: { // args
      input: NexusGenInputs['UserDetailsInputArgs']; // UserDetailsInputArgs!
    }
    userDetailsUpdate: { // args
      input: NexusGenInputs['UserDetailsInputArgs']; // UserDetailsInputArgs!
    }
  }
  Query: {
    GetUser: { // args
      input: NexusGenInputs['GetUserInputArgs']; // GetUserInputArgs!
    }
    GetUserByUsername: { // args
      input: NexusGenInputs['GetUserByUsernameInputArgs']; // GetUserByUsernameInputArgs!
    }
    GetUserDetails: { // args
      input: NexusGenInputs['GetUserDetailsInputArgs']; // GetUserDetailsInputArgs!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

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
  context: ContextType;
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