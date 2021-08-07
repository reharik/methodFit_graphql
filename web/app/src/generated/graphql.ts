import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: User;
  UpdateUser: User;
  deleteSessions: Success;
};


export type MutationCreateUserArgs = {
  user: UserCreateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user?: Maybe<UserUpdateInput>;
};


export type MutationDeleteSessionsArgs = {
  sessions: SessionDeleteInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
  user?: Maybe<User>;
  sessions: Array<Maybe<Session>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySessionsArgs = {
  clientId: Scalars['ID'];
};

export type Session = {
  __typename?: 'Session';
  EntityId: Scalars['ID'];
  CreatedDate: Scalars['DateTime'];
  Cost?: Maybe<Scalars['Int']>;
  AppointmentType?: Maybe<Scalars['String']>;
  SessionUsed?: Maybe<Scalars['Boolean']>;
  TrainerPaid?: Maybe<Scalars['Boolean']>;
  InArrears?: Maybe<Scalars['Boolean']>;
  ClientId: Scalars['ID'];
};

export type SessionDeleteInput = {
  sessions: Array<Maybe<Scalars['ID']>>;
};

export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserCreateInput = {
  id: Scalars['ID'];
  password: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserUpdateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};
