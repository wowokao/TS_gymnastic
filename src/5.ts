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
