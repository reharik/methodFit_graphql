import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type GetSessionsQueryVariables = Exact<{
  clientId: Scalars['ID'];
}>;


export type GetSessionsQuery = (
  { __typename?: 'Query' }
  & { sessions: Array<Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, 'EntityId' | 'CreatedDate' | 'Cost' | 'AppointmentType' | 'SessionUsed' | 'TrainerPaid' | 'InArrears' | 'ClientId'>
  )>> }
);


export const GetSessionsDocument = gql`
    query GetSessions($clientId: ID!) {
  sessions(clientId: $clientId) {
    EntityId
    CreatedDate
    Cost
    AppointmentType
    SessionUsed
    TrainerPaid
    InArrears
    ClientId
  }
}
    `;

/**
 * __useGetSessionsQuery__
 *
 * To run a query within a React component, call `useGetSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionsQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetSessionsQuery(baseOptions: Apollo.QueryHookOptions<GetSessionsQuery, GetSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSessionsQuery, GetSessionsQueryVariables>(GetSessionsDocument, options);
      }
export function useGetSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionsQuery, GetSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSessionsQuery, GetSessionsQueryVariables>(GetSessionsDocument, options);
        }
export type GetSessionsQueryHookResult = ReturnType<typeof useGetSessionsQuery>;
export type GetSessionsLazyQueryHookResult = ReturnType<typeof useGetSessionsLazyQuery>;
export type GetSessionsQueryResult = Apollo.QueryResult<GetSessionsQuery, GetSessionsQueryVariables>;