
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model StatusMessage
 * 
 */
export type StatusMessage = $Result.DefaultSelection<Prisma.$StatusMessagePayload>
/**
 * Model UserReadMessage
 * 
 */
export type UserReadMessage = $Result.DefaultSelection<Prisma.$UserReadMessagePayload>
/**
 * Model Sender
 * 
 */
export type Sender = $Result.DefaultSelection<Prisma.$SenderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatGroups
 * const chatGroups = await prisma.chatGroup.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChatGroups
   * const chatGroups = await prisma.chatGroup.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.statusMessage`: Exposes CRUD operations for the **StatusMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusMessages
    * const statusMessages = await prisma.statusMessage.findMany()
    * ```
    */
  get statusMessage(): Prisma.StatusMessageDelegate<ExtArgs>;

  /**
   * `prisma.userReadMessage`: Exposes CRUD operations for the **UserReadMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReadMessages
    * const userReadMessages = await prisma.userReadMessage.findMany()
    * ```
    */
  get userReadMessage(): Prisma.UserReadMessageDelegate<ExtArgs>;

  /**
   * `prisma.sender`: Exposes CRUD operations for the **Sender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Senders
    * const senders = await prisma.sender.findMany()
    * ```
    */
  get sender(): Prisma.SenderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ChatGroup: 'ChatGroup',
    Message: 'Message',
    StatusMessage: 'StatusMessage',
    UserReadMessage: 'UserReadMessage',
    Sender: 'Sender'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'chatGroup' | 'message' | 'statusMessage' | 'userReadMessage' | 'sender'
      txIsolationLevel: never
    },
    model: {
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatGroupFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatGroupAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      StatusMessage: {
        payload: Prisma.$StatusMessagePayload<ExtArgs>
        fields: Prisma.StatusMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>
          }
          findFirst: {
            args: Prisma.StatusMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>
          }
          findMany: {
            args: Prisma.StatusMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>[]
          }
          create: {
            args: Prisma.StatusMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>
          }
          createMany: {
            args: Prisma.StatusMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StatusMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>
          }
          update: {
            args: Prisma.StatusMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>
          }
          deleteMany: {
            args: Prisma.StatusMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StatusMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StatusMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StatusMessagePayload>
          }
          aggregate: {
            args: Prisma.StatusMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatusMessage>
          }
          groupBy: {
            args: Prisma.StatusMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatusMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StatusMessageFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.StatusMessageAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.StatusMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<StatusMessageCountAggregateOutputType> | number
          }
        }
      }
      UserReadMessage: {
        payload: Prisma.$UserReadMessagePayload<ExtArgs>
        fields: Prisma.UserReadMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReadMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReadMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>
          }
          findFirst: {
            args: Prisma.UserReadMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReadMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>
          }
          findMany: {
            args: Prisma.UserReadMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>[]
          }
          create: {
            args: Prisma.UserReadMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>
          }
          createMany: {
            args: Prisma.UserReadMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserReadMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>
          }
          update: {
            args: Prisma.UserReadMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>
          }
          deleteMany: {
            args: Prisma.UserReadMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserReadMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserReadMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReadMessagePayload>
          }
          aggregate: {
            args: Prisma.UserReadMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserReadMessage>
          }
          groupBy: {
            args: Prisma.UserReadMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserReadMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserReadMessageFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserReadMessageAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserReadMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<UserReadMessageCountAggregateOutputType> | number
          }
        }
      }
      Sender: {
        payload: Prisma.$SenderPayload<ExtArgs>
        fields: Prisma.SenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>
          }
          findFirst: {
            args: Prisma.SenderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>
          }
          findMany: {
            args: Prisma.SenderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>[]
          }
          create: {
            args: Prisma.SenderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>
          }
          createMany: {
            args: Prisma.SenderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SenderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>
          }
          update: {
            args: Prisma.SenderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>
          }
          deleteMany: {
            args: Prisma.SenderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SenderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SenderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SenderPayload>
          }
          aggregate: {
            args: Prisma.SenderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSender>
          }
          groupBy: {
            args: Prisma.SenderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SenderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SenderFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SenderAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SenderCountArgs<ExtArgs>,
            result: $Utils.Optional<SenderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChatGroupCountOutputType
   */

  export type ChatGroupCountOutputType = {
    message: number
  }

  export type ChatGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ChatGroupCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupCountOutputType
     */
    select?: ChatGroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type StatusMessageCountOutputType
   */

  export type StatusMessageCountOutputType = {
    readBy: number
  }

  export type StatusMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readBy?: boolean | StatusMessageCountOutputTypeCountReadByArgs
  }

  // Custom InputTypes

  /**
   * StatusMessageCountOutputType without action
   */
  export type StatusMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessageCountOutputType
     */
    select?: StatusMessageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StatusMessageCountOutputType without action
   */
  export type StatusMessageCountOutputTypeCountReadByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReadMessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: string | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: string | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ChatGroupMinAggregateInputType = {
    id?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: string
    _count: ChatGroupCountAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean | ChatGroup$messageArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectScalar = {
    id?: boolean
  }

  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ChatGroup$messageArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }


  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
    **/
    create<T extends ChatGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatGroups.
     *     @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     *     @example
     *     // Create many ChatGroups
     *     const chatGroup = await prisma.chatGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
    **/
    delete<T extends ChatGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
    **/
    upsert<T extends ChatGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * @param {ChatGroupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatGroup = await prisma.chatGroup.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatGroupFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatGroup.
     * @param {ChatGroupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatGroup = await prisma.chatGroup.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatGroupAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    message<T extends ChatGroup$messageArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatGroup model
   */ 
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }


  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
  }


  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
  }


  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }


  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
  }


  /**
   * ChatGroup findRaw
   */
  export type ChatGroupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatGroup aggregateRaw
   */
  export type ChatGroupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatGroup.message
   */
  export type ChatGroup$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    chatId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    chatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    chatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    chatId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | Message$senderArgs<ExtArgs>
    statusMessage?: boolean | Message$statusMessageArgs<ExtArgs>
    chat?: boolean | Message$chatArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    chatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Message$senderArgs<ExtArgs>
    statusMessage?: boolean | Message$statusMessageArgs<ExtArgs>
    chat?: boolean | Message$chatArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$SenderPayload<ExtArgs> | null
      statusMessage: Prisma.$StatusMessagePayload<ExtArgs> | null
      chat: Prisma.$ChatGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      chatId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MessageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MessageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends Message$senderArgs<ExtArgs> = {}>(args?: Subset<T, Message$senderArgs<ExtArgs>>): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    statusMessage<T extends Message$statusMessageArgs<ExtArgs> = {}>(args?: Subset<T, Message$statusMessageArgs<ExtArgs>>): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    chat<T extends Message$chatArgs<ExtArgs> = {}>(args?: Subset<T, Message$chatArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Message.sender
   */
  export type Message$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    where?: SenderWhereInput
  }


  /**
   * Message.statusMessage
   */
  export type Message$statusMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    where?: StatusMessageWhereInput
  }


  /**
   * Message.chat
   */
  export type Message$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model StatusMessage
   */

  export type AggregateStatusMessage = {
    _count: StatusMessageCountAggregateOutputType | null
    _min: StatusMessageMinAggregateOutputType | null
    _max: StatusMessageMaxAggregateOutputType | null
  }

  export type StatusMessageMinAggregateOutputType = {
    messageId: string | null
  }

  export type StatusMessageMaxAggregateOutputType = {
    messageId: string | null
  }

  export type StatusMessageCountAggregateOutputType = {
    messageId: number
    _all: number
  }


  export type StatusMessageMinAggregateInputType = {
    messageId?: true
  }

  export type StatusMessageMaxAggregateInputType = {
    messageId?: true
  }

  export type StatusMessageCountAggregateInputType = {
    messageId?: true
    _all?: true
  }

  export type StatusMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusMessage to aggregate.
     */
    where?: StatusMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusMessages to fetch.
     */
    orderBy?: StatusMessageOrderByWithRelationInput | StatusMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusMessages
    **/
    _count?: true | StatusMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMessageMaxAggregateInputType
  }

  export type GetStatusMessageAggregateType<T extends StatusMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusMessage[P]>
      : GetScalarType<T[P], AggregateStatusMessage[P]>
  }




  export type StatusMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusMessageWhereInput
    orderBy?: StatusMessageOrderByWithAggregationInput | StatusMessageOrderByWithAggregationInput[]
    by: StatusMessageScalarFieldEnum[] | StatusMessageScalarFieldEnum
    having?: StatusMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusMessageCountAggregateInputType | true
    _min?: StatusMessageMinAggregateInputType
    _max?: StatusMessageMaxAggregateInputType
  }

  export type StatusMessageGroupByOutputType = {
    messageId: string
    _count: StatusMessageCountAggregateOutputType | null
    _min: StatusMessageMinAggregateOutputType | null
    _max: StatusMessageMaxAggregateOutputType | null
  }

  type GetStatusMessageGroupByPayload<T extends StatusMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusMessageGroupByOutputType[P]>
            : GetScalarType<T[P], StatusMessageGroupByOutputType[P]>
        }
      >
    >


  export type StatusMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    message?: boolean | StatusMessage$messageArgs<ExtArgs>
    readBy?: boolean | StatusMessage$readByArgs<ExtArgs>
    _count?: boolean | StatusMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusMessage"]>

  export type StatusMessageSelectScalar = {
    messageId?: boolean
  }

  export type StatusMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | StatusMessage$messageArgs<ExtArgs>
    readBy?: boolean | StatusMessage$readByArgs<ExtArgs>
    _count?: boolean | StatusMessageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StatusMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusMessage"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs> | null
      readBy: Prisma.$UserReadMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      messageId: string
    }, ExtArgs["result"]["statusMessage"]>
    composites: {}
  }


  type StatusMessageGetPayload<S extends boolean | null | undefined | StatusMessageDefaultArgs> = $Result.GetResult<Prisma.$StatusMessagePayload, S>

  type StatusMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatusMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusMessageCountAggregateInputType | true
    }

  export interface StatusMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusMessage'], meta: { name: 'StatusMessage' } }
    /**
     * Find zero or one StatusMessage that matches the filter.
     * @param {StatusMessageFindUniqueArgs} args - Arguments to find a StatusMessage
     * @example
     * // Get one StatusMessage
     * const statusMessage = await prisma.statusMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatusMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StatusMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StatusMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StatusMessageFindUniqueOrThrowArgs} args - Arguments to find a StatusMessage
     * @example
     * // Get one StatusMessage
     * const statusMessage = await prisma.statusMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatusMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StatusMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageFindFirstArgs} args - Arguments to find a StatusMessage
     * @example
     * // Get one StatusMessage
     * const statusMessage = await prisma.statusMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatusMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusMessageFindFirstArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StatusMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageFindFirstOrThrowArgs} args - Arguments to find a StatusMessage
     * @example
     * // Get one StatusMessage
     * const statusMessage = await prisma.statusMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatusMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StatusMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusMessages
     * const statusMessages = await prisma.statusMessage.findMany()
     * 
     * // Get first 10 StatusMessages
     * const statusMessages = await prisma.statusMessage.findMany({ take: 10 })
     * 
     * // Only select the `messageId`
     * const statusMessageWithMessageIdOnly = await prisma.statusMessage.findMany({ select: { messageId: true } })
     * 
    **/
    findMany<T extends StatusMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StatusMessage.
     * @param {StatusMessageCreateArgs} args - Arguments to create a StatusMessage.
     * @example
     * // Create one StatusMessage
     * const StatusMessage = await prisma.statusMessage.create({
     *   data: {
     *     // ... data to create a StatusMessage
     *   }
     * })
     * 
    **/
    create<T extends StatusMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StatusMessageCreateArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StatusMessages.
     *     @param {StatusMessageCreateManyArgs} args - Arguments to create many StatusMessages.
     *     @example
     *     // Create many StatusMessages
     *     const statusMessage = await prisma.statusMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatusMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StatusMessage.
     * @param {StatusMessageDeleteArgs} args - Arguments to delete one StatusMessage.
     * @example
     * // Delete one StatusMessage
     * const StatusMessage = await prisma.statusMessage.delete({
     *   where: {
     *     // ... filter to delete one StatusMessage
     *   }
     * })
     * 
    **/
    delete<T extends StatusMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StatusMessageDeleteArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StatusMessage.
     * @param {StatusMessageUpdateArgs} args - Arguments to update one StatusMessage.
     * @example
     * // Update one StatusMessage
     * const statusMessage = await prisma.statusMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatusMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StatusMessageUpdateArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StatusMessages.
     * @param {StatusMessageDeleteManyArgs} args - Arguments to filter StatusMessages to delete.
     * @example
     * // Delete a few StatusMessages
     * const { count } = await prisma.statusMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatusMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StatusMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusMessages
     * const statusMessage = await prisma.statusMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatusMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StatusMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusMessage.
     * @param {StatusMessageUpsertArgs} args - Arguments to update or create a StatusMessage.
     * @example
     * // Update or create a StatusMessage
     * const statusMessage = await prisma.statusMessage.upsert({
     *   create: {
     *     // ... data to create a StatusMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusMessage we want to update
     *   }
     * })
    **/
    upsert<T extends StatusMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StatusMessageUpsertArgs<ExtArgs>>
    ): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more StatusMessages that matches the filter.
     * @param {StatusMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const statusMessage = await prisma.statusMessage.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: StatusMessageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StatusMessage.
     * @param {StatusMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const statusMessage = await prisma.statusMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: StatusMessageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of StatusMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageCountArgs} args - Arguments to filter StatusMessages to count.
     * @example
     * // Count the number of StatusMessages
     * const count = await prisma.statusMessage.count({
     *   where: {
     *     // ... the filter for the StatusMessages we want to count
     *   }
     * })
    **/
    count<T extends StatusMessageCountArgs>(
      args?: Subset<T, StatusMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusMessageAggregateArgs>(args: Subset<T, StatusMessageAggregateArgs>): Prisma.PrismaPromise<GetStatusMessageAggregateType<T>>

    /**
     * Group by StatusMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusMessageGroupByArgs['orderBy'] }
        : { orderBy?: StatusMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusMessage model
   */
  readonly fields: StatusMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    message<T extends StatusMessage$messageArgs<ExtArgs> = {}>(args?: Subset<T, StatusMessage$messageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    readBy<T extends StatusMessage$readByArgs<ExtArgs> = {}>(args?: Subset<T, StatusMessage$readByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StatusMessage model
   */ 
  interface StatusMessageFieldRefs {
    readonly messageId: FieldRef<"StatusMessage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * StatusMessage findUnique
   */
  export type StatusMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * Filter, which StatusMessage to fetch.
     */
    where: StatusMessageWhereUniqueInput
  }


  /**
   * StatusMessage findUniqueOrThrow
   */
  export type StatusMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * Filter, which StatusMessage to fetch.
     */
    where: StatusMessageWhereUniqueInput
  }


  /**
   * StatusMessage findFirst
   */
  export type StatusMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * Filter, which StatusMessage to fetch.
     */
    where?: StatusMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusMessages to fetch.
     */
    orderBy?: StatusMessageOrderByWithRelationInput | StatusMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusMessages.
     */
    cursor?: StatusMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusMessages.
     */
    distinct?: StatusMessageScalarFieldEnum | StatusMessageScalarFieldEnum[]
  }


  /**
   * StatusMessage findFirstOrThrow
   */
  export type StatusMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * Filter, which StatusMessage to fetch.
     */
    where?: StatusMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusMessages to fetch.
     */
    orderBy?: StatusMessageOrderByWithRelationInput | StatusMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusMessages.
     */
    cursor?: StatusMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusMessages.
     */
    distinct?: StatusMessageScalarFieldEnum | StatusMessageScalarFieldEnum[]
  }


  /**
   * StatusMessage findMany
   */
  export type StatusMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * Filter, which StatusMessages to fetch.
     */
    where?: StatusMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusMessages to fetch.
     */
    orderBy?: StatusMessageOrderByWithRelationInput | StatusMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusMessages.
     */
    cursor?: StatusMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusMessages.
     */
    skip?: number
    distinct?: StatusMessageScalarFieldEnum | StatusMessageScalarFieldEnum[]
  }


  /**
   * StatusMessage create
   */
  export type StatusMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusMessage.
     */
    data: XOR<StatusMessageCreateInput, StatusMessageUncheckedCreateInput>
  }


  /**
   * StatusMessage createMany
   */
  export type StatusMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusMessages.
     */
    data: StatusMessageCreateManyInput | StatusMessageCreateManyInput[]
  }


  /**
   * StatusMessage update
   */
  export type StatusMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusMessage.
     */
    data: XOR<StatusMessageUpdateInput, StatusMessageUncheckedUpdateInput>
    /**
     * Choose, which StatusMessage to update.
     */
    where: StatusMessageWhereUniqueInput
  }


  /**
   * StatusMessage updateMany
   */
  export type StatusMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusMessages.
     */
    data: XOR<StatusMessageUpdateManyMutationInput, StatusMessageUncheckedUpdateManyInput>
    /**
     * Filter which StatusMessages to update
     */
    where?: StatusMessageWhereInput
  }


  /**
   * StatusMessage upsert
   */
  export type StatusMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusMessage to update in case it exists.
     */
    where: StatusMessageWhereUniqueInput
    /**
     * In case the StatusMessage found by the `where` argument doesn't exist, create a new StatusMessage with this data.
     */
    create: XOR<StatusMessageCreateInput, StatusMessageUncheckedCreateInput>
    /**
     * In case the StatusMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusMessageUpdateInput, StatusMessageUncheckedUpdateInput>
  }


  /**
   * StatusMessage delete
   */
  export type StatusMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    /**
     * Filter which StatusMessage to delete.
     */
    where: StatusMessageWhereUniqueInput
  }


  /**
   * StatusMessage deleteMany
   */
  export type StatusMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusMessages to delete
     */
    where?: StatusMessageWhereInput
  }


  /**
   * StatusMessage findRaw
   */
  export type StatusMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * StatusMessage aggregateRaw
   */
  export type StatusMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * StatusMessage.message
   */
  export type StatusMessage$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }


  /**
   * StatusMessage.readBy
   */
  export type StatusMessage$readByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    where?: UserReadMessageWhereInput
    orderBy?: UserReadMessageOrderByWithRelationInput | UserReadMessageOrderByWithRelationInput[]
    cursor?: UserReadMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReadMessageScalarFieldEnum | UserReadMessageScalarFieldEnum[]
  }


  /**
   * StatusMessage without action
   */
  export type StatusMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
  }



  /**
   * Model UserReadMessage
   */

  export type AggregateUserReadMessage = {
    _count: UserReadMessageCountAggregateOutputType | null
    _min: UserReadMessageMinAggregateOutputType | null
    _max: UserReadMessageMaxAggregateOutputType | null
  }

  export type UserReadMessageMinAggregateOutputType = {
    id: string | null
    statusMessageId: string | null
    userId: string | null
    name: string | null
  }

  export type UserReadMessageMaxAggregateOutputType = {
    id: string | null
    statusMessageId: string | null
    userId: string | null
    name: string | null
  }

  export type UserReadMessageCountAggregateOutputType = {
    id: number
    statusMessageId: number
    userId: number
    name: number
    _all: number
  }


  export type UserReadMessageMinAggregateInputType = {
    id?: true
    statusMessageId?: true
    userId?: true
    name?: true
  }

  export type UserReadMessageMaxAggregateInputType = {
    id?: true
    statusMessageId?: true
    userId?: true
    name?: true
  }

  export type UserReadMessageCountAggregateInputType = {
    id?: true
    statusMessageId?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type UserReadMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReadMessage to aggregate.
     */
    where?: UserReadMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReadMessages to fetch.
     */
    orderBy?: UserReadMessageOrderByWithRelationInput | UserReadMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReadMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReadMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReadMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReadMessages
    **/
    _count?: true | UserReadMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReadMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReadMessageMaxAggregateInputType
  }

  export type GetUserReadMessageAggregateType<T extends UserReadMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReadMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReadMessage[P]>
      : GetScalarType<T[P], AggregateUserReadMessage[P]>
  }




  export type UserReadMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReadMessageWhereInput
    orderBy?: UserReadMessageOrderByWithAggregationInput | UserReadMessageOrderByWithAggregationInput[]
    by: UserReadMessageScalarFieldEnum[] | UserReadMessageScalarFieldEnum
    having?: UserReadMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReadMessageCountAggregateInputType | true
    _min?: UserReadMessageMinAggregateInputType
    _max?: UserReadMessageMaxAggregateInputType
  }

  export type UserReadMessageGroupByOutputType = {
    id: string
    statusMessageId: string | null
    userId: string
    name: string
    _count: UserReadMessageCountAggregateOutputType | null
    _min: UserReadMessageMinAggregateOutputType | null
    _max: UserReadMessageMaxAggregateOutputType | null
  }

  type GetUserReadMessageGroupByPayload<T extends UserReadMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReadMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReadMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReadMessageGroupByOutputType[P]>
            : GetScalarType<T[P], UserReadMessageGroupByOutputType[P]>
        }
      >
    >


  export type UserReadMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusMessageId?: boolean
    userId?: boolean
    name?: boolean
    StatusMessage?: boolean | UserReadMessage$StatusMessageArgs<ExtArgs>
  }, ExtArgs["result"]["userReadMessage"]>

  export type UserReadMessageSelectScalar = {
    id?: boolean
    statusMessageId?: boolean
    userId?: boolean
    name?: boolean
  }

  export type UserReadMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StatusMessage?: boolean | UserReadMessage$StatusMessageArgs<ExtArgs>
  }


  export type $UserReadMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReadMessage"
    objects: {
      StatusMessage: Prisma.$StatusMessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      statusMessageId: string | null
      userId: string
      name: string
    }, ExtArgs["result"]["userReadMessage"]>
    composites: {}
  }


  type UserReadMessageGetPayload<S extends boolean | null | undefined | UserReadMessageDefaultArgs> = $Result.GetResult<Prisma.$UserReadMessagePayload, S>

  type UserReadMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserReadMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserReadMessageCountAggregateInputType | true
    }

  export interface UserReadMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReadMessage'], meta: { name: 'UserReadMessage' } }
    /**
     * Find zero or one UserReadMessage that matches the filter.
     * @param {UserReadMessageFindUniqueArgs} args - Arguments to find a UserReadMessage
     * @example
     * // Get one UserReadMessage
     * const userReadMessage = await prisma.userReadMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserReadMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserReadMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserReadMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserReadMessageFindUniqueOrThrowArgs} args - Arguments to find a UserReadMessage
     * @example
     * // Get one UserReadMessage
     * const userReadMessage = await prisma.userReadMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserReadMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReadMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserReadMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageFindFirstArgs} args - Arguments to find a UserReadMessage
     * @example
     * // Get one UserReadMessage
     * const userReadMessage = await prisma.userReadMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserReadMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReadMessageFindFirstArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserReadMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageFindFirstOrThrowArgs} args - Arguments to find a UserReadMessage
     * @example
     * // Get one UserReadMessage
     * const userReadMessage = await prisma.userReadMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserReadMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReadMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserReadMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReadMessages
     * const userReadMessages = await prisma.userReadMessage.findMany()
     * 
     * // Get first 10 UserReadMessages
     * const userReadMessages = await prisma.userReadMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReadMessageWithIdOnly = await prisma.userReadMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserReadMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReadMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserReadMessage.
     * @param {UserReadMessageCreateArgs} args - Arguments to create a UserReadMessage.
     * @example
     * // Create one UserReadMessage
     * const UserReadMessage = await prisma.userReadMessage.create({
     *   data: {
     *     // ... data to create a UserReadMessage
     *   }
     * })
     * 
    **/
    create<T extends UserReadMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserReadMessageCreateArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserReadMessages.
     *     @param {UserReadMessageCreateManyArgs} args - Arguments to create many UserReadMessages.
     *     @example
     *     // Create many UserReadMessages
     *     const userReadMessage = await prisma.userReadMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserReadMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReadMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserReadMessage.
     * @param {UserReadMessageDeleteArgs} args - Arguments to delete one UserReadMessage.
     * @example
     * // Delete one UserReadMessage
     * const UserReadMessage = await prisma.userReadMessage.delete({
     *   where: {
     *     // ... filter to delete one UserReadMessage
     *   }
     * })
     * 
    **/
    delete<T extends UserReadMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserReadMessageDeleteArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserReadMessage.
     * @param {UserReadMessageUpdateArgs} args - Arguments to update one UserReadMessage.
     * @example
     * // Update one UserReadMessage
     * const userReadMessage = await prisma.userReadMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserReadMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserReadMessageUpdateArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserReadMessages.
     * @param {UserReadMessageDeleteManyArgs} args - Arguments to filter UserReadMessages to delete.
     * @example
     * // Delete a few UserReadMessages
     * const { count } = await prisma.userReadMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserReadMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReadMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReadMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReadMessages
     * const userReadMessage = await prisma.userReadMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserReadMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserReadMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserReadMessage.
     * @param {UserReadMessageUpsertArgs} args - Arguments to update or create a UserReadMessage.
     * @example
     * // Update or create a UserReadMessage
     * const userReadMessage = await prisma.userReadMessage.upsert({
     *   create: {
     *     // ... data to create a UserReadMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReadMessage we want to update
     *   }
     * })
    **/
    upsert<T extends UserReadMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserReadMessageUpsertArgs<ExtArgs>>
    ): Prisma__UserReadMessageClient<$Result.GetResult<Prisma.$UserReadMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserReadMessages that matches the filter.
     * @param {UserReadMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userReadMessage = await prisma.userReadMessage.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserReadMessageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserReadMessage.
     * @param {UserReadMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userReadMessage = await prisma.userReadMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserReadMessageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserReadMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageCountArgs} args - Arguments to filter UserReadMessages to count.
     * @example
     * // Count the number of UserReadMessages
     * const count = await prisma.userReadMessage.count({
     *   where: {
     *     // ... the filter for the UserReadMessages we want to count
     *   }
     * })
    **/
    count<T extends UserReadMessageCountArgs>(
      args?: Subset<T, UserReadMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReadMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReadMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserReadMessageAggregateArgs>(args: Subset<T, UserReadMessageAggregateArgs>): Prisma.PrismaPromise<GetUserReadMessageAggregateType<T>>

    /**
     * Group by UserReadMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReadMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserReadMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReadMessageGroupByArgs['orderBy'] }
        : { orderBy?: UserReadMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserReadMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReadMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReadMessage model
   */
  readonly fields: UserReadMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReadMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReadMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    StatusMessage<T extends UserReadMessage$StatusMessageArgs<ExtArgs> = {}>(args?: Subset<T, UserReadMessage$StatusMessageArgs<ExtArgs>>): Prisma__StatusMessageClient<$Result.GetResult<Prisma.$StatusMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserReadMessage model
   */ 
  interface UserReadMessageFieldRefs {
    readonly id: FieldRef<"UserReadMessage", 'String'>
    readonly statusMessageId: FieldRef<"UserReadMessage", 'String'>
    readonly userId: FieldRef<"UserReadMessage", 'String'>
    readonly name: FieldRef<"UserReadMessage", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserReadMessage findUnique
   */
  export type UserReadMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserReadMessage to fetch.
     */
    where: UserReadMessageWhereUniqueInput
  }


  /**
   * UserReadMessage findUniqueOrThrow
   */
  export type UserReadMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserReadMessage to fetch.
     */
    where: UserReadMessageWhereUniqueInput
  }


  /**
   * UserReadMessage findFirst
   */
  export type UserReadMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserReadMessage to fetch.
     */
    where?: UserReadMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReadMessages to fetch.
     */
    orderBy?: UserReadMessageOrderByWithRelationInput | UserReadMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReadMessages.
     */
    cursor?: UserReadMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReadMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReadMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReadMessages.
     */
    distinct?: UserReadMessageScalarFieldEnum | UserReadMessageScalarFieldEnum[]
  }


  /**
   * UserReadMessage findFirstOrThrow
   */
  export type UserReadMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserReadMessage to fetch.
     */
    where?: UserReadMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReadMessages to fetch.
     */
    orderBy?: UserReadMessageOrderByWithRelationInput | UserReadMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReadMessages.
     */
    cursor?: UserReadMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReadMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReadMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReadMessages.
     */
    distinct?: UserReadMessageScalarFieldEnum | UserReadMessageScalarFieldEnum[]
  }


  /**
   * UserReadMessage findMany
   */
  export type UserReadMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * Filter, which UserReadMessages to fetch.
     */
    where?: UserReadMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReadMessages to fetch.
     */
    orderBy?: UserReadMessageOrderByWithRelationInput | UserReadMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReadMessages.
     */
    cursor?: UserReadMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReadMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReadMessages.
     */
    skip?: number
    distinct?: UserReadMessageScalarFieldEnum | UserReadMessageScalarFieldEnum[]
  }


  /**
   * UserReadMessage create
   */
  export type UserReadMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReadMessage.
     */
    data: XOR<UserReadMessageCreateInput, UserReadMessageUncheckedCreateInput>
  }


  /**
   * UserReadMessage createMany
   */
  export type UserReadMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReadMessages.
     */
    data: UserReadMessageCreateManyInput | UserReadMessageCreateManyInput[]
  }


  /**
   * UserReadMessage update
   */
  export type UserReadMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReadMessage.
     */
    data: XOR<UserReadMessageUpdateInput, UserReadMessageUncheckedUpdateInput>
    /**
     * Choose, which UserReadMessage to update.
     */
    where: UserReadMessageWhereUniqueInput
  }


  /**
   * UserReadMessage updateMany
   */
  export type UserReadMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReadMessages.
     */
    data: XOR<UserReadMessageUpdateManyMutationInput, UserReadMessageUncheckedUpdateManyInput>
    /**
     * Filter which UserReadMessages to update
     */
    where?: UserReadMessageWhereInput
  }


  /**
   * UserReadMessage upsert
   */
  export type UserReadMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReadMessage to update in case it exists.
     */
    where: UserReadMessageWhereUniqueInput
    /**
     * In case the UserReadMessage found by the `where` argument doesn't exist, create a new UserReadMessage with this data.
     */
    create: XOR<UserReadMessageCreateInput, UserReadMessageUncheckedCreateInput>
    /**
     * In case the UserReadMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReadMessageUpdateInput, UserReadMessageUncheckedUpdateInput>
  }


  /**
   * UserReadMessage delete
   */
  export type UserReadMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
    /**
     * Filter which UserReadMessage to delete.
     */
    where: UserReadMessageWhereUniqueInput
  }


  /**
   * UserReadMessage deleteMany
   */
  export type UserReadMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReadMessages to delete
     */
    where?: UserReadMessageWhereInput
  }


  /**
   * UserReadMessage findRaw
   */
  export type UserReadMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserReadMessage aggregateRaw
   */
  export type UserReadMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserReadMessage.StatusMessage
   */
  export type UserReadMessage$StatusMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusMessage
     */
    select?: StatusMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusMessageInclude<ExtArgs> | null
    where?: StatusMessageWhereInput
  }


  /**
   * UserReadMessage without action
   */
  export type UserReadMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReadMessage
     */
    select?: UserReadMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReadMessageInclude<ExtArgs> | null
  }



  /**
   * Model Sender
   */

  export type AggregateSender = {
    _count: SenderCountAggregateOutputType | null
    _min: SenderMinAggregateOutputType | null
    _max: SenderMaxAggregateOutputType | null
  }

  export type SenderMinAggregateOutputType = {
    id: string | null
    idUser: string | null
    name: string | null
    messageId: string | null
  }

  export type SenderMaxAggregateOutputType = {
    id: string | null
    idUser: string | null
    name: string | null
    messageId: string | null
  }

  export type SenderCountAggregateOutputType = {
    id: number
    idUser: number
    name: number
    messageId: number
    _all: number
  }


  export type SenderMinAggregateInputType = {
    id?: true
    idUser?: true
    name?: true
    messageId?: true
  }

  export type SenderMaxAggregateInputType = {
    id?: true
    idUser?: true
    name?: true
    messageId?: true
  }

  export type SenderCountAggregateInputType = {
    id?: true
    idUser?: true
    name?: true
    messageId?: true
    _all?: true
  }

  export type SenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sender to aggregate.
     */
    where?: SenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senders to fetch.
     */
    orderBy?: SenderOrderByWithRelationInput | SenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Senders
    **/
    _count?: true | SenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenderMaxAggregateInputType
  }

  export type GetSenderAggregateType<T extends SenderAggregateArgs> = {
        [P in keyof T & keyof AggregateSender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSender[P]>
      : GetScalarType<T[P], AggregateSender[P]>
  }




  export type SenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenderWhereInput
    orderBy?: SenderOrderByWithAggregationInput | SenderOrderByWithAggregationInput[]
    by: SenderScalarFieldEnum[] | SenderScalarFieldEnum
    having?: SenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenderCountAggregateInputType | true
    _min?: SenderMinAggregateInputType
    _max?: SenderMaxAggregateInputType
  }

  export type SenderGroupByOutputType = {
    id: string
    idUser: string
    name: string
    messageId: string | null
    _count: SenderCountAggregateOutputType | null
    _min: SenderMinAggregateOutputType | null
    _max: SenderMaxAggregateOutputType | null
  }

  type GetSenderGroupByPayload<T extends SenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenderGroupByOutputType[P]>
            : GetScalarType<T[P], SenderGroupByOutputType[P]>
        }
      >
    >


  export type SenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUser?: boolean
    name?: boolean
    messageId?: boolean
    message?: boolean | Sender$messageArgs<ExtArgs>
  }, ExtArgs["result"]["sender"]>

  export type SenderSelectScalar = {
    id?: boolean
    idUser?: boolean
    name?: boolean
    messageId?: boolean
  }

  export type SenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | Sender$messageArgs<ExtArgs>
  }


  export type $SenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sender"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idUser: string
      name: string
      messageId: string | null
    }, ExtArgs["result"]["sender"]>
    composites: {}
  }


  type SenderGetPayload<S extends boolean | null | undefined | SenderDefaultArgs> = $Result.GetResult<Prisma.$SenderPayload, S>

  type SenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SenderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SenderCountAggregateInputType | true
    }

  export interface SenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sender'], meta: { name: 'Sender' } }
    /**
     * Find zero or one Sender that matches the filter.
     * @param {SenderFindUniqueArgs} args - Arguments to find a Sender
     * @example
     * // Get one Sender
     * const sender = await prisma.sender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SenderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SenderFindUniqueArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sender that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SenderFindUniqueOrThrowArgs} args - Arguments to find a Sender
     * @example
     * // Get one Sender
     * const sender = await prisma.sender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SenderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SenderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderFindFirstArgs} args - Arguments to find a Sender
     * @example
     * // Get one Sender
     * const sender = await prisma.sender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SenderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SenderFindFirstArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderFindFirstOrThrowArgs} args - Arguments to find a Sender
     * @example
     * // Get one Sender
     * const sender = await prisma.sender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SenderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SenderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Senders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Senders
     * const senders = await prisma.sender.findMany()
     * 
     * // Get first 10 Senders
     * const senders = await prisma.sender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senderWithIdOnly = await prisma.sender.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SenderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SenderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sender.
     * @param {SenderCreateArgs} args - Arguments to create a Sender.
     * @example
     * // Create one Sender
     * const Sender = await prisma.sender.create({
     *   data: {
     *     // ... data to create a Sender
     *   }
     * })
     * 
    **/
    create<T extends SenderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SenderCreateArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Senders.
     *     @param {SenderCreateManyArgs} args - Arguments to create many Senders.
     *     @example
     *     // Create many Senders
     *     const sender = await prisma.sender.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SenderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SenderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sender.
     * @param {SenderDeleteArgs} args - Arguments to delete one Sender.
     * @example
     * // Delete one Sender
     * const Sender = await prisma.sender.delete({
     *   where: {
     *     // ... filter to delete one Sender
     *   }
     * })
     * 
    **/
    delete<T extends SenderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SenderDeleteArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sender.
     * @param {SenderUpdateArgs} args - Arguments to update one Sender.
     * @example
     * // Update one Sender
     * const sender = await prisma.sender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SenderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SenderUpdateArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Senders.
     * @param {SenderDeleteManyArgs} args - Arguments to filter Senders to delete.
     * @example
     * // Delete a few Senders
     * const { count } = await prisma.sender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SenderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SenderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Senders
     * const sender = await prisma.sender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SenderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SenderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sender.
     * @param {SenderUpsertArgs} args - Arguments to update or create a Sender.
     * @example
     * // Update or create a Sender
     * const sender = await prisma.sender.upsert({
     *   create: {
     *     // ... data to create a Sender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sender we want to update
     *   }
     * })
    **/
    upsert<T extends SenderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SenderUpsertArgs<ExtArgs>>
    ): Prisma__SenderClient<$Result.GetResult<Prisma.$SenderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Senders that matches the filter.
     * @param {SenderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sender = await prisma.sender.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SenderFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sender.
     * @param {SenderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sender = await prisma.sender.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SenderAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Senders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderCountArgs} args - Arguments to filter Senders to count.
     * @example
     * // Count the number of Senders
     * const count = await prisma.sender.count({
     *   where: {
     *     // ... the filter for the Senders we want to count
     *   }
     * })
    **/
    count<T extends SenderCountArgs>(
      args?: Subset<T, SenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SenderAggregateArgs>(args: Subset<T, SenderAggregateArgs>): Prisma.PrismaPromise<GetSenderAggregateType<T>>

    /**
     * Group by Sender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenderGroupByArgs['orderBy'] }
        : { orderBy?: SenderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sender model
   */
  readonly fields: SenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    message<T extends Sender$messageArgs<ExtArgs> = {}>(args?: Subset<T, Sender$messageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sender model
   */ 
  interface SenderFieldRefs {
    readonly id: FieldRef<"Sender", 'String'>
    readonly idUser: FieldRef<"Sender", 'String'>
    readonly name: FieldRef<"Sender", 'String'>
    readonly messageId: FieldRef<"Sender", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Sender findUnique
   */
  export type SenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * Filter, which Sender to fetch.
     */
    where: SenderWhereUniqueInput
  }


  /**
   * Sender findUniqueOrThrow
   */
  export type SenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * Filter, which Sender to fetch.
     */
    where: SenderWhereUniqueInput
  }


  /**
   * Sender findFirst
   */
  export type SenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * Filter, which Sender to fetch.
     */
    where?: SenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senders to fetch.
     */
    orderBy?: SenderOrderByWithRelationInput | SenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senders.
     */
    cursor?: SenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senders.
     */
    distinct?: SenderScalarFieldEnum | SenderScalarFieldEnum[]
  }


  /**
   * Sender findFirstOrThrow
   */
  export type SenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * Filter, which Sender to fetch.
     */
    where?: SenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senders to fetch.
     */
    orderBy?: SenderOrderByWithRelationInput | SenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senders.
     */
    cursor?: SenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senders.
     */
    distinct?: SenderScalarFieldEnum | SenderScalarFieldEnum[]
  }


  /**
   * Sender findMany
   */
  export type SenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * Filter, which Senders to fetch.
     */
    where?: SenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senders to fetch.
     */
    orderBy?: SenderOrderByWithRelationInput | SenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Senders.
     */
    cursor?: SenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senders.
     */
    skip?: number
    distinct?: SenderScalarFieldEnum | SenderScalarFieldEnum[]
  }


  /**
   * Sender create
   */
  export type SenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * The data needed to create a Sender.
     */
    data: XOR<SenderCreateInput, SenderUncheckedCreateInput>
  }


  /**
   * Sender createMany
   */
  export type SenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Senders.
     */
    data: SenderCreateManyInput | SenderCreateManyInput[]
  }


  /**
   * Sender update
   */
  export type SenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * The data needed to update a Sender.
     */
    data: XOR<SenderUpdateInput, SenderUncheckedUpdateInput>
    /**
     * Choose, which Sender to update.
     */
    where: SenderWhereUniqueInput
  }


  /**
   * Sender updateMany
   */
  export type SenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Senders.
     */
    data: XOR<SenderUpdateManyMutationInput, SenderUncheckedUpdateManyInput>
    /**
     * Filter which Senders to update
     */
    where?: SenderWhereInput
  }


  /**
   * Sender upsert
   */
  export type SenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * The filter to search for the Sender to update in case it exists.
     */
    where: SenderWhereUniqueInput
    /**
     * In case the Sender found by the `where` argument doesn't exist, create a new Sender with this data.
     */
    create: XOR<SenderCreateInput, SenderUncheckedCreateInput>
    /**
     * In case the Sender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenderUpdateInput, SenderUncheckedUpdateInput>
  }


  /**
   * Sender delete
   */
  export type SenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
    /**
     * Filter which Sender to delete.
     */
    where: SenderWhereUniqueInput
  }


  /**
   * Sender deleteMany
   */
  export type SenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senders to delete
     */
    where?: SenderWhereInput
  }


  /**
   * Sender findRaw
   */
  export type SenderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Sender aggregateRaw
   */
  export type SenderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Sender.message
   */
  export type Sender$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }


  /**
   * Sender without action
   */
  export type SenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sender
     */
    select?: SenderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SenderInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const ChatGroupScalarFieldEnum: {
    id: 'id'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    chatId: 'chatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const StatusMessageScalarFieldEnum: {
    messageId: 'messageId'
  };

  export type StatusMessageScalarFieldEnum = (typeof StatusMessageScalarFieldEnum)[keyof typeof StatusMessageScalarFieldEnum]


  export const UserReadMessageScalarFieldEnum: {
    id: 'id',
    statusMessageId: 'statusMessageId',
    userId: 'userId',
    name: 'name'
  };

  export type UserReadMessageScalarFieldEnum = (typeof UserReadMessageScalarFieldEnum)[keyof typeof UserReadMessageScalarFieldEnum]


  export const SenderScalarFieldEnum: {
    id: 'id',
    idUser: 'idUser',
    name: 'name',
    messageId: 'messageId'
  };

  export type SenderScalarFieldEnum = (typeof SenderScalarFieldEnum)[keyof typeof SenderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: StringFilter<"ChatGroup"> | string
    message?: MessageListRelationFilter
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    message?: MessageOrderByRelationAggregateInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    message?: MessageListRelationFilter
  }, "id">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatGroup"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    chatId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<SenderNullableRelationFilter, SenderWhereInput> | null
    statusMessage?: XOR<StatusMessageNullableRelationFilter, StatusMessageWhereInput> | null
    chat?: XOR<ChatGroupNullableRelationFilter, ChatGroupWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: SenderOrderByWithRelationInput
    statusMessage?: StatusMessageOrderByWithRelationInput
    chat?: ChatGroupOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    chatId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<SenderNullableRelationFilter, SenderWhereInput> | null
    statusMessage?: XOR<StatusMessageNullableRelationFilter, StatusMessageWhereInput> | null
    chat?: XOR<ChatGroupNullableRelationFilter, ChatGroupWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type StatusMessageWhereInput = {
    AND?: StatusMessageWhereInput | StatusMessageWhereInput[]
    OR?: StatusMessageWhereInput[]
    NOT?: StatusMessageWhereInput | StatusMessageWhereInput[]
    messageId?: StringFilter<"StatusMessage"> | string
    message?: XOR<MessageNullableRelationFilter, MessageWhereInput> | null
    readBy?: UserReadMessageListRelationFilter
  }

  export type StatusMessageOrderByWithRelationInput = {
    messageId?: SortOrder
    message?: MessageOrderByWithRelationInput
    readBy?: UserReadMessageOrderByRelationAggregateInput
  }

  export type StatusMessageWhereUniqueInput = Prisma.AtLeast<{
    messageId?: string
    AND?: StatusMessageWhereInput | StatusMessageWhereInput[]
    OR?: StatusMessageWhereInput[]
    NOT?: StatusMessageWhereInput | StatusMessageWhereInput[]
    message?: XOR<MessageNullableRelationFilter, MessageWhereInput> | null
    readBy?: UserReadMessageListRelationFilter
  }, "messageId">

  export type StatusMessageOrderByWithAggregationInput = {
    messageId?: SortOrder
    _count?: StatusMessageCountOrderByAggregateInput
    _max?: StatusMessageMaxOrderByAggregateInput
    _min?: StatusMessageMinOrderByAggregateInput
  }

  export type StatusMessageScalarWhereWithAggregatesInput = {
    AND?: StatusMessageScalarWhereWithAggregatesInput | StatusMessageScalarWhereWithAggregatesInput[]
    OR?: StatusMessageScalarWhereWithAggregatesInput[]
    NOT?: StatusMessageScalarWhereWithAggregatesInput | StatusMessageScalarWhereWithAggregatesInput[]
    messageId?: StringWithAggregatesFilter<"StatusMessage"> | string
  }

  export type UserReadMessageWhereInput = {
    AND?: UserReadMessageWhereInput | UserReadMessageWhereInput[]
    OR?: UserReadMessageWhereInput[]
    NOT?: UserReadMessageWhereInput | UserReadMessageWhereInput[]
    id?: StringFilter<"UserReadMessage"> | string
    statusMessageId?: StringNullableFilter<"UserReadMessage"> | string | null
    userId?: StringFilter<"UserReadMessage"> | string
    name?: StringFilter<"UserReadMessage"> | string
    StatusMessage?: XOR<StatusMessageNullableRelationFilter, StatusMessageWhereInput> | null
  }

  export type UserReadMessageOrderByWithRelationInput = {
    id?: SortOrder
    statusMessageId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    StatusMessage?: StatusMessageOrderByWithRelationInput
  }

  export type UserReadMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserReadMessageWhereInput | UserReadMessageWhereInput[]
    OR?: UserReadMessageWhereInput[]
    NOT?: UserReadMessageWhereInput | UserReadMessageWhereInput[]
    statusMessageId?: StringNullableFilter<"UserReadMessage"> | string | null
    userId?: StringFilter<"UserReadMessage"> | string
    name?: StringFilter<"UserReadMessage"> | string
    StatusMessage?: XOR<StatusMessageNullableRelationFilter, StatusMessageWhereInput> | null
  }, "id">

  export type UserReadMessageOrderByWithAggregationInput = {
    id?: SortOrder
    statusMessageId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: UserReadMessageCountOrderByAggregateInput
    _max?: UserReadMessageMaxOrderByAggregateInput
    _min?: UserReadMessageMinOrderByAggregateInput
  }

  export type UserReadMessageScalarWhereWithAggregatesInput = {
    AND?: UserReadMessageScalarWhereWithAggregatesInput | UserReadMessageScalarWhereWithAggregatesInput[]
    OR?: UserReadMessageScalarWhereWithAggregatesInput[]
    NOT?: UserReadMessageScalarWhereWithAggregatesInput | UserReadMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserReadMessage"> | string
    statusMessageId?: StringNullableWithAggregatesFilter<"UserReadMessage"> | string | null
    userId?: StringWithAggregatesFilter<"UserReadMessage"> | string
    name?: StringWithAggregatesFilter<"UserReadMessage"> | string
  }

  export type SenderWhereInput = {
    AND?: SenderWhereInput | SenderWhereInput[]
    OR?: SenderWhereInput[]
    NOT?: SenderWhereInput | SenderWhereInput[]
    id?: StringFilter<"Sender"> | string
    idUser?: StringFilter<"Sender"> | string
    name?: StringFilter<"Sender"> | string
    messageId?: StringNullableFilter<"Sender"> | string | null
    message?: XOR<MessageNullableRelationFilter, MessageWhereInput> | null
  }

  export type SenderOrderByWithRelationInput = {
    id?: SortOrder
    idUser?: SortOrder
    name?: SortOrder
    messageId?: SortOrder
    message?: MessageOrderByWithRelationInput
  }

  export type SenderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: SenderWhereInput | SenderWhereInput[]
    OR?: SenderWhereInput[]
    NOT?: SenderWhereInput | SenderWhereInput[]
    idUser?: StringFilter<"Sender"> | string
    name?: StringFilter<"Sender"> | string
    message?: XOR<MessageNullableRelationFilter, MessageWhereInput> | null
  }, "id" | "messageId">

  export type SenderOrderByWithAggregationInput = {
    id?: SortOrder
    idUser?: SortOrder
    name?: SortOrder
    messageId?: SortOrder
    _count?: SenderCountOrderByAggregateInput
    _max?: SenderMaxOrderByAggregateInput
    _min?: SenderMinOrderByAggregateInput
  }

  export type SenderScalarWhereWithAggregatesInput = {
    AND?: SenderScalarWhereWithAggregatesInput | SenderScalarWhereWithAggregatesInput[]
    OR?: SenderScalarWhereWithAggregatesInput[]
    NOT?: SenderScalarWhereWithAggregatesInput | SenderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sender"> | string
    idUser?: StringWithAggregatesFilter<"Sender"> | string
    name?: StringWithAggregatesFilter<"Sender"> | string
    messageId?: StringNullableWithAggregatesFilter<"Sender"> | string | null
  }

  export type ChatGroupCreateInput = {
    id: string
    message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id: string
    message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatGroupUpdateInput = {
    message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatGroupCreateManyInput = {
    id: string
  }

  export type ChatGroupUpdateManyMutationInput = {

  }

  export type ChatGroupUncheckedUpdateManyInput = {

  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: SenderCreateNestedOneWithoutMessageInput
    statusMessage?: StatusMessageCreateNestedOneWithoutMessageInput
    chat?: ChatGroupCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: SenderUncheckedCreateNestedOneWithoutMessageInput
    statusMessage?: StatusMessageUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: SenderUpdateOneWithoutMessageNestedInput
    statusMessage?: StatusMessageUpdateOneWithoutMessageNestedInput
    chat?: ChatGroupUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: SenderUncheckedUpdateOneWithoutMessageNestedInput
    statusMessage?: StatusMessageUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusMessageCreateInput = {
    message?: MessageCreateNestedOneWithoutStatusMessageInput
    readBy?: UserReadMessageCreateNestedManyWithoutStatusMessageInput
  }

  export type StatusMessageUncheckedCreateInput = {
    messageId: string
    readBy?: UserReadMessageUncheckedCreateNestedManyWithoutStatusMessageInput
  }

  export type StatusMessageUpdateInput = {
    message?: MessageUpdateOneWithoutStatusMessageNestedInput
    readBy?: UserReadMessageUpdateManyWithoutStatusMessageNestedInput
  }

  export type StatusMessageUncheckedUpdateInput = {
    readBy?: UserReadMessageUncheckedUpdateManyWithoutStatusMessageNestedInput
  }

  export type StatusMessageCreateManyInput = {
    messageId: string
  }

  export type StatusMessageUpdateManyMutationInput = {

  }

  export type StatusMessageUncheckedUpdateManyInput = {

  }

  export type UserReadMessageCreateInput = {
    id?: string
    userId: string
    name: string
    StatusMessage?: StatusMessageCreateNestedOneWithoutReadByInput
  }

  export type UserReadMessageUncheckedCreateInput = {
    id?: string
    statusMessageId?: string | null
    userId: string
    name: string
  }

  export type UserReadMessageUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    StatusMessage?: StatusMessageUpdateOneWithoutReadByNestedInput
  }

  export type UserReadMessageUncheckedUpdateInput = {
    statusMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserReadMessageCreateManyInput = {
    id?: string
    statusMessageId?: string | null
    userId: string
    name: string
  }

  export type UserReadMessageUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserReadMessageUncheckedUpdateManyInput = {
    statusMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SenderCreateInput = {
    id?: string
    idUser: string
    name: string
    message?: MessageCreateNestedOneWithoutSenderInput
  }

  export type SenderUncheckedCreateInput = {
    id?: string
    idUser: string
    name: string
    messageId?: string | null
  }

  export type SenderUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    message?: MessageUpdateOneWithoutSenderNestedInput
  }

  export type SenderUncheckedUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SenderCreateManyInput = {
    id?: string
    idUser: string
    name: string
    messageId?: string | null
  }

  export type SenderUpdateManyMutationInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SenderUncheckedUpdateManyInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    messageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SenderNullableRelationFilter = {
    is?: SenderWhereInput | null
    isNot?: SenderWhereInput | null
  }

  export type StatusMessageNullableRelationFilter = {
    is?: StatusMessageWhereInput | null
    isNot?: StatusMessageWhereInput | null
  }

  export type ChatGroupNullableRelationFilter = {
    is?: ChatGroupWhereInput | null
    isNot?: ChatGroupWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MessageNullableRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type UserReadMessageListRelationFilter = {
    every?: UserReadMessageWhereInput
    some?: UserReadMessageWhereInput
    none?: UserReadMessageWhereInput
  }

  export type UserReadMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusMessageCountOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type StatusMessageMaxOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type StatusMessageMinOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type UserReadMessageCountOrderByAggregateInput = {
    id?: SortOrder
    statusMessageId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type UserReadMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    statusMessageId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type UserReadMessageMinOrderByAggregateInput = {
    id?: SortOrder
    statusMessageId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type SenderCountOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    name?: SortOrder
    messageId?: SortOrder
  }

  export type SenderMaxOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    name?: SortOrder
    messageId?: SortOrder
  }

  export type SenderMinOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    name?: SortOrder
    messageId?: SortOrder
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type SenderCreateNestedOneWithoutMessageInput = {
    create?: XOR<SenderCreateWithoutMessageInput, SenderUncheckedCreateWithoutMessageInput>
    connectOrCreate?: SenderCreateOrConnectWithoutMessageInput
    connect?: SenderWhereUniqueInput
  }

  export type StatusMessageCreateNestedOneWithoutMessageInput = {
    create?: XOR<StatusMessageCreateWithoutMessageInput, StatusMessageUncheckedCreateWithoutMessageInput>
    connectOrCreate?: StatusMessageCreateOrConnectWithoutMessageInput
    connect?: StatusMessageWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutMessageInput = {
    create?: XOR<ChatGroupCreateWithoutMessageInput, ChatGroupUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessageInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type SenderUncheckedCreateNestedOneWithoutMessageInput = {
    create?: XOR<SenderCreateWithoutMessageInput, SenderUncheckedCreateWithoutMessageInput>
    connectOrCreate?: SenderCreateOrConnectWithoutMessageInput
    connect?: SenderWhereUniqueInput
  }

  export type StatusMessageUncheckedCreateNestedOneWithoutMessageInput = {
    create?: XOR<StatusMessageCreateWithoutMessageInput, StatusMessageUncheckedCreateWithoutMessageInput>
    connectOrCreate?: StatusMessageCreateOrConnectWithoutMessageInput
    connect?: StatusMessageWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SenderUpdateOneWithoutMessageNestedInput = {
    create?: XOR<SenderCreateWithoutMessageInput, SenderUncheckedCreateWithoutMessageInput>
    connectOrCreate?: SenderCreateOrConnectWithoutMessageInput
    upsert?: SenderUpsertWithoutMessageInput
    disconnect?: SenderWhereInput | boolean
    delete?: SenderWhereInput | boolean
    connect?: SenderWhereUniqueInput
    update?: XOR<XOR<SenderUpdateToOneWithWhereWithoutMessageInput, SenderUpdateWithoutMessageInput>, SenderUncheckedUpdateWithoutMessageInput>
  }

  export type StatusMessageUpdateOneWithoutMessageNestedInput = {
    create?: XOR<StatusMessageCreateWithoutMessageInput, StatusMessageUncheckedCreateWithoutMessageInput>
    connectOrCreate?: StatusMessageCreateOrConnectWithoutMessageInput
    upsert?: StatusMessageUpsertWithoutMessageInput
    disconnect?: StatusMessageWhereInput | boolean
    delete?: StatusMessageWhereInput | boolean
    connect?: StatusMessageWhereUniqueInput
    update?: XOR<XOR<StatusMessageUpdateToOneWithWhereWithoutMessageInput, StatusMessageUpdateWithoutMessageInput>, StatusMessageUncheckedUpdateWithoutMessageInput>
  }

  export type ChatGroupUpdateOneWithoutMessageNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMessageInput, ChatGroupUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessageInput
    upsert?: ChatGroupUpsertWithoutMessageInput
    disconnect?: boolean
    delete?: ChatGroupWhereInput | boolean
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutMessageInput, ChatGroupUpdateWithoutMessageInput>, ChatGroupUncheckedUpdateWithoutMessageInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type SenderUncheckedUpdateOneWithoutMessageNestedInput = {
    create?: XOR<SenderCreateWithoutMessageInput, SenderUncheckedCreateWithoutMessageInput>
    connectOrCreate?: SenderCreateOrConnectWithoutMessageInput
    upsert?: SenderUpsertWithoutMessageInput
    disconnect?: SenderWhereInput | boolean
    delete?: SenderWhereInput | boolean
    connect?: SenderWhereUniqueInput
    update?: XOR<XOR<SenderUpdateToOneWithWhereWithoutMessageInput, SenderUpdateWithoutMessageInput>, SenderUncheckedUpdateWithoutMessageInput>
  }

  export type StatusMessageUncheckedUpdateOneWithoutMessageNestedInput = {
    create?: XOR<StatusMessageCreateWithoutMessageInput, StatusMessageUncheckedCreateWithoutMessageInput>
    connectOrCreate?: StatusMessageCreateOrConnectWithoutMessageInput
    upsert?: StatusMessageUpsertWithoutMessageInput
    disconnect?: StatusMessageWhereInput | boolean
    delete?: StatusMessageWhereInput | boolean
    connect?: StatusMessageWhereUniqueInput
    update?: XOR<XOR<StatusMessageUpdateToOneWithWhereWithoutMessageInput, StatusMessageUpdateWithoutMessageInput>, StatusMessageUncheckedUpdateWithoutMessageInput>
  }

  export type MessageCreateNestedOneWithoutStatusMessageInput = {
    create?: XOR<MessageCreateWithoutStatusMessageInput, MessageUncheckedCreateWithoutStatusMessageInput>
    connectOrCreate?: MessageCreateOrConnectWithoutStatusMessageInput
    connect?: MessageWhereUniqueInput
  }

  export type UserReadMessageCreateNestedManyWithoutStatusMessageInput = {
    create?: XOR<UserReadMessageCreateWithoutStatusMessageInput, UserReadMessageUncheckedCreateWithoutStatusMessageInput> | UserReadMessageCreateWithoutStatusMessageInput[] | UserReadMessageUncheckedCreateWithoutStatusMessageInput[]
    connectOrCreate?: UserReadMessageCreateOrConnectWithoutStatusMessageInput | UserReadMessageCreateOrConnectWithoutStatusMessageInput[]
    createMany?: UserReadMessageCreateManyStatusMessageInputEnvelope
    connect?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
  }

  export type UserReadMessageUncheckedCreateNestedManyWithoutStatusMessageInput = {
    create?: XOR<UserReadMessageCreateWithoutStatusMessageInput, UserReadMessageUncheckedCreateWithoutStatusMessageInput> | UserReadMessageCreateWithoutStatusMessageInput[] | UserReadMessageUncheckedCreateWithoutStatusMessageInput[]
    connectOrCreate?: UserReadMessageCreateOrConnectWithoutStatusMessageInput | UserReadMessageCreateOrConnectWithoutStatusMessageInput[]
    createMany?: UserReadMessageCreateManyStatusMessageInputEnvelope
    connect?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
  }

  export type MessageUpdateOneWithoutStatusMessageNestedInput = {
    create?: XOR<MessageCreateWithoutStatusMessageInput, MessageUncheckedCreateWithoutStatusMessageInput>
    connectOrCreate?: MessageCreateOrConnectWithoutStatusMessageInput
    upsert?: MessageUpsertWithoutStatusMessageInput
    disconnect?: boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutStatusMessageInput, MessageUpdateWithoutStatusMessageInput>, MessageUncheckedUpdateWithoutStatusMessageInput>
  }

  export type UserReadMessageUpdateManyWithoutStatusMessageNestedInput = {
    create?: XOR<UserReadMessageCreateWithoutStatusMessageInput, UserReadMessageUncheckedCreateWithoutStatusMessageInput> | UserReadMessageCreateWithoutStatusMessageInput[] | UserReadMessageUncheckedCreateWithoutStatusMessageInput[]
    connectOrCreate?: UserReadMessageCreateOrConnectWithoutStatusMessageInput | UserReadMessageCreateOrConnectWithoutStatusMessageInput[]
    upsert?: UserReadMessageUpsertWithWhereUniqueWithoutStatusMessageInput | UserReadMessageUpsertWithWhereUniqueWithoutStatusMessageInput[]
    createMany?: UserReadMessageCreateManyStatusMessageInputEnvelope
    set?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    disconnect?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    delete?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    connect?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    update?: UserReadMessageUpdateWithWhereUniqueWithoutStatusMessageInput | UserReadMessageUpdateWithWhereUniqueWithoutStatusMessageInput[]
    updateMany?: UserReadMessageUpdateManyWithWhereWithoutStatusMessageInput | UserReadMessageUpdateManyWithWhereWithoutStatusMessageInput[]
    deleteMany?: UserReadMessageScalarWhereInput | UserReadMessageScalarWhereInput[]
  }

  export type UserReadMessageUncheckedUpdateManyWithoutStatusMessageNestedInput = {
    create?: XOR<UserReadMessageCreateWithoutStatusMessageInput, UserReadMessageUncheckedCreateWithoutStatusMessageInput> | UserReadMessageCreateWithoutStatusMessageInput[] | UserReadMessageUncheckedCreateWithoutStatusMessageInput[]
    connectOrCreate?: UserReadMessageCreateOrConnectWithoutStatusMessageInput | UserReadMessageCreateOrConnectWithoutStatusMessageInput[]
    upsert?: UserReadMessageUpsertWithWhereUniqueWithoutStatusMessageInput | UserReadMessageUpsertWithWhereUniqueWithoutStatusMessageInput[]
    createMany?: UserReadMessageCreateManyStatusMessageInputEnvelope
    set?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    disconnect?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    delete?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    connect?: UserReadMessageWhereUniqueInput | UserReadMessageWhereUniqueInput[]
    update?: UserReadMessageUpdateWithWhereUniqueWithoutStatusMessageInput | UserReadMessageUpdateWithWhereUniqueWithoutStatusMessageInput[]
    updateMany?: UserReadMessageUpdateManyWithWhereWithoutStatusMessageInput | UserReadMessageUpdateManyWithWhereWithoutStatusMessageInput[]
    deleteMany?: UserReadMessageScalarWhereInput | UserReadMessageScalarWhereInput[]
  }

  export type StatusMessageCreateNestedOneWithoutReadByInput = {
    create?: XOR<StatusMessageCreateWithoutReadByInput, StatusMessageUncheckedCreateWithoutReadByInput>
    connectOrCreate?: StatusMessageCreateOrConnectWithoutReadByInput
    connect?: StatusMessageWhereUniqueInput
  }

  export type StatusMessageUpdateOneWithoutReadByNestedInput = {
    create?: XOR<StatusMessageCreateWithoutReadByInput, StatusMessageUncheckedCreateWithoutReadByInput>
    connectOrCreate?: StatusMessageCreateOrConnectWithoutReadByInput
    upsert?: StatusMessageUpsertWithoutReadByInput
    disconnect?: boolean
    delete?: StatusMessageWhereInput | boolean
    connect?: StatusMessageWhereUniqueInput
    update?: XOR<XOR<StatusMessageUpdateToOneWithWhereWithoutReadByInput, StatusMessageUpdateWithoutReadByInput>, StatusMessageUncheckedUpdateWithoutReadByInput>
  }

  export type MessageCreateNestedOneWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageUpdateOneWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput
    upsert?: MessageUpsertWithoutSenderInput
    disconnect?: boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutSenderInput, MessageUpdateWithoutSenderInput>, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: SenderCreateNestedOneWithoutMessageInput
    statusMessage?: StatusMessageCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: SenderUncheckedCreateNestedOneWithoutMessageInput
    statusMessage?: StatusMessageUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    chatId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type SenderCreateWithoutMessageInput = {
    id?: string
    idUser: string
    name: string
  }

  export type SenderUncheckedCreateWithoutMessageInput = {
    id?: string
    idUser: string
    name: string
  }

  export type SenderCreateOrConnectWithoutMessageInput = {
    where: SenderWhereUniqueInput
    create: XOR<SenderCreateWithoutMessageInput, SenderUncheckedCreateWithoutMessageInput>
  }

  export type StatusMessageCreateWithoutMessageInput = {
    readBy?: UserReadMessageCreateNestedManyWithoutStatusMessageInput
  }

  export type StatusMessageUncheckedCreateWithoutMessageInput = {
    readBy?: UserReadMessageUncheckedCreateNestedManyWithoutStatusMessageInput
  }

  export type StatusMessageCreateOrConnectWithoutMessageInput = {
    where: StatusMessageWhereUniqueInput
    create: XOR<StatusMessageCreateWithoutMessageInput, StatusMessageUncheckedCreateWithoutMessageInput>
  }

  export type ChatGroupCreateWithoutMessageInput = {
    id: string
  }

  export type ChatGroupUncheckedCreateWithoutMessageInput = {
    id: string
  }

  export type ChatGroupCreateOrConnectWithoutMessageInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMessageInput, ChatGroupUncheckedCreateWithoutMessageInput>
  }

  export type SenderUpsertWithoutMessageInput = {
    update: XOR<SenderUpdateWithoutMessageInput, SenderUncheckedUpdateWithoutMessageInput>
    create: XOR<SenderCreateWithoutMessageInput, SenderUncheckedCreateWithoutMessageInput>
    where?: SenderWhereInput
  }

  export type SenderUpdateToOneWithWhereWithoutMessageInput = {
    where?: SenderWhereInput
    data: XOR<SenderUpdateWithoutMessageInput, SenderUncheckedUpdateWithoutMessageInput>
  }

  export type SenderUpdateWithoutMessageInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SenderUncheckedUpdateWithoutMessageInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusMessageUpsertWithoutMessageInput = {
    update: XOR<StatusMessageUpdateWithoutMessageInput, StatusMessageUncheckedUpdateWithoutMessageInput>
    create: XOR<StatusMessageCreateWithoutMessageInput, StatusMessageUncheckedCreateWithoutMessageInput>
    where?: StatusMessageWhereInput
  }

  export type StatusMessageUpdateToOneWithWhereWithoutMessageInput = {
    where?: StatusMessageWhereInput
    data: XOR<StatusMessageUpdateWithoutMessageInput, StatusMessageUncheckedUpdateWithoutMessageInput>
  }

  export type StatusMessageUpdateWithoutMessageInput = {
    readBy?: UserReadMessageUpdateManyWithoutStatusMessageNestedInput
  }

  export type StatusMessageUncheckedUpdateWithoutMessageInput = {
    readBy?: UserReadMessageUncheckedUpdateManyWithoutStatusMessageNestedInput
  }

  export type ChatGroupUpsertWithoutMessageInput = {
    update: XOR<ChatGroupUpdateWithoutMessageInput, ChatGroupUncheckedUpdateWithoutMessageInput>
    create: XOR<ChatGroupCreateWithoutMessageInput, ChatGroupUncheckedCreateWithoutMessageInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutMessageInput, ChatGroupUncheckedUpdateWithoutMessageInput>
  }

  export type ChatGroupUpdateWithoutMessageInput = {

  }

  export type ChatGroupUncheckedUpdateWithoutMessageInput = {

  }

  export type MessageCreateWithoutStatusMessageInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: SenderCreateNestedOneWithoutMessageInput
    chat?: ChatGroupCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutStatusMessageInput = {
    id?: string
    content: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: SenderUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutStatusMessageInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutStatusMessageInput, MessageUncheckedCreateWithoutStatusMessageInput>
  }

  export type UserReadMessageCreateWithoutStatusMessageInput = {
    id?: string
    userId: string
    name: string
  }

  export type UserReadMessageUncheckedCreateWithoutStatusMessageInput = {
    id?: string
    userId: string
    name: string
  }

  export type UserReadMessageCreateOrConnectWithoutStatusMessageInput = {
    where: UserReadMessageWhereUniqueInput
    create: XOR<UserReadMessageCreateWithoutStatusMessageInput, UserReadMessageUncheckedCreateWithoutStatusMessageInput>
  }

  export type UserReadMessageCreateManyStatusMessageInputEnvelope = {
    data: UserReadMessageCreateManyStatusMessageInput | UserReadMessageCreateManyStatusMessageInput[]
  }

  export type MessageUpsertWithoutStatusMessageInput = {
    update: XOR<MessageUpdateWithoutStatusMessageInput, MessageUncheckedUpdateWithoutStatusMessageInput>
    create: XOR<MessageCreateWithoutStatusMessageInput, MessageUncheckedCreateWithoutStatusMessageInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutStatusMessageInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutStatusMessageInput, MessageUncheckedUpdateWithoutStatusMessageInput>
  }

  export type MessageUpdateWithoutStatusMessageInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: SenderUpdateOneWithoutMessageNestedInput
    chat?: ChatGroupUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutStatusMessageInput = {
    content?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: SenderUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type UserReadMessageUpsertWithWhereUniqueWithoutStatusMessageInput = {
    where: UserReadMessageWhereUniqueInput
    update: XOR<UserReadMessageUpdateWithoutStatusMessageInput, UserReadMessageUncheckedUpdateWithoutStatusMessageInput>
    create: XOR<UserReadMessageCreateWithoutStatusMessageInput, UserReadMessageUncheckedCreateWithoutStatusMessageInput>
  }

  export type UserReadMessageUpdateWithWhereUniqueWithoutStatusMessageInput = {
    where: UserReadMessageWhereUniqueInput
    data: XOR<UserReadMessageUpdateWithoutStatusMessageInput, UserReadMessageUncheckedUpdateWithoutStatusMessageInput>
  }

  export type UserReadMessageUpdateManyWithWhereWithoutStatusMessageInput = {
    where: UserReadMessageScalarWhereInput
    data: XOR<UserReadMessageUpdateManyMutationInput, UserReadMessageUncheckedUpdateManyWithoutStatusMessageInput>
  }

  export type UserReadMessageScalarWhereInput = {
    AND?: UserReadMessageScalarWhereInput | UserReadMessageScalarWhereInput[]
    OR?: UserReadMessageScalarWhereInput[]
    NOT?: UserReadMessageScalarWhereInput | UserReadMessageScalarWhereInput[]
    id?: StringFilter<"UserReadMessage"> | string
    statusMessageId?: StringNullableFilter<"UserReadMessage"> | string | null
    userId?: StringFilter<"UserReadMessage"> | string
    name?: StringFilter<"UserReadMessage"> | string
  }

  export type StatusMessageCreateWithoutReadByInput = {
    message?: MessageCreateNestedOneWithoutStatusMessageInput
  }

  export type StatusMessageUncheckedCreateWithoutReadByInput = {
    messageId: string
  }

  export type StatusMessageCreateOrConnectWithoutReadByInput = {
    where: StatusMessageWhereUniqueInput
    create: XOR<StatusMessageCreateWithoutReadByInput, StatusMessageUncheckedCreateWithoutReadByInput>
  }

  export type StatusMessageUpsertWithoutReadByInput = {
    update: XOR<StatusMessageUpdateWithoutReadByInput, StatusMessageUncheckedUpdateWithoutReadByInput>
    create: XOR<StatusMessageCreateWithoutReadByInput, StatusMessageUncheckedCreateWithoutReadByInput>
    where?: StatusMessageWhereInput
  }

  export type StatusMessageUpdateToOneWithWhereWithoutReadByInput = {
    where?: StatusMessageWhereInput
    data: XOR<StatusMessageUpdateWithoutReadByInput, StatusMessageUncheckedUpdateWithoutReadByInput>
  }

  export type StatusMessageUpdateWithoutReadByInput = {
    message?: MessageUpdateOneWithoutStatusMessageNestedInput
  }

  export type StatusMessageUncheckedUpdateWithoutReadByInput = {

  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    statusMessage?: StatusMessageCreateNestedOneWithoutMessageInput
    chat?: ChatGroupCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusMessage?: StatusMessageUncheckedCreateNestedOneWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpsertWithoutSenderInput = {
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutSenderInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusMessage?: StatusMessageUpdateOneWithoutMessageNestedInput
    chat?: ChatGroupUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusMessage?: StatusMessageUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type MessageCreateManyChatInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: SenderUpdateOneWithoutMessageNestedInput
    statusMessage?: StatusMessageUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: SenderUncheckedUpdateOneWithoutMessageNestedInput
    statusMessage?: StatusMessageUncheckedUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReadMessageCreateManyStatusMessageInput = {
    id?: string
    userId: string
    name: string
  }

  export type UserReadMessageUpdateWithoutStatusMessageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserReadMessageUncheckedUpdateWithoutStatusMessageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserReadMessageUncheckedUpdateManyWithoutStatusMessageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ChatGroupCountOutputTypeDefaultArgs instead
     */
    export type ChatGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusMessageCountOutputTypeDefaultArgs instead
     */
    export type StatusMessageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusMessageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatGroupDefaultArgs instead
     */
    export type ChatGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusMessageDefaultArgs instead
     */
    export type StatusMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserReadMessageDefaultArgs instead
     */
    export type UserReadMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserReadMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SenderDefaultArgs instead
     */
    export type SenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SenderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}