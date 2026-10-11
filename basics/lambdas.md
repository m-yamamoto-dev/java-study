---
description: "ラムダ式、関数型インターフェースとメソッド参照を整理します。"
---

# ラムダ式と関数型インターフェース

**ラムダ式**は、関数型インターフェースに対応する処理を表す式です。**関数型インターフェース**は、単一の抽象メソッドという条件を満たすインターフェースです。`Object`のpublicメソッドなどには、数え方の例外があります。

## 要点

- `引数 -> 処理`という形式で書きます。
- `default`・`static`メソッドがあっても、関数型インターフェースになれます。
- ラムダ式の型は、代入先などの文脈から決まります。

## 仕組み・特徴

| 型 | 代表的なメソッド | 役割 |
| --- | --- | --- |
| `Predicate<T>` | `test` | 真偽を返す |
| `Function<T, R>` | `apply` | 値を変換する |
| `Consumer<T>` | `accept` | 値を受け取り、戻り値を返さない |
| `Supplier<T>` | `get` | 引数なしで値を供給する |

メソッド参照は`String::length`などの形式で、既存のメソッドに対応する処理を表します。

## コード例

```java
java.util.function.Predicate<String> nonEmpty = text -> !text.isEmpty();
java.util.function.Function<String, Integer> length = String::length;
System.out.println(nonEmpty.test("Java")); // true
System.out.println(length.apply("Java"));  // 4
```

## 間違えやすい点

- 外側のローカル変数を取り込むには、`final`または実質的に`final`である必要があります。
- 取り込んだ参照先のオブジェクトまで不変になるわけではありません。
- `var operation = text -> text.length();`のように、対象の型なしでは宣言できません。
- `@FunctionalInterface`は任意ですが、条件を満たすかコンパイラに確認させられます。

## 関連用語

- [メソッド](./methods.md)
- [Stream API](./streams.md)
- [並べ替え](./sorting.md)

## 参考資料

- [Java言語仕様 §9.8：Functional Interfaces](https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html#jls-9.8)
- [Java言語仕様 §15.27：Lambda Expressions](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.27)
- [Java SE 25 API：java.util.function](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/function/package-summary.html)
