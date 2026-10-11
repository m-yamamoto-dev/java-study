---
description: "Comparable・Comparatorと複数条件での並べ替えを整理します。"
---

# 並べ替えと比較

**Comparable**は型自身の自然順序を定義し、**Comparator**は外部から比較方法を指定します。

## 要点

- 比較結果は、負なら前、0なら同順位、正なら後を表します。
- `Comparator.comparing`などで比較方法を組み立てられます。
- `thenComparing`は、先の比較が0のときの比較条件を追加します。

## 仕組み・特徴

`List.sort`はそのリストを並べ替えます。`Stream.sorted`では、元のリストを変更せず並べ替えた結果を扱えます。自然順序を定義する場合は`compareTo`を実装します。

## コード例

```java
java.util.List<String> names = new java.util.ArrayList<>(
        java.util.List.of("Ruby", "Go", "Java"));
names.sort(java.util.Comparator.comparingInt(String::length)
        .thenComparing(java.util.Comparator.naturalOrder()));
System.out.println(names); // [Go, Java, Ruby]
```

文字列の長さで比較し、同じ長さなら文字列の自然順序で比較します。

## 間違えやすい点

- 整数の比較を`a - b`で書くと、オーバーフローで順序が逆になる場合があります。`Integer.compare(a, b)`などを使います。
- `List.of`のリストは変更不可なので、`sort`できません。
- `TreeSet`・`TreeMap`は比較結果0を同じ要素・キーとして扱います。`equals`との整合性を意識します。
- 文字列の自然順序は、日本語の読み順やロケールに応じた辞書順とは限りません。

## 関連用語

- [コレクションの操作](./collection-operations.md)
- [ラムダ式](./lambdas.md)
- [equals・hashCode](./object-contracts.md)

## 参考資料

- [Java SE 25 API：Comparable](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Comparable.html)
- [Java SE 25 API：Comparator](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Comparator.html)
- [Java SE 25 API：List.sort](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/List.html#sort(java.util.Comparator))
