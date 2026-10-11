---
description: "参照型のキャスト、instanceofとパターン変数を整理します。"
---

# 参照型のキャストとinstanceof

参照型のキャストは、オブジェクトを別の型として扱うための構文です。オブジェクト自体を別のクラスへ作り替える操作ではありません。

## 要点

- サブタイプから上位の型への変換は、通常、明示的なキャストなしで行えます。
- 上位の型から下位の型への変換では、実行時に型の確認が必要になる場合があります。
- `instanceof`は、対象の型に適合するオブジェクトかを調べます。

## 仕組み・特徴

`Object value = "Java";`では、変数の型は`Object`、実際のオブジェクトのクラスは`String`です。`(String) value`で扱う型を変えても、同じオブジェクトを参照します。

パターン変数を使うと、型の確認と変数への取り出しをまとめられます。この例の`text`は、条件が成立したブロック内で使えます。

## コード例

```java
Object value = "Java";
if (value instanceof String text) {
    System.out.println(text.length()); // 4
}
Object number = Integer.valueOf(10);
// String wrong = (String) number; // 実行するとClassCastException
System.out.println(null instanceof String); // false
```

## 間違えやすい点

- キャストできる組み合わせかは、まずコンパイル時にも確認されます。
- `null`の参照型へのキャスト自体は成功しますが、その結果を通したインスタンスメソッド呼び出しは例外になります。
- `instanceof`の型パターンはJava 16で正式導入されました。

## 関連用語

- [数値の型変換](./conversions.md)
- [継承](./inheritance.md)
- [ジェネリクス](./generics.md)

## 参考資料

- [Java言語仕様 §5.1.5・5.1.6：参照変換](https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.5)
- [Java言語仕様 §15.20.2：instanceof](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.20.2)
- [OpenJDK JEP 394：Pattern Matching for instanceof](https://openjdk.org/jeps/394)
