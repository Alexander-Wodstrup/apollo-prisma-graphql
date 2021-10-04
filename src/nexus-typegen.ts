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
  FilterItemArgs: { // input type
    filterValue: string; // String!
  }
  FilterItemPriceArgs: { // input type
    filterPrice: number; // Int!
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
  setSellPriceInputArgs: { // input type
    Item: NexusGenInputs['setSellPriceInputArgsItem']; // setSellPriceInputArgsItem!
  }
  setSellPriceInputArgsItem: { // input type
    id: string; // ID!
    inShop: boolean; // Boolean!
    price: number; // Int!
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
  DeleteItemsNotOwnedResault: { // root type
    ItemsDeleted: number; // Int!
  }
  Item: { // root type
    id: string; // ID!
    inShop?: boolean | null; // Boolean
    partDescription?: string | null; // String
    partName?: string | null; // String
    price?: number | null; // Int
    saberPart?: string | null; // String
    url?: string | null; // String
    userId?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Resault: { // root type
    price: number; // Int!
  }
  User: { // root type
    id: string; // ID!
    money: number; // Int!
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
  DeleteItemsNotOwnedResault: { // field return type
    ItemsDeleted: number; // Int!
  }
  Item: { // field return type
    User: NexusGenRootTypes['User'] | null; // User
    id: string; // ID!
    inShop: boolean | null; // Boolean
    partDescription: string | null; // String
    partName: string | null; // String
    price: number | null; // Int
    saberPart: string | null; // String
    url: string | null; // String
    userId: string | null; // String
  }
  Mutation: { // field return type
    DeleteItemsNotOwned: NexusGenRootTypes['DeleteItemsNotOwnedResault'] | null; // DeleteItemsNotOwnedResault
    ItemCreate: NexusGenRootTypes['Item'] | null; // Item
    _deprecated_field: string | null; // String
    buyItem: NexusGenRootTypes['User'] | null; // User
    setSellPrice: NexusGenRootTypes['Item'] | null; // Item
    updateOrCreateUserDetails: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    userCreate: NexusGenRootTypes['User'] | null; // User
    userDetailsCreate: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    userDetailsUpdate: NexusGenRootTypes['UserDetails'] | null; // UserDetails
  }
  Query: { // field return type
    FilterItemsByPrice: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    FilteringItems: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    GetAllItems: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    GetAllItemsInShop: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    GetAllUserDetails: Array<NexusGenRootTypes['UserDetails'] | null> | null; // [UserDetails]
    GetUser: NexusGenRootTypes['User'] | null; // User
    GetUserByUsername: NexusGenRootTypes['User'] | null; // User
    GetUserDetails: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    GetUsersList: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    MostExpensiveItemPrice: NexusGenRootTypes['Resault'] | null; // Resault
    _deprecated_field: string | null; // String
  }
  Resault: { // field return type
    price: number; // Int!
  }
  User: { // field return type
    details: NexusGenRootTypes['UserDetails'] | null; // UserDetails
    id: string; // ID!
    inventory: NexusGenRootTypes['Item'][]; // [Item!]!
    money: number; // Int!
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
  DeleteItemsNotOwnedResault: { // field return type name
    ItemsDeleted: 'Int'
  }
  Item: { // field return type name
    User: 'User'
    id: 'ID'
    inShop: 'Boolean'
    partDescription: 'String'
    partName: 'String'
    price: 'Int'
    saberPart: 'String'
    url: 'String'
    userId: 'String'
  }
  Mutation: { // field return type name
    DeleteItemsNotOwned: 'DeleteItemsNotOwnedResault'
    ItemCreate: 'Item'
    _deprecated_field: 'String'
    buyItem: 'User'
    setSellPrice: 'Item'
    updateOrCreateUserDetails: 'UserDetails'
    userCreate: 'User'
    userDetailsCreate: 'UserDetails'
    userDetailsUpdate: 'UserDetails'
  }
  Query: { // field return type name
    FilterItemsByPrice: 'Item'
    FilteringItems: 'Item'
    GetAllItems: 'Item'
    GetAllItemsInShop: 'Item'
    GetAllUserDetails: 'UserDetails'
    GetUser: 'User'
    GetUserByUsername: 'User'
    GetUserDetails: 'UserDetails'
    GetUsersList: 'User'
    MostExpensiveItemPrice: 'Resault'
    _deprecated_field: 'String'
  }
  Resault: { // field return type name
    price: 'Int'
  }
  User: { // field return type name
    details: 'UserDetails'
    id: 'ID'
    inventory: 'Item'
    money: 'Int'
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
    buyItem: { // args
      input: NexusGenInputs['BuyItemArgs']; // BuyItemArgs!
    }
    setSellPrice: { // args
      input: NexusGenInputs['setSellPriceInputArgs']; // setSellPriceInputArgs!
    }
    updateOrCreateUserDetails: { // args
      input: NexusGenInputs['UserDetailsInputArgs']; // UserDetailsInputArgs!
    }
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
    FilterItemsByPrice: { // args
      input: NexusGenInputs['FilterItemPriceArgs']; // FilterItemPriceArgs!
    }
    FilteringItems: { // args
      input: NexusGenInputs['FilterItemArgs']; // FilterItemArgs!
    }
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