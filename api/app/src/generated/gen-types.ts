import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type DeleteSessionsResponse = {
  __typename?: 'DeleteSessionsResponse';
  success: Scalars['Boolean'];
  sessions?: Maybe<Array<Maybe<Session>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteSessions?: Maybe<DeleteSessionsResponse>;
};


export type MutationDeleteSessionsArgs = {
  input: SessionDeleteInput;
};

export type Query = {
  __typename?: 'Query';
  purchases: Array<Maybe<Session>>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<any>;
  DeleteSessionsResponse: ResolverTypeWrapper<any>;
  Boolean: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<any>;
  Session: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  String: ResolverTypeWrapper<any>;
  SessionDeleteInput: ResolverTypeWrapper<any>;
  Success: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: any;
  DeleteSessionsResponse: any;
  Boolean: any;
  Mutation: {};
  Query: {};
  ID: any;
  Session: any;
  Int: any;
  String: any;
  SessionDeleteInput: any;
  Success: any;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteSessionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteSessionsResponse'] = ResolversParentTypes['DeleteSessionsResponse']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deleteSessions?: Resolver<Maybe<ResolversTypes['DeleteSessionsResponse']>, ParentType, ContextType, RequireFields<MutationDeleteSessionsArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  purchases?: Resolver<Array<Maybe<ResolversTypes['Session']>>, ParentType, ContextType, RequireFields<QueryPurchasesArgs, 'clientId' | 'paymentId'>>;
};

export type SessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  EntityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  CreatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Cost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  AppointmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SessionUsed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TrainerPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  InArrears?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ClientId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  TrainerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Success'] = ResolversParentTypes['Success']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  DeleteSessionsResponse?: DeleteSessionsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Success?: SuccessResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
