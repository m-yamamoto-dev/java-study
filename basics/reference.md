---
description: "Javaの参照型、オブジェクト、null、参照のコピーと比較を整理します。"
---

# 参照型とは

**参照型**は、オブジェクトへの参照を値として扱う型です。参照型の変数は、オブジェクトそのものではなく、そのオブジェクトを参照する値、または`null`を保持します。

## 要点

- 基本的な分類はクラス型・インターフェース型・配列型です。
- 列挙型はクラス型の一種です。
- 参照の代入では、オブジェクトは複製されません。
- `null`は、オブジェクトを参照していないことを表します。

## 仕組み・特徴

### 型とオブジェクト

型は扱える値や操作を定め、オブジェクトは実行時に存在するクラスのインスタンスや配列です。`String`は型の名前で、`"Java"`は`String`オブジェクトを表す文字列リテラルです。

### 参照の共有と比較 {#sharing}

複数の変数が同じオブジェクトを参照できます。参照型同士の`==`は同じオブジェクトを参照しているかを比較し、両方が`null`の場合も`true`になります。内容の比較には、そのクラスの`equals`の定義を確認します。すべてのクラスの`equals`が内容を比較するとは限りません。

## コード例

```java
int[] first = {10};
int[] second = first;
System.out.println(first == second); // true

second = new int[] {20};
System.out.println(first == second); // false
System.out.println(first[0]);        // 10
```

再代入後の`second`は別の配列を参照します。元の配列の内容は変わりません。

## 間違えやすい点

- `null`と、空文字列`""`や要素数0の配列は異なります。後者にはオブジェクトが存在します。
- `null`を通してインスタンスメソッドを呼び出すと、`NullPointerException`になります。
- 参照型だから可変とは限りません。`String`のオブジェクトは不変です。
- Javaの引数は参照型でも値渡しです。参照の値がコピーされます。

## 関連用語

- [プリミティブ型との比較](./primitive.md#reference-types)
- [文字列と不変性](./strings.md)
- [メソッドと値渡し](./methods.md#pass-by-value)
- [参照型のキャストとinstanceof](./reference-casts.md)
- [Objectとequals・hashCode](./object-contracts.md)

## 参考資料

- [Java言語仕様 §4.3：Reference Types and Values](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.3)
- [Java言語仕様 §15.21.3：Reference Equality Operators](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.21.3)
