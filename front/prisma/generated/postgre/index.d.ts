
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserOnGroup
 * 
 */
export type UserOnGroup = $Result.DefaultSelection<Prisma.$UserOnGroupPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Invites
 * 
 */
export type Invites = $Result.DefaultSelection<Prisma.$InvitesPayload>
/**
 * Model Activities
 * 
 */
export type Activities = $Result.DefaultSelection<Prisma.$ActivitiesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userOnGroup`: Exposes CRUD operations for the **UserOnGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnGroups
    * const userOnGroups = await prisma.userOnGroup.findMany()
    * ```
    */
  get userOnGroup(): Prisma.UserOnGroupDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.invites`: Exposes CRUD operations for the **Invites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invites.findMany()
    * ```
    */
  get invites(): Prisma.InvitesDelegate<ExtArgs>;

  /**
   * `prisma.activities`: Exposes CRUD operations for the **Activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.ActivitiesDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    User: 'User',
    UserOnGroup: 'UserOnGroup',
    Group: 'Group',
    Invites: 'Invites',
    Activities: 'Activities'
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
      modelProps: 'user' | 'userOnGroup' | 'group' | 'invites' | 'activities'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserOnGroup: {
        payload: Prisma.$UserOnGroupPayload<ExtArgs>
        fields: Prisma.UserOnGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>
          }
          findFirst: {
            args: Prisma.UserOnGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>
          }
          findMany: {
            args: Prisma.UserOnGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>[]
          }
          create: {
            args: Prisma.UserOnGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>
          }
          createMany: {
            args: Prisma.UserOnGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnGroupCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>[]
          }
          delete: {
            args: Prisma.UserOnGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>
          }
          update: {
            args: Prisma.UserOnGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>
          }
          deleteMany: {
            args: Prisma.UserOnGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserOnGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPayload>
          }
          aggregate: {
            args: Prisma.UserOnGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserOnGroup>
          }
          groupBy: {
            args: Prisma.UserOnGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserOnGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<UserOnGroupCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Invites: {
        payload: Prisma.$InvitesPayload<ExtArgs>
        fields: Prisma.InvitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          findFirst: {
            args: Prisma.InvitesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          findMany: {
            args: Prisma.InvitesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>[]
          }
          create: {
            args: Prisma.InvitesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          createMany: {
            args: Prisma.InvitesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitesCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>[]
          }
          delete: {
            args: Prisma.InvitesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          update: {
            args: Prisma.InvitesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          deleteMany: {
            args: Prisma.InvitesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvitesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvitesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          aggregate: {
            args: Prisma.InvitesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvites>
          }
          groupBy: {
            args: Prisma.InvitesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitesCountArgs<ExtArgs>,
            result: $Utils.Optional<InvitesCountAggregateOutputType> | number
          }
        }
      }
      Activities: {
        payload: Prisma.$ActivitiesPayload<ExtArgs>
        fields: Prisma.ActivitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivitiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivitiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          findFirst: {
            args: Prisma.ActivitiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivitiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          findMany: {
            args: Prisma.ActivitiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>[]
          }
          create: {
            args: Prisma.ActivitiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          createMany: {
            args: Prisma.ActivitiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivitiesCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>[]
          }
          delete: {
            args: Prisma.ActivitiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          update: {
            args: Prisma.ActivitiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          deleteMany: {
            args: Prisma.ActivitiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivitiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivitiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          aggregate: {
            args: Prisma.ActivitiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivities>
          }
          groupBy: {
            args: Prisma.ActivitiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivitiesCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivitiesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    | 'createManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnGroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    activities: number
    users: number
    invites: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | GroupCountOutputTypeCountActivitiesArgs
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    invites?: boolean | GroupCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnGroupWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      groups: Prisma.$UserOnGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    where?: UserOnGroupWhereInput
    orderBy?: UserOnGroupOrderByWithRelationInput | UserOnGroupOrderByWithRelationInput[]
    cursor?: UserOnGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnGroupScalarFieldEnum | UserOnGroupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserOnGroup
   */

  export type AggregateUserOnGroup = {
    _count: UserOnGroupCountAggregateOutputType | null
    _min: UserOnGroupMinAggregateOutputType | null
    _max: UserOnGroupMaxAggregateOutputType | null
  }

  export type UserOnGroupMinAggregateOutputType = {
    userId: string | null
    groupId: string | null
    role: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserOnGroupMaxAggregateOutputType = {
    userId: string | null
    groupId: string | null
    role: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserOnGroupCountAggregateOutputType = {
    userId: number
    groupId: number
    role: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type UserOnGroupMinAggregateInputType = {
    userId?: true
    groupId?: true
    role?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserOnGroupMaxAggregateInputType = {
    userId?: true
    groupId?: true
    role?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserOnGroupCountAggregateInputType = {
    userId?: true
    groupId?: true
    role?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type UserOnGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnGroup to aggregate.
     */
    where?: UserOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroups to fetch.
     */
    orderBy?: UserOnGroupOrderByWithRelationInput | UserOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnGroups
    **/
    _count?: true | UserOnGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnGroupMaxAggregateInputType
  }

  export type GetUserOnGroupAggregateType<T extends UserOnGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnGroup[P]>
      : GetScalarType<T[P], AggregateUserOnGroup[P]>
  }




  export type UserOnGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnGroupWhereInput
    orderBy?: UserOnGroupOrderByWithAggregationInput | UserOnGroupOrderByWithAggregationInput[]
    by: UserOnGroupScalarFieldEnum[] | UserOnGroupScalarFieldEnum
    having?: UserOnGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnGroupCountAggregateInputType | true
    _min?: UserOnGroupMinAggregateInputType
    _max?: UserOnGroupMaxAggregateInputType
  }

  export type UserOnGroupGroupByOutputType = {
    userId: string
    groupId: string
    role: string
    assignedAt: Date
    assignedBy: string
    _count: UserOnGroupCountAggregateOutputType | null
    _min: UserOnGroupMinAggregateOutputType | null
    _max: UserOnGroupMaxAggregateOutputType | null
  }

  type GetUserOnGroupGroupByPayload<T extends UserOnGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnGroupGroupByOutputType[P]>
        }
      >
    >


  export type UserOnGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    role?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnGroup"]>

  export type UserOnGroupSelectScalar = {
    userId?: boolean
    groupId?: boolean
    role?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
  }


  export type UserOnGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }


  export type $UserOnGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      groupId: string
      role: string
      assignedAt: Date
      assignedBy: string
    }, ExtArgs["result"]["userOnGroup"]>
    composites: {}
  }


  type UserOnGroupGetPayload<S extends boolean | null | undefined | UserOnGroupDefaultArgs> = $Result.GetResult<Prisma.$UserOnGroupPayload, S>

  type UserOnGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserOnGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserOnGroupCountAggregateInputType | true
    }

  export interface UserOnGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnGroup'], meta: { name: 'UserOnGroup' } }
    /**
     * Find zero or one UserOnGroup that matches the filter.
     * @param {UserOnGroupFindUniqueArgs} args - Arguments to find a UserOnGroup
     * @example
     * // Get one UserOnGroup
     * const userOnGroup = await prisma.userOnGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserOnGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserOnGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserOnGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserOnGroupFindUniqueOrThrowArgs} args - Arguments to find a UserOnGroup
     * @example
     * // Get one UserOnGroup
     * const userOnGroup = await prisma.userOnGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserOnGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserOnGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupFindFirstArgs} args - Arguments to find a UserOnGroup
     * @example
     * // Get one UserOnGroup
     * const userOnGroup = await prisma.userOnGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserOnGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupFindFirstArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserOnGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupFindFirstOrThrowArgs} args - Arguments to find a UserOnGroup
     * @example
     * // Get one UserOnGroup
     * const userOnGroup = await prisma.userOnGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserOnGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserOnGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnGroups
     * const userOnGroups = await prisma.userOnGroup.findMany()
     * 
     * // Get first 10 UserOnGroups
     * const userOnGroups = await prisma.userOnGroup.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnGroupWithUserIdOnly = await prisma.userOnGroup.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserOnGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserOnGroup.
     * @param {UserOnGroupCreateArgs} args - Arguments to create a UserOnGroup.
     * @example
     * // Create one UserOnGroup
     * const UserOnGroup = await prisma.userOnGroup.create({
     *   data: {
     *     // ... data to create a UserOnGroup
     *   }
     * })
     * 
    **/
    create<T extends UserOnGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserOnGroupCreateArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserOnGroups.
     * @param {UserOnGroupCreateManyArgs} args - Arguments to create many UserOnGroups.
     * @example
     * // Create many UserOnGroups
     * const userOnGroup = await prisma.userOnGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserOnGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnGroups and returns the data saved in the database.
     * @param {UserOnGroupCreateManyAndReturnArgs} args - Arguments to create many UserOnGroups.
     * @example
     * // Create many UserOnGroups
     * const userOnGroup = await prisma.userOnGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnGroups and only return the `userId`
     * const userOnGroupWithUserIdOnly = await prisma.userOnGroup.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserOnGroupCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserOnGroup.
     * @param {UserOnGroupDeleteArgs} args - Arguments to delete one UserOnGroup.
     * @example
     * // Delete one UserOnGroup
     * const UserOnGroup = await prisma.userOnGroup.delete({
     *   where: {
     *     // ... filter to delete one UserOnGroup
     *   }
     * })
     * 
    **/
    delete<T extends UserOnGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserOnGroupDeleteArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserOnGroup.
     * @param {UserOnGroupUpdateArgs} args - Arguments to update one UserOnGroup.
     * @example
     * // Update one UserOnGroup
     * const userOnGroup = await prisma.userOnGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserOnGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserOnGroupUpdateArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserOnGroups.
     * @param {UserOnGroupDeleteManyArgs} args - Arguments to filter UserOnGroups to delete.
     * @example
     * // Delete a few UserOnGroups
     * const { count } = await prisma.userOnGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserOnGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserOnGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnGroups
     * const userOnGroup = await prisma.userOnGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserOnGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserOnGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnGroup.
     * @param {UserOnGroupUpsertArgs} args - Arguments to update or create a UserOnGroup.
     * @example
     * // Update or create a UserOnGroup
     * const userOnGroup = await prisma.userOnGroup.upsert({
     *   create: {
     *     // ... data to create a UserOnGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnGroup we want to update
     *   }
     * })
    **/
    upsert<T extends UserOnGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserOnGroupUpsertArgs<ExtArgs>>
    ): Prisma__UserOnGroupClient<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserOnGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupCountArgs} args - Arguments to filter UserOnGroups to count.
     * @example
     * // Count the number of UserOnGroups
     * const count = await prisma.userOnGroup.count({
     *   where: {
     *     // ... the filter for the UserOnGroups we want to count
     *   }
     * })
    **/
    count<T extends UserOnGroupCountArgs>(
      args?: Subset<T, UserOnGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOnGroupAggregateArgs>(args: Subset<T, UserOnGroupAggregateArgs>): Prisma.PrismaPromise<GetUserOnGroupAggregateType<T>>

    /**
     * Group by UserOnGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupGroupByArgs} args - Group by arguments.
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
      T extends UserOnGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnGroupGroupByArgs['orderBy'] }
        : { orderBy?: UserOnGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOnGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnGroup model
   */
  readonly fields: UserOnGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the UserOnGroup model
   */ 
  interface UserOnGroupFieldRefs {
    readonly userId: FieldRef<"UserOnGroup", 'String'>
    readonly groupId: FieldRef<"UserOnGroup", 'String'>
    readonly role: FieldRef<"UserOnGroup", 'String'>
    readonly assignedAt: FieldRef<"UserOnGroup", 'DateTime'>
    readonly assignedBy: FieldRef<"UserOnGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserOnGroup findUnique
   */
  export type UserOnGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroup to fetch.
     */
    where: UserOnGroupWhereUniqueInput
  }

  /**
   * UserOnGroup findUniqueOrThrow
   */
  export type UserOnGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroup to fetch.
     */
    where: UserOnGroupWhereUniqueInput
  }

  /**
   * UserOnGroup findFirst
   */
  export type UserOnGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroup to fetch.
     */
    where?: UserOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroups to fetch.
     */
    orderBy?: UserOnGroupOrderByWithRelationInput | UserOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroups.
     */
    cursor?: UserOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroups.
     */
    distinct?: UserOnGroupScalarFieldEnum | UserOnGroupScalarFieldEnum[]
  }

  /**
   * UserOnGroup findFirstOrThrow
   */
  export type UserOnGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroup to fetch.
     */
    where?: UserOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroups to fetch.
     */
    orderBy?: UserOnGroupOrderByWithRelationInput | UserOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroups.
     */
    cursor?: UserOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroups.
     */
    distinct?: UserOnGroupScalarFieldEnum | UserOnGroupScalarFieldEnum[]
  }

  /**
   * UserOnGroup findMany
   */
  export type UserOnGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroups to fetch.
     */
    where?: UserOnGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroups to fetch.
     */
    orderBy?: UserOnGroupOrderByWithRelationInput | UserOnGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnGroups.
     */
    cursor?: UserOnGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroups.
     */
    skip?: number
    distinct?: UserOnGroupScalarFieldEnum | UserOnGroupScalarFieldEnum[]
  }

  /**
   * UserOnGroup create
   */
  export type UserOnGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnGroup.
     */
    data: XOR<UserOnGroupCreateInput, UserOnGroupUncheckedCreateInput>
  }

  /**
   * UserOnGroup createMany
   */
  export type UserOnGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnGroups.
     */
    data: UserOnGroupCreateManyInput | UserOnGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnGroup createManyAndReturn
   */
  export type UserOnGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * The data used to create many UserOnGroups.
     */
    data: UserOnGroupCreateManyInput | UserOnGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnGroup update
   */
  export type UserOnGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnGroup.
     */
    data: XOR<UserOnGroupUpdateInput, UserOnGroupUncheckedUpdateInput>
    /**
     * Choose, which UserOnGroup to update.
     */
    where: UserOnGroupWhereUniqueInput
  }

  /**
   * UserOnGroup updateMany
   */
  export type UserOnGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnGroups.
     */
    data: XOR<UserOnGroupUpdateManyMutationInput, UserOnGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserOnGroups to update
     */
    where?: UserOnGroupWhereInput
  }

  /**
   * UserOnGroup upsert
   */
  export type UserOnGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnGroup to update in case it exists.
     */
    where: UserOnGroupWhereUniqueInput
    /**
     * In case the UserOnGroup found by the `where` argument doesn't exist, create a new UserOnGroup with this data.
     */
    create: XOR<UserOnGroupCreateInput, UserOnGroupUncheckedCreateInput>
    /**
     * In case the UserOnGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnGroupUpdateInput, UserOnGroupUncheckedUpdateInput>
  }

  /**
   * UserOnGroup delete
   */
  export type UserOnGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    /**
     * Filter which UserOnGroup to delete.
     */
    where: UserOnGroupWhereUniqueInput
  }

  /**
   * UserOnGroup deleteMany
   */
  export type UserOnGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnGroups to delete
     */
    where?: UserOnGroupWhereInput
  }

  /**
   * UserOnGroup without action
   */
  export type UserOnGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activities?: boolean | Group$activitiesArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    invites?: boolean | Group$invitesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Group$activitiesArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    invites?: boolean | Group$invitesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      activities: Prisma.$ActivitiesPayload<ExtArgs>[]
      users: Prisma.$UserOnGroupPayload<ExtArgs>[]
      invites: Prisma.$InvitesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activities<T extends Group$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Group$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    invites<T extends Group$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Group$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }

  /**
   * Group.activities
   */
  export type Group$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    cursor?: ActivitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroup
     */
    select?: UserOnGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupInclude<ExtArgs> | null
    where?: UserOnGroupWhereInput
    orderBy?: UserOnGroupOrderByWithRelationInput | UserOnGroupOrderByWithRelationInput[]
    cursor?: UserOnGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnGroupScalarFieldEnum | UserOnGroupScalarFieldEnum[]
  }

  /**
   * Group.invites
   */
  export type Group$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    where?: InvitesWhereInput
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    cursor?: InvitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Invites
   */

  export type AggregateInvites = {
    _count: InvitesCountAggregateOutputType | null
    _min: InvitesMinAggregateOutputType | null
    _max: InvitesMaxAggregateOutputType | null
  }

  export type InvitesMinAggregateOutputType = {
    id: string | null
    role: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitesMaxAggregateOutputType = {
    id: string | null
    role: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitesCountAggregateOutputType = {
    id: number
    role: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitesMinAggregateInputType = {
    id?: true
    role?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitesMaxAggregateInputType = {
    id?: true
    role?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitesCountAggregateInputType = {
    id?: true
    role?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to aggregate.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InvitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitesMaxAggregateInputType
  }

  export type GetInvitesAggregateType<T extends InvitesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvites[P]>
      : GetScalarType<T[P], AggregateInvites[P]>
  }




  export type InvitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitesWhereInput
    orderBy?: InvitesOrderByWithAggregationInput | InvitesOrderByWithAggregationInput[]
    by: InvitesScalarFieldEnum[] | InvitesScalarFieldEnum
    having?: InvitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitesCountAggregateInputType | true
    _min?: InvitesMinAggregateInputType
    _max?: InvitesMaxAggregateInputType
  }

  export type InvitesGroupByOutputType = {
    id: string
    role: string
    groupId: string
    createdAt: Date
    updatedAt: Date
    _count: InvitesCountAggregateOutputType | null
    _min: InvitesMinAggregateOutputType | null
    _max: InvitesMaxAggregateOutputType | null
  }

  type GetInvitesGroupByPayload<T extends InvitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitesGroupByOutputType[P]>
            : GetScalarType<T[P], InvitesGroupByOutputType[P]>
        }
      >
    >


  export type InvitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type InvitesSelectScalar = {
    id?: boolean
    role?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type InvitesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }


  export type $InvitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invites"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      groupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invites"]>
    composites: {}
  }


  type InvitesGetPayload<S extends boolean | null | undefined | InvitesDefaultArgs> = $Result.GetResult<Prisma.$InvitesPayload, S>

  type InvitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvitesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvitesCountAggregateInputType | true
    }

  export interface InvitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invites'], meta: { name: 'Invites' } }
    /**
     * Find zero or one Invites that matches the filter.
     * @param {InvitesFindUniqueArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvitesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvitesFindUniqueArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invites that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvitesFindUniqueOrThrowArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvitesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesFindFirstArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvitesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesFindFirstArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesFindFirstOrThrowArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvitesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invites.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitesWithIdOnly = await prisma.invites.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvitesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invites.
     * @param {InvitesCreateArgs} args - Arguments to create a Invites.
     * @example
     * // Create one Invites
     * const Invites = await prisma.invites.create({
     *   data: {
     *     // ... data to create a Invites
     *   }
     * })
     * 
    **/
    create<T extends InvitesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitesCreateArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invites.
     * @param {InvitesCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invites = await prisma.invites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends InvitesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {InvitesCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invites = await prisma.invites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const invitesWithIdOnly = await prisma.invites.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends InvitesCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Invites.
     * @param {InvitesDeleteArgs} args - Arguments to delete one Invites.
     * @example
     * // Delete one Invites
     * const Invites = await prisma.invites.delete({
     *   where: {
     *     // ... filter to delete one Invites
     *   }
     * })
     * 
    **/
    delete<T extends InvitesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvitesDeleteArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invites.
     * @param {InvitesUpdateArgs} args - Arguments to update one Invites.
     * @example
     * // Update one Invites
     * const invites = await prisma.invites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvitesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitesUpdateArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invites.
     * @param {InvitesDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvitesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invites = await prisma.invites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvitesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvitesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invites.
     * @param {InvitesUpsertArgs} args - Arguments to update or create a Invites.
     * @example
     * // Update or create a Invites
     * const invites = await prisma.invites.upsert({
     *   create: {
     *     // ... data to create a Invites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invites we want to update
     *   }
     * })
    **/
    upsert<T extends InvitesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvitesUpsertArgs<ExtArgs>>
    ): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invites.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InvitesCountArgs>(
      args?: Subset<T, InvitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitesAggregateArgs>(args: Subset<T, InvitesAggregateArgs>): Prisma.PrismaPromise<GetInvitesAggregateType<T>>

    /**
     * Group by Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesGroupByArgs} args - Group by arguments.
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
      T extends InvitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitesGroupByArgs['orderBy'] }
        : { orderBy?: InvitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invites model
   */
  readonly fields: InvitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Invites model
   */ 
  interface InvitesFieldRefs {
    readonly id: FieldRef<"Invites", 'String'>
    readonly role: FieldRef<"Invites", 'String'>
    readonly groupId: FieldRef<"Invites", 'String'>
    readonly createdAt: FieldRef<"Invites", 'DateTime'>
    readonly updatedAt: FieldRef<"Invites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invites findUnique
   */
  export type InvitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites findUniqueOrThrow
   */
  export type InvitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites findFirst
   */
  export type InvitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Invites findFirstOrThrow
   */
  export type InvitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Invites findMany
   */
  export type InvitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Invites create
   */
  export type InvitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The data needed to create a Invites.
     */
    data: XOR<InvitesCreateInput, InvitesUncheckedCreateInput>
  }

  /**
   * Invites createMany
   */
  export type InvitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InvitesCreateManyInput | InvitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invites createManyAndReturn
   */
  export type InvitesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The data used to create many Invites.
     */
    data: InvitesCreateManyInput | InvitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invites update
   */
  export type InvitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The data needed to update a Invites.
     */
    data: XOR<InvitesUpdateInput, InvitesUncheckedUpdateInput>
    /**
     * Choose, which Invites to update.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites updateMany
   */
  export type InvitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InvitesWhereInput
  }

  /**
   * Invites upsert
   */
  export type InvitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The filter to search for the Invites to update in case it exists.
     */
    where: InvitesWhereUniqueInput
    /**
     * In case the Invites found by the `where` argument doesn't exist, create a new Invites with this data.
     */
    create: XOR<InvitesCreateInput, InvitesUncheckedCreateInput>
    /**
     * In case the Invites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitesUpdateInput, InvitesUncheckedUpdateInput>
  }

  /**
   * Invites delete
   */
  export type InvitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter which Invites to delete.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites deleteMany
   */
  export type InvitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InvitesWhereInput
  }

  /**
   * Invites without action
   */
  export type InvitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
  }


  /**
   * Model Activities
   */

  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: string | null
    goal: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: string | null
    goal: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    goal: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivitiesMinAggregateInputType = {
    id?: true
    goal?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    goal?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    goal?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to aggregate.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type ActivitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithAggregationInput | ActivitiesOrderByWithAggregationInput[]
    by: ActivitiesScalarFieldEnum[] | ActivitiesScalarFieldEnum
    having?: ActivitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }

  export type ActivitiesGroupByOutputType = {
    id: string
    goal: string
    groupId: string
    createdAt: Date
    updatedAt: Date
    _count: ActivitiesCountAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends ActivitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type ActivitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goal?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type ActivitiesSelectScalar = {
    id?: boolean
    goal?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ActivitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }


  export type $ActivitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activities"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      goal: string
      groupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activities"]>
    composites: {}
  }


  type ActivitiesGetPayload<S extends boolean | null | undefined | ActivitiesDefaultArgs> = $Result.GetResult<Prisma.$ActivitiesPayload, S>

  type ActivitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivitiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivitiesCountAggregateInputType | true
    }

  export interface ActivitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activities'], meta: { name: 'Activities' } }
    /**
     * Find zero or one Activities that matches the filter.
     * @param {ActivitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivitiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Activities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivitiesFindUniqueOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivitiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivitiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindFirstArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivitiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActivitiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Activities.
     * @param {ActivitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
    **/
    create<T extends ActivitiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesCreateArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivitiesCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ActivitiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivitiesCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ActivitiesCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Activities.
     * @param {ActivitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
    **/
    delete<T extends ActivitiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesDeleteArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Activities.
     * @param {ActivitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivitiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesUpdateArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivitiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivitiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activities.
     * @param {ActivitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
    **/
    upsert<T extends ActivitiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesUpsertArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivitiesCountArgs>(
      args?: Subset<T, ActivitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): Prisma.PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesGroupByArgs} args - Group by arguments.
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
      T extends ActivitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivitiesGroupByArgs['orderBy'] }
        : { orderBy?: ActivitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activities model
   */
  readonly fields: ActivitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Activities model
   */ 
  interface ActivitiesFieldRefs {
    readonly id: FieldRef<"Activities", 'String'>
    readonly goal: FieldRef<"Activities", 'String'>
    readonly groupId: FieldRef<"Activities", 'String'>
    readonly createdAt: FieldRef<"Activities", 'DateTime'>
    readonly updatedAt: FieldRef<"Activities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activities findUnique
   */
  export type ActivitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities findUniqueOrThrow
   */
  export type ActivitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities findFirst
   */
  export type ActivitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Activities findFirstOrThrow
   */
  export type ActivitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Activities findMany
   */
  export type ActivitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * Activities create
   */
  export type ActivitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Activities.
     */
    data: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
  }

  /**
   * Activities createMany
   */
  export type ActivitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivitiesCreateManyInput | ActivitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activities createManyAndReturn
   */
  export type ActivitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivitiesCreateManyInput | ActivitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activities update
   */
  export type ActivitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Activities.
     */
    data: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
    /**
     * Choose, which Activities to update.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities updateMany
   */
  export type ActivitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivitiesWhereInput
  }

  /**
   * Activities upsert
   */
  export type ActivitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Activities to update in case it exists.
     */
    where: ActivitiesWhereUniqueInput
    /**
     * In case the Activities found by the `where` argument doesn't exist, create a new Activities with this data.
     */
    create: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
    /**
     * In case the Activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
  }

  /**
   * Activities delete
   */
  export type ActivitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter which Activities to delete.
     */
    where: ActivitiesWhereUniqueInput
  }

  /**
   * Activities deleteMany
   */
  export type ActivitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivitiesWhereInput
  }

  /**
   * Activities without action
   */
  export type ActivitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivitiesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserOnGroupScalarFieldEnum: {
    userId: 'userId',
    groupId: 'groupId',
    role: 'role',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type UserOnGroupScalarFieldEnum = (typeof UserOnGroupScalarFieldEnum)[keyof typeof UserOnGroupScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const InvitesScalarFieldEnum: {
    id: 'id',
    role: 'role',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitesScalarFieldEnum = (typeof InvitesScalarFieldEnum)[keyof typeof InvitesScalarFieldEnum]


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    goal: 'goal',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groups?: UserOnGroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: UserOnGroupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groups?: UserOnGroupListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserOnGroupWhereInput = {
    AND?: UserOnGroupWhereInput | UserOnGroupWhereInput[]
    OR?: UserOnGroupWhereInput[]
    NOT?: UserOnGroupWhereInput | UserOnGroupWhereInput[]
    userId?: StringFilter<"UserOnGroup"> | string
    groupId?: StringFilter<"UserOnGroup"> | string
    role?: StringFilter<"UserOnGroup"> | string
    assignedAt?: DateTimeFilter<"UserOnGroup"> | Date | string
    assignedBy?: StringFilter<"UserOnGroup"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type UserOnGroupOrderByWithRelationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type UserOnGroupWhereUniqueInput = Prisma.AtLeast<{
    userId_groupId?: UserOnGroupUserIdGroupIdCompoundUniqueInput
    AND?: UserOnGroupWhereInput | UserOnGroupWhereInput[]
    OR?: UserOnGroupWhereInput[]
    NOT?: UserOnGroupWhereInput | UserOnGroupWhereInput[]
    userId?: StringFilter<"UserOnGroup"> | string
    groupId?: StringFilter<"UserOnGroup"> | string
    role?: StringFilter<"UserOnGroup"> | string
    assignedAt?: DateTimeFilter<"UserOnGroup"> | Date | string
    assignedBy?: StringFilter<"UserOnGroup"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }, "userId_groupId">

  export type UserOnGroupOrderByWithAggregationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: UserOnGroupCountOrderByAggregateInput
    _max?: UserOnGroupMaxOrderByAggregateInput
    _min?: UserOnGroupMinOrderByAggregateInput
  }

  export type UserOnGroupScalarWhereWithAggregatesInput = {
    AND?: UserOnGroupScalarWhereWithAggregatesInput | UserOnGroupScalarWhereWithAggregatesInput[]
    OR?: UserOnGroupScalarWhereWithAggregatesInput[]
    NOT?: UserOnGroupScalarWhereWithAggregatesInput | UserOnGroupScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserOnGroup"> | string
    groupId?: StringWithAggregatesFilter<"UserOnGroup"> | string
    role?: StringWithAggregatesFilter<"UserOnGroup"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UserOnGroup"> | Date | string
    assignedBy?: StringWithAggregatesFilter<"UserOnGroup"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    activities?: ActivitiesListRelationFilter
    users?: UserOnGroupListRelationFilter
    invites?: InvitesListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activities?: ActivitiesOrderByRelationAggregateInput
    users?: UserOnGroupOrderByRelationAggregateInput
    invites?: InvitesOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    activities?: ActivitiesListRelationFilter
    users?: UserOnGroupListRelationFilter
    invites?: InvitesListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type InvitesWhereInput = {
    AND?: InvitesWhereInput | InvitesWhereInput[]
    OR?: InvitesWhereInput[]
    NOT?: InvitesWhereInput | InvitesWhereInput[]
    id?: StringFilter<"Invites"> | string
    role?: StringFilter<"Invites"> | string
    groupId?: StringFilter<"Invites"> | string
    createdAt?: DateTimeFilter<"Invites"> | Date | string
    updatedAt?: DateTimeFilter<"Invites"> | Date | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type InvitesOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type InvitesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitesWhereInput | InvitesWhereInput[]
    OR?: InvitesWhereInput[]
    NOT?: InvitesWhereInput | InvitesWhereInput[]
    role?: StringFilter<"Invites"> | string
    groupId?: StringFilter<"Invites"> | string
    createdAt?: DateTimeFilter<"Invites"> | Date | string
    updatedAt?: DateTimeFilter<"Invites"> | Date | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }, "id">

  export type InvitesOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitesCountOrderByAggregateInput
    _max?: InvitesMaxOrderByAggregateInput
    _min?: InvitesMinOrderByAggregateInput
  }

  export type InvitesScalarWhereWithAggregatesInput = {
    AND?: InvitesScalarWhereWithAggregatesInput | InvitesScalarWhereWithAggregatesInput[]
    OR?: InvitesScalarWhereWithAggregatesInput[]
    NOT?: InvitesScalarWhereWithAggregatesInput | InvitesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invites"> | string
    role?: StringWithAggregatesFilter<"Invites"> | string
    groupId?: StringWithAggregatesFilter<"Invites"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invites"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invites"> | Date | string
  }

  export type ActivitiesWhereInput = {
    AND?: ActivitiesWhereInput | ActivitiesWhereInput[]
    OR?: ActivitiesWhereInput[]
    NOT?: ActivitiesWhereInput | ActivitiesWhereInput[]
    id?: StringFilter<"Activities"> | string
    goal?: StringFilter<"Activities"> | string
    groupId?: StringFilter<"Activities"> | string
    createdAt?: DateTimeFilter<"Activities"> | Date | string
    updatedAt?: DateTimeFilter<"Activities"> | Date | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type ActivitiesOrderByWithRelationInput = {
    id?: SortOrder
    goal?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type ActivitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId?: string
    AND?: ActivitiesWhereInput | ActivitiesWhereInput[]
    OR?: ActivitiesWhereInput[]
    NOT?: ActivitiesWhereInput | ActivitiesWhereInput[]
    goal?: StringFilter<"Activities"> | string
    createdAt?: DateTimeFilter<"Activities"> | Date | string
    updatedAt?: DateTimeFilter<"Activities"> | Date | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }, "id" | "groupId">

  export type ActivitiesOrderByWithAggregationInput = {
    id?: SortOrder
    goal?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivitiesCountOrderByAggregateInput
    _max?: ActivitiesMaxOrderByAggregateInput
    _min?: ActivitiesMinOrderByAggregateInput
  }

  export type ActivitiesScalarWhereWithAggregatesInput = {
    AND?: ActivitiesScalarWhereWithAggregatesInput | ActivitiesScalarWhereWithAggregatesInput[]
    OR?: ActivitiesScalarWhereWithAggregatesInput[]
    NOT?: ActivitiesScalarWhereWithAggregatesInput | ActivitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activities"> | string
    goal?: StringWithAggregatesFilter<"Activities"> | string
    groupId?: StringWithAggregatesFilter<"Activities"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Activities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activities"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: UserOnGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: UserOnGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: UserOnGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: UserOnGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupCreateInput = {
    role: string
    assignedAt?: Date | string
    assignedBy: string
    user: UserCreateNestedOneWithoutGroupsInput
    group: GroupCreateNestedOneWithoutUsersInput
  }

  export type UserOnGroupUncheckedCreateInput = {
    userId: string
    groupId: string
    role: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserOnGroupUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnGroupUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnGroupCreateManyInput = {
    userId: string
    groupId: string
    role: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserOnGroupUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnGroupUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivitiesCreateNestedManyWithoutGroupInput
    users?: UserOnGroupCreateNestedManyWithoutGroupInput
    invites?: InvitesCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivitiesUncheckedCreateNestedManyWithoutGroupInput
    users?: UserOnGroupUncheckedCreateNestedManyWithoutGroupInput
    invites?: InvitesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivitiesUpdateManyWithoutGroupNestedInput
    users?: UserOnGroupUpdateManyWithoutGroupNestedInput
    invites?: InvitesUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivitiesUncheckedUpdateManyWithoutGroupNestedInput
    users?: UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput
    invites?: InvitesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitesCreateInput = {
    id?: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutInvitesInput
  }

  export type InvitesUncheckedCreateInput = {
    id?: string
    role: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InvitesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitesCreateManyInput = {
    id?: string
    role: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesCreateInput = {
    id?: string
    goal: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutActivitiesInput
  }

  export type ActivitiesUncheckedCreateInput = {
    id?: string
    goal: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesCreateManyInput = {
    id?: string
    goal: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserOnGroupListRelationFilter = {
    every?: UserOnGroupWhereInput
    some?: UserOnGroupWhereInput
    none?: UserOnGroupWhereInput
  }

  export type UserOnGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type UserOnGroupUserIdGroupIdCompoundUniqueInput = {
    userId: string
    groupId: string
  }

  export type UserOnGroupCountOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserOnGroupMaxOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserOnGroupMinOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
    role?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type ActivitiesListRelationFilter = {
    every?: ActivitiesWhereInput
    some?: ActivitiesWhereInput
    none?: ActivitiesWhereInput
  }

  export type InvitesListRelationFilter = {
    every?: InvitesWhereInput
    some?: InvitesWhereInput
    none?: InvitesWhereInput
  }

  export type ActivitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitesCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitesMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitesMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivitiesCountOrderByAggregateInput = {
    id?: SortOrder
    goal?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    goal?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivitiesMinOrderByAggregateInput = {
    id?: SortOrder
    goal?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnGroupCreateWithoutUserInput, UserOnGroupUncheckedCreateWithoutUserInput> | UserOnGroupCreateWithoutUserInput[] | UserOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutUserInput | UserOnGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserOnGroupCreateManyUserInputEnvelope
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
  }

  export type UserOnGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnGroupCreateWithoutUserInput, UserOnGroupUncheckedCreateWithoutUserInput> | UserOnGroupCreateWithoutUserInput[] | UserOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutUserInput | UserOnGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserOnGroupCreateManyUserInputEnvelope
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserOnGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnGroupCreateWithoutUserInput, UserOnGroupUncheckedCreateWithoutUserInput> | UserOnGroupCreateWithoutUserInput[] | UserOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutUserInput | UserOnGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserOnGroupUpsertWithWhereUniqueWithoutUserInput | UserOnGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnGroupCreateManyUserInputEnvelope
    set?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    disconnect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    delete?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    update?: UserOnGroupUpdateWithWhereUniqueWithoutUserInput | UserOnGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnGroupUpdateManyWithWhereWithoutUserInput | UserOnGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnGroupScalarWhereInput | UserOnGroupScalarWhereInput[]
  }

  export type UserOnGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnGroupCreateWithoutUserInput, UserOnGroupUncheckedCreateWithoutUserInput> | UserOnGroupCreateWithoutUserInput[] | UserOnGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutUserInput | UserOnGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserOnGroupUpsertWithWhereUniqueWithoutUserInput | UserOnGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnGroupCreateManyUserInputEnvelope
    set?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    disconnect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    delete?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    update?: UserOnGroupUpdateWithWhereUniqueWithoutUserInput | UserOnGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnGroupUpdateManyWithWhereWithoutUserInput | UserOnGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnGroupScalarWhereInput | UserOnGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type ActivitiesCreateNestedManyWithoutGroupInput = {
    create?: XOR<ActivitiesCreateWithoutGroupInput, ActivitiesUncheckedCreateWithoutGroupInput> | ActivitiesCreateWithoutGroupInput[] | ActivitiesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutGroupInput | ActivitiesCreateOrConnectWithoutGroupInput[]
    createMany?: ActivitiesCreateManyGroupInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type UserOnGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserOnGroupCreateWithoutGroupInput, UserOnGroupUncheckedCreateWithoutGroupInput> | UserOnGroupCreateWithoutGroupInput[] | UserOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutGroupInput | UserOnGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UserOnGroupCreateManyGroupInputEnvelope
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
  }

  export type InvitesCreateNestedManyWithoutGroupInput = {
    create?: XOR<InvitesCreateWithoutGroupInput, InvitesUncheckedCreateWithoutGroupInput> | InvitesCreateWithoutGroupInput[] | InvitesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGroupInput | InvitesCreateOrConnectWithoutGroupInput[]
    createMany?: InvitesCreateManyGroupInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type ActivitiesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ActivitiesCreateWithoutGroupInput, ActivitiesUncheckedCreateWithoutGroupInput> | ActivitiesCreateWithoutGroupInput[] | ActivitiesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutGroupInput | ActivitiesCreateOrConnectWithoutGroupInput[]
    createMany?: ActivitiesCreateManyGroupInputEnvelope
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
  }

  export type UserOnGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserOnGroupCreateWithoutGroupInput, UserOnGroupUncheckedCreateWithoutGroupInput> | UserOnGroupCreateWithoutGroupInput[] | UserOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutGroupInput | UserOnGroupCreateOrConnectWithoutGroupInput[]
    createMany?: UserOnGroupCreateManyGroupInputEnvelope
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
  }

  export type InvitesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<InvitesCreateWithoutGroupInput, InvitesUncheckedCreateWithoutGroupInput> | InvitesCreateWithoutGroupInput[] | InvitesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGroupInput | InvitesCreateOrConnectWithoutGroupInput[]
    createMany?: InvitesCreateManyGroupInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type ActivitiesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ActivitiesCreateWithoutGroupInput, ActivitiesUncheckedCreateWithoutGroupInput> | ActivitiesCreateWithoutGroupInput[] | ActivitiesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutGroupInput | ActivitiesCreateOrConnectWithoutGroupInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutGroupInput | ActivitiesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ActivitiesCreateManyGroupInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutGroupInput | ActivitiesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutGroupInput | ActivitiesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type UserOnGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserOnGroupCreateWithoutGroupInput, UserOnGroupUncheckedCreateWithoutGroupInput> | UserOnGroupCreateWithoutGroupInput[] | UserOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutGroupInput | UserOnGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UserOnGroupUpsertWithWhereUniqueWithoutGroupInput | UserOnGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserOnGroupCreateManyGroupInputEnvelope
    set?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    disconnect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    delete?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    update?: UserOnGroupUpdateWithWhereUniqueWithoutGroupInput | UserOnGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserOnGroupUpdateManyWithWhereWithoutGroupInput | UserOnGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserOnGroupScalarWhereInput | UserOnGroupScalarWhereInput[]
  }

  export type InvitesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<InvitesCreateWithoutGroupInput, InvitesUncheckedCreateWithoutGroupInput> | InvitesCreateWithoutGroupInput[] | InvitesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGroupInput | InvitesCreateOrConnectWithoutGroupInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutGroupInput | InvitesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: InvitesCreateManyGroupInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutGroupInput | InvitesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutGroupInput | InvitesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type ActivitiesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ActivitiesCreateWithoutGroupInput, ActivitiesUncheckedCreateWithoutGroupInput> | ActivitiesCreateWithoutGroupInput[] | ActivitiesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ActivitiesCreateOrConnectWithoutGroupInput | ActivitiesCreateOrConnectWithoutGroupInput[]
    upsert?: ActivitiesUpsertWithWhereUniqueWithoutGroupInput | ActivitiesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ActivitiesCreateManyGroupInputEnvelope
    set?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    disconnect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    delete?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    connect?: ActivitiesWhereUniqueInput | ActivitiesWhereUniqueInput[]
    update?: ActivitiesUpdateWithWhereUniqueWithoutGroupInput | ActivitiesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ActivitiesUpdateManyWithWhereWithoutGroupInput | ActivitiesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
  }

  export type UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserOnGroupCreateWithoutGroupInput, UserOnGroupUncheckedCreateWithoutGroupInput> | UserOnGroupCreateWithoutGroupInput[] | UserOnGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserOnGroupCreateOrConnectWithoutGroupInput | UserOnGroupCreateOrConnectWithoutGroupInput[]
    upsert?: UserOnGroupUpsertWithWhereUniqueWithoutGroupInput | UserOnGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserOnGroupCreateManyGroupInputEnvelope
    set?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    disconnect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    delete?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    connect?: UserOnGroupWhereUniqueInput | UserOnGroupWhereUniqueInput[]
    update?: UserOnGroupUpdateWithWhereUniqueWithoutGroupInput | UserOnGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserOnGroupUpdateManyWithWhereWithoutGroupInput | UserOnGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserOnGroupScalarWhereInput | UserOnGroupScalarWhereInput[]
  }

  export type InvitesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<InvitesCreateWithoutGroupInput, InvitesUncheckedCreateWithoutGroupInput> | InvitesCreateWithoutGroupInput[] | InvitesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGroupInput | InvitesCreateOrConnectWithoutGroupInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutGroupInput | InvitesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: InvitesCreateManyGroupInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutGroupInput | InvitesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutGroupInput | InvitesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutInvitesInput = {
    create?: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitesInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitesInput
    upsert?: GroupUpsertWithoutInvitesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutInvitesInput, GroupUpdateWithoutInvitesInput>, GroupUncheckedUpdateWithoutInvitesInput>
  }

  export type GroupCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutActivitiesInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutActivitiesInput
    upsert?: GroupUpsertWithoutActivitiesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutActivitiesInput, GroupUpdateWithoutActivitiesInput>, GroupUncheckedUpdateWithoutActivitiesInput>
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

  export type UserOnGroupCreateWithoutUserInput = {
    role: string
    assignedAt?: Date | string
    assignedBy: string
    group: GroupCreateNestedOneWithoutUsersInput
  }

  export type UserOnGroupUncheckedCreateWithoutUserInput = {
    groupId: string
    role: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserOnGroupCreateOrConnectWithoutUserInput = {
    where: UserOnGroupWhereUniqueInput
    create: XOR<UserOnGroupCreateWithoutUserInput, UserOnGroupUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupCreateManyUserInputEnvelope = {
    data: UserOnGroupCreateManyUserInput | UserOnGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupWhereUniqueInput
    update: XOR<UserOnGroupUpdateWithoutUserInput, UserOnGroupUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnGroupCreateWithoutUserInput, UserOnGroupUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupWhereUniqueInput
    data: XOR<UserOnGroupUpdateWithoutUserInput, UserOnGroupUncheckedUpdateWithoutUserInput>
  }

  export type UserOnGroupUpdateManyWithWhereWithoutUserInput = {
    where: UserOnGroupScalarWhereInput
    data: XOR<UserOnGroupUpdateManyMutationInput, UserOnGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnGroupScalarWhereInput = {
    AND?: UserOnGroupScalarWhereInput | UserOnGroupScalarWhereInput[]
    OR?: UserOnGroupScalarWhereInput[]
    NOT?: UserOnGroupScalarWhereInput | UserOnGroupScalarWhereInput[]
    userId?: StringFilter<"UserOnGroup"> | string
    groupId?: StringFilter<"UserOnGroup"> | string
    role?: StringFilter<"UserOnGroup"> | string
    assignedAt?: DateTimeFilter<"UserOnGroup"> | Date | string
    assignedBy?: StringFilter<"UserOnGroup"> | string
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivitiesCreateNestedManyWithoutGroupInput
    invites?: InvitesCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivitiesUncheckedCreateNestedManyWithoutGroupInput
    invites?: InvitesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivitiesUpdateManyWithoutGroupNestedInput
    invites?: InvitesUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivitiesUncheckedUpdateManyWithoutGroupNestedInput
    invites?: InvitesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ActivitiesCreateWithoutGroupInput = {
    id?: string
    goal: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivitiesUncheckedCreateWithoutGroupInput = {
    id?: string
    goal: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivitiesCreateOrConnectWithoutGroupInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutGroupInput, ActivitiesUncheckedCreateWithoutGroupInput>
  }

  export type ActivitiesCreateManyGroupInputEnvelope = {
    data: ActivitiesCreateManyGroupInput | ActivitiesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserOnGroupCreateWithoutGroupInput = {
    role: string
    assignedAt?: Date | string
    assignedBy: string
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type UserOnGroupUncheckedCreateWithoutGroupInput = {
    userId: string
    role: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserOnGroupCreateOrConnectWithoutGroupInput = {
    where: UserOnGroupWhereUniqueInput
    create: XOR<UserOnGroupCreateWithoutGroupInput, UserOnGroupUncheckedCreateWithoutGroupInput>
  }

  export type UserOnGroupCreateManyGroupInputEnvelope = {
    data: UserOnGroupCreateManyGroupInput | UserOnGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type InvitesCreateWithoutGroupInput = {
    id?: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitesUncheckedCreateWithoutGroupInput = {
    id?: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitesCreateOrConnectWithoutGroupInput = {
    where: InvitesWhereUniqueInput
    create: XOR<InvitesCreateWithoutGroupInput, InvitesUncheckedCreateWithoutGroupInput>
  }

  export type InvitesCreateManyGroupInputEnvelope = {
    data: InvitesCreateManyGroupInput | InvitesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ActivitiesUpsertWithWhereUniqueWithoutGroupInput = {
    where: ActivitiesWhereUniqueInput
    update: XOR<ActivitiesUpdateWithoutGroupInput, ActivitiesUncheckedUpdateWithoutGroupInput>
    create: XOR<ActivitiesCreateWithoutGroupInput, ActivitiesUncheckedCreateWithoutGroupInput>
  }

  export type ActivitiesUpdateWithWhereUniqueWithoutGroupInput = {
    where: ActivitiesWhereUniqueInput
    data: XOR<ActivitiesUpdateWithoutGroupInput, ActivitiesUncheckedUpdateWithoutGroupInput>
  }

  export type ActivitiesUpdateManyWithWhereWithoutGroupInput = {
    where: ActivitiesScalarWhereInput
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyWithoutGroupInput>
  }

  export type ActivitiesScalarWhereInput = {
    AND?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
    OR?: ActivitiesScalarWhereInput[]
    NOT?: ActivitiesScalarWhereInput | ActivitiesScalarWhereInput[]
    id?: StringFilter<"Activities"> | string
    goal?: StringFilter<"Activities"> | string
    groupId?: StringFilter<"Activities"> | string
    createdAt?: DateTimeFilter<"Activities"> | Date | string
    updatedAt?: DateTimeFilter<"Activities"> | Date | string
  }

  export type UserOnGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserOnGroupWhereUniqueInput
    update: XOR<UserOnGroupUpdateWithoutGroupInput, UserOnGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<UserOnGroupCreateWithoutGroupInput, UserOnGroupUncheckedCreateWithoutGroupInput>
  }

  export type UserOnGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserOnGroupWhereUniqueInput
    data: XOR<UserOnGroupUpdateWithoutGroupInput, UserOnGroupUncheckedUpdateWithoutGroupInput>
  }

  export type UserOnGroupUpdateManyWithWhereWithoutGroupInput = {
    where: UserOnGroupScalarWhereInput
    data: XOR<UserOnGroupUpdateManyMutationInput, UserOnGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type InvitesUpsertWithWhereUniqueWithoutGroupInput = {
    where: InvitesWhereUniqueInput
    update: XOR<InvitesUpdateWithoutGroupInput, InvitesUncheckedUpdateWithoutGroupInput>
    create: XOR<InvitesCreateWithoutGroupInput, InvitesUncheckedCreateWithoutGroupInput>
  }

  export type InvitesUpdateWithWhereUniqueWithoutGroupInput = {
    where: InvitesWhereUniqueInput
    data: XOR<InvitesUpdateWithoutGroupInput, InvitesUncheckedUpdateWithoutGroupInput>
  }

  export type InvitesUpdateManyWithWhereWithoutGroupInput = {
    where: InvitesScalarWhereInput
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyWithoutGroupInput>
  }

  export type InvitesScalarWhereInput = {
    AND?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
    OR?: InvitesScalarWhereInput[]
    NOT?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
    id?: StringFilter<"Invites"> | string
    role?: StringFilter<"Invites"> | string
    groupId?: StringFilter<"Invites"> | string
    createdAt?: DateTimeFilter<"Invites"> | Date | string
    updatedAt?: DateTimeFilter<"Invites"> | Date | string
  }

  export type GroupCreateWithoutInvitesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivitiesCreateNestedManyWithoutGroupInput
    users?: UserOnGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutInvitesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivitiesUncheckedCreateNestedManyWithoutGroupInput
    users?: UserOnGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutInvitesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
  }

  export type GroupUpsertWithoutInvitesInput = {
    update: XOR<GroupUpdateWithoutInvitesInput, GroupUncheckedUpdateWithoutInvitesInput>
    create: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutInvitesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutInvitesInput, GroupUncheckedUpdateWithoutInvitesInput>
  }

  export type GroupUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivitiesUpdateManyWithoutGroupNestedInput
    users?: UserOnGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivitiesUncheckedUpdateManyWithoutGroupNestedInput
    users?: UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutActivitiesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOnGroupCreateNestedManyWithoutGroupInput
    invites?: InvitesCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOnGroupUncheckedCreateNestedManyWithoutGroupInput
    invites?: InvitesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutActivitiesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
  }

  export type GroupUpsertWithoutActivitiesInput = {
    update: XOR<GroupUpdateWithoutActivitiesInput, GroupUncheckedUpdateWithoutActivitiesInput>
    create: XOR<GroupCreateWithoutActivitiesInput, GroupUncheckedCreateWithoutActivitiesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutActivitiesInput, GroupUncheckedUpdateWithoutActivitiesInput>
  }

  export type GroupUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnGroupUpdateManyWithoutGroupNestedInput
    invites?: InvitesUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnGroupUncheckedUpdateManyWithoutGroupNestedInput
    invites?: InvitesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserOnGroupCreateManyUserInput = {
    groupId: string
    role: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserOnGroupUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnGroupUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnGroupUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ActivitiesCreateManyGroupInput = {
    id?: string
    goal: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupCreateManyGroupInput = {
    userId: string
    role: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type InvitesCreateManyGroupInput = {
    id?: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivitiesUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivitiesUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupUpdateWithoutGroupInput = {
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type UserOnGroupUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnGroupUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type InvitesUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitesUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitesUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserOnGroupDefaultArgs instead
     */
    export type UserOnGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserOnGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvitesDefaultArgs instead
     */
    export type InvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvitesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivitiesDefaultArgs instead
     */
    export type ActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivitiesDefaultArgs<ExtArgs>

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