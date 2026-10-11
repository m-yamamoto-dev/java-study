---
description: "Javaの配列、添字、固定長、要素の初期値とコピーの注意点を整理します。"
---

# 配列とは

**配列**は、同じ要素型の値を、番号を使ってまとめて扱うオブジェクトです。要素の位置を表す番号を**添字（インデックス）**と呼びます。

## 要点

- 配列は参照型です。要素型にはプリミティブ型も参照型も使えます。
- 添字は`0`から始まり、最後は`length - 1`です。
- 作成した配列の長さは変えられませんが、要素の値は変更できます。

## 仕組み・特徴

`new int[3]`は、3要素の配列を作成します。要素は型に応じた初期値になり、`int`なら`0`、`boolean`なら`false`、参照型なら`null`です。`new String[3]`では、3個の文字列オブジェクトが作られるわけではありません。

多次元配列は「配列を要素に持つ配列」です。行ごとに長さが異なったり、行が`null`だったりする場合があります。

## コード例

```java
int[] scores = {10, 20, 30};
scores[1] = 25;
System.out.println(scores.length); // 3
System.out.println(scores[1]);     // 25
```

`length`はメソッドではないので、`length()`とは書きません。

## 間違えやすい点

- 範囲外の添字を使うと`ArrayIndexOutOfBoundsException`になります。
- 配列の代入は参照のコピーです。別の配列が必要なら`clone()`や`Arrays.copyOf`などを使います。
- 参照型の要素を持つ配列をコピーしても、要素が参照するオブジェクトまでは複製されません。これを浅いコピーと呼びます。
- 配列同士の`equals`は通常、要素の比較になりません。要素を比較するには`Arrays.equals`などを使います。

## 関連用語

- [参照型](./reference.md)
- [制御構文](./control-flow.md)：拡張`for`で要素を扱えます。
- [コレクション](./collections.md)：要素数を増減できる`List`などがあります。

## 参考資料

- [Java言語仕様 §10：Arrays](https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html)
- [Java SE 25 API：Arrays](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html)
