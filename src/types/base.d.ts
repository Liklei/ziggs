type UnionBasicType = number | string | boolean | undefined

declare enum Color {Red, Green, Blue}

declare function BasicData<T extends UnionBasicType>(data: T): T {
   return data
}

