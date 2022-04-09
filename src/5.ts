//模式匹配
type p = Promise<"guang">;
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
type value = GetValueType<p>;

// 数组
// First
type arr = [1, 2, 3];

type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never;

type first = GetFirst<arr>;

// Last

type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;

type last = GetLast<arr>;

// PopArr

type GetPopArr<Arr extends unknown[]> = Arr extends [...infer Rest, unknown]
  ? Rest
  : never;

type popArr = GetPopArr<arr>;

//字符串类型

type StartWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

type str = "guang and dong";

type StartWithRes = StartWith<str, "guang">;

// Trim
type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimStrRight<Rest>
  : Str;
type TrimStrRightRes = TrimStrRight<"guang    ">;

type TrimStrLeft<Str extends string> = Str extends `${
  | " "
  | "\n"
  | "\t"}${infer Rest}`
  ? TrimStrLeft<Rest>
  : Str;

type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>;

// Function

type GetParameters<Func extends Function> = Func extends (
  ...args: infer Args
) => unknown
  ? Args
  : never;

type GetReturnType<Func extends Function> = Func extends (
  ...args: unknown[]
) => infer Return
  ? Return
  : never;
type ReturnRes = GetReturnType<() => "guang">;

// Constructor
interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type GetInstanceType<ConstructorType extends new (...args: any) => any> =
  ConstructorType extends new (...args: any) => infer InstanceType
    ? InstanceType
    : any;

type GetInstanceTypeRes = GetInstanceType<PersonConstructor>;

// keyof
type GetRefProps<Props> = "ref" extends keyof Props
  ? Props extends { ref?: infer Value | undefined }
    ? Value
    : never
  : never;
