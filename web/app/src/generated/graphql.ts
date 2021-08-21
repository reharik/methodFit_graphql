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


export type DeleteSessionsResponse = {
  __typename?: 'DeleteSessionsResponse';
  success: Scalars['Boolean'];
  sessions?: Maybe<Array<Maybe<Session>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: User;
  UpdateUser: User;
  deleteSessions?: Maybe<DeleteSessionsResponse>;
};


export type MutationCreateUserArgs = {
  user: UserCreateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user?: Maybe<UserUpdateInput>;
};


export type MutationDeleteSessionsArgs = {
  input: SessionDeleteInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
  user?: Maybe<User>;
  purchases: Array<Maybe<Session>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryPurchasesArgs = {
  clientId: Scalars['ID'];
  paymentId: Scalars['ID'];
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
  TrainerId: Scalars['ID'];
};

export type SessionDeleteInput = {
  sessions: Array<Scalars['ID']>;
  clientId: Scalars['ID'];
  paymentId: Scalars['ID'];
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

export type GetPurchaseSessionsQueryVariables = Exact<{
  clientId: Scalars['ID'];
  paymentId: Scalars['ID'];
}>;


export type GetPurchaseSessionsQuery = (
  { __typename?: 'Query' }
  & { purchases: Array<Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, 'EntityId' | 'CreatedDate' | 'Cost' | 'AppointmentType' | 'SessionUsed' | 'TrainerPaid' | 'InArrears' | 'ClientId'>
  )>> }
);

export type RemovePurchaseSessionsMutationVariables = Exact<{
  sessionIds: Array<Scalars['ID']> | Scalars['ID'];
  clientId: Scalars['ID'];
  paymentId: Scalars['ID'];
}>;


export type RemovePurchaseSessionsMutation = (
  { __typename?: 'Mutation' }
  & { deleteSessions?: Maybe<(
    { __typename?: 'DeleteSessionsResponse' }
    & Pick<DeleteSessionsResponse, 'success'>
    & { sessions?: Maybe<Array<Maybe<(
      { __typename?: 'Session' }
      & Pick<Session, 'EntityId' | 'CreatedDate' | 'Cost' | 'AppointmentType' | 'SessionUsed' | 'TrainerPaid' | 'InArrears' | 'ClientId'>
    )>>> }
  )> }
);


export const GetPurchaseSessionsDocument = gql`
    query GetPurchaseSessions($clientId: ID!, $paymentId: ID!) {
  purchases(clientId: $clientId, paymentId: $paymentId) {
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
 * __useGetPurchaseSessionsQuery__
 *
 * To run a query within a React component, call `useGetPurchaseSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPurchaseSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPurchaseSessionsQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      paymentId: // value for 'paymentId'
 *   },
 * });
 */
export function useGetPurchaseSessionsQuery(baseOptions: Apollo.QueryHookOptions<GetPurchaseSessionsQuery, GetPurchaseSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPurchaseSessionsQuery, GetPurchaseSessionsQueryVariables>(GetPurchaseSessionsDocument, options);
      }
export function useGetPurchaseSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPurchaseSessionsQuery, GetPurchaseSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPurchaseSessionsQuery, GetPurchaseSessionsQueryVariables>(GetPurchaseSessionsDocument, options);
        }
export type GetPurchaseSessionsQueryHookResult = ReturnType<typeof useGetPurchaseSessionsQuery>;
export type GetPurchaseSessionsLazyQueryHookResult = ReturnType<typeof useGetPurchaseSessionsLazyQuery>;
export type GetPurchaseSessionsQueryResult = Apollo.QueryResult<GetPurchaseSessionsQuery, GetPurchaseSessionsQueryVariables>;
export const RemovePurchaseSessionsDocument = gql`
    mutation RemovePurchaseSessions($sessionIds: [ID!]!, $clientId: ID!, $paymentId: ID!) {
  deleteSessions(
    input: {sessions: $sessionIds, clientId: $clientId, paymentId: $paymentId}
  ) {
    success
    sessions {
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
}
    `;
export type RemovePurchaseSessionsMutationFn = Apollo.MutationFunction<RemovePurchaseSessionsMutation, RemovePurchaseSessionsMutationVariables>;

/**
 * __useRemovePurchaseSessionsMutation__
 *
 * To run a mutation, you first call `useRemovePurchaseSessionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePurchaseSessionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePurchaseSessionsMutation, { data, loading, error }] = useRemovePurchaseSessionsMutation({
 *   variables: {
 *      sessionIds: // value for 'sessionIds'
 *      clientId: // value for 'clientId'
 *      paymentId: // value for 'paymentId'
 *   },
 * });
 */
export function useRemovePurchaseSessionsMutation(baseOptions?: Apollo.MutationHookOptions<RemovePurchaseSessionsMutation, RemovePurchaseSessionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePurchaseSessionsMutation, RemovePurchaseSessionsMutationVariables>(RemovePurchaseSessionsDocument, options);
      }
export type RemovePurchaseSessionsMutationHookResult = ReturnType<typeof useRemovePurchaseSessionsMutation>;
export type RemovePurchaseSessionsMutationResult = Apollo.MutationResult<RemovePurchaseSessionsMutation>;
export type RemovePurchaseSessionsMutationOptions = Apollo.BaseMutationOptions<RemovePurchaseSessionsMutation, RemovePurchaseSessionsMutationVariables>;