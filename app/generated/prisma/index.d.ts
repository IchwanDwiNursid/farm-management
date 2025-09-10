
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
 * Model Ayam
 * 
 */
export type Ayam = $Result.DefaultSelection<Prisma.$AyamPayload>
/**
 * Model Vaksin
 * 
 */
export type Vaksin = $Result.DefaultSelection<Prisma.$VaksinPayload>
/**
 * Model Pakan
 * 
 */
export type Pakan = $Result.DefaultSelection<Prisma.$PakanPayload>
/**
 * Model Obat
 * 
 */
export type Obat = $Result.DefaultSelection<Prisma.$ObatPayload>
/**
 * Model jadwal_vaksinasi
 * 
 */
export type jadwal_vaksinasi = $Result.DefaultSelection<Prisma.$jadwal_vaksinasiPayload>
/**
 * Model penyakit
 * 
 */
export type penyakit = $Result.DefaultSelection<Prisma.$penyakitPayload>
/**
 * Model mortalitas
 * 
 */
export type mortalitas = $Result.DefaultSelection<Prisma.$mortalitasPayload>
/**
 * Model panen
 * 
 */
export type panen = $Result.DefaultSelection<Prisma.$panenPayload>
/**
 * Model belanja
 * 
 */
export type belanja = $Result.DefaultSelection<Prisma.$belanjaPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Jenis: {
  telur: 'telur',
  daging: 'daging'
};

export type Jenis = (typeof Jenis)[keyof typeof Jenis]


export const Tindakan: {
  jual: 'jual',
  konsumsi: 'konsumsi'
};

export type Tindakan = (typeof Tindakan)[keyof typeof Tindakan]

}

export type Jenis = $Enums.Jenis

export const Jenis: typeof $Enums.Jenis

export type Tindakan = $Enums.Tindakan

export const Tindakan: typeof $Enums.Tindakan

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ayam`: Exposes CRUD operations for the **Ayam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ayams
    * const ayams = await prisma.ayam.findMany()
    * ```
    */
  get ayam(): Prisma.AyamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaksin`: Exposes CRUD operations for the **Vaksin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vaksins
    * const vaksins = await prisma.vaksin.findMany()
    * ```
    */
  get vaksin(): Prisma.VaksinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pakan`: Exposes CRUD operations for the **Pakan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pakans
    * const pakans = await prisma.pakan.findMany()
    * ```
    */
  get pakan(): Prisma.PakanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obat`: Exposes CRUD operations for the **Obat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obats
    * const obats = await prisma.obat.findMany()
    * ```
    */
  get obat(): Prisma.ObatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal_vaksinasi`: Exposes CRUD operations for the **jadwal_vaksinasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwal_vaksinasis
    * const jadwal_vaksinasis = await prisma.jadwal_vaksinasi.findMany()
    * ```
    */
  get jadwal_vaksinasi(): Prisma.jadwal_vaksinasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penyakit`: Exposes CRUD operations for the **penyakit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penyakits
    * const penyakits = await prisma.penyakit.findMany()
    * ```
    */
  get penyakit(): Prisma.penyakitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mortalitas`: Exposes CRUD operations for the **mortalitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mortalitas
    * const mortalitas = await prisma.mortalitas.findMany()
    * ```
    */
  get mortalitas(): Prisma.mortalitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panen`: Exposes CRUD operations for the **panen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Panens
    * const panens = await prisma.panen.findMany()
    * ```
    */
  get panen(): Prisma.panenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.belanja`: Exposes CRUD operations for the **belanja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Belanjas
    * const belanjas = await prisma.belanja.findMany()
    * ```
    */
  get belanja(): Prisma.belanjaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Ayam: 'Ayam',
    Vaksin: 'Vaksin',
    Pakan: 'Pakan',
    Obat: 'Obat',
    jadwal_vaksinasi: 'jadwal_vaksinasi',
    penyakit: 'penyakit',
    mortalitas: 'mortalitas',
    panen: 'panen',
    belanja: 'belanja',
    notifications: 'notifications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ayam" | "vaksin" | "pakan" | "obat" | "jadwal_vaksinasi" | "penyakit" | "mortalitas" | "panen" | "belanja" | "notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ayam: {
        payload: Prisma.$AyamPayload<ExtArgs>
        fields: Prisma.AyamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AyamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AyamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>
          }
          findFirst: {
            args: Prisma.AyamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AyamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>
          }
          findMany: {
            args: Prisma.AyamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>[]
          }
          create: {
            args: Prisma.AyamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>
          }
          createMany: {
            args: Prisma.AyamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AyamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>
          }
          update: {
            args: Prisma.AyamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>
          }
          deleteMany: {
            args: Prisma.AyamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AyamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AyamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AyamPayload>
          }
          aggregate: {
            args: Prisma.AyamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAyam>
          }
          groupBy: {
            args: Prisma.AyamGroupByArgs<ExtArgs>
            result: $Utils.Optional<AyamGroupByOutputType>[]
          }
          count: {
            args: Prisma.AyamCountArgs<ExtArgs>
            result: $Utils.Optional<AyamCountAggregateOutputType> | number
          }
        }
      }
      Vaksin: {
        payload: Prisma.$VaksinPayload<ExtArgs>
        fields: Prisma.VaksinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaksinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaksinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>
          }
          findFirst: {
            args: Prisma.VaksinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaksinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>
          }
          findMany: {
            args: Prisma.VaksinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>[]
          }
          create: {
            args: Prisma.VaksinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>
          }
          createMany: {
            args: Prisma.VaksinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VaksinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>
          }
          update: {
            args: Prisma.VaksinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>
          }
          deleteMany: {
            args: Prisma.VaksinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaksinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VaksinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaksinPayload>
          }
          aggregate: {
            args: Prisma.VaksinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaksin>
          }
          groupBy: {
            args: Prisma.VaksinGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaksinGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaksinCountArgs<ExtArgs>
            result: $Utils.Optional<VaksinCountAggregateOutputType> | number
          }
        }
      }
      Pakan: {
        payload: Prisma.$PakanPayload<ExtArgs>
        fields: Prisma.PakanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PakanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PakanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>
          }
          findFirst: {
            args: Prisma.PakanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PakanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>
          }
          findMany: {
            args: Prisma.PakanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>[]
          }
          create: {
            args: Prisma.PakanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>
          }
          createMany: {
            args: Prisma.PakanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PakanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>
          }
          update: {
            args: Prisma.PakanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>
          }
          deleteMany: {
            args: Prisma.PakanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PakanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PakanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PakanPayload>
          }
          aggregate: {
            args: Prisma.PakanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePakan>
          }
          groupBy: {
            args: Prisma.PakanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PakanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PakanCountArgs<ExtArgs>
            result: $Utils.Optional<PakanCountAggregateOutputType> | number
          }
        }
      }
      Obat: {
        payload: Prisma.$ObatPayload<ExtArgs>
        fields: Prisma.ObatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          findFirst: {
            args: Prisma.ObatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          findMany: {
            args: Prisma.ObatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          create: {
            args: Prisma.ObatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          createMany: {
            args: Prisma.ObatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ObatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          update: {
            args: Prisma.ObatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          deleteMany: {
            args: Prisma.ObatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          aggregate: {
            args: Prisma.ObatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObat>
          }
          groupBy: {
            args: Prisma.ObatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObatCountArgs<ExtArgs>
            result: $Utils.Optional<ObatCountAggregateOutputType> | number
          }
        }
      }
      jadwal_vaksinasi: {
        payload: Prisma.$jadwal_vaksinasiPayload<ExtArgs>
        fields: Prisma.jadwal_vaksinasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jadwal_vaksinasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jadwal_vaksinasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>
          }
          findFirst: {
            args: Prisma.jadwal_vaksinasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jadwal_vaksinasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>
          }
          findMany: {
            args: Prisma.jadwal_vaksinasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>[]
          }
          create: {
            args: Prisma.jadwal_vaksinasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>
          }
          createMany: {
            args: Prisma.jadwal_vaksinasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jadwal_vaksinasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>
          }
          update: {
            args: Prisma.jadwal_vaksinasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>
          }
          deleteMany: {
            args: Prisma.jadwal_vaksinasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jadwal_vaksinasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jadwal_vaksinasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_vaksinasiPayload>
          }
          aggregate: {
            args: Prisma.Jadwal_vaksinasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal_vaksinasi>
          }
          groupBy: {
            args: Prisma.jadwal_vaksinasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jadwal_vaksinasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.jadwal_vaksinasiCountArgs<ExtArgs>
            result: $Utils.Optional<Jadwal_vaksinasiCountAggregateOutputType> | number
          }
        }
      }
      penyakit: {
        payload: Prisma.$penyakitPayload<ExtArgs>
        fields: Prisma.penyakitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penyakitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penyakitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>
          }
          findFirst: {
            args: Prisma.penyakitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penyakitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>
          }
          findMany: {
            args: Prisma.penyakitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>[]
          }
          create: {
            args: Prisma.penyakitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>
          }
          createMany: {
            args: Prisma.penyakitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.penyakitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>
          }
          update: {
            args: Prisma.penyakitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>
          }
          deleteMany: {
            args: Prisma.penyakitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penyakitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.penyakitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penyakitPayload>
          }
          aggregate: {
            args: Prisma.PenyakitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenyakit>
          }
          groupBy: {
            args: Prisma.penyakitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenyakitGroupByOutputType>[]
          }
          count: {
            args: Prisma.penyakitCountArgs<ExtArgs>
            result: $Utils.Optional<PenyakitCountAggregateOutputType> | number
          }
        }
      }
      mortalitas: {
        payload: Prisma.$mortalitasPayload<ExtArgs>
        fields: Prisma.mortalitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mortalitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mortalitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>
          }
          findFirst: {
            args: Prisma.mortalitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mortalitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>
          }
          findMany: {
            args: Prisma.mortalitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>[]
          }
          create: {
            args: Prisma.mortalitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>
          }
          createMany: {
            args: Prisma.mortalitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mortalitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>
          }
          update: {
            args: Prisma.mortalitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>
          }
          deleteMany: {
            args: Prisma.mortalitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mortalitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mortalitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mortalitasPayload>
          }
          aggregate: {
            args: Prisma.MortalitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMortalitas>
          }
          groupBy: {
            args: Prisma.mortalitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MortalitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.mortalitasCountArgs<ExtArgs>
            result: $Utils.Optional<MortalitasCountAggregateOutputType> | number
          }
        }
      }
      panen: {
        payload: Prisma.$panenPayload<ExtArgs>
        fields: Prisma.panenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.panenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.panenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>
          }
          findFirst: {
            args: Prisma.panenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.panenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>
          }
          findMany: {
            args: Prisma.panenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>[]
          }
          create: {
            args: Prisma.panenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>
          }
          createMany: {
            args: Prisma.panenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.panenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>
          }
          update: {
            args: Prisma.panenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>
          }
          deleteMany: {
            args: Prisma.panenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.panenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.panenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$panenPayload>
          }
          aggregate: {
            args: Prisma.PanenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanen>
          }
          groupBy: {
            args: Prisma.panenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanenGroupByOutputType>[]
          }
          count: {
            args: Prisma.panenCountArgs<ExtArgs>
            result: $Utils.Optional<PanenCountAggregateOutputType> | number
          }
        }
      }
      belanja: {
        payload: Prisma.$belanjaPayload<ExtArgs>
        fields: Prisma.belanjaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.belanjaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.belanjaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>
          }
          findFirst: {
            args: Prisma.belanjaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.belanjaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>
          }
          findMany: {
            args: Prisma.belanjaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>[]
          }
          create: {
            args: Prisma.belanjaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>
          }
          createMany: {
            args: Prisma.belanjaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.belanjaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>
          }
          update: {
            args: Prisma.belanjaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>
          }
          deleteMany: {
            args: Prisma.belanjaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.belanjaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.belanjaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belanjaPayload>
          }
          aggregate: {
            args: Prisma.BelanjaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBelanja>
          }
          groupBy: {
            args: Prisma.belanjaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BelanjaGroupByOutputType>[]
          }
          count: {
            args: Prisma.belanjaCountArgs<ExtArgs>
            result: $Utils.Optional<BelanjaCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ayam?: AyamOmit
    vaksin?: VaksinOmit
    pakan?: PakanOmit
    obat?: ObatOmit
    jadwal_vaksinasi?: jadwal_vaksinasiOmit
    penyakit?: penyakitOmit
    mortalitas?: mortalitasOmit
    panen?: panenOmit
    belanja?: belanjaOmit
    notifications?: notificationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type AyamCountOutputType
   */

  export type AyamCountOutputType = {
    JadwalVaksinasi: number
    Penyakit: number
    Mortalitas: number
  }

  export type AyamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JadwalVaksinasi?: boolean | AyamCountOutputTypeCountJadwalVaksinasiArgs
    Penyakit?: boolean | AyamCountOutputTypeCountPenyakitArgs
    Mortalitas?: boolean | AyamCountOutputTypeCountMortalitasArgs
  }

  // Custom InputTypes
  /**
   * AyamCountOutputType without action
   */
  export type AyamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AyamCountOutputType
     */
    select?: AyamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AyamCountOutputType without action
   */
  export type AyamCountOutputTypeCountJadwalVaksinasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwal_vaksinasiWhereInput
  }

  /**
   * AyamCountOutputType without action
   */
  export type AyamCountOutputTypeCountPenyakitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penyakitWhereInput
  }

  /**
   * AyamCountOutputType without action
   */
  export type AyamCountOutputTypeCountMortalitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mortalitasWhereInput
  }


  /**
   * Count Type VaksinCountOutputType
   */

  export type VaksinCountOutputType = {
    JasadwalVaksinasi: number
  }

  export type VaksinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JasadwalVaksinasi?: boolean | VaksinCountOutputTypeCountJasadwalVaksinasiArgs
  }

  // Custom InputTypes
  /**
   * VaksinCountOutputType without action
   */
  export type VaksinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaksinCountOutputType
     */
    select?: VaksinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VaksinCountOutputType without action
   */
  export type VaksinCountOutputTypeCountJasadwalVaksinasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwal_vaksinasiWhereInput
  }


  /**
   * Count Type ObatCountOutputType
   */

  export type ObatCountOutputType = {
    penyakit: number
  }

  export type ObatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penyakit?: boolean | ObatCountOutputTypeCountPenyakitArgs
  }

  // Custom InputTypes
  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObatCountOutputType
     */
    select?: ObatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeCountPenyakitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penyakitWhereInput
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
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
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
    username: string
    password: string
    role: string
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
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Ayam
   */

  export type AggregateAyam = {
    _count: AyamCountAggregateOutputType | null
    _avg: AyamAvgAggregateOutputType | null
    _sum: AyamSumAggregateOutputType | null
    _min: AyamMinAggregateOutputType | null
    _max: AyamMaxAggregateOutputType | null
  }

  export type AyamAvgAggregateOutputType = {
    jumlah: number | null
    umur: number | null
  }

  export type AyamSumAggregateOutputType = {
    jumlah: number | null
    umur: number | null
  }

  export type AyamMinAggregateOutputType = {
    id: string | null
    nama: string | null
    jumlah: number | null
    jenis: string | null
    umur: number | null
    gambar: string | null
    kandang: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AyamMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    jumlah: number | null
    jenis: string | null
    umur: number | null
    gambar: string | null
    kandang: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AyamCountAggregateOutputType = {
    id: number
    nama: number
    jumlah: number
    jenis: number
    umur: number
    gambar: number
    kandang: number
    pakan: number
    obat: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AyamAvgAggregateInputType = {
    jumlah?: true
    umur?: true
  }

  export type AyamSumAggregateInputType = {
    jumlah?: true
    umur?: true
  }

  export type AyamMinAggregateInputType = {
    id?: true
    nama?: true
    jumlah?: true
    jenis?: true
    umur?: true
    gambar?: true
    kandang?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AyamMaxAggregateInputType = {
    id?: true
    nama?: true
    jumlah?: true
    jenis?: true
    umur?: true
    gambar?: true
    kandang?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AyamCountAggregateInputType = {
    id?: true
    nama?: true
    jumlah?: true
    jenis?: true
    umur?: true
    gambar?: true
    kandang?: true
    pakan?: true
    obat?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AyamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayam to aggregate.
     */
    where?: AyamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayams to fetch.
     */
    orderBy?: AyamOrderByWithRelationInput | AyamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AyamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ayams
    **/
    _count?: true | AyamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AyamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AyamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AyamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AyamMaxAggregateInputType
  }

  export type GetAyamAggregateType<T extends AyamAggregateArgs> = {
        [P in keyof T & keyof AggregateAyam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAyam[P]>
      : GetScalarType<T[P], AggregateAyam[P]>
  }




  export type AyamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AyamWhereInput
    orderBy?: AyamOrderByWithAggregationInput | AyamOrderByWithAggregationInput[]
    by: AyamScalarFieldEnum[] | AyamScalarFieldEnum
    having?: AyamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AyamCountAggregateInputType | true
    _avg?: AyamAvgAggregateInputType
    _sum?: AyamSumAggregateInputType
    _min?: AyamMinAggregateInputType
    _max?: AyamMaxAggregateInputType
  }

  export type AyamGroupByOutputType = {
    id: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonValue
    obat: JsonValue
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: AyamCountAggregateOutputType | null
    _avg: AyamAvgAggregateOutputType | null
    _sum: AyamSumAggregateOutputType | null
    _min: AyamMinAggregateOutputType | null
    _max: AyamMaxAggregateOutputType | null
  }

  type GetAyamGroupByPayload<T extends AyamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AyamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AyamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AyamGroupByOutputType[P]>
            : GetScalarType<T[P], AyamGroupByOutputType[P]>
        }
      >
    >


  export type AyamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    jumlah?: boolean
    jenis?: boolean
    umur?: boolean
    gambar?: boolean
    kandang?: boolean
    pakan?: boolean
    obat?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    JadwalVaksinasi?: boolean | Ayam$JadwalVaksinasiArgs<ExtArgs>
    Penyakit?: boolean | Ayam$PenyakitArgs<ExtArgs>
    Mortalitas?: boolean | Ayam$MortalitasArgs<ExtArgs>
    _count?: boolean | AyamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ayam"]>



  export type AyamSelectScalar = {
    id?: boolean
    nama?: boolean
    jumlah?: boolean
    jenis?: boolean
    umur?: boolean
    gambar?: boolean
    kandang?: boolean
    pakan?: boolean
    obat?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AyamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "jumlah" | "jenis" | "umur" | "gambar" | "kandang" | "pakan" | "obat" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["ayam"]>
  export type AyamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JadwalVaksinasi?: boolean | Ayam$JadwalVaksinasiArgs<ExtArgs>
    Penyakit?: boolean | Ayam$PenyakitArgs<ExtArgs>
    Mortalitas?: boolean | Ayam$MortalitasArgs<ExtArgs>
    _count?: boolean | AyamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AyamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ayam"
    objects: {
      JadwalVaksinasi: Prisma.$jadwal_vaksinasiPayload<ExtArgs>[]
      Penyakit: Prisma.$penyakitPayload<ExtArgs>[]
      Mortalitas: Prisma.$mortalitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      jumlah: number
      jenis: string
      umur: number
      gambar: string
      kandang: string
      pakan: Prisma.JsonValue
      obat: Prisma.JsonValue
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ayam"]>
    composites: {}
  }

  type AyamGetPayload<S extends boolean | null | undefined | AyamDefaultArgs> = $Result.GetResult<Prisma.$AyamPayload, S>

  type AyamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AyamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AyamCountAggregateInputType | true
    }

  export interface AyamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ayam'], meta: { name: 'Ayam' } }
    /**
     * Find zero or one Ayam that matches the filter.
     * @param {AyamFindUniqueArgs} args - Arguments to find a Ayam
     * @example
     * // Get one Ayam
     * const ayam = await prisma.ayam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AyamFindUniqueArgs>(args: SelectSubset<T, AyamFindUniqueArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ayam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AyamFindUniqueOrThrowArgs} args - Arguments to find a Ayam
     * @example
     * // Get one Ayam
     * const ayam = await prisma.ayam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AyamFindUniqueOrThrowArgs>(args: SelectSubset<T, AyamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamFindFirstArgs} args - Arguments to find a Ayam
     * @example
     * // Get one Ayam
     * const ayam = await prisma.ayam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AyamFindFirstArgs>(args?: SelectSubset<T, AyamFindFirstArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ayam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamFindFirstOrThrowArgs} args - Arguments to find a Ayam
     * @example
     * // Get one Ayam
     * const ayam = await prisma.ayam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AyamFindFirstOrThrowArgs>(args?: SelectSubset<T, AyamFindFirstOrThrowArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ayams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ayams
     * const ayams = await prisma.ayam.findMany()
     * 
     * // Get first 10 Ayams
     * const ayams = await prisma.ayam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ayamWithIdOnly = await prisma.ayam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AyamFindManyArgs>(args?: SelectSubset<T, AyamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ayam.
     * @param {AyamCreateArgs} args - Arguments to create a Ayam.
     * @example
     * // Create one Ayam
     * const Ayam = await prisma.ayam.create({
     *   data: {
     *     // ... data to create a Ayam
     *   }
     * })
     * 
     */
    create<T extends AyamCreateArgs>(args: SelectSubset<T, AyamCreateArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ayams.
     * @param {AyamCreateManyArgs} args - Arguments to create many Ayams.
     * @example
     * // Create many Ayams
     * const ayam = await prisma.ayam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AyamCreateManyArgs>(args?: SelectSubset<T, AyamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ayam.
     * @param {AyamDeleteArgs} args - Arguments to delete one Ayam.
     * @example
     * // Delete one Ayam
     * const Ayam = await prisma.ayam.delete({
     *   where: {
     *     // ... filter to delete one Ayam
     *   }
     * })
     * 
     */
    delete<T extends AyamDeleteArgs>(args: SelectSubset<T, AyamDeleteArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ayam.
     * @param {AyamUpdateArgs} args - Arguments to update one Ayam.
     * @example
     * // Update one Ayam
     * const ayam = await prisma.ayam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AyamUpdateArgs>(args: SelectSubset<T, AyamUpdateArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ayams.
     * @param {AyamDeleteManyArgs} args - Arguments to filter Ayams to delete.
     * @example
     * // Delete a few Ayams
     * const { count } = await prisma.ayam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AyamDeleteManyArgs>(args?: SelectSubset<T, AyamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ayams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ayams
     * const ayam = await prisma.ayam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AyamUpdateManyArgs>(args: SelectSubset<T, AyamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ayam.
     * @param {AyamUpsertArgs} args - Arguments to update or create a Ayam.
     * @example
     * // Update or create a Ayam
     * const ayam = await prisma.ayam.upsert({
     *   create: {
     *     // ... data to create a Ayam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ayam we want to update
     *   }
     * })
     */
    upsert<T extends AyamUpsertArgs>(args: SelectSubset<T, AyamUpsertArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ayams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamCountArgs} args - Arguments to filter Ayams to count.
     * @example
     * // Count the number of Ayams
     * const count = await prisma.ayam.count({
     *   where: {
     *     // ... the filter for the Ayams we want to count
     *   }
     * })
    **/
    count<T extends AyamCountArgs>(
      args?: Subset<T, AyamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AyamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ayam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AyamAggregateArgs>(args: Subset<T, AyamAggregateArgs>): Prisma.PrismaPromise<GetAyamAggregateType<T>>

    /**
     * Group by Ayam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AyamGroupByArgs} args - Group by arguments.
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
      T extends AyamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AyamGroupByArgs['orderBy'] }
        : { orderBy?: AyamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AyamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAyamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ayam model
   */
  readonly fields: AyamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ayam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AyamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    JadwalVaksinasi<T extends Ayam$JadwalVaksinasiArgs<ExtArgs> = {}>(args?: Subset<T, Ayam$JadwalVaksinasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Penyakit<T extends Ayam$PenyakitArgs<ExtArgs> = {}>(args?: Subset<T, Ayam$PenyakitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Mortalitas<T extends Ayam$MortalitasArgs<ExtArgs> = {}>(args?: Subset<T, Ayam$MortalitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ayam model
   */
  interface AyamFieldRefs {
    readonly id: FieldRef<"Ayam", 'String'>
    readonly nama: FieldRef<"Ayam", 'String'>
    readonly jumlah: FieldRef<"Ayam", 'Int'>
    readonly jenis: FieldRef<"Ayam", 'String'>
    readonly umur: FieldRef<"Ayam", 'Int'>
    readonly gambar: FieldRef<"Ayam", 'String'>
    readonly kandang: FieldRef<"Ayam", 'String'>
    readonly pakan: FieldRef<"Ayam", 'Json'>
    readonly obat: FieldRef<"Ayam", 'Json'>
    readonly deleted: FieldRef<"Ayam", 'Boolean'>
    readonly createdAt: FieldRef<"Ayam", 'DateTime'>
    readonly updatedAt: FieldRef<"Ayam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ayam findUnique
   */
  export type AyamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * Filter, which Ayam to fetch.
     */
    where: AyamWhereUniqueInput
  }

  /**
   * Ayam findUniqueOrThrow
   */
  export type AyamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * Filter, which Ayam to fetch.
     */
    where: AyamWhereUniqueInput
  }

  /**
   * Ayam findFirst
   */
  export type AyamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * Filter, which Ayam to fetch.
     */
    where?: AyamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayams to fetch.
     */
    orderBy?: AyamOrderByWithRelationInput | AyamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayams.
     */
    cursor?: AyamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayams.
     */
    distinct?: AyamScalarFieldEnum | AyamScalarFieldEnum[]
  }

  /**
   * Ayam findFirstOrThrow
   */
  export type AyamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * Filter, which Ayam to fetch.
     */
    where?: AyamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayams to fetch.
     */
    orderBy?: AyamOrderByWithRelationInput | AyamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ayams.
     */
    cursor?: AyamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ayams.
     */
    distinct?: AyamScalarFieldEnum | AyamScalarFieldEnum[]
  }

  /**
   * Ayam findMany
   */
  export type AyamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * Filter, which Ayams to fetch.
     */
    where?: AyamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ayams to fetch.
     */
    orderBy?: AyamOrderByWithRelationInput | AyamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ayams.
     */
    cursor?: AyamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ayams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ayams.
     */
    skip?: number
    distinct?: AyamScalarFieldEnum | AyamScalarFieldEnum[]
  }

  /**
   * Ayam create
   */
  export type AyamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * The data needed to create a Ayam.
     */
    data: XOR<AyamCreateInput, AyamUncheckedCreateInput>
  }

  /**
   * Ayam createMany
   */
  export type AyamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ayams.
     */
    data: AyamCreateManyInput | AyamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ayam update
   */
  export type AyamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * The data needed to update a Ayam.
     */
    data: XOR<AyamUpdateInput, AyamUncheckedUpdateInput>
    /**
     * Choose, which Ayam to update.
     */
    where: AyamWhereUniqueInput
  }

  /**
   * Ayam updateMany
   */
  export type AyamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ayams.
     */
    data: XOR<AyamUpdateManyMutationInput, AyamUncheckedUpdateManyInput>
    /**
     * Filter which Ayams to update
     */
    where?: AyamWhereInput
    /**
     * Limit how many Ayams to update.
     */
    limit?: number
  }

  /**
   * Ayam upsert
   */
  export type AyamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * The filter to search for the Ayam to update in case it exists.
     */
    where: AyamWhereUniqueInput
    /**
     * In case the Ayam found by the `where` argument doesn't exist, create a new Ayam with this data.
     */
    create: XOR<AyamCreateInput, AyamUncheckedCreateInput>
    /**
     * In case the Ayam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AyamUpdateInput, AyamUncheckedUpdateInput>
  }

  /**
   * Ayam delete
   */
  export type AyamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
    /**
     * Filter which Ayam to delete.
     */
    where: AyamWhereUniqueInput
  }

  /**
   * Ayam deleteMany
   */
  export type AyamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ayams to delete
     */
    where?: AyamWhereInput
    /**
     * Limit how many Ayams to delete.
     */
    limit?: number
  }

  /**
   * Ayam.JadwalVaksinasi
   */
  export type Ayam$JadwalVaksinasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    where?: jadwal_vaksinasiWhereInput
    orderBy?: jadwal_vaksinasiOrderByWithRelationInput | jadwal_vaksinasiOrderByWithRelationInput[]
    cursor?: jadwal_vaksinasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_vaksinasiScalarFieldEnum | Jadwal_vaksinasiScalarFieldEnum[]
  }

  /**
   * Ayam.Penyakit
   */
  export type Ayam$PenyakitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    where?: penyakitWhereInput
    orderBy?: penyakitOrderByWithRelationInput | penyakitOrderByWithRelationInput[]
    cursor?: penyakitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * Ayam.Mortalitas
   */
  export type Ayam$MortalitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    where?: mortalitasWhereInput
    orderBy?: mortalitasOrderByWithRelationInput | mortalitasOrderByWithRelationInput[]
    cursor?: mortalitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MortalitasScalarFieldEnum | MortalitasScalarFieldEnum[]
  }

  /**
   * Ayam without action
   */
  export type AyamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ayam
     */
    select?: AyamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ayam
     */
    omit?: AyamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AyamInclude<ExtArgs> | null
  }


  /**
   * Model Vaksin
   */

  export type AggregateVaksin = {
    _count: VaksinCountAggregateOutputType | null
    _avg: VaksinAvgAggregateOutputType | null
    _sum: VaksinSumAggregateOutputType | null
    _min: VaksinMinAggregateOutputType | null
    _max: VaksinMaxAggregateOutputType | null
  }

  export type VaksinAvgAggregateOutputType = {
    umur: number | null
  }

  export type VaksinSumAggregateOutputType = {
    umur: number | null
  }

  export type VaksinMinAggregateOutputType = {
    id: string | null
    nama: string | null
    gambar: string | null
    indikasi: string | null
    tipe: string | null
    penggunaan: string | null
    umur: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaksinMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    gambar: string | null
    indikasi: string | null
    tipe: string | null
    penggunaan: string | null
    umur: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaksinCountAggregateOutputType = {
    id: number
    nama: number
    gambar: number
    indikasi: number
    tipe: number
    penggunaan: number
    umur: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VaksinAvgAggregateInputType = {
    umur?: true
  }

  export type VaksinSumAggregateInputType = {
    umur?: true
  }

  export type VaksinMinAggregateInputType = {
    id?: true
    nama?: true
    gambar?: true
    indikasi?: true
    tipe?: true
    penggunaan?: true
    umur?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaksinMaxAggregateInputType = {
    id?: true
    nama?: true
    gambar?: true
    indikasi?: true
    tipe?: true
    penggunaan?: true
    umur?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaksinCountAggregateInputType = {
    id?: true
    nama?: true
    gambar?: true
    indikasi?: true
    tipe?: true
    penggunaan?: true
    umur?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VaksinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaksin to aggregate.
     */
    where?: VaksinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaksins to fetch.
     */
    orderBy?: VaksinOrderByWithRelationInput | VaksinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaksinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaksins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaksins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vaksins
    **/
    _count?: true | VaksinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaksinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaksinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaksinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaksinMaxAggregateInputType
  }

  export type GetVaksinAggregateType<T extends VaksinAggregateArgs> = {
        [P in keyof T & keyof AggregateVaksin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaksin[P]>
      : GetScalarType<T[P], AggregateVaksin[P]>
  }




  export type VaksinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaksinWhereInput
    orderBy?: VaksinOrderByWithAggregationInput | VaksinOrderByWithAggregationInput[]
    by: VaksinScalarFieldEnum[] | VaksinScalarFieldEnum
    having?: VaksinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaksinCountAggregateInputType | true
    _avg?: VaksinAvgAggregateInputType
    _sum?: VaksinSumAggregateInputType
    _min?: VaksinMinAggregateInputType
    _max?: VaksinMaxAggregateInputType
  }

  export type VaksinGroupByOutputType = {
    id: string
    nama: string
    gambar: string
    indikasi: string
    tipe: string
    penggunaan: string
    umur: number
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: VaksinCountAggregateOutputType | null
    _avg: VaksinAvgAggregateOutputType | null
    _sum: VaksinSumAggregateOutputType | null
    _min: VaksinMinAggregateOutputType | null
    _max: VaksinMaxAggregateOutputType | null
  }

  type GetVaksinGroupByPayload<T extends VaksinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaksinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaksinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaksinGroupByOutputType[P]>
            : GetScalarType<T[P], VaksinGroupByOutputType[P]>
        }
      >
    >


  export type VaksinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    gambar?: boolean
    indikasi?: boolean
    tipe?: boolean
    penggunaan?: boolean
    umur?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    JasadwalVaksinasi?: boolean | Vaksin$JasadwalVaksinasiArgs<ExtArgs>
    _count?: boolean | VaksinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaksin"]>



  export type VaksinSelectScalar = {
    id?: boolean
    nama?: boolean
    gambar?: boolean
    indikasi?: boolean
    tipe?: boolean
    penggunaan?: boolean
    umur?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VaksinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "gambar" | "indikasi" | "tipe" | "penggunaan" | "umur" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["vaksin"]>
  export type VaksinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JasadwalVaksinasi?: boolean | Vaksin$JasadwalVaksinasiArgs<ExtArgs>
    _count?: boolean | VaksinCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VaksinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaksin"
    objects: {
      JasadwalVaksinasi: Prisma.$jadwal_vaksinasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      gambar: string
      indikasi: string
      tipe: string
      penggunaan: string
      umur: number
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vaksin"]>
    composites: {}
  }

  type VaksinGetPayload<S extends boolean | null | undefined | VaksinDefaultArgs> = $Result.GetResult<Prisma.$VaksinPayload, S>

  type VaksinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaksinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaksinCountAggregateInputType | true
    }

  export interface VaksinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaksin'], meta: { name: 'Vaksin' } }
    /**
     * Find zero or one Vaksin that matches the filter.
     * @param {VaksinFindUniqueArgs} args - Arguments to find a Vaksin
     * @example
     * // Get one Vaksin
     * const vaksin = await prisma.vaksin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaksinFindUniqueArgs>(args: SelectSubset<T, VaksinFindUniqueArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vaksin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaksinFindUniqueOrThrowArgs} args - Arguments to find a Vaksin
     * @example
     * // Get one Vaksin
     * const vaksin = await prisma.vaksin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaksinFindUniqueOrThrowArgs>(args: SelectSubset<T, VaksinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaksin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinFindFirstArgs} args - Arguments to find a Vaksin
     * @example
     * // Get one Vaksin
     * const vaksin = await prisma.vaksin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaksinFindFirstArgs>(args?: SelectSubset<T, VaksinFindFirstArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaksin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinFindFirstOrThrowArgs} args - Arguments to find a Vaksin
     * @example
     * // Get one Vaksin
     * const vaksin = await prisma.vaksin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaksinFindFirstOrThrowArgs>(args?: SelectSubset<T, VaksinFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vaksins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vaksins
     * const vaksins = await prisma.vaksin.findMany()
     * 
     * // Get first 10 Vaksins
     * const vaksins = await prisma.vaksin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaksinWithIdOnly = await prisma.vaksin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaksinFindManyArgs>(args?: SelectSubset<T, VaksinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vaksin.
     * @param {VaksinCreateArgs} args - Arguments to create a Vaksin.
     * @example
     * // Create one Vaksin
     * const Vaksin = await prisma.vaksin.create({
     *   data: {
     *     // ... data to create a Vaksin
     *   }
     * })
     * 
     */
    create<T extends VaksinCreateArgs>(args: SelectSubset<T, VaksinCreateArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vaksins.
     * @param {VaksinCreateManyArgs} args - Arguments to create many Vaksins.
     * @example
     * // Create many Vaksins
     * const vaksin = await prisma.vaksin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaksinCreateManyArgs>(args?: SelectSubset<T, VaksinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vaksin.
     * @param {VaksinDeleteArgs} args - Arguments to delete one Vaksin.
     * @example
     * // Delete one Vaksin
     * const Vaksin = await prisma.vaksin.delete({
     *   where: {
     *     // ... filter to delete one Vaksin
     *   }
     * })
     * 
     */
    delete<T extends VaksinDeleteArgs>(args: SelectSubset<T, VaksinDeleteArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vaksin.
     * @param {VaksinUpdateArgs} args - Arguments to update one Vaksin.
     * @example
     * // Update one Vaksin
     * const vaksin = await prisma.vaksin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaksinUpdateArgs>(args: SelectSubset<T, VaksinUpdateArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vaksins.
     * @param {VaksinDeleteManyArgs} args - Arguments to filter Vaksins to delete.
     * @example
     * // Delete a few Vaksins
     * const { count } = await prisma.vaksin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaksinDeleteManyArgs>(args?: SelectSubset<T, VaksinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaksins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vaksins
     * const vaksin = await prisma.vaksin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaksinUpdateManyArgs>(args: SelectSubset<T, VaksinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vaksin.
     * @param {VaksinUpsertArgs} args - Arguments to update or create a Vaksin.
     * @example
     * // Update or create a Vaksin
     * const vaksin = await prisma.vaksin.upsert({
     *   create: {
     *     // ... data to create a Vaksin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaksin we want to update
     *   }
     * })
     */
    upsert<T extends VaksinUpsertArgs>(args: SelectSubset<T, VaksinUpsertArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vaksins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinCountArgs} args - Arguments to filter Vaksins to count.
     * @example
     * // Count the number of Vaksins
     * const count = await prisma.vaksin.count({
     *   where: {
     *     // ... the filter for the Vaksins we want to count
     *   }
     * })
    **/
    count<T extends VaksinCountArgs>(
      args?: Subset<T, VaksinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaksinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaksin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaksinAggregateArgs>(args: Subset<T, VaksinAggregateArgs>): Prisma.PrismaPromise<GetVaksinAggregateType<T>>

    /**
     * Group by Vaksin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaksinGroupByArgs} args - Group by arguments.
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
      T extends VaksinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaksinGroupByArgs['orderBy'] }
        : { orderBy?: VaksinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaksinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaksinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaksin model
   */
  readonly fields: VaksinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaksin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaksinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    JasadwalVaksinasi<T extends Vaksin$JasadwalVaksinasiArgs<ExtArgs> = {}>(args?: Subset<T, Vaksin$JasadwalVaksinasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vaksin model
   */
  interface VaksinFieldRefs {
    readonly id: FieldRef<"Vaksin", 'String'>
    readonly nama: FieldRef<"Vaksin", 'String'>
    readonly gambar: FieldRef<"Vaksin", 'String'>
    readonly indikasi: FieldRef<"Vaksin", 'String'>
    readonly tipe: FieldRef<"Vaksin", 'String'>
    readonly penggunaan: FieldRef<"Vaksin", 'String'>
    readonly umur: FieldRef<"Vaksin", 'Int'>
    readonly deleted: FieldRef<"Vaksin", 'Boolean'>
    readonly createdAt: FieldRef<"Vaksin", 'DateTime'>
    readonly updatedAt: FieldRef<"Vaksin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vaksin findUnique
   */
  export type VaksinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * Filter, which Vaksin to fetch.
     */
    where: VaksinWhereUniqueInput
  }

  /**
   * Vaksin findUniqueOrThrow
   */
  export type VaksinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * Filter, which Vaksin to fetch.
     */
    where: VaksinWhereUniqueInput
  }

  /**
   * Vaksin findFirst
   */
  export type VaksinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * Filter, which Vaksin to fetch.
     */
    where?: VaksinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaksins to fetch.
     */
    orderBy?: VaksinOrderByWithRelationInput | VaksinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaksins.
     */
    cursor?: VaksinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaksins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaksins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaksins.
     */
    distinct?: VaksinScalarFieldEnum | VaksinScalarFieldEnum[]
  }

  /**
   * Vaksin findFirstOrThrow
   */
  export type VaksinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * Filter, which Vaksin to fetch.
     */
    where?: VaksinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaksins to fetch.
     */
    orderBy?: VaksinOrderByWithRelationInput | VaksinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaksins.
     */
    cursor?: VaksinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaksins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaksins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaksins.
     */
    distinct?: VaksinScalarFieldEnum | VaksinScalarFieldEnum[]
  }

  /**
   * Vaksin findMany
   */
  export type VaksinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * Filter, which Vaksins to fetch.
     */
    where?: VaksinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaksins to fetch.
     */
    orderBy?: VaksinOrderByWithRelationInput | VaksinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vaksins.
     */
    cursor?: VaksinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaksins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaksins.
     */
    skip?: number
    distinct?: VaksinScalarFieldEnum | VaksinScalarFieldEnum[]
  }

  /**
   * Vaksin create
   */
  export type VaksinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaksin.
     */
    data: XOR<VaksinCreateInput, VaksinUncheckedCreateInput>
  }

  /**
   * Vaksin createMany
   */
  export type VaksinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vaksins.
     */
    data: VaksinCreateManyInput | VaksinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vaksin update
   */
  export type VaksinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaksin.
     */
    data: XOR<VaksinUpdateInput, VaksinUncheckedUpdateInput>
    /**
     * Choose, which Vaksin to update.
     */
    where: VaksinWhereUniqueInput
  }

  /**
   * Vaksin updateMany
   */
  export type VaksinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vaksins.
     */
    data: XOR<VaksinUpdateManyMutationInput, VaksinUncheckedUpdateManyInput>
    /**
     * Filter which Vaksins to update
     */
    where?: VaksinWhereInput
    /**
     * Limit how many Vaksins to update.
     */
    limit?: number
  }

  /**
   * Vaksin upsert
   */
  export type VaksinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaksin to update in case it exists.
     */
    where: VaksinWhereUniqueInput
    /**
     * In case the Vaksin found by the `where` argument doesn't exist, create a new Vaksin with this data.
     */
    create: XOR<VaksinCreateInput, VaksinUncheckedCreateInput>
    /**
     * In case the Vaksin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaksinUpdateInput, VaksinUncheckedUpdateInput>
  }

  /**
   * Vaksin delete
   */
  export type VaksinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
    /**
     * Filter which Vaksin to delete.
     */
    where: VaksinWhereUniqueInput
  }

  /**
   * Vaksin deleteMany
   */
  export type VaksinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaksins to delete
     */
    where?: VaksinWhereInput
    /**
     * Limit how many Vaksins to delete.
     */
    limit?: number
  }

  /**
   * Vaksin.JasadwalVaksinasi
   */
  export type Vaksin$JasadwalVaksinasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    where?: jadwal_vaksinasiWhereInput
    orderBy?: jadwal_vaksinasiOrderByWithRelationInput | jadwal_vaksinasiOrderByWithRelationInput[]
    cursor?: jadwal_vaksinasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_vaksinasiScalarFieldEnum | Jadwal_vaksinasiScalarFieldEnum[]
  }

  /**
   * Vaksin without action
   */
  export type VaksinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaksin
     */
    select?: VaksinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaksin
     */
    omit?: VaksinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaksinInclude<ExtArgs> | null
  }


  /**
   * Model Pakan
   */

  export type AggregatePakan = {
    _count: PakanCountAggregateOutputType | null
    _avg: PakanAvgAggregateOutputType | null
    _sum: PakanSumAggregateOutputType | null
    _min: PakanMinAggregateOutputType | null
    _max: PakanMaxAggregateOutputType | null
  }

  export type PakanAvgAggregateOutputType = {
    harga: number | null
  }

  export type PakanSumAggregateOutputType = {
    harga: number | null
  }

  export type PakanMinAggregateOutputType = {
    id: string | null
    nama: string | null
    jenis: string | null
    gambar: string | null
    gizi: string | null
    harga: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PakanMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    jenis: string | null
    gambar: string | null
    gizi: string | null
    harga: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PakanCountAggregateOutputType = {
    id: number
    nama: number
    jenis: number
    gambar: number
    gizi: number
    harga: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PakanAvgAggregateInputType = {
    harga?: true
  }

  export type PakanSumAggregateInputType = {
    harga?: true
  }

  export type PakanMinAggregateInputType = {
    id?: true
    nama?: true
    jenis?: true
    gambar?: true
    gizi?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PakanMaxAggregateInputType = {
    id?: true
    nama?: true
    jenis?: true
    gambar?: true
    gizi?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PakanCountAggregateInputType = {
    id?: true
    nama?: true
    jenis?: true
    gambar?: true
    gizi?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PakanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pakan to aggregate.
     */
    where?: PakanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakans to fetch.
     */
    orderBy?: PakanOrderByWithRelationInput | PakanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PakanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pakans
    **/
    _count?: true | PakanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PakanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PakanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PakanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PakanMaxAggregateInputType
  }

  export type GetPakanAggregateType<T extends PakanAggregateArgs> = {
        [P in keyof T & keyof AggregatePakan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePakan[P]>
      : GetScalarType<T[P], AggregatePakan[P]>
  }




  export type PakanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PakanWhereInput
    orderBy?: PakanOrderByWithAggregationInput | PakanOrderByWithAggregationInput[]
    by: PakanScalarFieldEnum[] | PakanScalarFieldEnum
    having?: PakanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PakanCountAggregateInputType | true
    _avg?: PakanAvgAggregateInputType
    _sum?: PakanSumAggregateInputType
    _min?: PakanMinAggregateInputType
    _max?: PakanMaxAggregateInputType
  }

  export type PakanGroupByOutputType = {
    id: string
    nama: string
    jenis: string
    gambar: string
    gizi: string
    harga: number
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PakanCountAggregateOutputType | null
    _avg: PakanAvgAggregateOutputType | null
    _sum: PakanSumAggregateOutputType | null
    _min: PakanMinAggregateOutputType | null
    _max: PakanMaxAggregateOutputType | null
  }

  type GetPakanGroupByPayload<T extends PakanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PakanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PakanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PakanGroupByOutputType[P]>
            : GetScalarType<T[P], PakanGroupByOutputType[P]>
        }
      >
    >


  export type PakanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    jenis?: boolean
    gambar?: boolean
    gizi?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pakan"]>



  export type PakanSelectScalar = {
    id?: boolean
    nama?: boolean
    jenis?: boolean
    gambar?: boolean
    gizi?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PakanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "jenis" | "gambar" | "gizi" | "harga" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["pakan"]>

  export type $PakanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pakan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      jenis: string
      gambar: string
      gizi: string
      harga: number
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pakan"]>
    composites: {}
  }

  type PakanGetPayload<S extends boolean | null | undefined | PakanDefaultArgs> = $Result.GetResult<Prisma.$PakanPayload, S>

  type PakanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PakanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PakanCountAggregateInputType | true
    }

  export interface PakanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pakan'], meta: { name: 'Pakan' } }
    /**
     * Find zero or one Pakan that matches the filter.
     * @param {PakanFindUniqueArgs} args - Arguments to find a Pakan
     * @example
     * // Get one Pakan
     * const pakan = await prisma.pakan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PakanFindUniqueArgs>(args: SelectSubset<T, PakanFindUniqueArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pakan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PakanFindUniqueOrThrowArgs} args - Arguments to find a Pakan
     * @example
     * // Get one Pakan
     * const pakan = await prisma.pakan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PakanFindUniqueOrThrowArgs>(args: SelectSubset<T, PakanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pakan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanFindFirstArgs} args - Arguments to find a Pakan
     * @example
     * // Get one Pakan
     * const pakan = await prisma.pakan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PakanFindFirstArgs>(args?: SelectSubset<T, PakanFindFirstArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pakan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanFindFirstOrThrowArgs} args - Arguments to find a Pakan
     * @example
     * // Get one Pakan
     * const pakan = await prisma.pakan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PakanFindFirstOrThrowArgs>(args?: SelectSubset<T, PakanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pakans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pakans
     * const pakans = await prisma.pakan.findMany()
     * 
     * // Get first 10 Pakans
     * const pakans = await prisma.pakan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pakanWithIdOnly = await prisma.pakan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PakanFindManyArgs>(args?: SelectSubset<T, PakanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pakan.
     * @param {PakanCreateArgs} args - Arguments to create a Pakan.
     * @example
     * // Create one Pakan
     * const Pakan = await prisma.pakan.create({
     *   data: {
     *     // ... data to create a Pakan
     *   }
     * })
     * 
     */
    create<T extends PakanCreateArgs>(args: SelectSubset<T, PakanCreateArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pakans.
     * @param {PakanCreateManyArgs} args - Arguments to create many Pakans.
     * @example
     * // Create many Pakans
     * const pakan = await prisma.pakan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PakanCreateManyArgs>(args?: SelectSubset<T, PakanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pakan.
     * @param {PakanDeleteArgs} args - Arguments to delete one Pakan.
     * @example
     * // Delete one Pakan
     * const Pakan = await prisma.pakan.delete({
     *   where: {
     *     // ... filter to delete one Pakan
     *   }
     * })
     * 
     */
    delete<T extends PakanDeleteArgs>(args: SelectSubset<T, PakanDeleteArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pakan.
     * @param {PakanUpdateArgs} args - Arguments to update one Pakan.
     * @example
     * // Update one Pakan
     * const pakan = await prisma.pakan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PakanUpdateArgs>(args: SelectSubset<T, PakanUpdateArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pakans.
     * @param {PakanDeleteManyArgs} args - Arguments to filter Pakans to delete.
     * @example
     * // Delete a few Pakans
     * const { count } = await prisma.pakan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PakanDeleteManyArgs>(args?: SelectSubset<T, PakanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pakans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pakans
     * const pakan = await prisma.pakan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PakanUpdateManyArgs>(args: SelectSubset<T, PakanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pakan.
     * @param {PakanUpsertArgs} args - Arguments to update or create a Pakan.
     * @example
     * // Update or create a Pakan
     * const pakan = await prisma.pakan.upsert({
     *   create: {
     *     // ... data to create a Pakan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pakan we want to update
     *   }
     * })
     */
    upsert<T extends PakanUpsertArgs>(args: SelectSubset<T, PakanUpsertArgs<ExtArgs>>): Prisma__PakanClient<$Result.GetResult<Prisma.$PakanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pakans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanCountArgs} args - Arguments to filter Pakans to count.
     * @example
     * // Count the number of Pakans
     * const count = await prisma.pakan.count({
     *   where: {
     *     // ... the filter for the Pakans we want to count
     *   }
     * })
    **/
    count<T extends PakanCountArgs>(
      args?: Subset<T, PakanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PakanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pakan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PakanAggregateArgs>(args: Subset<T, PakanAggregateArgs>): Prisma.PrismaPromise<GetPakanAggregateType<T>>

    /**
     * Group by Pakan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PakanGroupByArgs} args - Group by arguments.
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
      T extends PakanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PakanGroupByArgs['orderBy'] }
        : { orderBy?: PakanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PakanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPakanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pakan model
   */
  readonly fields: PakanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pakan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PakanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pakan model
   */
  interface PakanFieldRefs {
    readonly id: FieldRef<"Pakan", 'String'>
    readonly nama: FieldRef<"Pakan", 'String'>
    readonly jenis: FieldRef<"Pakan", 'String'>
    readonly gambar: FieldRef<"Pakan", 'String'>
    readonly gizi: FieldRef<"Pakan", 'String'>
    readonly harga: FieldRef<"Pakan", 'Int'>
    readonly deleted: FieldRef<"Pakan", 'Boolean'>
    readonly createdAt: FieldRef<"Pakan", 'DateTime'>
    readonly updatedAt: FieldRef<"Pakan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pakan findUnique
   */
  export type PakanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * Filter, which Pakan to fetch.
     */
    where: PakanWhereUniqueInput
  }

  /**
   * Pakan findUniqueOrThrow
   */
  export type PakanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * Filter, which Pakan to fetch.
     */
    where: PakanWhereUniqueInput
  }

  /**
   * Pakan findFirst
   */
  export type PakanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * Filter, which Pakan to fetch.
     */
    where?: PakanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakans to fetch.
     */
    orderBy?: PakanOrderByWithRelationInput | PakanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pakans.
     */
    cursor?: PakanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pakans.
     */
    distinct?: PakanScalarFieldEnum | PakanScalarFieldEnum[]
  }

  /**
   * Pakan findFirstOrThrow
   */
  export type PakanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * Filter, which Pakan to fetch.
     */
    where?: PakanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakans to fetch.
     */
    orderBy?: PakanOrderByWithRelationInput | PakanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pakans.
     */
    cursor?: PakanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pakans.
     */
    distinct?: PakanScalarFieldEnum | PakanScalarFieldEnum[]
  }

  /**
   * Pakan findMany
   */
  export type PakanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * Filter, which Pakans to fetch.
     */
    where?: PakanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakans to fetch.
     */
    orderBy?: PakanOrderByWithRelationInput | PakanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pakans.
     */
    cursor?: PakanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakans.
     */
    skip?: number
    distinct?: PakanScalarFieldEnum | PakanScalarFieldEnum[]
  }

  /**
   * Pakan create
   */
  export type PakanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * The data needed to create a Pakan.
     */
    data: XOR<PakanCreateInput, PakanUncheckedCreateInput>
  }

  /**
   * Pakan createMany
   */
  export type PakanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pakans.
     */
    data: PakanCreateManyInput | PakanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pakan update
   */
  export type PakanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * The data needed to update a Pakan.
     */
    data: XOR<PakanUpdateInput, PakanUncheckedUpdateInput>
    /**
     * Choose, which Pakan to update.
     */
    where: PakanWhereUniqueInput
  }

  /**
   * Pakan updateMany
   */
  export type PakanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pakans.
     */
    data: XOR<PakanUpdateManyMutationInput, PakanUncheckedUpdateManyInput>
    /**
     * Filter which Pakans to update
     */
    where?: PakanWhereInput
    /**
     * Limit how many Pakans to update.
     */
    limit?: number
  }

  /**
   * Pakan upsert
   */
  export type PakanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * The filter to search for the Pakan to update in case it exists.
     */
    where: PakanWhereUniqueInput
    /**
     * In case the Pakan found by the `where` argument doesn't exist, create a new Pakan with this data.
     */
    create: XOR<PakanCreateInput, PakanUncheckedCreateInput>
    /**
     * In case the Pakan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PakanUpdateInput, PakanUncheckedUpdateInput>
  }

  /**
   * Pakan delete
   */
  export type PakanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
    /**
     * Filter which Pakan to delete.
     */
    where: PakanWhereUniqueInput
  }

  /**
   * Pakan deleteMany
   */
  export type PakanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pakans to delete
     */
    where?: PakanWhereInput
    /**
     * Limit how many Pakans to delete.
     */
    limit?: number
  }

  /**
   * Pakan without action
   */
  export type PakanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pakan
     */
    select?: PakanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pakan
     */
    omit?: PakanOmit<ExtArgs> | null
  }


  /**
   * Model Obat
   */

  export type AggregateObat = {
    _count: ObatCountAggregateOutputType | null
    _min: ObatMinAggregateOutputType | null
    _max: ObatMaxAggregateOutputType | null
  }

  export type ObatMinAggregateOutputType = {
    id: string | null
    nama: string | null
    indikasi: string | null
    harga: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    gambar: string | null
  }

  export type ObatMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    indikasi: string | null
    harga: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    gambar: string | null
  }

  export type ObatCountAggregateOutputType = {
    id: number
    nama: number
    indikasi: number
    harga: number
    deleted: number
    createdAt: number
    updatedAt: number
    gambar: number
    _all: number
  }


  export type ObatMinAggregateInputType = {
    id?: true
    nama?: true
    indikasi?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    gambar?: true
  }

  export type ObatMaxAggregateInputType = {
    id?: true
    nama?: true
    indikasi?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    gambar?: true
  }

  export type ObatCountAggregateInputType = {
    id?: true
    nama?: true
    indikasi?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    gambar?: true
    _all?: true
  }

  export type ObatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obat to aggregate.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obats
    **/
    _count?: true | ObatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObatMaxAggregateInputType
  }

  export type GetObatAggregateType<T extends ObatAggregateArgs> = {
        [P in keyof T & keyof AggregateObat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObat[P]>
      : GetScalarType<T[P], AggregateObat[P]>
  }




  export type ObatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObatWhereInput
    orderBy?: ObatOrderByWithAggregationInput | ObatOrderByWithAggregationInput[]
    by: ObatScalarFieldEnum[] | ObatScalarFieldEnum
    having?: ObatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObatCountAggregateInputType | true
    _min?: ObatMinAggregateInputType
    _max?: ObatMaxAggregateInputType
  }

  export type ObatGroupByOutputType = {
    id: string
    nama: string
    indikasi: string
    harga: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    gambar: string
    _count: ObatCountAggregateOutputType | null
    _min: ObatMinAggregateOutputType | null
    _max: ObatMaxAggregateOutputType | null
  }

  type GetObatGroupByPayload<T extends ObatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObatGroupByOutputType[P]>
            : GetScalarType<T[P], ObatGroupByOutputType[P]>
        }
      >
    >


  export type ObatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    indikasi?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gambar?: boolean
    penyakit?: boolean | Obat$penyakitArgs<ExtArgs>
    _count?: boolean | ObatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obat"]>



  export type ObatSelectScalar = {
    id?: boolean
    nama?: boolean
    indikasi?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gambar?: boolean
  }

  export type ObatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "indikasi" | "harga" | "deleted" | "createdAt" | "updatedAt" | "gambar", ExtArgs["result"]["obat"]>
  export type ObatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penyakit?: boolean | Obat$penyakitArgs<ExtArgs>
    _count?: boolean | ObatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ObatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obat"
    objects: {
      penyakit: Prisma.$penyakitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      indikasi: string
      harga: string
      deleted: boolean
      createdAt: Date
      updatedAt: Date
      gambar: string
    }, ExtArgs["result"]["obat"]>
    composites: {}
  }

  type ObatGetPayload<S extends boolean | null | undefined | ObatDefaultArgs> = $Result.GetResult<Prisma.$ObatPayload, S>

  type ObatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObatCountAggregateInputType | true
    }

  export interface ObatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obat'], meta: { name: 'Obat' } }
    /**
     * Find zero or one Obat that matches the filter.
     * @param {ObatFindUniqueArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObatFindUniqueArgs>(args: SelectSubset<T, ObatFindUniqueArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObatFindUniqueOrThrowArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObatFindUniqueOrThrowArgs>(args: SelectSubset<T, ObatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindFirstArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObatFindFirstArgs>(args?: SelectSubset<T, ObatFindFirstArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindFirstOrThrowArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObatFindFirstOrThrowArgs>(args?: SelectSubset<T, ObatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obats
     * const obats = await prisma.obat.findMany()
     * 
     * // Get first 10 Obats
     * const obats = await prisma.obat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obatWithIdOnly = await prisma.obat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObatFindManyArgs>(args?: SelectSubset<T, ObatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obat.
     * @param {ObatCreateArgs} args - Arguments to create a Obat.
     * @example
     * // Create one Obat
     * const Obat = await prisma.obat.create({
     *   data: {
     *     // ... data to create a Obat
     *   }
     * })
     * 
     */
    create<T extends ObatCreateArgs>(args: SelectSubset<T, ObatCreateArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obats.
     * @param {ObatCreateManyArgs} args - Arguments to create many Obats.
     * @example
     * // Create many Obats
     * const obat = await prisma.obat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObatCreateManyArgs>(args?: SelectSubset<T, ObatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Obat.
     * @param {ObatDeleteArgs} args - Arguments to delete one Obat.
     * @example
     * // Delete one Obat
     * const Obat = await prisma.obat.delete({
     *   where: {
     *     // ... filter to delete one Obat
     *   }
     * })
     * 
     */
    delete<T extends ObatDeleteArgs>(args: SelectSubset<T, ObatDeleteArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obat.
     * @param {ObatUpdateArgs} args - Arguments to update one Obat.
     * @example
     * // Update one Obat
     * const obat = await prisma.obat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObatUpdateArgs>(args: SelectSubset<T, ObatUpdateArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obats.
     * @param {ObatDeleteManyArgs} args - Arguments to filter Obats to delete.
     * @example
     * // Delete a few Obats
     * const { count } = await prisma.obat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObatDeleteManyArgs>(args?: SelectSubset<T, ObatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obats
     * const obat = await prisma.obat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObatUpdateManyArgs>(args: SelectSubset<T, ObatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Obat.
     * @param {ObatUpsertArgs} args - Arguments to update or create a Obat.
     * @example
     * // Update or create a Obat
     * const obat = await prisma.obat.upsert({
     *   create: {
     *     // ... data to create a Obat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obat we want to update
     *   }
     * })
     */
    upsert<T extends ObatUpsertArgs>(args: SelectSubset<T, ObatUpsertArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatCountArgs} args - Arguments to filter Obats to count.
     * @example
     * // Count the number of Obats
     * const count = await prisma.obat.count({
     *   where: {
     *     // ... the filter for the Obats we want to count
     *   }
     * })
    **/
    count<T extends ObatCountArgs>(
      args?: Subset<T, ObatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObatAggregateArgs>(args: Subset<T, ObatAggregateArgs>): Prisma.PrismaPromise<GetObatAggregateType<T>>

    /**
     * Group by Obat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatGroupByArgs} args - Group by arguments.
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
      T extends ObatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObatGroupByArgs['orderBy'] }
        : { orderBy?: ObatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obat model
   */
  readonly fields: ObatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penyakit<T extends Obat$penyakitArgs<ExtArgs> = {}>(args?: Subset<T, Obat$penyakitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Obat model
   */
  interface ObatFieldRefs {
    readonly id: FieldRef<"Obat", 'String'>
    readonly nama: FieldRef<"Obat", 'String'>
    readonly indikasi: FieldRef<"Obat", 'String'>
    readonly harga: FieldRef<"Obat", 'String'>
    readonly deleted: FieldRef<"Obat", 'Boolean'>
    readonly createdAt: FieldRef<"Obat", 'DateTime'>
    readonly updatedAt: FieldRef<"Obat", 'DateTime'>
    readonly gambar: FieldRef<"Obat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Obat findUnique
   */
  export type ObatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat findUniqueOrThrow
   */
  export type ObatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat findFirst
   */
  export type ObatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat findFirstOrThrow
   */
  export type ObatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat findMany
   */
  export type ObatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obats to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat create
   */
  export type ObatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The data needed to create a Obat.
     */
    data: XOR<ObatCreateInput, ObatUncheckedCreateInput>
  }

  /**
   * Obat createMany
   */
  export type ObatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obats.
     */
    data: ObatCreateManyInput | ObatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obat update
   */
  export type ObatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The data needed to update a Obat.
     */
    data: XOR<ObatUpdateInput, ObatUncheckedUpdateInput>
    /**
     * Choose, which Obat to update.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat updateMany
   */
  export type ObatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obats.
     */
    data: XOR<ObatUpdateManyMutationInput, ObatUncheckedUpdateManyInput>
    /**
     * Filter which Obats to update
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to update.
     */
    limit?: number
  }

  /**
   * Obat upsert
   */
  export type ObatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The filter to search for the Obat to update in case it exists.
     */
    where: ObatWhereUniqueInput
    /**
     * In case the Obat found by the `where` argument doesn't exist, create a new Obat with this data.
     */
    create: XOR<ObatCreateInput, ObatUncheckedCreateInput>
    /**
     * In case the Obat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObatUpdateInput, ObatUncheckedUpdateInput>
  }

  /**
   * Obat delete
   */
  export type ObatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter which Obat to delete.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat deleteMany
   */
  export type ObatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obats to delete
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to delete.
     */
    limit?: number
  }

  /**
   * Obat.penyakit
   */
  export type Obat$penyakitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    where?: penyakitWhereInput
    orderBy?: penyakitOrderByWithRelationInput | penyakitOrderByWithRelationInput[]
    cursor?: penyakitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * Obat without action
   */
  export type ObatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
  }


  /**
   * Model jadwal_vaksinasi
   */

  export type AggregateJadwal_vaksinasi = {
    _count: Jadwal_vaksinasiCountAggregateOutputType | null
    _avg: Jadwal_vaksinasiAvgAggregateOutputType | null
    _sum: Jadwal_vaksinasiSumAggregateOutputType | null
    _min: Jadwal_vaksinasiMinAggregateOutputType | null
    _max: Jadwal_vaksinasiMaxAggregateOutputType | null
  }

  export type Jadwal_vaksinasiAvgAggregateOutputType = {
    dosis: number | null
  }

  export type Jadwal_vaksinasiSumAggregateOutputType = {
    dosis: number | null
  }

  export type Jadwal_vaksinasiMinAggregateOutputType = {
    id: string | null
    ayamId: string | null
    vaksinId: string | null
    tanggal: Date | null
    dosis: number | null
    keterangan: string | null
    sudah: boolean | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Jadwal_vaksinasiMaxAggregateOutputType = {
    id: string | null
    ayamId: string | null
    vaksinId: string | null
    tanggal: Date | null
    dosis: number | null
    keterangan: string | null
    sudah: boolean | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Jadwal_vaksinasiCountAggregateOutputType = {
    id: number
    ayamId: number
    vaksinId: number
    tanggal: number
    dosis: number
    keterangan: number
    sudah: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Jadwal_vaksinasiAvgAggregateInputType = {
    dosis?: true
  }

  export type Jadwal_vaksinasiSumAggregateInputType = {
    dosis?: true
  }

  export type Jadwal_vaksinasiMinAggregateInputType = {
    id?: true
    ayamId?: true
    vaksinId?: true
    tanggal?: true
    dosis?: true
    keterangan?: true
    sudah?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Jadwal_vaksinasiMaxAggregateInputType = {
    id?: true
    ayamId?: true
    vaksinId?: true
    tanggal?: true
    dosis?: true
    keterangan?: true
    sudah?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Jadwal_vaksinasiCountAggregateInputType = {
    id?: true
    ayamId?: true
    vaksinId?: true
    tanggal?: true
    dosis?: true
    keterangan?: true
    sudah?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Jadwal_vaksinasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwal_vaksinasi to aggregate.
     */
    where?: jadwal_vaksinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_vaksinasis to fetch.
     */
    orderBy?: jadwal_vaksinasiOrderByWithRelationInput | jadwal_vaksinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jadwal_vaksinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_vaksinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_vaksinasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jadwal_vaksinasis
    **/
    _count?: true | Jadwal_vaksinasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jadwal_vaksinasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jadwal_vaksinasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jadwal_vaksinasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jadwal_vaksinasiMaxAggregateInputType
  }

  export type GetJadwal_vaksinasiAggregateType<T extends Jadwal_vaksinasiAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal_vaksinasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal_vaksinasi[P]>
      : GetScalarType<T[P], AggregateJadwal_vaksinasi[P]>
  }




  export type jadwal_vaksinasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwal_vaksinasiWhereInput
    orderBy?: jadwal_vaksinasiOrderByWithAggregationInput | jadwal_vaksinasiOrderByWithAggregationInput[]
    by: Jadwal_vaksinasiScalarFieldEnum[] | Jadwal_vaksinasiScalarFieldEnum
    having?: jadwal_vaksinasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jadwal_vaksinasiCountAggregateInputType | true
    _avg?: Jadwal_vaksinasiAvgAggregateInputType
    _sum?: Jadwal_vaksinasiSumAggregateInputType
    _min?: Jadwal_vaksinasiMinAggregateInputType
    _max?: Jadwal_vaksinasiMaxAggregateInputType
  }

  export type Jadwal_vaksinasiGroupByOutputType = {
    id: string
    ayamId: string
    vaksinId: string
    tanggal: Date
    dosis: number
    keterangan: string
    sudah: boolean
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: Jadwal_vaksinasiCountAggregateOutputType | null
    _avg: Jadwal_vaksinasiAvgAggregateOutputType | null
    _sum: Jadwal_vaksinasiSumAggregateOutputType | null
    _min: Jadwal_vaksinasiMinAggregateOutputType | null
    _max: Jadwal_vaksinasiMaxAggregateOutputType | null
  }

  type GetJadwal_vaksinasiGroupByPayload<T extends jadwal_vaksinasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jadwal_vaksinasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jadwal_vaksinasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jadwal_vaksinasiGroupByOutputType[P]>
            : GetScalarType<T[P], Jadwal_vaksinasiGroupByOutputType[P]>
        }
      >
    >


  export type jadwal_vaksinasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ayamId?: boolean
    vaksinId?: boolean
    tanggal?: boolean
    dosis?: boolean
    keterangan?: boolean
    sudah?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayam?: boolean | AyamDefaultArgs<ExtArgs>
    vaksin?: boolean | VaksinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal_vaksinasi"]>



  export type jadwal_vaksinasiSelectScalar = {
    id?: boolean
    ayamId?: boolean
    vaksinId?: boolean
    tanggal?: boolean
    dosis?: boolean
    keterangan?: boolean
    sudah?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type jadwal_vaksinasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ayamId" | "vaksinId" | "tanggal" | "dosis" | "keterangan" | "sudah" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["jadwal_vaksinasi"]>
  export type jadwal_vaksinasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayam?: boolean | AyamDefaultArgs<ExtArgs>
    vaksin?: boolean | VaksinDefaultArgs<ExtArgs>
  }

  export type $jadwal_vaksinasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jadwal_vaksinasi"
    objects: {
      ayam: Prisma.$AyamPayload<ExtArgs>
      vaksin: Prisma.$VaksinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ayamId: string
      vaksinId: string
      tanggal: Date
      dosis: number
      keterangan: string
      sudah: boolean
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jadwal_vaksinasi"]>
    composites: {}
  }

  type jadwal_vaksinasiGetPayload<S extends boolean | null | undefined | jadwal_vaksinasiDefaultArgs> = $Result.GetResult<Prisma.$jadwal_vaksinasiPayload, S>

  type jadwal_vaksinasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jadwal_vaksinasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jadwal_vaksinasiCountAggregateInputType | true
    }

  export interface jadwal_vaksinasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jadwal_vaksinasi'], meta: { name: 'jadwal_vaksinasi' } }
    /**
     * Find zero or one Jadwal_vaksinasi that matches the filter.
     * @param {jadwal_vaksinasiFindUniqueArgs} args - Arguments to find a Jadwal_vaksinasi
     * @example
     * // Get one Jadwal_vaksinasi
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jadwal_vaksinasiFindUniqueArgs>(args: SelectSubset<T, jadwal_vaksinasiFindUniqueArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal_vaksinasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jadwal_vaksinasiFindUniqueOrThrowArgs} args - Arguments to find a Jadwal_vaksinasi
     * @example
     * // Get one Jadwal_vaksinasi
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jadwal_vaksinasiFindUniqueOrThrowArgs>(args: SelectSubset<T, jadwal_vaksinasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal_vaksinasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_vaksinasiFindFirstArgs} args - Arguments to find a Jadwal_vaksinasi
     * @example
     * // Get one Jadwal_vaksinasi
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jadwal_vaksinasiFindFirstArgs>(args?: SelectSubset<T, jadwal_vaksinasiFindFirstArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal_vaksinasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_vaksinasiFindFirstOrThrowArgs} args - Arguments to find a Jadwal_vaksinasi
     * @example
     * // Get one Jadwal_vaksinasi
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jadwal_vaksinasiFindFirstOrThrowArgs>(args?: SelectSubset<T, jadwal_vaksinasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwal_vaksinasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_vaksinasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwal_vaksinasis
     * const jadwal_vaksinasis = await prisma.jadwal_vaksinasi.findMany()
     * 
     * // Get first 10 Jadwal_vaksinasis
     * const jadwal_vaksinasis = await prisma.jadwal_vaksinasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwal_vaksinasiWithIdOnly = await prisma.jadwal_vaksinasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jadwal_vaksinasiFindManyArgs>(args?: SelectSubset<T, jadwal_vaksinasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal_vaksinasi.
     * @param {jadwal_vaksinasiCreateArgs} args - Arguments to create a Jadwal_vaksinasi.
     * @example
     * // Create one Jadwal_vaksinasi
     * const Jadwal_vaksinasi = await prisma.jadwal_vaksinasi.create({
     *   data: {
     *     // ... data to create a Jadwal_vaksinasi
     *   }
     * })
     * 
     */
    create<T extends jadwal_vaksinasiCreateArgs>(args: SelectSubset<T, jadwal_vaksinasiCreateArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwal_vaksinasis.
     * @param {jadwal_vaksinasiCreateManyArgs} args - Arguments to create many Jadwal_vaksinasis.
     * @example
     * // Create many Jadwal_vaksinasis
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jadwal_vaksinasiCreateManyArgs>(args?: SelectSubset<T, jadwal_vaksinasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jadwal_vaksinasi.
     * @param {jadwal_vaksinasiDeleteArgs} args - Arguments to delete one Jadwal_vaksinasi.
     * @example
     * // Delete one Jadwal_vaksinasi
     * const Jadwal_vaksinasi = await prisma.jadwal_vaksinasi.delete({
     *   where: {
     *     // ... filter to delete one Jadwal_vaksinasi
     *   }
     * })
     * 
     */
    delete<T extends jadwal_vaksinasiDeleteArgs>(args: SelectSubset<T, jadwal_vaksinasiDeleteArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal_vaksinasi.
     * @param {jadwal_vaksinasiUpdateArgs} args - Arguments to update one Jadwal_vaksinasi.
     * @example
     * // Update one Jadwal_vaksinasi
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jadwal_vaksinasiUpdateArgs>(args: SelectSubset<T, jadwal_vaksinasiUpdateArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwal_vaksinasis.
     * @param {jadwal_vaksinasiDeleteManyArgs} args - Arguments to filter Jadwal_vaksinasis to delete.
     * @example
     * // Delete a few Jadwal_vaksinasis
     * const { count } = await prisma.jadwal_vaksinasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jadwal_vaksinasiDeleteManyArgs>(args?: SelectSubset<T, jadwal_vaksinasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwal_vaksinasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_vaksinasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwal_vaksinasis
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jadwal_vaksinasiUpdateManyArgs>(args: SelectSubset<T, jadwal_vaksinasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal_vaksinasi.
     * @param {jadwal_vaksinasiUpsertArgs} args - Arguments to update or create a Jadwal_vaksinasi.
     * @example
     * // Update or create a Jadwal_vaksinasi
     * const jadwal_vaksinasi = await prisma.jadwal_vaksinasi.upsert({
     *   create: {
     *     // ... data to create a Jadwal_vaksinasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal_vaksinasi we want to update
     *   }
     * })
     */
    upsert<T extends jadwal_vaksinasiUpsertArgs>(args: SelectSubset<T, jadwal_vaksinasiUpsertArgs<ExtArgs>>): Prisma__jadwal_vaksinasiClient<$Result.GetResult<Prisma.$jadwal_vaksinasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwal_vaksinasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_vaksinasiCountArgs} args - Arguments to filter Jadwal_vaksinasis to count.
     * @example
     * // Count the number of Jadwal_vaksinasis
     * const count = await prisma.jadwal_vaksinasi.count({
     *   where: {
     *     // ... the filter for the Jadwal_vaksinasis we want to count
     *   }
     * })
    **/
    count<T extends jadwal_vaksinasiCountArgs>(
      args?: Subset<T, jadwal_vaksinasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jadwal_vaksinasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal_vaksinasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_vaksinasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Jadwal_vaksinasiAggregateArgs>(args: Subset<T, Jadwal_vaksinasiAggregateArgs>): Prisma.PrismaPromise<GetJadwal_vaksinasiAggregateType<T>>

    /**
     * Group by Jadwal_vaksinasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_vaksinasiGroupByArgs} args - Group by arguments.
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
      T extends jadwal_vaksinasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jadwal_vaksinasiGroupByArgs['orderBy'] }
        : { orderBy?: jadwal_vaksinasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jadwal_vaksinasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwal_vaksinasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jadwal_vaksinasi model
   */
  readonly fields: jadwal_vaksinasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jadwal_vaksinasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jadwal_vaksinasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayam<T extends AyamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AyamDefaultArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vaksin<T extends VaksinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VaksinDefaultArgs<ExtArgs>>): Prisma__VaksinClient<$Result.GetResult<Prisma.$VaksinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jadwal_vaksinasi model
   */
  interface jadwal_vaksinasiFieldRefs {
    readonly id: FieldRef<"jadwal_vaksinasi", 'String'>
    readonly ayamId: FieldRef<"jadwal_vaksinasi", 'String'>
    readonly vaksinId: FieldRef<"jadwal_vaksinasi", 'String'>
    readonly tanggal: FieldRef<"jadwal_vaksinasi", 'DateTime'>
    readonly dosis: FieldRef<"jadwal_vaksinasi", 'Int'>
    readonly keterangan: FieldRef<"jadwal_vaksinasi", 'String'>
    readonly sudah: FieldRef<"jadwal_vaksinasi", 'Boolean'>
    readonly deleted: FieldRef<"jadwal_vaksinasi", 'Boolean'>
    readonly createdAt: FieldRef<"jadwal_vaksinasi", 'DateTime'>
    readonly updatedAt: FieldRef<"jadwal_vaksinasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jadwal_vaksinasi findUnique
   */
  export type jadwal_vaksinasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_vaksinasi to fetch.
     */
    where: jadwal_vaksinasiWhereUniqueInput
  }

  /**
   * jadwal_vaksinasi findUniqueOrThrow
   */
  export type jadwal_vaksinasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_vaksinasi to fetch.
     */
    where: jadwal_vaksinasiWhereUniqueInput
  }

  /**
   * jadwal_vaksinasi findFirst
   */
  export type jadwal_vaksinasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_vaksinasi to fetch.
     */
    where?: jadwal_vaksinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_vaksinasis to fetch.
     */
    orderBy?: jadwal_vaksinasiOrderByWithRelationInput | jadwal_vaksinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwal_vaksinasis.
     */
    cursor?: jadwal_vaksinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_vaksinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_vaksinasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwal_vaksinasis.
     */
    distinct?: Jadwal_vaksinasiScalarFieldEnum | Jadwal_vaksinasiScalarFieldEnum[]
  }

  /**
   * jadwal_vaksinasi findFirstOrThrow
   */
  export type jadwal_vaksinasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_vaksinasi to fetch.
     */
    where?: jadwal_vaksinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_vaksinasis to fetch.
     */
    orderBy?: jadwal_vaksinasiOrderByWithRelationInput | jadwal_vaksinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwal_vaksinasis.
     */
    cursor?: jadwal_vaksinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_vaksinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_vaksinasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwal_vaksinasis.
     */
    distinct?: Jadwal_vaksinasiScalarFieldEnum | Jadwal_vaksinasiScalarFieldEnum[]
  }

  /**
   * jadwal_vaksinasi findMany
   */
  export type jadwal_vaksinasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_vaksinasis to fetch.
     */
    where?: jadwal_vaksinasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_vaksinasis to fetch.
     */
    orderBy?: jadwal_vaksinasiOrderByWithRelationInput | jadwal_vaksinasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jadwal_vaksinasis.
     */
    cursor?: jadwal_vaksinasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_vaksinasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_vaksinasis.
     */
    skip?: number
    distinct?: Jadwal_vaksinasiScalarFieldEnum | Jadwal_vaksinasiScalarFieldEnum[]
  }

  /**
   * jadwal_vaksinasi create
   */
  export type jadwal_vaksinasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * The data needed to create a jadwal_vaksinasi.
     */
    data: XOR<jadwal_vaksinasiCreateInput, jadwal_vaksinasiUncheckedCreateInput>
  }

  /**
   * jadwal_vaksinasi createMany
   */
  export type jadwal_vaksinasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jadwal_vaksinasis.
     */
    data: jadwal_vaksinasiCreateManyInput | jadwal_vaksinasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jadwal_vaksinasi update
   */
  export type jadwal_vaksinasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * The data needed to update a jadwal_vaksinasi.
     */
    data: XOR<jadwal_vaksinasiUpdateInput, jadwal_vaksinasiUncheckedUpdateInput>
    /**
     * Choose, which jadwal_vaksinasi to update.
     */
    where: jadwal_vaksinasiWhereUniqueInput
  }

  /**
   * jadwal_vaksinasi updateMany
   */
  export type jadwal_vaksinasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jadwal_vaksinasis.
     */
    data: XOR<jadwal_vaksinasiUpdateManyMutationInput, jadwal_vaksinasiUncheckedUpdateManyInput>
    /**
     * Filter which jadwal_vaksinasis to update
     */
    where?: jadwal_vaksinasiWhereInput
    /**
     * Limit how many jadwal_vaksinasis to update.
     */
    limit?: number
  }

  /**
   * jadwal_vaksinasi upsert
   */
  export type jadwal_vaksinasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * The filter to search for the jadwal_vaksinasi to update in case it exists.
     */
    where: jadwal_vaksinasiWhereUniqueInput
    /**
     * In case the jadwal_vaksinasi found by the `where` argument doesn't exist, create a new jadwal_vaksinasi with this data.
     */
    create: XOR<jadwal_vaksinasiCreateInput, jadwal_vaksinasiUncheckedCreateInput>
    /**
     * In case the jadwal_vaksinasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jadwal_vaksinasiUpdateInput, jadwal_vaksinasiUncheckedUpdateInput>
  }

  /**
   * jadwal_vaksinasi delete
   */
  export type jadwal_vaksinasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
    /**
     * Filter which jadwal_vaksinasi to delete.
     */
    where: jadwal_vaksinasiWhereUniqueInput
  }

  /**
   * jadwal_vaksinasi deleteMany
   */
  export type jadwal_vaksinasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwal_vaksinasis to delete
     */
    where?: jadwal_vaksinasiWhereInput
    /**
     * Limit how many jadwal_vaksinasis to delete.
     */
    limit?: number
  }

  /**
   * jadwal_vaksinasi without action
   */
  export type jadwal_vaksinasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_vaksinasi
     */
    select?: jadwal_vaksinasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_vaksinasi
     */
    omit?: jadwal_vaksinasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_vaksinasiInclude<ExtArgs> | null
  }


  /**
   * Model penyakit
   */

  export type AggregatePenyakit = {
    _count: PenyakitCountAggregateOutputType | null
    _min: PenyakitMinAggregateOutputType | null
    _max: PenyakitMaxAggregateOutputType | null
  }

  export type PenyakitMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    gejala: string | null
    pengobatan: string | null
    gambar: string | null
    ayamId: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenyakitMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    gejala: string | null
    pengobatan: string | null
    gambar: string | null
    ayamId: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenyakitCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    gejala: number
    pengobatan: number
    gambar: number
    ayamId: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PenyakitMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    gejala?: true
    pengobatan?: true
    gambar?: true
    ayamId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenyakitMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    gejala?: true
    pengobatan?: true
    gambar?: true
    ayamId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenyakitCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    gejala?: true
    pengobatan?: true
    gambar?: true
    ayamId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PenyakitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penyakit to aggregate.
     */
    where?: penyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penyakits to fetch.
     */
    orderBy?: penyakitOrderByWithRelationInput | penyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penyakits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penyakits
    **/
    _count?: true | PenyakitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenyakitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenyakitMaxAggregateInputType
  }

  export type GetPenyakitAggregateType<T extends PenyakitAggregateArgs> = {
        [P in keyof T & keyof AggregatePenyakit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenyakit[P]>
      : GetScalarType<T[P], AggregatePenyakit[P]>
  }




  export type penyakitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penyakitWhereInput
    orderBy?: penyakitOrderByWithAggregationInput | penyakitOrderByWithAggregationInput[]
    by: PenyakitScalarFieldEnum[] | PenyakitScalarFieldEnum
    having?: penyakitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenyakitCountAggregateInputType | true
    _min?: PenyakitMinAggregateInputType
    _max?: PenyakitMaxAggregateInputType
  }

  export type PenyakitGroupByOutputType = {
    id: string
    nama: string
    deskripsi: string
    gejala: string
    pengobatan: string
    gambar: string
    ayamId: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PenyakitCountAggregateOutputType | null
    _min: PenyakitMinAggregateOutputType | null
    _max: PenyakitMaxAggregateOutputType | null
  }

  type GetPenyakitGroupByPayload<T extends penyakitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenyakitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenyakitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenyakitGroupByOutputType[P]>
            : GetScalarType<T[P], PenyakitGroupByOutputType[P]>
        }
      >
    >


  export type penyakitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    gejala?: boolean
    pengobatan?: boolean
    gambar?: boolean
    ayamId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayam?: boolean | AyamDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penyakit"]>



  export type penyakitSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    gejala?: boolean
    pengobatan?: boolean
    gambar?: boolean
    ayamId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type penyakitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "gejala" | "pengobatan" | "gambar" | "ayamId" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["penyakit"]>
  export type penyakitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayam?: boolean | AyamDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }

  export type $penyakitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "penyakit"
    objects: {
      ayam: Prisma.$AyamPayload<ExtArgs>
      obat: Prisma.$ObatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string
      gejala: string
      pengobatan: string
      gambar: string
      ayamId: string
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["penyakit"]>
    composites: {}
  }

  type penyakitGetPayload<S extends boolean | null | undefined | penyakitDefaultArgs> = $Result.GetResult<Prisma.$penyakitPayload, S>

  type penyakitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penyakitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenyakitCountAggregateInputType | true
    }

  export interface penyakitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['penyakit'], meta: { name: 'penyakit' } }
    /**
     * Find zero or one Penyakit that matches the filter.
     * @param {penyakitFindUniqueArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penyakitFindUniqueArgs>(args: SelectSubset<T, penyakitFindUniqueArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penyakit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penyakitFindUniqueOrThrowArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penyakitFindUniqueOrThrowArgs>(args: SelectSubset<T, penyakitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penyakit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penyakitFindFirstArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penyakitFindFirstArgs>(args?: SelectSubset<T, penyakitFindFirstArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penyakit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penyakitFindFirstOrThrowArgs} args - Arguments to find a Penyakit
     * @example
     * // Get one Penyakit
     * const penyakit = await prisma.penyakit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penyakitFindFirstOrThrowArgs>(args?: SelectSubset<T, penyakitFindFirstOrThrowArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penyakits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penyakitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penyakits
     * const penyakits = await prisma.penyakit.findMany()
     * 
     * // Get first 10 Penyakits
     * const penyakits = await prisma.penyakit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penyakitWithIdOnly = await prisma.penyakit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends penyakitFindManyArgs>(args?: SelectSubset<T, penyakitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penyakit.
     * @param {penyakitCreateArgs} args - Arguments to create a Penyakit.
     * @example
     * // Create one Penyakit
     * const Penyakit = await prisma.penyakit.create({
     *   data: {
     *     // ... data to create a Penyakit
     *   }
     * })
     * 
     */
    create<T extends penyakitCreateArgs>(args: SelectSubset<T, penyakitCreateArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penyakits.
     * @param {penyakitCreateManyArgs} args - Arguments to create many Penyakits.
     * @example
     * // Create many Penyakits
     * const penyakit = await prisma.penyakit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penyakitCreateManyArgs>(args?: SelectSubset<T, penyakitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penyakit.
     * @param {penyakitDeleteArgs} args - Arguments to delete one Penyakit.
     * @example
     * // Delete one Penyakit
     * const Penyakit = await prisma.penyakit.delete({
     *   where: {
     *     // ... filter to delete one Penyakit
     *   }
     * })
     * 
     */
    delete<T extends penyakitDeleteArgs>(args: SelectSubset<T, penyakitDeleteArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penyakit.
     * @param {penyakitUpdateArgs} args - Arguments to update one Penyakit.
     * @example
     * // Update one Penyakit
     * const penyakit = await prisma.penyakit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penyakitUpdateArgs>(args: SelectSubset<T, penyakitUpdateArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penyakits.
     * @param {penyakitDeleteManyArgs} args - Arguments to filter Penyakits to delete.
     * @example
     * // Delete a few Penyakits
     * const { count } = await prisma.penyakit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penyakitDeleteManyArgs>(args?: SelectSubset<T, penyakitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penyakits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penyakitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penyakits
     * const penyakit = await prisma.penyakit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penyakitUpdateManyArgs>(args: SelectSubset<T, penyakitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penyakit.
     * @param {penyakitUpsertArgs} args - Arguments to update or create a Penyakit.
     * @example
     * // Update or create a Penyakit
     * const penyakit = await prisma.penyakit.upsert({
     *   create: {
     *     // ... data to create a Penyakit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penyakit we want to update
     *   }
     * })
     */
    upsert<T extends penyakitUpsertArgs>(args: SelectSubset<T, penyakitUpsertArgs<ExtArgs>>): Prisma__penyakitClient<$Result.GetResult<Prisma.$penyakitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penyakits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penyakitCountArgs} args - Arguments to filter Penyakits to count.
     * @example
     * // Count the number of Penyakits
     * const count = await prisma.penyakit.count({
     *   where: {
     *     // ... the filter for the Penyakits we want to count
     *   }
     * })
    **/
    count<T extends penyakitCountArgs>(
      args?: Subset<T, penyakitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenyakitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penyakit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenyakitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenyakitAggregateArgs>(args: Subset<T, PenyakitAggregateArgs>): Prisma.PrismaPromise<GetPenyakitAggregateType<T>>

    /**
     * Group by Penyakit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penyakitGroupByArgs} args - Group by arguments.
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
      T extends penyakitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penyakitGroupByArgs['orderBy'] }
        : { orderBy?: penyakitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penyakitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenyakitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the penyakit model
   */
  readonly fields: penyakitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for penyakit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penyakitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayam<T extends AyamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AyamDefaultArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obat<T extends ObatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObatDefaultArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the penyakit model
   */
  interface penyakitFieldRefs {
    readonly id: FieldRef<"penyakit", 'String'>
    readonly nama: FieldRef<"penyakit", 'String'>
    readonly deskripsi: FieldRef<"penyakit", 'String'>
    readonly gejala: FieldRef<"penyakit", 'String'>
    readonly pengobatan: FieldRef<"penyakit", 'String'>
    readonly gambar: FieldRef<"penyakit", 'String'>
    readonly ayamId: FieldRef<"penyakit", 'String'>
    readonly deleted: FieldRef<"penyakit", 'Boolean'>
    readonly createdAt: FieldRef<"penyakit", 'DateTime'>
    readonly updatedAt: FieldRef<"penyakit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * penyakit findUnique
   */
  export type penyakitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * Filter, which penyakit to fetch.
     */
    where: penyakitWhereUniqueInput
  }

  /**
   * penyakit findUniqueOrThrow
   */
  export type penyakitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * Filter, which penyakit to fetch.
     */
    where: penyakitWhereUniqueInput
  }

  /**
   * penyakit findFirst
   */
  export type penyakitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * Filter, which penyakit to fetch.
     */
    where?: penyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penyakits to fetch.
     */
    orderBy?: penyakitOrderByWithRelationInput | penyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penyakits.
     */
    cursor?: penyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penyakits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penyakits.
     */
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * penyakit findFirstOrThrow
   */
  export type penyakitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * Filter, which penyakit to fetch.
     */
    where?: penyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penyakits to fetch.
     */
    orderBy?: penyakitOrderByWithRelationInput | penyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penyakits.
     */
    cursor?: penyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penyakits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penyakits.
     */
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * penyakit findMany
   */
  export type penyakitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * Filter, which penyakits to fetch.
     */
    where?: penyakitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penyakits to fetch.
     */
    orderBy?: penyakitOrderByWithRelationInput | penyakitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penyakits.
     */
    cursor?: penyakitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penyakits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penyakits.
     */
    skip?: number
    distinct?: PenyakitScalarFieldEnum | PenyakitScalarFieldEnum[]
  }

  /**
   * penyakit create
   */
  export type penyakitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * The data needed to create a penyakit.
     */
    data: XOR<penyakitCreateInput, penyakitUncheckedCreateInput>
  }

  /**
   * penyakit createMany
   */
  export type penyakitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penyakits.
     */
    data: penyakitCreateManyInput | penyakitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * penyakit update
   */
  export type penyakitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * The data needed to update a penyakit.
     */
    data: XOR<penyakitUpdateInput, penyakitUncheckedUpdateInput>
    /**
     * Choose, which penyakit to update.
     */
    where: penyakitWhereUniqueInput
  }

  /**
   * penyakit updateMany
   */
  export type penyakitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penyakits.
     */
    data: XOR<penyakitUpdateManyMutationInput, penyakitUncheckedUpdateManyInput>
    /**
     * Filter which penyakits to update
     */
    where?: penyakitWhereInput
    /**
     * Limit how many penyakits to update.
     */
    limit?: number
  }

  /**
   * penyakit upsert
   */
  export type penyakitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * The filter to search for the penyakit to update in case it exists.
     */
    where: penyakitWhereUniqueInput
    /**
     * In case the penyakit found by the `where` argument doesn't exist, create a new penyakit with this data.
     */
    create: XOR<penyakitCreateInput, penyakitUncheckedCreateInput>
    /**
     * In case the penyakit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penyakitUpdateInput, penyakitUncheckedUpdateInput>
  }

  /**
   * penyakit delete
   */
  export type penyakitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
    /**
     * Filter which penyakit to delete.
     */
    where: penyakitWhereUniqueInput
  }

  /**
   * penyakit deleteMany
   */
  export type penyakitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penyakits to delete
     */
    where?: penyakitWhereInput
    /**
     * Limit how many penyakits to delete.
     */
    limit?: number
  }

  /**
   * penyakit without action
   */
  export type penyakitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penyakit
     */
    select?: penyakitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penyakit
     */
    omit?: penyakitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penyakitInclude<ExtArgs> | null
  }


  /**
   * Model mortalitas
   */

  export type AggregateMortalitas = {
    _count: MortalitasCountAggregateOutputType | null
    _avg: MortalitasAvgAggregateOutputType | null
    _sum: MortalitasSumAggregateOutputType | null
    _min: MortalitasMinAggregateOutputType | null
    _max: MortalitasMaxAggregateOutputType | null
  }

  export type MortalitasAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type MortalitasSumAggregateOutputType = {
    jumlah: number | null
  }

  export type MortalitasMinAggregateOutputType = {
    id: string | null
    ayamId: string | null
    tanggal: Date | null
    jumlah: number | null
    penyebab: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MortalitasMaxAggregateOutputType = {
    id: string | null
    ayamId: string | null
    tanggal: Date | null
    jumlah: number | null
    penyebab: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MortalitasCountAggregateOutputType = {
    id: number
    ayamId: number
    tanggal: number
    jumlah: number
    penyebab: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MortalitasAvgAggregateInputType = {
    jumlah?: true
  }

  export type MortalitasSumAggregateInputType = {
    jumlah?: true
  }

  export type MortalitasMinAggregateInputType = {
    id?: true
    ayamId?: true
    tanggal?: true
    jumlah?: true
    penyebab?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MortalitasMaxAggregateInputType = {
    id?: true
    ayamId?: true
    tanggal?: true
    jumlah?: true
    penyebab?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MortalitasCountAggregateInputType = {
    id?: true
    ayamId?: true
    tanggal?: true
    jumlah?: true
    penyebab?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MortalitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mortalitas to aggregate.
     */
    where?: mortalitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mortalitas to fetch.
     */
    orderBy?: mortalitasOrderByWithRelationInput | mortalitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mortalitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mortalitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mortalitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mortalitas
    **/
    _count?: true | MortalitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MortalitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MortalitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MortalitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MortalitasMaxAggregateInputType
  }

  export type GetMortalitasAggregateType<T extends MortalitasAggregateArgs> = {
        [P in keyof T & keyof AggregateMortalitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMortalitas[P]>
      : GetScalarType<T[P], AggregateMortalitas[P]>
  }




  export type mortalitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mortalitasWhereInput
    orderBy?: mortalitasOrderByWithAggregationInput | mortalitasOrderByWithAggregationInput[]
    by: MortalitasScalarFieldEnum[] | MortalitasScalarFieldEnum
    having?: mortalitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MortalitasCountAggregateInputType | true
    _avg?: MortalitasAvgAggregateInputType
    _sum?: MortalitasSumAggregateInputType
    _min?: MortalitasMinAggregateInputType
    _max?: MortalitasMaxAggregateInputType
  }

  export type MortalitasGroupByOutputType = {
    id: string
    ayamId: string
    tanggal: Date
    jumlah: number
    penyebab: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: MortalitasCountAggregateOutputType | null
    _avg: MortalitasAvgAggregateOutputType | null
    _sum: MortalitasSumAggregateOutputType | null
    _min: MortalitasMinAggregateOutputType | null
    _max: MortalitasMaxAggregateOutputType | null
  }

  type GetMortalitasGroupByPayload<T extends mortalitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MortalitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MortalitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MortalitasGroupByOutputType[P]>
            : GetScalarType<T[P], MortalitasGroupByOutputType[P]>
        }
      >
    >


  export type mortalitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ayamId?: boolean
    tanggal?: boolean
    jumlah?: boolean
    penyebab?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ayam?: boolean | AyamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mortalitas"]>



  export type mortalitasSelectScalar = {
    id?: boolean
    ayamId?: boolean
    tanggal?: boolean
    jumlah?: boolean
    penyebab?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type mortalitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ayamId" | "tanggal" | "jumlah" | "penyebab" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["mortalitas"]>
  export type mortalitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ayam?: boolean | AyamDefaultArgs<ExtArgs>
  }

  export type $mortalitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mortalitas"
    objects: {
      ayam: Prisma.$AyamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ayamId: string
      tanggal: Date
      jumlah: number
      penyebab: string
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mortalitas"]>
    composites: {}
  }

  type mortalitasGetPayload<S extends boolean | null | undefined | mortalitasDefaultArgs> = $Result.GetResult<Prisma.$mortalitasPayload, S>

  type mortalitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mortalitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MortalitasCountAggregateInputType | true
    }

  export interface mortalitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mortalitas'], meta: { name: 'mortalitas' } }
    /**
     * Find zero or one Mortalitas that matches the filter.
     * @param {mortalitasFindUniqueArgs} args - Arguments to find a Mortalitas
     * @example
     * // Get one Mortalitas
     * const mortalitas = await prisma.mortalitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mortalitasFindUniqueArgs>(args: SelectSubset<T, mortalitasFindUniqueArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mortalitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mortalitasFindUniqueOrThrowArgs} args - Arguments to find a Mortalitas
     * @example
     * // Get one Mortalitas
     * const mortalitas = await prisma.mortalitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mortalitasFindUniqueOrThrowArgs>(args: SelectSubset<T, mortalitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mortalitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mortalitasFindFirstArgs} args - Arguments to find a Mortalitas
     * @example
     * // Get one Mortalitas
     * const mortalitas = await prisma.mortalitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mortalitasFindFirstArgs>(args?: SelectSubset<T, mortalitasFindFirstArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mortalitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mortalitasFindFirstOrThrowArgs} args - Arguments to find a Mortalitas
     * @example
     * // Get one Mortalitas
     * const mortalitas = await prisma.mortalitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mortalitasFindFirstOrThrowArgs>(args?: SelectSubset<T, mortalitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mortalitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mortalitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mortalitas
     * const mortalitas = await prisma.mortalitas.findMany()
     * 
     * // Get first 10 Mortalitas
     * const mortalitas = await prisma.mortalitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mortalitasWithIdOnly = await prisma.mortalitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mortalitasFindManyArgs>(args?: SelectSubset<T, mortalitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mortalitas.
     * @param {mortalitasCreateArgs} args - Arguments to create a Mortalitas.
     * @example
     * // Create one Mortalitas
     * const Mortalitas = await prisma.mortalitas.create({
     *   data: {
     *     // ... data to create a Mortalitas
     *   }
     * })
     * 
     */
    create<T extends mortalitasCreateArgs>(args: SelectSubset<T, mortalitasCreateArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mortalitas.
     * @param {mortalitasCreateManyArgs} args - Arguments to create many Mortalitas.
     * @example
     * // Create many Mortalitas
     * const mortalitas = await prisma.mortalitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mortalitasCreateManyArgs>(args?: SelectSubset<T, mortalitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mortalitas.
     * @param {mortalitasDeleteArgs} args - Arguments to delete one Mortalitas.
     * @example
     * // Delete one Mortalitas
     * const Mortalitas = await prisma.mortalitas.delete({
     *   where: {
     *     // ... filter to delete one Mortalitas
     *   }
     * })
     * 
     */
    delete<T extends mortalitasDeleteArgs>(args: SelectSubset<T, mortalitasDeleteArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mortalitas.
     * @param {mortalitasUpdateArgs} args - Arguments to update one Mortalitas.
     * @example
     * // Update one Mortalitas
     * const mortalitas = await prisma.mortalitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mortalitasUpdateArgs>(args: SelectSubset<T, mortalitasUpdateArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mortalitas.
     * @param {mortalitasDeleteManyArgs} args - Arguments to filter Mortalitas to delete.
     * @example
     * // Delete a few Mortalitas
     * const { count } = await prisma.mortalitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mortalitasDeleteManyArgs>(args?: SelectSubset<T, mortalitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mortalitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mortalitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mortalitas
     * const mortalitas = await prisma.mortalitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mortalitasUpdateManyArgs>(args: SelectSubset<T, mortalitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mortalitas.
     * @param {mortalitasUpsertArgs} args - Arguments to update or create a Mortalitas.
     * @example
     * // Update or create a Mortalitas
     * const mortalitas = await prisma.mortalitas.upsert({
     *   create: {
     *     // ... data to create a Mortalitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mortalitas we want to update
     *   }
     * })
     */
    upsert<T extends mortalitasUpsertArgs>(args: SelectSubset<T, mortalitasUpsertArgs<ExtArgs>>): Prisma__mortalitasClient<$Result.GetResult<Prisma.$mortalitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mortalitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mortalitasCountArgs} args - Arguments to filter Mortalitas to count.
     * @example
     * // Count the number of Mortalitas
     * const count = await prisma.mortalitas.count({
     *   where: {
     *     // ... the filter for the Mortalitas we want to count
     *   }
     * })
    **/
    count<T extends mortalitasCountArgs>(
      args?: Subset<T, mortalitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MortalitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mortalitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MortalitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MortalitasAggregateArgs>(args: Subset<T, MortalitasAggregateArgs>): Prisma.PrismaPromise<GetMortalitasAggregateType<T>>

    /**
     * Group by Mortalitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mortalitasGroupByArgs} args - Group by arguments.
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
      T extends mortalitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mortalitasGroupByArgs['orderBy'] }
        : { orderBy?: mortalitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mortalitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMortalitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mortalitas model
   */
  readonly fields: mortalitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mortalitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mortalitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ayam<T extends AyamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AyamDefaultArgs<ExtArgs>>): Prisma__AyamClient<$Result.GetResult<Prisma.$AyamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mortalitas model
   */
  interface mortalitasFieldRefs {
    readonly id: FieldRef<"mortalitas", 'String'>
    readonly ayamId: FieldRef<"mortalitas", 'String'>
    readonly tanggal: FieldRef<"mortalitas", 'DateTime'>
    readonly jumlah: FieldRef<"mortalitas", 'Int'>
    readonly penyebab: FieldRef<"mortalitas", 'String'>
    readonly deleted: FieldRef<"mortalitas", 'Boolean'>
    readonly createdAt: FieldRef<"mortalitas", 'DateTime'>
    readonly updatedAt: FieldRef<"mortalitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mortalitas findUnique
   */
  export type mortalitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * Filter, which mortalitas to fetch.
     */
    where: mortalitasWhereUniqueInput
  }

  /**
   * mortalitas findUniqueOrThrow
   */
  export type mortalitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * Filter, which mortalitas to fetch.
     */
    where: mortalitasWhereUniqueInput
  }

  /**
   * mortalitas findFirst
   */
  export type mortalitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * Filter, which mortalitas to fetch.
     */
    where?: mortalitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mortalitas to fetch.
     */
    orderBy?: mortalitasOrderByWithRelationInput | mortalitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mortalitas.
     */
    cursor?: mortalitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mortalitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mortalitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mortalitas.
     */
    distinct?: MortalitasScalarFieldEnum | MortalitasScalarFieldEnum[]
  }

  /**
   * mortalitas findFirstOrThrow
   */
  export type mortalitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * Filter, which mortalitas to fetch.
     */
    where?: mortalitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mortalitas to fetch.
     */
    orderBy?: mortalitasOrderByWithRelationInput | mortalitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mortalitas.
     */
    cursor?: mortalitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mortalitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mortalitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mortalitas.
     */
    distinct?: MortalitasScalarFieldEnum | MortalitasScalarFieldEnum[]
  }

  /**
   * mortalitas findMany
   */
  export type mortalitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * Filter, which mortalitas to fetch.
     */
    where?: mortalitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mortalitas to fetch.
     */
    orderBy?: mortalitasOrderByWithRelationInput | mortalitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mortalitas.
     */
    cursor?: mortalitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mortalitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mortalitas.
     */
    skip?: number
    distinct?: MortalitasScalarFieldEnum | MortalitasScalarFieldEnum[]
  }

  /**
   * mortalitas create
   */
  export type mortalitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * The data needed to create a mortalitas.
     */
    data: XOR<mortalitasCreateInput, mortalitasUncheckedCreateInput>
  }

  /**
   * mortalitas createMany
   */
  export type mortalitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mortalitas.
     */
    data: mortalitasCreateManyInput | mortalitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mortalitas update
   */
  export type mortalitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * The data needed to update a mortalitas.
     */
    data: XOR<mortalitasUpdateInput, mortalitasUncheckedUpdateInput>
    /**
     * Choose, which mortalitas to update.
     */
    where: mortalitasWhereUniqueInput
  }

  /**
   * mortalitas updateMany
   */
  export type mortalitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mortalitas.
     */
    data: XOR<mortalitasUpdateManyMutationInput, mortalitasUncheckedUpdateManyInput>
    /**
     * Filter which mortalitas to update
     */
    where?: mortalitasWhereInput
    /**
     * Limit how many mortalitas to update.
     */
    limit?: number
  }

  /**
   * mortalitas upsert
   */
  export type mortalitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * The filter to search for the mortalitas to update in case it exists.
     */
    where: mortalitasWhereUniqueInput
    /**
     * In case the mortalitas found by the `where` argument doesn't exist, create a new mortalitas with this data.
     */
    create: XOR<mortalitasCreateInput, mortalitasUncheckedCreateInput>
    /**
     * In case the mortalitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mortalitasUpdateInput, mortalitasUncheckedUpdateInput>
  }

  /**
   * mortalitas delete
   */
  export type mortalitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
    /**
     * Filter which mortalitas to delete.
     */
    where: mortalitasWhereUniqueInput
  }

  /**
   * mortalitas deleteMany
   */
  export type mortalitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mortalitas to delete
     */
    where?: mortalitasWhereInput
    /**
     * Limit how many mortalitas to delete.
     */
    limit?: number
  }

  /**
   * mortalitas without action
   */
  export type mortalitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mortalitas
     */
    select?: mortalitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mortalitas
     */
    omit?: mortalitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mortalitasInclude<ExtArgs> | null
  }


  /**
   * Model panen
   */

  export type AggregatePanen = {
    _count: PanenCountAggregateOutputType | null
    _avg: PanenAvgAggregateOutputType | null
    _sum: PanenSumAggregateOutputType | null
    _min: PanenMinAggregateOutputType | null
    _max: PanenMaxAggregateOutputType | null
  }

  export type PanenAvgAggregateOutputType = {
    jumlah: number | null
    harga: number | null
  }

  export type PanenSumAggregateOutputType = {
    jumlah: number | null
    harga: number | null
  }

  export type PanenMinAggregateOutputType = {
    id: string | null
    jenis: $Enums.Jenis | null
    tindakan: $Enums.Tindakan | null
    jumlah: number | null
    harga: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PanenMaxAggregateOutputType = {
    id: string | null
    jenis: $Enums.Jenis | null
    tindakan: $Enums.Tindakan | null
    jumlah: number | null
    harga: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PanenCountAggregateOutputType = {
    id: number
    jenis: number
    tindakan: number
    jumlah: number
    harga: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PanenAvgAggregateInputType = {
    jumlah?: true
    harga?: true
  }

  export type PanenSumAggregateInputType = {
    jumlah?: true
    harga?: true
  }

  export type PanenMinAggregateInputType = {
    id?: true
    jenis?: true
    tindakan?: true
    jumlah?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PanenMaxAggregateInputType = {
    id?: true
    jenis?: true
    tindakan?: true
    jumlah?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PanenCountAggregateInputType = {
    id?: true
    jenis?: true
    tindakan?: true
    jumlah?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PanenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which panen to aggregate.
     */
    where?: panenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of panens to fetch.
     */
    orderBy?: panenOrderByWithRelationInput | panenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: panenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` panens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` panens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned panens
    **/
    _count?: true | PanenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanenMaxAggregateInputType
  }

  export type GetPanenAggregateType<T extends PanenAggregateArgs> = {
        [P in keyof T & keyof AggregatePanen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanen[P]>
      : GetScalarType<T[P], AggregatePanen[P]>
  }




  export type panenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: panenWhereInput
    orderBy?: panenOrderByWithAggregationInput | panenOrderByWithAggregationInput[]
    by: PanenScalarFieldEnum[] | PanenScalarFieldEnum
    having?: panenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanenCountAggregateInputType | true
    _avg?: PanenAvgAggregateInputType
    _sum?: PanenSumAggregateInputType
    _min?: PanenMinAggregateInputType
    _max?: PanenMaxAggregateInputType
  }

  export type PanenGroupByOutputType = {
    id: string
    jenis: $Enums.Jenis
    tindakan: $Enums.Tindakan
    jumlah: number
    harga: number | null
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PanenCountAggregateOutputType | null
    _avg: PanenAvgAggregateOutputType | null
    _sum: PanenSumAggregateOutputType | null
    _min: PanenMinAggregateOutputType | null
    _max: PanenMaxAggregateOutputType | null
  }

  type GetPanenGroupByPayload<T extends panenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanenGroupByOutputType[P]>
            : GetScalarType<T[P], PanenGroupByOutputType[P]>
        }
      >
    >


  export type panenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jenis?: boolean
    tindakan?: boolean
    jumlah?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["panen"]>



  export type panenSelectScalar = {
    id?: boolean
    jenis?: boolean
    tindakan?: boolean
    jumlah?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type panenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jenis" | "tindakan" | "jumlah" | "harga" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["panen"]>

  export type $panenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "panen"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jenis: $Enums.Jenis
      tindakan: $Enums.Tindakan
      jumlah: number
      harga: number | null
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["panen"]>
    composites: {}
  }

  type panenGetPayload<S extends boolean | null | undefined | panenDefaultArgs> = $Result.GetResult<Prisma.$panenPayload, S>

  type panenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<panenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanenCountAggregateInputType | true
    }

  export interface panenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['panen'], meta: { name: 'panen' } }
    /**
     * Find zero or one Panen that matches the filter.
     * @param {panenFindUniqueArgs} args - Arguments to find a Panen
     * @example
     * // Get one Panen
     * const panen = await prisma.panen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends panenFindUniqueArgs>(args: SelectSubset<T, panenFindUniqueArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Panen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {panenFindUniqueOrThrowArgs} args - Arguments to find a Panen
     * @example
     * // Get one Panen
     * const panen = await prisma.panen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends panenFindUniqueOrThrowArgs>(args: SelectSubset<T, panenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {panenFindFirstArgs} args - Arguments to find a Panen
     * @example
     * // Get one Panen
     * const panen = await prisma.panen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends panenFindFirstArgs>(args?: SelectSubset<T, panenFindFirstArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {panenFindFirstOrThrowArgs} args - Arguments to find a Panen
     * @example
     * // Get one Panen
     * const panen = await prisma.panen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends panenFindFirstOrThrowArgs>(args?: SelectSubset<T, panenFindFirstOrThrowArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Panens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {panenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Panens
     * const panens = await prisma.panen.findMany()
     * 
     * // Get first 10 Panens
     * const panens = await prisma.panen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panenWithIdOnly = await prisma.panen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends panenFindManyArgs>(args?: SelectSubset<T, panenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Panen.
     * @param {panenCreateArgs} args - Arguments to create a Panen.
     * @example
     * // Create one Panen
     * const Panen = await prisma.panen.create({
     *   data: {
     *     // ... data to create a Panen
     *   }
     * })
     * 
     */
    create<T extends panenCreateArgs>(args: SelectSubset<T, panenCreateArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Panens.
     * @param {panenCreateManyArgs} args - Arguments to create many Panens.
     * @example
     * // Create many Panens
     * const panen = await prisma.panen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends panenCreateManyArgs>(args?: SelectSubset<T, panenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Panen.
     * @param {panenDeleteArgs} args - Arguments to delete one Panen.
     * @example
     * // Delete one Panen
     * const Panen = await prisma.panen.delete({
     *   where: {
     *     // ... filter to delete one Panen
     *   }
     * })
     * 
     */
    delete<T extends panenDeleteArgs>(args: SelectSubset<T, panenDeleteArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Panen.
     * @param {panenUpdateArgs} args - Arguments to update one Panen.
     * @example
     * // Update one Panen
     * const panen = await prisma.panen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends panenUpdateArgs>(args: SelectSubset<T, panenUpdateArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Panens.
     * @param {panenDeleteManyArgs} args - Arguments to filter Panens to delete.
     * @example
     * // Delete a few Panens
     * const { count } = await prisma.panen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends panenDeleteManyArgs>(args?: SelectSubset<T, panenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {panenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Panens
     * const panen = await prisma.panen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends panenUpdateManyArgs>(args: SelectSubset<T, panenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Panen.
     * @param {panenUpsertArgs} args - Arguments to update or create a Panen.
     * @example
     * // Update or create a Panen
     * const panen = await prisma.panen.upsert({
     *   create: {
     *     // ... data to create a Panen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Panen we want to update
     *   }
     * })
     */
    upsert<T extends panenUpsertArgs>(args: SelectSubset<T, panenUpsertArgs<ExtArgs>>): Prisma__panenClient<$Result.GetResult<Prisma.$panenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Panens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {panenCountArgs} args - Arguments to filter Panens to count.
     * @example
     * // Count the number of Panens
     * const count = await prisma.panen.count({
     *   where: {
     *     // ... the filter for the Panens we want to count
     *   }
     * })
    **/
    count<T extends panenCountArgs>(
      args?: Subset<T, panenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Panen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PanenAggregateArgs>(args: Subset<T, PanenAggregateArgs>): Prisma.PrismaPromise<GetPanenAggregateType<T>>

    /**
     * Group by Panen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {panenGroupByArgs} args - Group by arguments.
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
      T extends panenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: panenGroupByArgs['orderBy'] }
        : { orderBy?: panenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, panenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the panen model
   */
  readonly fields: panenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for panen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__panenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the panen model
   */
  interface panenFieldRefs {
    readonly id: FieldRef<"panen", 'String'>
    readonly jenis: FieldRef<"panen", 'Jenis'>
    readonly tindakan: FieldRef<"panen", 'Tindakan'>
    readonly jumlah: FieldRef<"panen", 'Int'>
    readonly harga: FieldRef<"panen", 'Int'>
    readonly deleted: FieldRef<"panen", 'Boolean'>
    readonly createdAt: FieldRef<"panen", 'DateTime'>
    readonly updatedAt: FieldRef<"panen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * panen findUnique
   */
  export type panenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * Filter, which panen to fetch.
     */
    where: panenWhereUniqueInput
  }

  /**
   * panen findUniqueOrThrow
   */
  export type panenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * Filter, which panen to fetch.
     */
    where: panenWhereUniqueInput
  }

  /**
   * panen findFirst
   */
  export type panenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * Filter, which panen to fetch.
     */
    where?: panenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of panens to fetch.
     */
    orderBy?: panenOrderByWithRelationInput | panenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for panens.
     */
    cursor?: panenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` panens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` panens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of panens.
     */
    distinct?: PanenScalarFieldEnum | PanenScalarFieldEnum[]
  }

  /**
   * panen findFirstOrThrow
   */
  export type panenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * Filter, which panen to fetch.
     */
    where?: panenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of panens to fetch.
     */
    orderBy?: panenOrderByWithRelationInput | panenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for panens.
     */
    cursor?: panenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` panens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` panens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of panens.
     */
    distinct?: PanenScalarFieldEnum | PanenScalarFieldEnum[]
  }

  /**
   * panen findMany
   */
  export type panenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * Filter, which panens to fetch.
     */
    where?: panenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of panens to fetch.
     */
    orderBy?: panenOrderByWithRelationInput | panenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing panens.
     */
    cursor?: panenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` panens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` panens.
     */
    skip?: number
    distinct?: PanenScalarFieldEnum | PanenScalarFieldEnum[]
  }

  /**
   * panen create
   */
  export type panenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * The data needed to create a panen.
     */
    data: XOR<panenCreateInput, panenUncheckedCreateInput>
  }

  /**
   * panen createMany
   */
  export type panenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many panens.
     */
    data: panenCreateManyInput | panenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * panen update
   */
  export type panenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * The data needed to update a panen.
     */
    data: XOR<panenUpdateInput, panenUncheckedUpdateInput>
    /**
     * Choose, which panen to update.
     */
    where: panenWhereUniqueInput
  }

  /**
   * panen updateMany
   */
  export type panenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update panens.
     */
    data: XOR<panenUpdateManyMutationInput, panenUncheckedUpdateManyInput>
    /**
     * Filter which panens to update
     */
    where?: panenWhereInput
    /**
     * Limit how many panens to update.
     */
    limit?: number
  }

  /**
   * panen upsert
   */
  export type panenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * The filter to search for the panen to update in case it exists.
     */
    where: panenWhereUniqueInput
    /**
     * In case the panen found by the `where` argument doesn't exist, create a new panen with this data.
     */
    create: XOR<panenCreateInput, panenUncheckedCreateInput>
    /**
     * In case the panen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<panenUpdateInput, panenUncheckedUpdateInput>
  }

  /**
   * panen delete
   */
  export type panenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
    /**
     * Filter which panen to delete.
     */
    where: panenWhereUniqueInput
  }

  /**
   * panen deleteMany
   */
  export type panenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which panens to delete
     */
    where?: panenWhereInput
    /**
     * Limit how many panens to delete.
     */
    limit?: number
  }

  /**
   * panen without action
   */
  export type panenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the panen
     */
    select?: panenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the panen
     */
    omit?: panenOmit<ExtArgs> | null
  }


  /**
   * Model belanja
   */

  export type AggregateBelanja = {
    _count: BelanjaCountAggregateOutputType | null
    _avg: BelanjaAvgAggregateOutputType | null
    _sum: BelanjaSumAggregateOutputType | null
    _min: BelanjaMinAggregateOutputType | null
    _max: BelanjaMaxAggregateOutputType | null
  }

  export type BelanjaAvgAggregateOutputType = {
    jumlah: number | null
    harga: number | null
  }

  export type BelanjaSumAggregateOutputType = {
    jumlah: number | null
    harga: number | null
  }

  export type BelanjaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    jumlah: number | null
    harga: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BelanjaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    jumlah: number | null
    harga: number | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BelanjaCountAggregateOutputType = {
    id: number
    nama: number
    jumlah: number
    harga: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BelanjaAvgAggregateInputType = {
    jumlah?: true
    harga?: true
  }

  export type BelanjaSumAggregateInputType = {
    jumlah?: true
    harga?: true
  }

  export type BelanjaMinAggregateInputType = {
    id?: true
    nama?: true
    jumlah?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BelanjaMaxAggregateInputType = {
    id?: true
    nama?: true
    jumlah?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BelanjaCountAggregateInputType = {
    id?: true
    nama?: true
    jumlah?: true
    harga?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BelanjaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which belanja to aggregate.
     */
    where?: belanjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belanjas to fetch.
     */
    orderBy?: belanjaOrderByWithRelationInput | belanjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: belanjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belanjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belanjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned belanjas
    **/
    _count?: true | BelanjaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BelanjaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BelanjaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BelanjaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BelanjaMaxAggregateInputType
  }

  export type GetBelanjaAggregateType<T extends BelanjaAggregateArgs> = {
        [P in keyof T & keyof AggregateBelanja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBelanja[P]>
      : GetScalarType<T[P], AggregateBelanja[P]>
  }




  export type belanjaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: belanjaWhereInput
    orderBy?: belanjaOrderByWithAggregationInput | belanjaOrderByWithAggregationInput[]
    by: BelanjaScalarFieldEnum[] | BelanjaScalarFieldEnum
    having?: belanjaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BelanjaCountAggregateInputType | true
    _avg?: BelanjaAvgAggregateInputType
    _sum?: BelanjaSumAggregateInputType
    _min?: BelanjaMinAggregateInputType
    _max?: BelanjaMaxAggregateInputType
  }

  export type BelanjaGroupByOutputType = {
    id: string
    nama: string
    jumlah: number
    harga: number
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: BelanjaCountAggregateOutputType | null
    _avg: BelanjaAvgAggregateOutputType | null
    _sum: BelanjaSumAggregateOutputType | null
    _min: BelanjaMinAggregateOutputType | null
    _max: BelanjaMaxAggregateOutputType | null
  }

  type GetBelanjaGroupByPayload<T extends belanjaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BelanjaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BelanjaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BelanjaGroupByOutputType[P]>
            : GetScalarType<T[P], BelanjaGroupByOutputType[P]>
        }
      >
    >


  export type belanjaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    jumlah?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["belanja"]>



  export type belanjaSelectScalar = {
    id?: boolean
    nama?: boolean
    jumlah?: boolean
    harga?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type belanjaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "jumlah" | "harga" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["belanja"]>

  export type $belanjaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "belanja"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      jumlah: number
      harga: number
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["belanja"]>
    composites: {}
  }

  type belanjaGetPayload<S extends boolean | null | undefined | belanjaDefaultArgs> = $Result.GetResult<Prisma.$belanjaPayload, S>

  type belanjaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<belanjaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BelanjaCountAggregateInputType | true
    }

  export interface belanjaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['belanja'], meta: { name: 'belanja' } }
    /**
     * Find zero or one Belanja that matches the filter.
     * @param {belanjaFindUniqueArgs} args - Arguments to find a Belanja
     * @example
     * // Get one Belanja
     * const belanja = await prisma.belanja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends belanjaFindUniqueArgs>(args: SelectSubset<T, belanjaFindUniqueArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Belanja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {belanjaFindUniqueOrThrowArgs} args - Arguments to find a Belanja
     * @example
     * // Get one Belanja
     * const belanja = await prisma.belanja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends belanjaFindUniqueOrThrowArgs>(args: SelectSubset<T, belanjaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Belanja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belanjaFindFirstArgs} args - Arguments to find a Belanja
     * @example
     * // Get one Belanja
     * const belanja = await prisma.belanja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends belanjaFindFirstArgs>(args?: SelectSubset<T, belanjaFindFirstArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Belanja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belanjaFindFirstOrThrowArgs} args - Arguments to find a Belanja
     * @example
     * // Get one Belanja
     * const belanja = await prisma.belanja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends belanjaFindFirstOrThrowArgs>(args?: SelectSubset<T, belanjaFindFirstOrThrowArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Belanjas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belanjaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Belanjas
     * const belanjas = await prisma.belanja.findMany()
     * 
     * // Get first 10 Belanjas
     * const belanjas = await prisma.belanja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const belanjaWithIdOnly = await prisma.belanja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends belanjaFindManyArgs>(args?: SelectSubset<T, belanjaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Belanja.
     * @param {belanjaCreateArgs} args - Arguments to create a Belanja.
     * @example
     * // Create one Belanja
     * const Belanja = await prisma.belanja.create({
     *   data: {
     *     // ... data to create a Belanja
     *   }
     * })
     * 
     */
    create<T extends belanjaCreateArgs>(args: SelectSubset<T, belanjaCreateArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Belanjas.
     * @param {belanjaCreateManyArgs} args - Arguments to create many Belanjas.
     * @example
     * // Create many Belanjas
     * const belanja = await prisma.belanja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends belanjaCreateManyArgs>(args?: SelectSubset<T, belanjaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Belanja.
     * @param {belanjaDeleteArgs} args - Arguments to delete one Belanja.
     * @example
     * // Delete one Belanja
     * const Belanja = await prisma.belanja.delete({
     *   where: {
     *     // ... filter to delete one Belanja
     *   }
     * })
     * 
     */
    delete<T extends belanjaDeleteArgs>(args: SelectSubset<T, belanjaDeleteArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Belanja.
     * @param {belanjaUpdateArgs} args - Arguments to update one Belanja.
     * @example
     * // Update one Belanja
     * const belanja = await prisma.belanja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends belanjaUpdateArgs>(args: SelectSubset<T, belanjaUpdateArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Belanjas.
     * @param {belanjaDeleteManyArgs} args - Arguments to filter Belanjas to delete.
     * @example
     * // Delete a few Belanjas
     * const { count } = await prisma.belanja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends belanjaDeleteManyArgs>(args?: SelectSubset<T, belanjaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Belanjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belanjaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Belanjas
     * const belanja = await prisma.belanja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends belanjaUpdateManyArgs>(args: SelectSubset<T, belanjaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Belanja.
     * @param {belanjaUpsertArgs} args - Arguments to update or create a Belanja.
     * @example
     * // Update or create a Belanja
     * const belanja = await prisma.belanja.upsert({
     *   create: {
     *     // ... data to create a Belanja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Belanja we want to update
     *   }
     * })
     */
    upsert<T extends belanjaUpsertArgs>(args: SelectSubset<T, belanjaUpsertArgs<ExtArgs>>): Prisma__belanjaClient<$Result.GetResult<Prisma.$belanjaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Belanjas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belanjaCountArgs} args - Arguments to filter Belanjas to count.
     * @example
     * // Count the number of Belanjas
     * const count = await prisma.belanja.count({
     *   where: {
     *     // ... the filter for the Belanjas we want to count
     *   }
     * })
    **/
    count<T extends belanjaCountArgs>(
      args?: Subset<T, belanjaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BelanjaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Belanja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BelanjaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BelanjaAggregateArgs>(args: Subset<T, BelanjaAggregateArgs>): Prisma.PrismaPromise<GetBelanjaAggregateType<T>>

    /**
     * Group by Belanja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belanjaGroupByArgs} args - Group by arguments.
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
      T extends belanjaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: belanjaGroupByArgs['orderBy'] }
        : { orderBy?: belanjaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, belanjaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBelanjaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the belanja model
   */
  readonly fields: belanjaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for belanja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__belanjaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the belanja model
   */
  interface belanjaFieldRefs {
    readonly id: FieldRef<"belanja", 'String'>
    readonly nama: FieldRef<"belanja", 'String'>
    readonly jumlah: FieldRef<"belanja", 'Int'>
    readonly harga: FieldRef<"belanja", 'Int'>
    readonly deleted: FieldRef<"belanja", 'Boolean'>
    readonly createdAt: FieldRef<"belanja", 'DateTime'>
    readonly updatedAt: FieldRef<"belanja", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * belanja findUnique
   */
  export type belanjaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * Filter, which belanja to fetch.
     */
    where: belanjaWhereUniqueInput
  }

  /**
   * belanja findUniqueOrThrow
   */
  export type belanjaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * Filter, which belanja to fetch.
     */
    where: belanjaWhereUniqueInput
  }

  /**
   * belanja findFirst
   */
  export type belanjaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * Filter, which belanja to fetch.
     */
    where?: belanjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belanjas to fetch.
     */
    orderBy?: belanjaOrderByWithRelationInput | belanjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for belanjas.
     */
    cursor?: belanjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belanjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belanjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of belanjas.
     */
    distinct?: BelanjaScalarFieldEnum | BelanjaScalarFieldEnum[]
  }

  /**
   * belanja findFirstOrThrow
   */
  export type belanjaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * Filter, which belanja to fetch.
     */
    where?: belanjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belanjas to fetch.
     */
    orderBy?: belanjaOrderByWithRelationInput | belanjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for belanjas.
     */
    cursor?: belanjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belanjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belanjas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of belanjas.
     */
    distinct?: BelanjaScalarFieldEnum | BelanjaScalarFieldEnum[]
  }

  /**
   * belanja findMany
   */
  export type belanjaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * Filter, which belanjas to fetch.
     */
    where?: belanjaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belanjas to fetch.
     */
    orderBy?: belanjaOrderByWithRelationInput | belanjaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing belanjas.
     */
    cursor?: belanjaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belanjas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belanjas.
     */
    skip?: number
    distinct?: BelanjaScalarFieldEnum | BelanjaScalarFieldEnum[]
  }

  /**
   * belanja create
   */
  export type belanjaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * The data needed to create a belanja.
     */
    data: XOR<belanjaCreateInput, belanjaUncheckedCreateInput>
  }

  /**
   * belanja createMany
   */
  export type belanjaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many belanjas.
     */
    data: belanjaCreateManyInput | belanjaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * belanja update
   */
  export type belanjaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * The data needed to update a belanja.
     */
    data: XOR<belanjaUpdateInput, belanjaUncheckedUpdateInput>
    /**
     * Choose, which belanja to update.
     */
    where: belanjaWhereUniqueInput
  }

  /**
   * belanja updateMany
   */
  export type belanjaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update belanjas.
     */
    data: XOR<belanjaUpdateManyMutationInput, belanjaUncheckedUpdateManyInput>
    /**
     * Filter which belanjas to update
     */
    where?: belanjaWhereInput
    /**
     * Limit how many belanjas to update.
     */
    limit?: number
  }

  /**
   * belanja upsert
   */
  export type belanjaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * The filter to search for the belanja to update in case it exists.
     */
    where: belanjaWhereUniqueInput
    /**
     * In case the belanja found by the `where` argument doesn't exist, create a new belanja with this data.
     */
    create: XOR<belanjaCreateInput, belanjaUncheckedCreateInput>
    /**
     * In case the belanja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<belanjaUpdateInput, belanjaUncheckedUpdateInput>
  }

  /**
   * belanja delete
   */
  export type belanjaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
    /**
     * Filter which belanja to delete.
     */
    where: belanjaWhereUniqueInput
  }

  /**
   * belanja deleteMany
   */
  export type belanjaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which belanjas to delete
     */
    where?: belanjaWhereInput
    /**
     * Limit how many belanjas to delete.
     */
    limit?: number
  }

  /**
   * belanja without action
   */
  export type belanjaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belanja
     */
    select?: belanjaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the belanja
     */
    omit?: belanjaOmit<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    message: number
    read: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    message: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    id?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "read" | "createdAt" | "updatedAt", ExtArgs["result"]["notifications"]>

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      read: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly read: FieldRef<"notifications", 'Boolean'>
    readonly createdAt: FieldRef<"notifications", 'DateTime'>
    readonly updatedAt: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AyamScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    jumlah: 'jumlah',
    jenis: 'jenis',
    umur: 'umur',
    gambar: 'gambar',
    kandang: 'kandang',
    pakan: 'pakan',
    obat: 'obat',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AyamScalarFieldEnum = (typeof AyamScalarFieldEnum)[keyof typeof AyamScalarFieldEnum]


  export const VaksinScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    gambar: 'gambar',
    indikasi: 'indikasi',
    tipe: 'tipe',
    penggunaan: 'penggunaan',
    umur: 'umur',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VaksinScalarFieldEnum = (typeof VaksinScalarFieldEnum)[keyof typeof VaksinScalarFieldEnum]


  export const PakanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    jenis: 'jenis',
    gambar: 'gambar',
    gizi: 'gizi',
    harga: 'harga',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PakanScalarFieldEnum = (typeof PakanScalarFieldEnum)[keyof typeof PakanScalarFieldEnum]


  export const ObatScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    indikasi: 'indikasi',
    harga: 'harga',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gambar: 'gambar'
  };

  export type ObatScalarFieldEnum = (typeof ObatScalarFieldEnum)[keyof typeof ObatScalarFieldEnum]


  export const Jadwal_vaksinasiScalarFieldEnum: {
    id: 'id',
    ayamId: 'ayamId',
    vaksinId: 'vaksinId',
    tanggal: 'tanggal',
    dosis: 'dosis',
    keterangan: 'keterangan',
    sudah: 'sudah',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Jadwal_vaksinasiScalarFieldEnum = (typeof Jadwal_vaksinasiScalarFieldEnum)[keyof typeof Jadwal_vaksinasiScalarFieldEnum]


  export const PenyakitScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    gejala: 'gejala',
    pengobatan: 'pengobatan',
    gambar: 'gambar',
    ayamId: 'ayamId',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PenyakitScalarFieldEnum = (typeof PenyakitScalarFieldEnum)[keyof typeof PenyakitScalarFieldEnum]


  export const MortalitasScalarFieldEnum: {
    id: 'id',
    ayamId: 'ayamId',
    tanggal: 'tanggal',
    jumlah: 'jumlah',
    penyebab: 'penyebab',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MortalitasScalarFieldEnum = (typeof MortalitasScalarFieldEnum)[keyof typeof MortalitasScalarFieldEnum]


  export const PanenScalarFieldEnum: {
    id: 'id',
    jenis: 'jenis',
    tindakan: 'tindakan',
    jumlah: 'jumlah',
    harga: 'harga',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PanenScalarFieldEnum = (typeof PanenScalarFieldEnum)[keyof typeof PanenScalarFieldEnum]


  export const BelanjaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    jumlah: 'jumlah',
    harga: 'harga',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BelanjaScalarFieldEnum = (typeof BelanjaScalarFieldEnum)[keyof typeof BelanjaScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AyamOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    jenis: 'jenis',
    gambar: 'gambar',
    kandang: 'kandang'
  };

  export type AyamOrderByRelevanceFieldEnum = (typeof AyamOrderByRelevanceFieldEnum)[keyof typeof AyamOrderByRelevanceFieldEnum]


  export const VaksinOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    gambar: 'gambar',
    indikasi: 'indikasi',
    tipe: 'tipe',
    penggunaan: 'penggunaan'
  };

  export type VaksinOrderByRelevanceFieldEnum = (typeof VaksinOrderByRelevanceFieldEnum)[keyof typeof VaksinOrderByRelevanceFieldEnum]


  export const PakanOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    jenis: 'jenis',
    gambar: 'gambar',
    gizi: 'gizi'
  };

  export type PakanOrderByRelevanceFieldEnum = (typeof PakanOrderByRelevanceFieldEnum)[keyof typeof PakanOrderByRelevanceFieldEnum]


  export const ObatOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    indikasi: 'indikasi',
    harga: 'harga',
    gambar: 'gambar'
  };

  export type ObatOrderByRelevanceFieldEnum = (typeof ObatOrderByRelevanceFieldEnum)[keyof typeof ObatOrderByRelevanceFieldEnum]


  export const jadwal_vaksinasiOrderByRelevanceFieldEnum: {
    id: 'id',
    ayamId: 'ayamId',
    vaksinId: 'vaksinId',
    keterangan: 'keterangan'
  };

  export type jadwal_vaksinasiOrderByRelevanceFieldEnum = (typeof jadwal_vaksinasiOrderByRelevanceFieldEnum)[keyof typeof jadwal_vaksinasiOrderByRelevanceFieldEnum]


  export const penyakitOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    gejala: 'gejala',
    pengobatan: 'pengobatan',
    gambar: 'gambar',
    ayamId: 'ayamId'
  };

  export type penyakitOrderByRelevanceFieldEnum = (typeof penyakitOrderByRelevanceFieldEnum)[keyof typeof penyakitOrderByRelevanceFieldEnum]


  export const mortalitasOrderByRelevanceFieldEnum: {
    id: 'id',
    ayamId: 'ayamId',
    penyebab: 'penyebab'
  };

  export type mortalitasOrderByRelevanceFieldEnum = (typeof mortalitasOrderByRelevanceFieldEnum)[keyof typeof mortalitasOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const panenOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type panenOrderByRelevanceFieldEnum = (typeof panenOrderByRelevanceFieldEnum)[keyof typeof panenOrderByRelevanceFieldEnum]


  export const belanjaOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type belanjaOrderByRelevanceFieldEnum = (typeof belanjaOrderByRelevanceFieldEnum)[keyof typeof belanjaOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    id: 'id',
    message: 'message'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Jenis'
   */
  export type EnumJenisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jenis'>
    


  /**
   * Reference to a field of type 'Tindakan'
   */
  export type EnumTindakanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tindakan'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AyamWhereInput = {
    AND?: AyamWhereInput | AyamWhereInput[]
    OR?: AyamWhereInput[]
    NOT?: AyamWhereInput | AyamWhereInput[]
    id?: StringFilter<"Ayam"> | string
    nama?: StringFilter<"Ayam"> | string
    jumlah?: IntFilter<"Ayam"> | number
    jenis?: StringFilter<"Ayam"> | string
    umur?: IntFilter<"Ayam"> | number
    gambar?: StringFilter<"Ayam"> | string
    kandang?: StringFilter<"Ayam"> | string
    pakan?: JsonFilter<"Ayam">
    obat?: JsonFilter<"Ayam">
    deleted?: BoolFilter<"Ayam"> | boolean
    createdAt?: DateTimeFilter<"Ayam"> | Date | string
    updatedAt?: DateTimeFilter<"Ayam"> | Date | string
    JadwalVaksinasi?: Jadwal_vaksinasiListRelationFilter
    Penyakit?: PenyakitListRelationFilter
    Mortalitas?: MortalitasListRelationFilter
  }

  export type AyamOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    jenis?: SortOrder
    umur?: SortOrder
    gambar?: SortOrder
    kandang?: SortOrder
    pakan?: SortOrder
    obat?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    JadwalVaksinasi?: jadwal_vaksinasiOrderByRelationAggregateInput
    Penyakit?: penyakitOrderByRelationAggregateInput
    Mortalitas?: mortalitasOrderByRelationAggregateInput
    _relevance?: AyamOrderByRelevanceInput
  }

  export type AyamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AyamWhereInput | AyamWhereInput[]
    OR?: AyamWhereInput[]
    NOT?: AyamWhereInput | AyamWhereInput[]
    nama?: StringFilter<"Ayam"> | string
    jumlah?: IntFilter<"Ayam"> | number
    jenis?: StringFilter<"Ayam"> | string
    umur?: IntFilter<"Ayam"> | number
    gambar?: StringFilter<"Ayam"> | string
    kandang?: StringFilter<"Ayam"> | string
    pakan?: JsonFilter<"Ayam">
    obat?: JsonFilter<"Ayam">
    deleted?: BoolFilter<"Ayam"> | boolean
    createdAt?: DateTimeFilter<"Ayam"> | Date | string
    updatedAt?: DateTimeFilter<"Ayam"> | Date | string
    JadwalVaksinasi?: Jadwal_vaksinasiListRelationFilter
    Penyakit?: PenyakitListRelationFilter
    Mortalitas?: MortalitasListRelationFilter
  }, "id">

  export type AyamOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    jenis?: SortOrder
    umur?: SortOrder
    gambar?: SortOrder
    kandang?: SortOrder
    pakan?: SortOrder
    obat?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AyamCountOrderByAggregateInput
    _avg?: AyamAvgOrderByAggregateInput
    _max?: AyamMaxOrderByAggregateInput
    _min?: AyamMinOrderByAggregateInput
    _sum?: AyamSumOrderByAggregateInput
  }

  export type AyamScalarWhereWithAggregatesInput = {
    AND?: AyamScalarWhereWithAggregatesInput | AyamScalarWhereWithAggregatesInput[]
    OR?: AyamScalarWhereWithAggregatesInput[]
    NOT?: AyamScalarWhereWithAggregatesInput | AyamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ayam"> | string
    nama?: StringWithAggregatesFilter<"Ayam"> | string
    jumlah?: IntWithAggregatesFilter<"Ayam"> | number
    jenis?: StringWithAggregatesFilter<"Ayam"> | string
    umur?: IntWithAggregatesFilter<"Ayam"> | number
    gambar?: StringWithAggregatesFilter<"Ayam"> | string
    kandang?: StringWithAggregatesFilter<"Ayam"> | string
    pakan?: JsonWithAggregatesFilter<"Ayam">
    obat?: JsonWithAggregatesFilter<"Ayam">
    deleted?: BoolWithAggregatesFilter<"Ayam"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Ayam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ayam"> | Date | string
  }

  export type VaksinWhereInput = {
    AND?: VaksinWhereInput | VaksinWhereInput[]
    OR?: VaksinWhereInput[]
    NOT?: VaksinWhereInput | VaksinWhereInput[]
    id?: StringFilter<"Vaksin"> | string
    nama?: StringFilter<"Vaksin"> | string
    gambar?: StringFilter<"Vaksin"> | string
    indikasi?: StringFilter<"Vaksin"> | string
    tipe?: StringFilter<"Vaksin"> | string
    penggunaan?: StringFilter<"Vaksin"> | string
    umur?: IntFilter<"Vaksin"> | number
    deleted?: BoolFilter<"Vaksin"> | boolean
    createdAt?: DateTimeFilter<"Vaksin"> | Date | string
    updatedAt?: DateTimeFilter<"Vaksin"> | Date | string
    JasadwalVaksinasi?: Jadwal_vaksinasiListRelationFilter
  }

  export type VaksinOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    indikasi?: SortOrder
    tipe?: SortOrder
    penggunaan?: SortOrder
    umur?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    JasadwalVaksinasi?: jadwal_vaksinasiOrderByRelationAggregateInput
    _relevance?: VaksinOrderByRelevanceInput
  }

  export type VaksinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VaksinWhereInput | VaksinWhereInput[]
    OR?: VaksinWhereInput[]
    NOT?: VaksinWhereInput | VaksinWhereInput[]
    nama?: StringFilter<"Vaksin"> | string
    gambar?: StringFilter<"Vaksin"> | string
    indikasi?: StringFilter<"Vaksin"> | string
    tipe?: StringFilter<"Vaksin"> | string
    penggunaan?: StringFilter<"Vaksin"> | string
    umur?: IntFilter<"Vaksin"> | number
    deleted?: BoolFilter<"Vaksin"> | boolean
    createdAt?: DateTimeFilter<"Vaksin"> | Date | string
    updatedAt?: DateTimeFilter<"Vaksin"> | Date | string
    JasadwalVaksinasi?: Jadwal_vaksinasiListRelationFilter
  }, "id">

  export type VaksinOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    indikasi?: SortOrder
    tipe?: SortOrder
    penggunaan?: SortOrder
    umur?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VaksinCountOrderByAggregateInput
    _avg?: VaksinAvgOrderByAggregateInput
    _max?: VaksinMaxOrderByAggregateInput
    _min?: VaksinMinOrderByAggregateInput
    _sum?: VaksinSumOrderByAggregateInput
  }

  export type VaksinScalarWhereWithAggregatesInput = {
    AND?: VaksinScalarWhereWithAggregatesInput | VaksinScalarWhereWithAggregatesInput[]
    OR?: VaksinScalarWhereWithAggregatesInput[]
    NOT?: VaksinScalarWhereWithAggregatesInput | VaksinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vaksin"> | string
    nama?: StringWithAggregatesFilter<"Vaksin"> | string
    gambar?: StringWithAggregatesFilter<"Vaksin"> | string
    indikasi?: StringWithAggregatesFilter<"Vaksin"> | string
    tipe?: StringWithAggregatesFilter<"Vaksin"> | string
    penggunaan?: StringWithAggregatesFilter<"Vaksin"> | string
    umur?: IntWithAggregatesFilter<"Vaksin"> | number
    deleted?: BoolWithAggregatesFilter<"Vaksin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vaksin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vaksin"> | Date | string
  }

  export type PakanWhereInput = {
    AND?: PakanWhereInput | PakanWhereInput[]
    OR?: PakanWhereInput[]
    NOT?: PakanWhereInput | PakanWhereInput[]
    id?: StringFilter<"Pakan"> | string
    nama?: StringFilter<"Pakan"> | string
    jenis?: StringFilter<"Pakan"> | string
    gambar?: StringFilter<"Pakan"> | string
    gizi?: StringFilter<"Pakan"> | string
    harga?: IntFilter<"Pakan"> | number
    deleted?: BoolFilter<"Pakan"> | boolean
    createdAt?: DateTimeFilter<"Pakan"> | Date | string
    updatedAt?: DateTimeFilter<"Pakan"> | Date | string
  }

  export type PakanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    gambar?: SortOrder
    gizi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PakanOrderByRelevanceInput
  }

  export type PakanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PakanWhereInput | PakanWhereInput[]
    OR?: PakanWhereInput[]
    NOT?: PakanWhereInput | PakanWhereInput[]
    nama?: StringFilter<"Pakan"> | string
    jenis?: StringFilter<"Pakan"> | string
    gambar?: StringFilter<"Pakan"> | string
    gizi?: StringFilter<"Pakan"> | string
    harga?: IntFilter<"Pakan"> | number
    deleted?: BoolFilter<"Pakan"> | boolean
    createdAt?: DateTimeFilter<"Pakan"> | Date | string
    updatedAt?: DateTimeFilter<"Pakan"> | Date | string
  }, "id">

  export type PakanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    gambar?: SortOrder
    gizi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PakanCountOrderByAggregateInput
    _avg?: PakanAvgOrderByAggregateInput
    _max?: PakanMaxOrderByAggregateInput
    _min?: PakanMinOrderByAggregateInput
    _sum?: PakanSumOrderByAggregateInput
  }

  export type PakanScalarWhereWithAggregatesInput = {
    AND?: PakanScalarWhereWithAggregatesInput | PakanScalarWhereWithAggregatesInput[]
    OR?: PakanScalarWhereWithAggregatesInput[]
    NOT?: PakanScalarWhereWithAggregatesInput | PakanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pakan"> | string
    nama?: StringWithAggregatesFilter<"Pakan"> | string
    jenis?: StringWithAggregatesFilter<"Pakan"> | string
    gambar?: StringWithAggregatesFilter<"Pakan"> | string
    gizi?: StringWithAggregatesFilter<"Pakan"> | string
    harga?: IntWithAggregatesFilter<"Pakan"> | number
    deleted?: BoolWithAggregatesFilter<"Pakan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pakan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pakan"> | Date | string
  }

  export type ObatWhereInput = {
    AND?: ObatWhereInput | ObatWhereInput[]
    OR?: ObatWhereInput[]
    NOT?: ObatWhereInput | ObatWhereInput[]
    id?: StringFilter<"Obat"> | string
    nama?: StringFilter<"Obat"> | string
    indikasi?: StringFilter<"Obat"> | string
    harga?: StringFilter<"Obat"> | string
    deleted?: BoolFilter<"Obat"> | boolean
    createdAt?: DateTimeFilter<"Obat"> | Date | string
    updatedAt?: DateTimeFilter<"Obat"> | Date | string
    gambar?: StringFilter<"Obat"> | string
    penyakit?: PenyakitListRelationFilter
  }

  export type ObatOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    indikasi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: SortOrder
    penyakit?: penyakitOrderByRelationAggregateInput
    _relevance?: ObatOrderByRelevanceInput
  }

  export type ObatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObatWhereInput | ObatWhereInput[]
    OR?: ObatWhereInput[]
    NOT?: ObatWhereInput | ObatWhereInput[]
    nama?: StringFilter<"Obat"> | string
    indikasi?: StringFilter<"Obat"> | string
    harga?: StringFilter<"Obat"> | string
    deleted?: BoolFilter<"Obat"> | boolean
    createdAt?: DateTimeFilter<"Obat"> | Date | string
    updatedAt?: DateTimeFilter<"Obat"> | Date | string
    gambar?: StringFilter<"Obat"> | string
    penyakit?: PenyakitListRelationFilter
  }, "id">

  export type ObatOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    indikasi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: SortOrder
    _count?: ObatCountOrderByAggregateInput
    _max?: ObatMaxOrderByAggregateInput
    _min?: ObatMinOrderByAggregateInput
  }

  export type ObatScalarWhereWithAggregatesInput = {
    AND?: ObatScalarWhereWithAggregatesInput | ObatScalarWhereWithAggregatesInput[]
    OR?: ObatScalarWhereWithAggregatesInput[]
    NOT?: ObatScalarWhereWithAggregatesInput | ObatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obat"> | string
    nama?: StringWithAggregatesFilter<"Obat"> | string
    indikasi?: StringWithAggregatesFilter<"Obat"> | string
    harga?: StringWithAggregatesFilter<"Obat"> | string
    deleted?: BoolWithAggregatesFilter<"Obat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Obat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Obat"> | Date | string
    gambar?: StringWithAggregatesFilter<"Obat"> | string
  }

  export type jadwal_vaksinasiWhereInput = {
    AND?: jadwal_vaksinasiWhereInput | jadwal_vaksinasiWhereInput[]
    OR?: jadwal_vaksinasiWhereInput[]
    NOT?: jadwal_vaksinasiWhereInput | jadwal_vaksinasiWhereInput[]
    id?: StringFilter<"jadwal_vaksinasi"> | string
    ayamId?: StringFilter<"jadwal_vaksinasi"> | string
    vaksinId?: StringFilter<"jadwal_vaksinasi"> | string
    tanggal?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    dosis?: IntFilter<"jadwal_vaksinasi"> | number
    keterangan?: StringFilter<"jadwal_vaksinasi"> | string
    sudah?: BoolFilter<"jadwal_vaksinasi"> | boolean
    deleted?: BoolFilter<"jadwal_vaksinasi"> | boolean
    createdAt?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    updatedAt?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    ayam?: XOR<AyamScalarRelationFilter, AyamWhereInput>
    vaksin?: XOR<VaksinScalarRelationFilter, VaksinWhereInput>
  }

  export type jadwal_vaksinasiOrderByWithRelationInput = {
    id?: SortOrder
    ayamId?: SortOrder
    vaksinId?: SortOrder
    tanggal?: SortOrder
    dosis?: SortOrder
    keterangan?: SortOrder
    sudah?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ayam?: AyamOrderByWithRelationInput
    vaksin?: VaksinOrderByWithRelationInput
    _relevance?: jadwal_vaksinasiOrderByRelevanceInput
  }

  export type jadwal_vaksinasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jadwal_vaksinasiWhereInput | jadwal_vaksinasiWhereInput[]
    OR?: jadwal_vaksinasiWhereInput[]
    NOT?: jadwal_vaksinasiWhereInput | jadwal_vaksinasiWhereInput[]
    ayamId?: StringFilter<"jadwal_vaksinasi"> | string
    vaksinId?: StringFilter<"jadwal_vaksinasi"> | string
    tanggal?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    dosis?: IntFilter<"jadwal_vaksinasi"> | number
    keterangan?: StringFilter<"jadwal_vaksinasi"> | string
    sudah?: BoolFilter<"jadwal_vaksinasi"> | boolean
    deleted?: BoolFilter<"jadwal_vaksinasi"> | boolean
    createdAt?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    updatedAt?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    ayam?: XOR<AyamScalarRelationFilter, AyamWhereInput>
    vaksin?: XOR<VaksinScalarRelationFilter, VaksinWhereInput>
  }, "id">

  export type jadwal_vaksinasiOrderByWithAggregationInput = {
    id?: SortOrder
    ayamId?: SortOrder
    vaksinId?: SortOrder
    tanggal?: SortOrder
    dosis?: SortOrder
    keterangan?: SortOrder
    sudah?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: jadwal_vaksinasiCountOrderByAggregateInput
    _avg?: jadwal_vaksinasiAvgOrderByAggregateInput
    _max?: jadwal_vaksinasiMaxOrderByAggregateInput
    _min?: jadwal_vaksinasiMinOrderByAggregateInput
    _sum?: jadwal_vaksinasiSumOrderByAggregateInput
  }

  export type jadwal_vaksinasiScalarWhereWithAggregatesInput = {
    AND?: jadwal_vaksinasiScalarWhereWithAggregatesInput | jadwal_vaksinasiScalarWhereWithAggregatesInput[]
    OR?: jadwal_vaksinasiScalarWhereWithAggregatesInput[]
    NOT?: jadwal_vaksinasiScalarWhereWithAggregatesInput | jadwal_vaksinasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"jadwal_vaksinasi"> | string
    ayamId?: StringWithAggregatesFilter<"jadwal_vaksinasi"> | string
    vaksinId?: StringWithAggregatesFilter<"jadwal_vaksinasi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"jadwal_vaksinasi"> | Date | string
    dosis?: IntWithAggregatesFilter<"jadwal_vaksinasi"> | number
    keterangan?: StringWithAggregatesFilter<"jadwal_vaksinasi"> | string
    sudah?: BoolWithAggregatesFilter<"jadwal_vaksinasi"> | boolean
    deleted?: BoolWithAggregatesFilter<"jadwal_vaksinasi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"jadwal_vaksinasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"jadwal_vaksinasi"> | Date | string
  }

  export type penyakitWhereInput = {
    AND?: penyakitWhereInput | penyakitWhereInput[]
    OR?: penyakitWhereInput[]
    NOT?: penyakitWhereInput | penyakitWhereInput[]
    id?: StringFilter<"penyakit"> | string
    nama?: StringFilter<"penyakit"> | string
    deskripsi?: StringFilter<"penyakit"> | string
    gejala?: StringFilter<"penyakit"> | string
    pengobatan?: StringFilter<"penyakit"> | string
    gambar?: StringFilter<"penyakit"> | string
    ayamId?: StringFilter<"penyakit"> | string
    deleted?: BoolFilter<"penyakit"> | boolean
    createdAt?: DateTimeFilter<"penyakit"> | Date | string
    updatedAt?: DateTimeFilter<"penyakit"> | Date | string
    ayam?: XOR<AyamScalarRelationFilter, AyamWhereInput>
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }

  export type penyakitOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    gejala?: SortOrder
    pengobatan?: SortOrder
    gambar?: SortOrder
    ayamId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ayam?: AyamOrderByWithRelationInput
    obat?: ObatOrderByWithRelationInput
    _relevance?: penyakitOrderByRelevanceInput
  }

  export type penyakitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: penyakitWhereInput | penyakitWhereInput[]
    OR?: penyakitWhereInput[]
    NOT?: penyakitWhereInput | penyakitWhereInput[]
    nama?: StringFilter<"penyakit"> | string
    deskripsi?: StringFilter<"penyakit"> | string
    gejala?: StringFilter<"penyakit"> | string
    pengobatan?: StringFilter<"penyakit"> | string
    gambar?: StringFilter<"penyakit"> | string
    ayamId?: StringFilter<"penyakit"> | string
    deleted?: BoolFilter<"penyakit"> | boolean
    createdAt?: DateTimeFilter<"penyakit"> | Date | string
    updatedAt?: DateTimeFilter<"penyakit"> | Date | string
    ayam?: XOR<AyamScalarRelationFilter, AyamWhereInput>
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }, "id">

  export type penyakitOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    gejala?: SortOrder
    pengobatan?: SortOrder
    gambar?: SortOrder
    ayamId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: penyakitCountOrderByAggregateInput
    _max?: penyakitMaxOrderByAggregateInput
    _min?: penyakitMinOrderByAggregateInput
  }

  export type penyakitScalarWhereWithAggregatesInput = {
    AND?: penyakitScalarWhereWithAggregatesInput | penyakitScalarWhereWithAggregatesInput[]
    OR?: penyakitScalarWhereWithAggregatesInput[]
    NOT?: penyakitScalarWhereWithAggregatesInput | penyakitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"penyakit"> | string
    nama?: StringWithAggregatesFilter<"penyakit"> | string
    deskripsi?: StringWithAggregatesFilter<"penyakit"> | string
    gejala?: StringWithAggregatesFilter<"penyakit"> | string
    pengobatan?: StringWithAggregatesFilter<"penyakit"> | string
    gambar?: StringWithAggregatesFilter<"penyakit"> | string
    ayamId?: StringWithAggregatesFilter<"penyakit"> | string
    deleted?: BoolWithAggregatesFilter<"penyakit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"penyakit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"penyakit"> | Date | string
  }

  export type mortalitasWhereInput = {
    AND?: mortalitasWhereInput | mortalitasWhereInput[]
    OR?: mortalitasWhereInput[]
    NOT?: mortalitasWhereInput | mortalitasWhereInput[]
    id?: StringFilter<"mortalitas"> | string
    ayamId?: StringFilter<"mortalitas"> | string
    tanggal?: DateTimeFilter<"mortalitas"> | Date | string
    jumlah?: IntFilter<"mortalitas"> | number
    penyebab?: StringFilter<"mortalitas"> | string
    deleted?: BoolFilter<"mortalitas"> | boolean
    createdAt?: DateTimeFilter<"mortalitas"> | Date | string
    updatedAt?: DateTimeFilter<"mortalitas"> | Date | string
    ayam?: XOR<AyamScalarRelationFilter, AyamWhereInput>
  }

  export type mortalitasOrderByWithRelationInput = {
    id?: SortOrder
    ayamId?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    penyebab?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ayam?: AyamOrderByWithRelationInput
    _relevance?: mortalitasOrderByRelevanceInput
  }

  export type mortalitasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mortalitasWhereInput | mortalitasWhereInput[]
    OR?: mortalitasWhereInput[]
    NOT?: mortalitasWhereInput | mortalitasWhereInput[]
    ayamId?: StringFilter<"mortalitas"> | string
    tanggal?: DateTimeFilter<"mortalitas"> | Date | string
    jumlah?: IntFilter<"mortalitas"> | number
    penyebab?: StringFilter<"mortalitas"> | string
    deleted?: BoolFilter<"mortalitas"> | boolean
    createdAt?: DateTimeFilter<"mortalitas"> | Date | string
    updatedAt?: DateTimeFilter<"mortalitas"> | Date | string
    ayam?: XOR<AyamScalarRelationFilter, AyamWhereInput>
  }, "id">

  export type mortalitasOrderByWithAggregationInput = {
    id?: SortOrder
    ayamId?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    penyebab?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: mortalitasCountOrderByAggregateInput
    _avg?: mortalitasAvgOrderByAggregateInput
    _max?: mortalitasMaxOrderByAggregateInput
    _min?: mortalitasMinOrderByAggregateInput
    _sum?: mortalitasSumOrderByAggregateInput
  }

  export type mortalitasScalarWhereWithAggregatesInput = {
    AND?: mortalitasScalarWhereWithAggregatesInput | mortalitasScalarWhereWithAggregatesInput[]
    OR?: mortalitasScalarWhereWithAggregatesInput[]
    NOT?: mortalitasScalarWhereWithAggregatesInput | mortalitasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mortalitas"> | string
    ayamId?: StringWithAggregatesFilter<"mortalitas"> | string
    tanggal?: DateTimeWithAggregatesFilter<"mortalitas"> | Date | string
    jumlah?: IntWithAggregatesFilter<"mortalitas"> | number
    penyebab?: StringWithAggregatesFilter<"mortalitas"> | string
    deleted?: BoolWithAggregatesFilter<"mortalitas"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"mortalitas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"mortalitas"> | Date | string
  }

  export type panenWhereInput = {
    AND?: panenWhereInput | panenWhereInput[]
    OR?: panenWhereInput[]
    NOT?: panenWhereInput | panenWhereInput[]
    id?: StringFilter<"panen"> | string
    jenis?: EnumJenisFilter<"panen"> | $Enums.Jenis
    tindakan?: EnumTindakanFilter<"panen"> | $Enums.Tindakan
    jumlah?: IntFilter<"panen"> | number
    harga?: IntNullableFilter<"panen"> | number | null
    deleted?: BoolFilter<"panen"> | boolean
    createdAt?: DateTimeFilter<"panen"> | Date | string
    updatedAt?: DateTimeFilter<"panen"> | Date | string
  }

  export type panenOrderByWithRelationInput = {
    id?: SortOrder
    jenis?: SortOrder
    tindakan?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: panenOrderByRelevanceInput
  }

  export type panenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: panenWhereInput | panenWhereInput[]
    OR?: panenWhereInput[]
    NOT?: panenWhereInput | panenWhereInput[]
    jenis?: EnumJenisFilter<"panen"> | $Enums.Jenis
    tindakan?: EnumTindakanFilter<"panen"> | $Enums.Tindakan
    jumlah?: IntFilter<"panen"> | number
    harga?: IntNullableFilter<"panen"> | number | null
    deleted?: BoolFilter<"panen"> | boolean
    createdAt?: DateTimeFilter<"panen"> | Date | string
    updatedAt?: DateTimeFilter<"panen"> | Date | string
  }, "id">

  export type panenOrderByWithAggregationInput = {
    id?: SortOrder
    jenis?: SortOrder
    tindakan?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrderInput | SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: panenCountOrderByAggregateInput
    _avg?: panenAvgOrderByAggregateInput
    _max?: panenMaxOrderByAggregateInput
    _min?: panenMinOrderByAggregateInput
    _sum?: panenSumOrderByAggregateInput
  }

  export type panenScalarWhereWithAggregatesInput = {
    AND?: panenScalarWhereWithAggregatesInput | panenScalarWhereWithAggregatesInput[]
    OR?: panenScalarWhereWithAggregatesInput[]
    NOT?: panenScalarWhereWithAggregatesInput | panenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"panen"> | string
    jenis?: EnumJenisWithAggregatesFilter<"panen"> | $Enums.Jenis
    tindakan?: EnumTindakanWithAggregatesFilter<"panen"> | $Enums.Tindakan
    jumlah?: IntWithAggregatesFilter<"panen"> | number
    harga?: IntNullableWithAggregatesFilter<"panen"> | number | null
    deleted?: BoolWithAggregatesFilter<"panen"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"panen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"panen"> | Date | string
  }

  export type belanjaWhereInput = {
    AND?: belanjaWhereInput | belanjaWhereInput[]
    OR?: belanjaWhereInput[]
    NOT?: belanjaWhereInput | belanjaWhereInput[]
    id?: StringFilter<"belanja"> | string
    nama?: StringFilter<"belanja"> | string
    jumlah?: IntFilter<"belanja"> | number
    harga?: IntFilter<"belanja"> | number
    deleted?: BoolFilter<"belanja"> | boolean
    createdAt?: DateTimeFilter<"belanja"> | Date | string
    updatedAt?: DateTimeFilter<"belanja"> | Date | string
  }

  export type belanjaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: belanjaOrderByRelevanceInput
  }

  export type belanjaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: belanjaWhereInput | belanjaWhereInput[]
    OR?: belanjaWhereInput[]
    NOT?: belanjaWhereInput | belanjaWhereInput[]
    nama?: StringFilter<"belanja"> | string
    jumlah?: IntFilter<"belanja"> | number
    harga?: IntFilter<"belanja"> | number
    deleted?: BoolFilter<"belanja"> | boolean
    createdAt?: DateTimeFilter<"belanja"> | Date | string
    updatedAt?: DateTimeFilter<"belanja"> | Date | string
  }, "id">

  export type belanjaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: belanjaCountOrderByAggregateInput
    _avg?: belanjaAvgOrderByAggregateInput
    _max?: belanjaMaxOrderByAggregateInput
    _min?: belanjaMinOrderByAggregateInput
    _sum?: belanjaSumOrderByAggregateInput
  }

  export type belanjaScalarWhereWithAggregatesInput = {
    AND?: belanjaScalarWhereWithAggregatesInput | belanjaScalarWhereWithAggregatesInput[]
    OR?: belanjaScalarWhereWithAggregatesInput[]
    NOT?: belanjaScalarWhereWithAggregatesInput | belanjaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"belanja"> | string
    nama?: StringWithAggregatesFilter<"belanja"> | string
    jumlah?: IntWithAggregatesFilter<"belanja"> | number
    harga?: IntWithAggregatesFilter<"belanja"> | number
    deleted?: BoolWithAggregatesFilter<"belanja"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"belanja"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"belanja"> | Date | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    read?: BoolFilter<"notifications"> | boolean
    createdAt?: DateTimeFilter<"notifications"> | Date | string
    updatedAt?: DateTimeFilter<"notifications"> | Date | string
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    message?: StringFilter<"notifications"> | string
    read?: BoolFilter<"notifications"> | boolean
    createdAt?: DateTimeFilter<"notifications"> | Date | string
    updatedAt?: DateTimeFilter<"notifications"> | Date | string
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringWithAggregatesFilter<"notifications"> | string
    read?: BoolWithAggregatesFilter<"notifications"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyamCreateInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JadwalVaksinasi?: jadwal_vaksinasiCreateNestedManyWithoutAyamInput
    Penyakit?: penyakitCreateNestedManyWithoutAyamInput
    Mortalitas?: mortalitasCreateNestedManyWithoutAyamInput
  }

  export type AyamUncheckedCreateInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUncheckedCreateNestedManyWithoutAyamInput
    Penyakit?: penyakitUncheckedCreateNestedManyWithoutAyamInput
    Mortalitas?: mortalitasUncheckedCreateNestedManyWithoutAyamInput
  }

  export type AyamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUpdateManyWithoutAyamNestedInput
    Penyakit?: penyakitUpdateManyWithoutAyamNestedInput
    Mortalitas?: mortalitasUpdateManyWithoutAyamNestedInput
  }

  export type AyamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUncheckedUpdateManyWithoutAyamNestedInput
    Penyakit?: penyakitUncheckedUpdateManyWithoutAyamNestedInput
    Mortalitas?: mortalitasUncheckedUpdateManyWithoutAyamNestedInput
  }

  export type AyamCreateManyInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AyamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaksinCreateInput = {
    id?: string
    nama: string
    gambar: string
    indikasi: string
    tipe: string
    penggunaan: string
    umur: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JasadwalVaksinasi?: jadwal_vaksinasiCreateNestedManyWithoutVaksinInput
  }

  export type VaksinUncheckedCreateInput = {
    id?: string
    nama: string
    gambar: string
    indikasi: string
    tipe: string
    penggunaan: string
    umur: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JasadwalVaksinasi?: jadwal_vaksinasiUncheckedCreateNestedManyWithoutVaksinInput
  }

  export type VaksinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    penggunaan?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JasadwalVaksinasi?: jadwal_vaksinasiUpdateManyWithoutVaksinNestedInput
  }

  export type VaksinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    penggunaan?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JasadwalVaksinasi?: jadwal_vaksinasiUncheckedUpdateManyWithoutVaksinNestedInput
  }

  export type VaksinCreateManyInput = {
    id?: string
    nama: string
    gambar: string
    indikasi: string
    tipe: string
    penggunaan: string
    umur: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaksinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    penggunaan?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaksinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    penggunaan?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PakanCreateInput = {
    id?: string
    nama: string
    jenis: string
    gambar: string
    gizi: string
    harga: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PakanUncheckedCreateInput = {
    id?: string
    nama: string
    jenis: string
    gambar: string
    gizi: string
    harga: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PakanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    gizi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PakanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    gizi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PakanCreateManyInput = {
    id?: string
    nama: string
    jenis: string
    gambar: string
    gizi: string
    harga: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PakanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    gizi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PakanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    gizi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObatCreateInput = {
    id?: string
    nama: string
    indikasi: string
    harga: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar: string
    penyakit?: penyakitCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateInput = {
    id?: string
    nama: string
    indikasi: string
    harga: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar: string
    penyakit?: penyakitUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    harga?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: StringFieldUpdateOperationsInput | string
    penyakit?: penyakitUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    harga?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: StringFieldUpdateOperationsInput | string
    penyakit?: penyakitUncheckedUpdateManyWithoutObatNestedInput
  }

  export type ObatCreateManyInput = {
    id?: string
    nama: string
    indikasi: string
    harga: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar: string
  }

  export type ObatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    harga?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: StringFieldUpdateOperationsInput | string
  }

  export type ObatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    harga?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: StringFieldUpdateOperationsInput | string
  }

  export type jadwal_vaksinasiCreateInput = {
    id?: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ayam: AyamCreateNestedOneWithoutJadwalVaksinasiInput
    vaksin: VaksinCreateNestedOneWithoutJasadwalVaksinasiInput
  }

  export type jadwal_vaksinasiUncheckedCreateInput = {
    id?: string
    ayamId: string
    vaksinId: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jadwal_vaksinasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayam?: AyamUpdateOneRequiredWithoutJadwalVaksinasiNestedInput
    vaksin?: VaksinUpdateOneRequiredWithoutJasadwalVaksinasiNestedInput
  }

  export type jadwal_vaksinasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    vaksinId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_vaksinasiCreateManyInput = {
    id?: string
    ayamId: string
    vaksinId: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jadwal_vaksinasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_vaksinasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    vaksinId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    gambar: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ayam: AyamCreateNestedOneWithoutPenyakitInput
    obat: ObatCreateNestedOneWithoutPenyakitInput
  }

  export type penyakitUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    pengobatan: string
    gambar: string
    ayamId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penyakitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayam?: AyamUpdateOneRequiredWithoutPenyakitNestedInput
    obat?: ObatUpdateOneRequiredWithoutPenyakitNestedInput
  }

  export type penyakitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    pengobatan?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitCreateManyInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    pengobatan: string
    gambar: string
    ayamId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penyakitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    pengobatan?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mortalitasCreateInput = {
    id?: string
    tanggal: Date | string
    jumlah: number
    penyebab: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ayam: AyamCreateNestedOneWithoutMortalitasInput
  }

  export type mortalitasUncheckedCreateInput = {
    id?: string
    ayamId: string
    tanggal: Date | string
    jumlah: number
    penyebab: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mortalitasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayam?: AyamUpdateOneRequiredWithoutMortalitasNestedInput
  }

  export type mortalitasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mortalitasCreateManyInput = {
    id?: string
    ayamId: string
    tanggal: Date | string
    jumlah: number
    penyebab: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mortalitasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mortalitasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type panenCreateInput = {
    id?: string
    jenis?: $Enums.Jenis
    tindakan?: $Enums.Tindakan
    jumlah: number
    harga?: number | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type panenUncheckedCreateInput = {
    id?: string
    jenis?: $Enums.Jenis
    tindakan?: $Enums.Tindakan
    jumlah: number
    harga?: number | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type panenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    tindakan?: EnumTindakanFieldUpdateOperationsInput | $Enums.Tindakan
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type panenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    tindakan?: EnumTindakanFieldUpdateOperationsInput | $Enums.Tindakan
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type panenCreateManyInput = {
    id?: string
    jenis?: $Enums.Jenis
    tindakan?: $Enums.Tindakan
    jumlah: number
    harga?: number | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type panenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    tindakan?: EnumTindakanFieldUpdateOperationsInput | $Enums.Tindakan
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type panenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisFieldUpdateOperationsInput | $Enums.Jenis
    tindakan?: EnumTindakanFieldUpdateOperationsInput | $Enums.Tindakan
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type belanjaCreateInput = {
    id?: string
    nama: string
    jumlah: number
    harga: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type belanjaUncheckedCreateInput = {
    id?: string
    nama: string
    jumlah: number
    harga: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type belanjaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type belanjaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type belanjaCreateManyInput = {
    id?: string
    nama: string
    jumlah: number
    harga: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type belanjaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type belanjaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notificationsUncheckedCreateInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateManyInput = {
    id?: string
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Jadwal_vaksinasiListRelationFilter = {
    every?: jadwal_vaksinasiWhereInput
    some?: jadwal_vaksinasiWhereInput
    none?: jadwal_vaksinasiWhereInput
  }

  export type PenyakitListRelationFilter = {
    every?: penyakitWhereInput
    some?: penyakitWhereInput
    none?: penyakitWhereInput
  }

  export type MortalitasListRelationFilter = {
    every?: mortalitasWhereInput
    some?: mortalitasWhereInput
    none?: mortalitasWhereInput
  }

  export type jadwal_vaksinasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type penyakitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mortalitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AyamOrderByRelevanceInput = {
    fields: AyamOrderByRelevanceFieldEnum | AyamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AyamCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    jenis?: SortOrder
    umur?: SortOrder
    gambar?: SortOrder
    kandang?: SortOrder
    pakan?: SortOrder
    obat?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AyamAvgOrderByAggregateInput = {
    jumlah?: SortOrder
    umur?: SortOrder
  }

  export type AyamMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    jenis?: SortOrder
    umur?: SortOrder
    gambar?: SortOrder
    kandang?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AyamMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    jenis?: SortOrder
    umur?: SortOrder
    gambar?: SortOrder
    kandang?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AyamSumOrderByAggregateInput = {
    jumlah?: SortOrder
    umur?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VaksinOrderByRelevanceInput = {
    fields: VaksinOrderByRelevanceFieldEnum | VaksinOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VaksinCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    indikasi?: SortOrder
    tipe?: SortOrder
    penggunaan?: SortOrder
    umur?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaksinAvgOrderByAggregateInput = {
    umur?: SortOrder
  }

  export type VaksinMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    indikasi?: SortOrder
    tipe?: SortOrder
    penggunaan?: SortOrder
    umur?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaksinMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    gambar?: SortOrder
    indikasi?: SortOrder
    tipe?: SortOrder
    penggunaan?: SortOrder
    umur?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaksinSumOrderByAggregateInput = {
    umur?: SortOrder
  }

  export type PakanOrderByRelevanceInput = {
    fields: PakanOrderByRelevanceFieldEnum | PakanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PakanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    gambar?: SortOrder
    gizi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PakanAvgOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type PakanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    gambar?: SortOrder
    gizi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PakanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    gambar?: SortOrder
    gizi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PakanSumOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type ObatOrderByRelevanceInput = {
    fields: ObatOrderByRelevanceFieldEnum | ObatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ObatCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    indikasi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: SortOrder
  }

  export type ObatMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    indikasi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: SortOrder
  }

  export type ObatMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    indikasi?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: SortOrder
  }

  export type AyamScalarRelationFilter = {
    is?: AyamWhereInput
    isNot?: AyamWhereInput
  }

  export type VaksinScalarRelationFilter = {
    is?: VaksinWhereInput
    isNot?: VaksinWhereInput
  }

  export type jadwal_vaksinasiOrderByRelevanceInput = {
    fields: jadwal_vaksinasiOrderByRelevanceFieldEnum | jadwal_vaksinasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jadwal_vaksinasiCountOrderByAggregateInput = {
    id?: SortOrder
    ayamId?: SortOrder
    vaksinId?: SortOrder
    tanggal?: SortOrder
    dosis?: SortOrder
    keterangan?: SortOrder
    sudah?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type jadwal_vaksinasiAvgOrderByAggregateInput = {
    dosis?: SortOrder
  }

  export type jadwal_vaksinasiMaxOrderByAggregateInput = {
    id?: SortOrder
    ayamId?: SortOrder
    vaksinId?: SortOrder
    tanggal?: SortOrder
    dosis?: SortOrder
    keterangan?: SortOrder
    sudah?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type jadwal_vaksinasiMinOrderByAggregateInput = {
    id?: SortOrder
    ayamId?: SortOrder
    vaksinId?: SortOrder
    tanggal?: SortOrder
    dosis?: SortOrder
    keterangan?: SortOrder
    sudah?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type jadwal_vaksinasiSumOrderByAggregateInput = {
    dosis?: SortOrder
  }

  export type ObatScalarRelationFilter = {
    is?: ObatWhereInput
    isNot?: ObatWhereInput
  }

  export type penyakitOrderByRelevanceInput = {
    fields: penyakitOrderByRelevanceFieldEnum | penyakitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type penyakitCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    gejala?: SortOrder
    pengobatan?: SortOrder
    gambar?: SortOrder
    ayamId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type penyakitMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    gejala?: SortOrder
    pengobatan?: SortOrder
    gambar?: SortOrder
    ayamId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type penyakitMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    gejala?: SortOrder
    pengobatan?: SortOrder
    gambar?: SortOrder
    ayamId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mortalitasOrderByRelevanceInput = {
    fields: mortalitasOrderByRelevanceFieldEnum | mortalitasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mortalitasCountOrderByAggregateInput = {
    id?: SortOrder
    ayamId?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    penyebab?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mortalitasAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type mortalitasMaxOrderByAggregateInput = {
    id?: SortOrder
    ayamId?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    penyebab?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mortalitasMinOrderByAggregateInput = {
    id?: SortOrder
    ayamId?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    penyebab?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type mortalitasSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type EnumJenisFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[]
    notIn?: $Enums.Jenis[]
    not?: NestedEnumJenisFilter<$PrismaModel> | $Enums.Jenis
  }

  export type EnumTindakanFilter<$PrismaModel = never> = {
    equals?: $Enums.Tindakan | EnumTindakanFieldRefInput<$PrismaModel>
    in?: $Enums.Tindakan[]
    notIn?: $Enums.Tindakan[]
    not?: NestedEnumTindakanFilter<$PrismaModel> | $Enums.Tindakan
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type panenOrderByRelevanceInput = {
    fields: panenOrderByRelevanceFieldEnum | panenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type panenCountOrderByAggregateInput = {
    id?: SortOrder
    jenis?: SortOrder
    tindakan?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type panenAvgOrderByAggregateInput = {
    jumlah?: SortOrder
    harga?: SortOrder
  }

  export type panenMaxOrderByAggregateInput = {
    id?: SortOrder
    jenis?: SortOrder
    tindakan?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type panenMinOrderByAggregateInput = {
    id?: SortOrder
    jenis?: SortOrder
    tindakan?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type panenSumOrderByAggregateInput = {
    jumlah?: SortOrder
    harga?: SortOrder
  }

  export type EnumJenisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[]
    notIn?: $Enums.Jenis[]
    not?: NestedEnumJenisWithAggregatesFilter<$PrismaModel> | $Enums.Jenis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisFilter<$PrismaModel>
    _max?: NestedEnumJenisFilter<$PrismaModel>
  }

  export type EnumTindakanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tindakan | EnumTindakanFieldRefInput<$PrismaModel>
    in?: $Enums.Tindakan[]
    notIn?: $Enums.Tindakan[]
    not?: NestedEnumTindakanWithAggregatesFilter<$PrismaModel> | $Enums.Tindakan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTindakanFilter<$PrismaModel>
    _max?: NestedEnumTindakanFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type belanjaOrderByRelevanceInput = {
    fields: belanjaOrderByRelevanceFieldEnum | belanjaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type belanjaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type belanjaAvgOrderByAggregateInput = {
    jumlah?: SortOrder
    harga?: SortOrder
  }

  export type belanjaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type belanjaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jumlah?: SortOrder
    harga?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type belanjaSumOrderByAggregateInput = {
    jumlah?: SortOrder
    harga?: SortOrder
  }

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type jadwal_vaksinasiCreateNestedManyWithoutAyamInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutAyamInput, jadwal_vaksinasiUncheckedCreateWithoutAyamInput> | jadwal_vaksinasiCreateWithoutAyamInput[] | jadwal_vaksinasiUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutAyamInput | jadwal_vaksinasiCreateOrConnectWithoutAyamInput[]
    createMany?: jadwal_vaksinasiCreateManyAyamInputEnvelope
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
  }

  export type penyakitCreateNestedManyWithoutAyamInput = {
    create?: XOR<penyakitCreateWithoutAyamInput, penyakitUncheckedCreateWithoutAyamInput> | penyakitCreateWithoutAyamInput[] | penyakitUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutAyamInput | penyakitCreateOrConnectWithoutAyamInput[]
    createMany?: penyakitCreateManyAyamInputEnvelope
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
  }

  export type mortalitasCreateNestedManyWithoutAyamInput = {
    create?: XOR<mortalitasCreateWithoutAyamInput, mortalitasUncheckedCreateWithoutAyamInput> | mortalitasCreateWithoutAyamInput[] | mortalitasUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: mortalitasCreateOrConnectWithoutAyamInput | mortalitasCreateOrConnectWithoutAyamInput[]
    createMany?: mortalitasCreateManyAyamInputEnvelope
    connect?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
  }

  export type jadwal_vaksinasiUncheckedCreateNestedManyWithoutAyamInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutAyamInput, jadwal_vaksinasiUncheckedCreateWithoutAyamInput> | jadwal_vaksinasiCreateWithoutAyamInput[] | jadwal_vaksinasiUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutAyamInput | jadwal_vaksinasiCreateOrConnectWithoutAyamInput[]
    createMany?: jadwal_vaksinasiCreateManyAyamInputEnvelope
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
  }

  export type penyakitUncheckedCreateNestedManyWithoutAyamInput = {
    create?: XOR<penyakitCreateWithoutAyamInput, penyakitUncheckedCreateWithoutAyamInput> | penyakitCreateWithoutAyamInput[] | penyakitUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutAyamInput | penyakitCreateOrConnectWithoutAyamInput[]
    createMany?: penyakitCreateManyAyamInputEnvelope
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
  }

  export type mortalitasUncheckedCreateNestedManyWithoutAyamInput = {
    create?: XOR<mortalitasCreateWithoutAyamInput, mortalitasUncheckedCreateWithoutAyamInput> | mortalitasCreateWithoutAyamInput[] | mortalitasUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: mortalitasCreateOrConnectWithoutAyamInput | mortalitasCreateOrConnectWithoutAyamInput[]
    createMany?: mortalitasCreateManyAyamInputEnvelope
    connect?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type jadwal_vaksinasiUpdateManyWithoutAyamNestedInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutAyamInput, jadwal_vaksinasiUncheckedCreateWithoutAyamInput> | jadwal_vaksinasiCreateWithoutAyamInput[] | jadwal_vaksinasiUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutAyamInput | jadwal_vaksinasiCreateOrConnectWithoutAyamInput[]
    upsert?: jadwal_vaksinasiUpsertWithWhereUniqueWithoutAyamInput | jadwal_vaksinasiUpsertWithWhereUniqueWithoutAyamInput[]
    createMany?: jadwal_vaksinasiCreateManyAyamInputEnvelope
    set?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    disconnect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    delete?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    update?: jadwal_vaksinasiUpdateWithWhereUniqueWithoutAyamInput | jadwal_vaksinasiUpdateWithWhereUniqueWithoutAyamInput[]
    updateMany?: jadwal_vaksinasiUpdateManyWithWhereWithoutAyamInput | jadwal_vaksinasiUpdateManyWithWhereWithoutAyamInput[]
    deleteMany?: jadwal_vaksinasiScalarWhereInput | jadwal_vaksinasiScalarWhereInput[]
  }

  export type penyakitUpdateManyWithoutAyamNestedInput = {
    create?: XOR<penyakitCreateWithoutAyamInput, penyakitUncheckedCreateWithoutAyamInput> | penyakitCreateWithoutAyamInput[] | penyakitUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutAyamInput | penyakitCreateOrConnectWithoutAyamInput[]
    upsert?: penyakitUpsertWithWhereUniqueWithoutAyamInput | penyakitUpsertWithWhereUniqueWithoutAyamInput[]
    createMany?: penyakitCreateManyAyamInputEnvelope
    set?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    disconnect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    delete?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    update?: penyakitUpdateWithWhereUniqueWithoutAyamInput | penyakitUpdateWithWhereUniqueWithoutAyamInput[]
    updateMany?: penyakitUpdateManyWithWhereWithoutAyamInput | penyakitUpdateManyWithWhereWithoutAyamInput[]
    deleteMany?: penyakitScalarWhereInput | penyakitScalarWhereInput[]
  }

  export type mortalitasUpdateManyWithoutAyamNestedInput = {
    create?: XOR<mortalitasCreateWithoutAyamInput, mortalitasUncheckedCreateWithoutAyamInput> | mortalitasCreateWithoutAyamInput[] | mortalitasUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: mortalitasCreateOrConnectWithoutAyamInput | mortalitasCreateOrConnectWithoutAyamInput[]
    upsert?: mortalitasUpsertWithWhereUniqueWithoutAyamInput | mortalitasUpsertWithWhereUniqueWithoutAyamInput[]
    createMany?: mortalitasCreateManyAyamInputEnvelope
    set?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    disconnect?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    delete?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    connect?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    update?: mortalitasUpdateWithWhereUniqueWithoutAyamInput | mortalitasUpdateWithWhereUniqueWithoutAyamInput[]
    updateMany?: mortalitasUpdateManyWithWhereWithoutAyamInput | mortalitasUpdateManyWithWhereWithoutAyamInput[]
    deleteMany?: mortalitasScalarWhereInput | mortalitasScalarWhereInput[]
  }

  export type jadwal_vaksinasiUncheckedUpdateManyWithoutAyamNestedInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutAyamInput, jadwal_vaksinasiUncheckedCreateWithoutAyamInput> | jadwal_vaksinasiCreateWithoutAyamInput[] | jadwal_vaksinasiUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutAyamInput | jadwal_vaksinasiCreateOrConnectWithoutAyamInput[]
    upsert?: jadwal_vaksinasiUpsertWithWhereUniqueWithoutAyamInput | jadwal_vaksinasiUpsertWithWhereUniqueWithoutAyamInput[]
    createMany?: jadwal_vaksinasiCreateManyAyamInputEnvelope
    set?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    disconnect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    delete?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    update?: jadwal_vaksinasiUpdateWithWhereUniqueWithoutAyamInput | jadwal_vaksinasiUpdateWithWhereUniqueWithoutAyamInput[]
    updateMany?: jadwal_vaksinasiUpdateManyWithWhereWithoutAyamInput | jadwal_vaksinasiUpdateManyWithWhereWithoutAyamInput[]
    deleteMany?: jadwal_vaksinasiScalarWhereInput | jadwal_vaksinasiScalarWhereInput[]
  }

  export type penyakitUncheckedUpdateManyWithoutAyamNestedInput = {
    create?: XOR<penyakitCreateWithoutAyamInput, penyakitUncheckedCreateWithoutAyamInput> | penyakitCreateWithoutAyamInput[] | penyakitUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutAyamInput | penyakitCreateOrConnectWithoutAyamInput[]
    upsert?: penyakitUpsertWithWhereUniqueWithoutAyamInput | penyakitUpsertWithWhereUniqueWithoutAyamInput[]
    createMany?: penyakitCreateManyAyamInputEnvelope
    set?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    disconnect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    delete?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    update?: penyakitUpdateWithWhereUniqueWithoutAyamInput | penyakitUpdateWithWhereUniqueWithoutAyamInput[]
    updateMany?: penyakitUpdateManyWithWhereWithoutAyamInput | penyakitUpdateManyWithWhereWithoutAyamInput[]
    deleteMany?: penyakitScalarWhereInput | penyakitScalarWhereInput[]
  }

  export type mortalitasUncheckedUpdateManyWithoutAyamNestedInput = {
    create?: XOR<mortalitasCreateWithoutAyamInput, mortalitasUncheckedCreateWithoutAyamInput> | mortalitasCreateWithoutAyamInput[] | mortalitasUncheckedCreateWithoutAyamInput[]
    connectOrCreate?: mortalitasCreateOrConnectWithoutAyamInput | mortalitasCreateOrConnectWithoutAyamInput[]
    upsert?: mortalitasUpsertWithWhereUniqueWithoutAyamInput | mortalitasUpsertWithWhereUniqueWithoutAyamInput[]
    createMany?: mortalitasCreateManyAyamInputEnvelope
    set?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    disconnect?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    delete?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    connect?: mortalitasWhereUniqueInput | mortalitasWhereUniqueInput[]
    update?: mortalitasUpdateWithWhereUniqueWithoutAyamInput | mortalitasUpdateWithWhereUniqueWithoutAyamInput[]
    updateMany?: mortalitasUpdateManyWithWhereWithoutAyamInput | mortalitasUpdateManyWithWhereWithoutAyamInput[]
    deleteMany?: mortalitasScalarWhereInput | mortalitasScalarWhereInput[]
  }

  export type jadwal_vaksinasiCreateNestedManyWithoutVaksinInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutVaksinInput, jadwal_vaksinasiUncheckedCreateWithoutVaksinInput> | jadwal_vaksinasiCreateWithoutVaksinInput[] | jadwal_vaksinasiUncheckedCreateWithoutVaksinInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutVaksinInput | jadwal_vaksinasiCreateOrConnectWithoutVaksinInput[]
    createMany?: jadwal_vaksinasiCreateManyVaksinInputEnvelope
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
  }

  export type jadwal_vaksinasiUncheckedCreateNestedManyWithoutVaksinInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutVaksinInput, jadwal_vaksinasiUncheckedCreateWithoutVaksinInput> | jadwal_vaksinasiCreateWithoutVaksinInput[] | jadwal_vaksinasiUncheckedCreateWithoutVaksinInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutVaksinInput | jadwal_vaksinasiCreateOrConnectWithoutVaksinInput[]
    createMany?: jadwal_vaksinasiCreateManyVaksinInputEnvelope
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
  }

  export type jadwal_vaksinasiUpdateManyWithoutVaksinNestedInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutVaksinInput, jadwal_vaksinasiUncheckedCreateWithoutVaksinInput> | jadwal_vaksinasiCreateWithoutVaksinInput[] | jadwal_vaksinasiUncheckedCreateWithoutVaksinInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutVaksinInput | jadwal_vaksinasiCreateOrConnectWithoutVaksinInput[]
    upsert?: jadwal_vaksinasiUpsertWithWhereUniqueWithoutVaksinInput | jadwal_vaksinasiUpsertWithWhereUniqueWithoutVaksinInput[]
    createMany?: jadwal_vaksinasiCreateManyVaksinInputEnvelope
    set?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    disconnect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    delete?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    update?: jadwal_vaksinasiUpdateWithWhereUniqueWithoutVaksinInput | jadwal_vaksinasiUpdateWithWhereUniqueWithoutVaksinInput[]
    updateMany?: jadwal_vaksinasiUpdateManyWithWhereWithoutVaksinInput | jadwal_vaksinasiUpdateManyWithWhereWithoutVaksinInput[]
    deleteMany?: jadwal_vaksinasiScalarWhereInput | jadwal_vaksinasiScalarWhereInput[]
  }

  export type jadwal_vaksinasiUncheckedUpdateManyWithoutVaksinNestedInput = {
    create?: XOR<jadwal_vaksinasiCreateWithoutVaksinInput, jadwal_vaksinasiUncheckedCreateWithoutVaksinInput> | jadwal_vaksinasiCreateWithoutVaksinInput[] | jadwal_vaksinasiUncheckedCreateWithoutVaksinInput[]
    connectOrCreate?: jadwal_vaksinasiCreateOrConnectWithoutVaksinInput | jadwal_vaksinasiCreateOrConnectWithoutVaksinInput[]
    upsert?: jadwal_vaksinasiUpsertWithWhereUniqueWithoutVaksinInput | jadwal_vaksinasiUpsertWithWhereUniqueWithoutVaksinInput[]
    createMany?: jadwal_vaksinasiCreateManyVaksinInputEnvelope
    set?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    disconnect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    delete?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    connect?: jadwal_vaksinasiWhereUniqueInput | jadwal_vaksinasiWhereUniqueInput[]
    update?: jadwal_vaksinasiUpdateWithWhereUniqueWithoutVaksinInput | jadwal_vaksinasiUpdateWithWhereUniqueWithoutVaksinInput[]
    updateMany?: jadwal_vaksinasiUpdateManyWithWhereWithoutVaksinInput | jadwal_vaksinasiUpdateManyWithWhereWithoutVaksinInput[]
    deleteMany?: jadwal_vaksinasiScalarWhereInput | jadwal_vaksinasiScalarWhereInput[]
  }

  export type penyakitCreateNestedManyWithoutObatInput = {
    create?: XOR<penyakitCreateWithoutObatInput, penyakitUncheckedCreateWithoutObatInput> | penyakitCreateWithoutObatInput[] | penyakitUncheckedCreateWithoutObatInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutObatInput | penyakitCreateOrConnectWithoutObatInput[]
    createMany?: penyakitCreateManyObatInputEnvelope
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
  }

  export type penyakitUncheckedCreateNestedManyWithoutObatInput = {
    create?: XOR<penyakitCreateWithoutObatInput, penyakitUncheckedCreateWithoutObatInput> | penyakitCreateWithoutObatInput[] | penyakitUncheckedCreateWithoutObatInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutObatInput | penyakitCreateOrConnectWithoutObatInput[]
    createMany?: penyakitCreateManyObatInputEnvelope
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
  }

  export type penyakitUpdateManyWithoutObatNestedInput = {
    create?: XOR<penyakitCreateWithoutObatInput, penyakitUncheckedCreateWithoutObatInput> | penyakitCreateWithoutObatInput[] | penyakitUncheckedCreateWithoutObatInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutObatInput | penyakitCreateOrConnectWithoutObatInput[]
    upsert?: penyakitUpsertWithWhereUniqueWithoutObatInput | penyakitUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: penyakitCreateManyObatInputEnvelope
    set?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    disconnect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    delete?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    update?: penyakitUpdateWithWhereUniqueWithoutObatInput | penyakitUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: penyakitUpdateManyWithWhereWithoutObatInput | penyakitUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: penyakitScalarWhereInput | penyakitScalarWhereInput[]
  }

  export type penyakitUncheckedUpdateManyWithoutObatNestedInput = {
    create?: XOR<penyakitCreateWithoutObatInput, penyakitUncheckedCreateWithoutObatInput> | penyakitCreateWithoutObatInput[] | penyakitUncheckedCreateWithoutObatInput[]
    connectOrCreate?: penyakitCreateOrConnectWithoutObatInput | penyakitCreateOrConnectWithoutObatInput[]
    upsert?: penyakitUpsertWithWhereUniqueWithoutObatInput | penyakitUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: penyakitCreateManyObatInputEnvelope
    set?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    disconnect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    delete?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    connect?: penyakitWhereUniqueInput | penyakitWhereUniqueInput[]
    update?: penyakitUpdateWithWhereUniqueWithoutObatInput | penyakitUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: penyakitUpdateManyWithWhereWithoutObatInput | penyakitUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: penyakitScalarWhereInput | penyakitScalarWhereInput[]
  }

  export type AyamCreateNestedOneWithoutJadwalVaksinasiInput = {
    create?: XOR<AyamCreateWithoutJadwalVaksinasiInput, AyamUncheckedCreateWithoutJadwalVaksinasiInput>
    connectOrCreate?: AyamCreateOrConnectWithoutJadwalVaksinasiInput
    connect?: AyamWhereUniqueInput
  }

  export type VaksinCreateNestedOneWithoutJasadwalVaksinasiInput = {
    create?: XOR<VaksinCreateWithoutJasadwalVaksinasiInput, VaksinUncheckedCreateWithoutJasadwalVaksinasiInput>
    connectOrCreate?: VaksinCreateOrConnectWithoutJasadwalVaksinasiInput
    connect?: VaksinWhereUniqueInput
  }

  export type AyamUpdateOneRequiredWithoutJadwalVaksinasiNestedInput = {
    create?: XOR<AyamCreateWithoutJadwalVaksinasiInput, AyamUncheckedCreateWithoutJadwalVaksinasiInput>
    connectOrCreate?: AyamCreateOrConnectWithoutJadwalVaksinasiInput
    upsert?: AyamUpsertWithoutJadwalVaksinasiInput
    connect?: AyamWhereUniqueInput
    update?: XOR<XOR<AyamUpdateToOneWithWhereWithoutJadwalVaksinasiInput, AyamUpdateWithoutJadwalVaksinasiInput>, AyamUncheckedUpdateWithoutJadwalVaksinasiInput>
  }

  export type VaksinUpdateOneRequiredWithoutJasadwalVaksinasiNestedInput = {
    create?: XOR<VaksinCreateWithoutJasadwalVaksinasiInput, VaksinUncheckedCreateWithoutJasadwalVaksinasiInput>
    connectOrCreate?: VaksinCreateOrConnectWithoutJasadwalVaksinasiInput
    upsert?: VaksinUpsertWithoutJasadwalVaksinasiInput
    connect?: VaksinWhereUniqueInput
    update?: XOR<XOR<VaksinUpdateToOneWithWhereWithoutJasadwalVaksinasiInput, VaksinUpdateWithoutJasadwalVaksinasiInput>, VaksinUncheckedUpdateWithoutJasadwalVaksinasiInput>
  }

  export type AyamCreateNestedOneWithoutPenyakitInput = {
    create?: XOR<AyamCreateWithoutPenyakitInput, AyamUncheckedCreateWithoutPenyakitInput>
    connectOrCreate?: AyamCreateOrConnectWithoutPenyakitInput
    connect?: AyamWhereUniqueInput
  }

  export type ObatCreateNestedOneWithoutPenyakitInput = {
    create?: XOR<ObatCreateWithoutPenyakitInput, ObatUncheckedCreateWithoutPenyakitInput>
    connectOrCreate?: ObatCreateOrConnectWithoutPenyakitInput
    connect?: ObatWhereUniqueInput
  }

  export type AyamUpdateOneRequiredWithoutPenyakitNestedInput = {
    create?: XOR<AyamCreateWithoutPenyakitInput, AyamUncheckedCreateWithoutPenyakitInput>
    connectOrCreate?: AyamCreateOrConnectWithoutPenyakitInput
    upsert?: AyamUpsertWithoutPenyakitInput
    connect?: AyamWhereUniqueInput
    update?: XOR<XOR<AyamUpdateToOneWithWhereWithoutPenyakitInput, AyamUpdateWithoutPenyakitInput>, AyamUncheckedUpdateWithoutPenyakitInput>
  }

  export type ObatUpdateOneRequiredWithoutPenyakitNestedInput = {
    create?: XOR<ObatCreateWithoutPenyakitInput, ObatUncheckedCreateWithoutPenyakitInput>
    connectOrCreate?: ObatCreateOrConnectWithoutPenyakitInput
    upsert?: ObatUpsertWithoutPenyakitInput
    connect?: ObatWhereUniqueInput
    update?: XOR<XOR<ObatUpdateToOneWithWhereWithoutPenyakitInput, ObatUpdateWithoutPenyakitInput>, ObatUncheckedUpdateWithoutPenyakitInput>
  }

  export type AyamCreateNestedOneWithoutMortalitasInput = {
    create?: XOR<AyamCreateWithoutMortalitasInput, AyamUncheckedCreateWithoutMortalitasInput>
    connectOrCreate?: AyamCreateOrConnectWithoutMortalitasInput
    connect?: AyamWhereUniqueInput
  }

  export type AyamUpdateOneRequiredWithoutMortalitasNestedInput = {
    create?: XOR<AyamCreateWithoutMortalitasInput, AyamUncheckedCreateWithoutMortalitasInput>
    connectOrCreate?: AyamCreateOrConnectWithoutMortalitasInput
    upsert?: AyamUpsertWithoutMortalitasInput
    connect?: AyamWhereUniqueInput
    update?: XOR<XOR<AyamUpdateToOneWithWhereWithoutMortalitasInput, AyamUpdateWithoutMortalitasInput>, AyamUncheckedUpdateWithoutMortalitasInput>
  }

  export type EnumJenisFieldUpdateOperationsInput = {
    set?: $Enums.Jenis
  }

  export type EnumTindakanFieldUpdateOperationsInput = {
    set?: $Enums.Tindakan
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumJenisFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[]
    notIn?: $Enums.Jenis[]
    not?: NestedEnumJenisFilter<$PrismaModel> | $Enums.Jenis
  }

  export type NestedEnumTindakanFilter<$PrismaModel = never> = {
    equals?: $Enums.Tindakan | EnumTindakanFieldRefInput<$PrismaModel>
    in?: $Enums.Tindakan[]
    notIn?: $Enums.Tindakan[]
    not?: NestedEnumTindakanFilter<$PrismaModel> | $Enums.Tindakan
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumJenisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jenis | EnumJenisFieldRefInput<$PrismaModel>
    in?: $Enums.Jenis[]
    notIn?: $Enums.Jenis[]
    not?: NestedEnumJenisWithAggregatesFilter<$PrismaModel> | $Enums.Jenis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisFilter<$PrismaModel>
    _max?: NestedEnumJenisFilter<$PrismaModel>
  }

  export type NestedEnumTindakanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tindakan | EnumTindakanFieldRefInput<$PrismaModel>
    in?: $Enums.Tindakan[]
    notIn?: $Enums.Tindakan[]
    not?: NestedEnumTindakanWithAggregatesFilter<$PrismaModel> | $Enums.Tindakan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTindakanFilter<$PrismaModel>
    _max?: NestedEnumTindakanFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type jadwal_vaksinasiCreateWithoutAyamInput = {
    id?: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vaksin: VaksinCreateNestedOneWithoutJasadwalVaksinasiInput
  }

  export type jadwal_vaksinasiUncheckedCreateWithoutAyamInput = {
    id?: string
    vaksinId: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jadwal_vaksinasiCreateOrConnectWithoutAyamInput = {
    where: jadwal_vaksinasiWhereUniqueInput
    create: XOR<jadwal_vaksinasiCreateWithoutAyamInput, jadwal_vaksinasiUncheckedCreateWithoutAyamInput>
  }

  export type jadwal_vaksinasiCreateManyAyamInputEnvelope = {
    data: jadwal_vaksinasiCreateManyAyamInput | jadwal_vaksinasiCreateManyAyamInput[]
    skipDuplicates?: boolean
  }

  export type penyakitCreateWithoutAyamInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    gambar: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    obat: ObatCreateNestedOneWithoutPenyakitInput
  }

  export type penyakitUncheckedCreateWithoutAyamInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    pengobatan: string
    gambar: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penyakitCreateOrConnectWithoutAyamInput = {
    where: penyakitWhereUniqueInput
    create: XOR<penyakitCreateWithoutAyamInput, penyakitUncheckedCreateWithoutAyamInput>
  }

  export type penyakitCreateManyAyamInputEnvelope = {
    data: penyakitCreateManyAyamInput | penyakitCreateManyAyamInput[]
    skipDuplicates?: boolean
  }

  export type mortalitasCreateWithoutAyamInput = {
    id?: string
    tanggal: Date | string
    jumlah: number
    penyebab: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mortalitasUncheckedCreateWithoutAyamInput = {
    id?: string
    tanggal: Date | string
    jumlah: number
    penyebab: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mortalitasCreateOrConnectWithoutAyamInput = {
    where: mortalitasWhereUniqueInput
    create: XOR<mortalitasCreateWithoutAyamInput, mortalitasUncheckedCreateWithoutAyamInput>
  }

  export type mortalitasCreateManyAyamInputEnvelope = {
    data: mortalitasCreateManyAyamInput | mortalitasCreateManyAyamInput[]
    skipDuplicates?: boolean
  }

  export type jadwal_vaksinasiUpsertWithWhereUniqueWithoutAyamInput = {
    where: jadwal_vaksinasiWhereUniqueInput
    update: XOR<jadwal_vaksinasiUpdateWithoutAyamInput, jadwal_vaksinasiUncheckedUpdateWithoutAyamInput>
    create: XOR<jadwal_vaksinasiCreateWithoutAyamInput, jadwal_vaksinasiUncheckedCreateWithoutAyamInput>
  }

  export type jadwal_vaksinasiUpdateWithWhereUniqueWithoutAyamInput = {
    where: jadwal_vaksinasiWhereUniqueInput
    data: XOR<jadwal_vaksinasiUpdateWithoutAyamInput, jadwal_vaksinasiUncheckedUpdateWithoutAyamInput>
  }

  export type jadwal_vaksinasiUpdateManyWithWhereWithoutAyamInput = {
    where: jadwal_vaksinasiScalarWhereInput
    data: XOR<jadwal_vaksinasiUpdateManyMutationInput, jadwal_vaksinasiUncheckedUpdateManyWithoutAyamInput>
  }

  export type jadwal_vaksinasiScalarWhereInput = {
    AND?: jadwal_vaksinasiScalarWhereInput | jadwal_vaksinasiScalarWhereInput[]
    OR?: jadwal_vaksinasiScalarWhereInput[]
    NOT?: jadwal_vaksinasiScalarWhereInput | jadwal_vaksinasiScalarWhereInput[]
    id?: StringFilter<"jadwal_vaksinasi"> | string
    ayamId?: StringFilter<"jadwal_vaksinasi"> | string
    vaksinId?: StringFilter<"jadwal_vaksinasi"> | string
    tanggal?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    dosis?: IntFilter<"jadwal_vaksinasi"> | number
    keterangan?: StringFilter<"jadwal_vaksinasi"> | string
    sudah?: BoolFilter<"jadwal_vaksinasi"> | boolean
    deleted?: BoolFilter<"jadwal_vaksinasi"> | boolean
    createdAt?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
    updatedAt?: DateTimeFilter<"jadwal_vaksinasi"> | Date | string
  }

  export type penyakitUpsertWithWhereUniqueWithoutAyamInput = {
    where: penyakitWhereUniqueInput
    update: XOR<penyakitUpdateWithoutAyamInput, penyakitUncheckedUpdateWithoutAyamInput>
    create: XOR<penyakitCreateWithoutAyamInput, penyakitUncheckedCreateWithoutAyamInput>
  }

  export type penyakitUpdateWithWhereUniqueWithoutAyamInput = {
    where: penyakitWhereUniqueInput
    data: XOR<penyakitUpdateWithoutAyamInput, penyakitUncheckedUpdateWithoutAyamInput>
  }

  export type penyakitUpdateManyWithWhereWithoutAyamInput = {
    where: penyakitScalarWhereInput
    data: XOR<penyakitUpdateManyMutationInput, penyakitUncheckedUpdateManyWithoutAyamInput>
  }

  export type penyakitScalarWhereInput = {
    AND?: penyakitScalarWhereInput | penyakitScalarWhereInput[]
    OR?: penyakitScalarWhereInput[]
    NOT?: penyakitScalarWhereInput | penyakitScalarWhereInput[]
    id?: StringFilter<"penyakit"> | string
    nama?: StringFilter<"penyakit"> | string
    deskripsi?: StringFilter<"penyakit"> | string
    gejala?: StringFilter<"penyakit"> | string
    pengobatan?: StringFilter<"penyakit"> | string
    gambar?: StringFilter<"penyakit"> | string
    ayamId?: StringFilter<"penyakit"> | string
    deleted?: BoolFilter<"penyakit"> | boolean
    createdAt?: DateTimeFilter<"penyakit"> | Date | string
    updatedAt?: DateTimeFilter<"penyakit"> | Date | string
  }

  export type mortalitasUpsertWithWhereUniqueWithoutAyamInput = {
    where: mortalitasWhereUniqueInput
    update: XOR<mortalitasUpdateWithoutAyamInput, mortalitasUncheckedUpdateWithoutAyamInput>
    create: XOR<mortalitasCreateWithoutAyamInput, mortalitasUncheckedCreateWithoutAyamInput>
  }

  export type mortalitasUpdateWithWhereUniqueWithoutAyamInput = {
    where: mortalitasWhereUniqueInput
    data: XOR<mortalitasUpdateWithoutAyamInput, mortalitasUncheckedUpdateWithoutAyamInput>
  }

  export type mortalitasUpdateManyWithWhereWithoutAyamInput = {
    where: mortalitasScalarWhereInput
    data: XOR<mortalitasUpdateManyMutationInput, mortalitasUncheckedUpdateManyWithoutAyamInput>
  }

  export type mortalitasScalarWhereInput = {
    AND?: mortalitasScalarWhereInput | mortalitasScalarWhereInput[]
    OR?: mortalitasScalarWhereInput[]
    NOT?: mortalitasScalarWhereInput | mortalitasScalarWhereInput[]
    id?: StringFilter<"mortalitas"> | string
    ayamId?: StringFilter<"mortalitas"> | string
    tanggal?: DateTimeFilter<"mortalitas"> | Date | string
    jumlah?: IntFilter<"mortalitas"> | number
    penyebab?: StringFilter<"mortalitas"> | string
    deleted?: BoolFilter<"mortalitas"> | boolean
    createdAt?: DateTimeFilter<"mortalitas"> | Date | string
    updatedAt?: DateTimeFilter<"mortalitas"> | Date | string
  }

  export type jadwal_vaksinasiCreateWithoutVaksinInput = {
    id?: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ayam: AyamCreateNestedOneWithoutJadwalVaksinasiInput
  }

  export type jadwal_vaksinasiUncheckedCreateWithoutVaksinInput = {
    id?: string
    ayamId: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jadwal_vaksinasiCreateOrConnectWithoutVaksinInput = {
    where: jadwal_vaksinasiWhereUniqueInput
    create: XOR<jadwal_vaksinasiCreateWithoutVaksinInput, jadwal_vaksinasiUncheckedCreateWithoutVaksinInput>
  }

  export type jadwal_vaksinasiCreateManyVaksinInputEnvelope = {
    data: jadwal_vaksinasiCreateManyVaksinInput | jadwal_vaksinasiCreateManyVaksinInput[]
    skipDuplicates?: boolean
  }

  export type jadwal_vaksinasiUpsertWithWhereUniqueWithoutVaksinInput = {
    where: jadwal_vaksinasiWhereUniqueInput
    update: XOR<jadwal_vaksinasiUpdateWithoutVaksinInput, jadwal_vaksinasiUncheckedUpdateWithoutVaksinInput>
    create: XOR<jadwal_vaksinasiCreateWithoutVaksinInput, jadwal_vaksinasiUncheckedCreateWithoutVaksinInput>
  }

  export type jadwal_vaksinasiUpdateWithWhereUniqueWithoutVaksinInput = {
    where: jadwal_vaksinasiWhereUniqueInput
    data: XOR<jadwal_vaksinasiUpdateWithoutVaksinInput, jadwal_vaksinasiUncheckedUpdateWithoutVaksinInput>
  }

  export type jadwal_vaksinasiUpdateManyWithWhereWithoutVaksinInput = {
    where: jadwal_vaksinasiScalarWhereInput
    data: XOR<jadwal_vaksinasiUpdateManyMutationInput, jadwal_vaksinasiUncheckedUpdateManyWithoutVaksinInput>
  }

  export type penyakitCreateWithoutObatInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    gambar: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ayam: AyamCreateNestedOneWithoutPenyakitInput
  }

  export type penyakitUncheckedCreateWithoutObatInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    gambar: string
    ayamId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penyakitCreateOrConnectWithoutObatInput = {
    where: penyakitWhereUniqueInput
    create: XOR<penyakitCreateWithoutObatInput, penyakitUncheckedCreateWithoutObatInput>
  }

  export type penyakitCreateManyObatInputEnvelope = {
    data: penyakitCreateManyObatInput | penyakitCreateManyObatInput[]
    skipDuplicates?: boolean
  }

  export type penyakitUpsertWithWhereUniqueWithoutObatInput = {
    where: penyakitWhereUniqueInput
    update: XOR<penyakitUpdateWithoutObatInput, penyakitUncheckedUpdateWithoutObatInput>
    create: XOR<penyakitCreateWithoutObatInput, penyakitUncheckedCreateWithoutObatInput>
  }

  export type penyakitUpdateWithWhereUniqueWithoutObatInput = {
    where: penyakitWhereUniqueInput
    data: XOR<penyakitUpdateWithoutObatInput, penyakitUncheckedUpdateWithoutObatInput>
  }

  export type penyakitUpdateManyWithWhereWithoutObatInput = {
    where: penyakitScalarWhereInput
    data: XOR<penyakitUpdateManyMutationInput, penyakitUncheckedUpdateManyWithoutObatInput>
  }

  export type AyamCreateWithoutJadwalVaksinasiInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Penyakit?: penyakitCreateNestedManyWithoutAyamInput
    Mortalitas?: mortalitasCreateNestedManyWithoutAyamInput
  }

  export type AyamUncheckedCreateWithoutJadwalVaksinasiInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Penyakit?: penyakitUncheckedCreateNestedManyWithoutAyamInput
    Mortalitas?: mortalitasUncheckedCreateNestedManyWithoutAyamInput
  }

  export type AyamCreateOrConnectWithoutJadwalVaksinasiInput = {
    where: AyamWhereUniqueInput
    create: XOR<AyamCreateWithoutJadwalVaksinasiInput, AyamUncheckedCreateWithoutJadwalVaksinasiInput>
  }

  export type VaksinCreateWithoutJasadwalVaksinasiInput = {
    id?: string
    nama: string
    gambar: string
    indikasi: string
    tipe: string
    penggunaan: string
    umur: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaksinUncheckedCreateWithoutJasadwalVaksinasiInput = {
    id?: string
    nama: string
    gambar: string
    indikasi: string
    tipe: string
    penggunaan: string
    umur: number
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaksinCreateOrConnectWithoutJasadwalVaksinasiInput = {
    where: VaksinWhereUniqueInput
    create: XOR<VaksinCreateWithoutJasadwalVaksinasiInput, VaksinUncheckedCreateWithoutJasadwalVaksinasiInput>
  }

  export type AyamUpsertWithoutJadwalVaksinasiInput = {
    update: XOR<AyamUpdateWithoutJadwalVaksinasiInput, AyamUncheckedUpdateWithoutJadwalVaksinasiInput>
    create: XOR<AyamCreateWithoutJadwalVaksinasiInput, AyamUncheckedCreateWithoutJadwalVaksinasiInput>
    where?: AyamWhereInput
  }

  export type AyamUpdateToOneWithWhereWithoutJadwalVaksinasiInput = {
    where?: AyamWhereInput
    data: XOR<AyamUpdateWithoutJadwalVaksinasiInput, AyamUncheckedUpdateWithoutJadwalVaksinasiInput>
  }

  export type AyamUpdateWithoutJadwalVaksinasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penyakit?: penyakitUpdateManyWithoutAyamNestedInput
    Mortalitas?: mortalitasUpdateManyWithoutAyamNestedInput
  }

  export type AyamUncheckedUpdateWithoutJadwalVaksinasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penyakit?: penyakitUncheckedUpdateManyWithoutAyamNestedInput
    Mortalitas?: mortalitasUncheckedUpdateManyWithoutAyamNestedInput
  }

  export type VaksinUpsertWithoutJasadwalVaksinasiInput = {
    update: XOR<VaksinUpdateWithoutJasadwalVaksinasiInput, VaksinUncheckedUpdateWithoutJasadwalVaksinasiInput>
    create: XOR<VaksinCreateWithoutJasadwalVaksinasiInput, VaksinUncheckedCreateWithoutJasadwalVaksinasiInput>
    where?: VaksinWhereInput
  }

  export type VaksinUpdateToOneWithWhereWithoutJasadwalVaksinasiInput = {
    where?: VaksinWhereInput
    data: XOR<VaksinUpdateWithoutJasadwalVaksinasiInput, VaksinUncheckedUpdateWithoutJasadwalVaksinasiInput>
  }

  export type VaksinUpdateWithoutJasadwalVaksinasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    penggunaan?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaksinUncheckedUpdateWithoutJasadwalVaksinasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    penggunaan?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AyamCreateWithoutPenyakitInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JadwalVaksinasi?: jadwal_vaksinasiCreateNestedManyWithoutAyamInput
    Mortalitas?: mortalitasCreateNestedManyWithoutAyamInput
  }

  export type AyamUncheckedCreateWithoutPenyakitInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUncheckedCreateNestedManyWithoutAyamInput
    Mortalitas?: mortalitasUncheckedCreateNestedManyWithoutAyamInput
  }

  export type AyamCreateOrConnectWithoutPenyakitInput = {
    where: AyamWhereUniqueInput
    create: XOR<AyamCreateWithoutPenyakitInput, AyamUncheckedCreateWithoutPenyakitInput>
  }

  export type ObatCreateWithoutPenyakitInput = {
    id?: string
    nama: string
    indikasi: string
    harga: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar: string
  }

  export type ObatUncheckedCreateWithoutPenyakitInput = {
    id?: string
    nama: string
    indikasi: string
    harga: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar: string
  }

  export type ObatCreateOrConnectWithoutPenyakitInput = {
    where: ObatWhereUniqueInput
    create: XOR<ObatCreateWithoutPenyakitInput, ObatUncheckedCreateWithoutPenyakitInput>
  }

  export type AyamUpsertWithoutPenyakitInput = {
    update: XOR<AyamUpdateWithoutPenyakitInput, AyamUncheckedUpdateWithoutPenyakitInput>
    create: XOR<AyamCreateWithoutPenyakitInput, AyamUncheckedCreateWithoutPenyakitInput>
    where?: AyamWhereInput
  }

  export type AyamUpdateToOneWithWhereWithoutPenyakitInput = {
    where?: AyamWhereInput
    data: XOR<AyamUpdateWithoutPenyakitInput, AyamUncheckedUpdateWithoutPenyakitInput>
  }

  export type AyamUpdateWithoutPenyakitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUpdateManyWithoutAyamNestedInput
    Mortalitas?: mortalitasUpdateManyWithoutAyamNestedInput
  }

  export type AyamUncheckedUpdateWithoutPenyakitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUncheckedUpdateManyWithoutAyamNestedInput
    Mortalitas?: mortalitasUncheckedUpdateManyWithoutAyamNestedInput
  }

  export type ObatUpsertWithoutPenyakitInput = {
    update: XOR<ObatUpdateWithoutPenyakitInput, ObatUncheckedUpdateWithoutPenyakitInput>
    create: XOR<ObatCreateWithoutPenyakitInput, ObatUncheckedCreateWithoutPenyakitInput>
    where?: ObatWhereInput
  }

  export type ObatUpdateToOneWithWhereWithoutPenyakitInput = {
    where?: ObatWhereInput
    data: XOR<ObatUpdateWithoutPenyakitInput, ObatUncheckedUpdateWithoutPenyakitInput>
  }

  export type ObatUpdateWithoutPenyakitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    harga?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: StringFieldUpdateOperationsInput | string
  }

  export type ObatUncheckedUpdateWithoutPenyakitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    indikasi?: StringFieldUpdateOperationsInput | string
    harga?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: StringFieldUpdateOperationsInput | string
  }

  export type AyamCreateWithoutMortalitasInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JadwalVaksinasi?: jadwal_vaksinasiCreateNestedManyWithoutAyamInput
    Penyakit?: penyakitCreateNestedManyWithoutAyamInput
  }

  export type AyamUncheckedCreateWithoutMortalitasInput = {
    id?: string
    nama: string
    jumlah: number
    jenis: string
    umur: number
    gambar: string
    kandang: string
    pakan: JsonNullValueInput | InputJsonValue
    obat: JsonNullValueInput | InputJsonValue
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUncheckedCreateNestedManyWithoutAyamInput
    Penyakit?: penyakitUncheckedCreateNestedManyWithoutAyamInput
  }

  export type AyamCreateOrConnectWithoutMortalitasInput = {
    where: AyamWhereUniqueInput
    create: XOR<AyamCreateWithoutMortalitasInput, AyamUncheckedCreateWithoutMortalitasInput>
  }

  export type AyamUpsertWithoutMortalitasInput = {
    update: XOR<AyamUpdateWithoutMortalitasInput, AyamUncheckedUpdateWithoutMortalitasInput>
    create: XOR<AyamCreateWithoutMortalitasInput, AyamUncheckedCreateWithoutMortalitasInput>
    where?: AyamWhereInput
  }

  export type AyamUpdateToOneWithWhereWithoutMortalitasInput = {
    where?: AyamWhereInput
    data: XOR<AyamUpdateWithoutMortalitasInput, AyamUncheckedUpdateWithoutMortalitasInput>
  }

  export type AyamUpdateWithoutMortalitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUpdateManyWithoutAyamNestedInput
    Penyakit?: penyakitUpdateManyWithoutAyamNestedInput
  }

  export type AyamUncheckedUpdateWithoutMortalitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    gambar?: StringFieldUpdateOperationsInput | string
    kandang?: StringFieldUpdateOperationsInput | string
    pakan?: JsonNullValueInput | InputJsonValue
    obat?: JsonNullValueInput | InputJsonValue
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalVaksinasi?: jadwal_vaksinasiUncheckedUpdateManyWithoutAyamNestedInput
    Penyakit?: penyakitUncheckedUpdateManyWithoutAyamNestedInput
  }

  export type jadwal_vaksinasiCreateManyAyamInput = {
    id?: string
    vaksinId: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penyakitCreateManyAyamInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    pengobatan: string
    gambar: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mortalitasCreateManyAyamInput = {
    id?: string
    tanggal: Date | string
    jumlah: number
    penyebab: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jadwal_vaksinasiUpdateWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaksin?: VaksinUpdateOneRequiredWithoutJasadwalVaksinasiNestedInput
  }

  export type jadwal_vaksinasiUncheckedUpdateWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    vaksinId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_vaksinasiUncheckedUpdateManyWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    vaksinId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitUpdateWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obat?: ObatUpdateOneRequiredWithoutPenyakitNestedInput
  }

  export type penyakitUncheckedUpdateWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    pengobatan?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitUncheckedUpdateManyWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    pengobatan?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mortalitasUpdateWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mortalitasUncheckedUpdateWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mortalitasUncheckedUpdateManyWithoutAyamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    penyebab?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_vaksinasiCreateManyVaksinInput = {
    id?: string
    ayamId: string
    tanggal: Date | string
    dosis: number
    keterangan: string
    sudah?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type jadwal_vaksinasiUpdateWithoutVaksinInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayam?: AyamUpdateOneRequiredWithoutJadwalVaksinasiNestedInput
  }

  export type jadwal_vaksinasiUncheckedUpdateWithoutVaksinInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_vaksinasiUncheckedUpdateManyWithoutVaksinInput = {
    id?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    sudah?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitCreateManyObatInput = {
    id?: string
    nama: string
    deskripsi: string
    gejala: string
    gambar: string
    ayamId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type penyakitUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ayam?: AyamUpdateOneRequiredWithoutPenyakitNestedInput
  }

  export type penyakitUncheckedUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type penyakitUncheckedUpdateManyWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    gejala?: StringFieldUpdateOperationsInput | string
    gambar?: StringFieldUpdateOperationsInput | string
    ayamId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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