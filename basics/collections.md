---
description: "JavaのList・Set・Map、ジェネリクス、変更可能性と比較の注意点を整理します。"
---

# コレクションとジェネリクスとは

**コレクション**は、複数の要素をまとめて扱うための仕組みです。**ジェネリクス**は、扱う型を型引数として指定し、型の整合性をコンパイル時に確認する仕組みです。

## 要点

- `List`は順序のある要素、`Set`は重複のない要素、`Map`はキーと値の対応を扱います。
- `List<String>`のように型引数を指定します。
- インターフェースと実装クラスを区別します。
- すべてのコレクションが変更可能とは限りません。

## 仕組み・特徴

| インターフェース | 特徴 | 実装クラスの例 |
| --- | --- | --- |
| `List<E>` | 順序と添字があり、通常は重複を許す | `ArrayList` |
| `Set<E>` | 重複する要素を保持しない | `HashSet` |
| `Map<K, V>` | キーごとに値を対応させる | `HashMap` |

`Map`はコレクションフレームワークの一部ですが、`Collection`インターフェースのサブタイプではありません。`HashSet`と`HashMap`は、走査する順序を保証しません。

### 型引数と変更可能性 {#generics}

`List<Integer>`には`Integer`の値を格納できます。プリミティブ型は型引数に指定できません。`List<Integer>`は`List<Number>`のサブタイプではありません。

`List.of(...)`は変更できないリストを作り、`null`要素を許しません。ただし、要素のオブジェクト自体が不変になるわけではありません。

## コード例

```java
java.util.List<String> names = new java.util.ArrayList<>();
names.add("Java");
names.add("Java");
System.out.println(names.size()); // 2
System.out.println(names.get(0)); // Java
```

変数は`List`型で宣言し、実際のオブジェクトには`ArrayList`を使っています。

## 間違えやすい点

- 型引数を省いた生の型（raw type）は、型の安全性を弱めます。
- 変更不可のコレクションへ追加すると、`UnsupportedOperationException`になる場合があります。
- `List.of(...)`で作ったリストでは、追加・削除・置換などの変更操作は`UnsupportedOperationException`になります。
- `HashMap`のキーや`HashSet`の要素の、`equals`・`hashCode`に使う状態を格納後に変えると、検索が意図どおりに動かなくなる場合があります。

## 関連用語

- [配列](./arrays.md)
- [ラッパークラス](./wrapper.md)
- [インターフェース](./inheritance.md)
- [コレクションの使い方と選び方](./collection-operations.md)
- [ジェネリクスの詳細](./generics.md)

## 参考資料

- [Java SE 25 API：java.util](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/package-summary.html)
- [Java言語仕様 §4.5：Parameterized Types](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.5)
