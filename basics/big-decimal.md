---
description: "BigDecimalの作成・演算・丸めとequalsの注意点を整理します。"
---

# BigDecimalと正確な小数計算

**BigDecimal**は、任意精度の10進数を扱う不変のクラスです。金額など、10進での表現や丸めの規則が必要な計算に使えます。

## 要点

- 10進の意図した値を作るには、文字列からの生成が分かりやすい方法です。
- 演算結果は戻り値として受け取ります。
- 有限の10進数で表せない除算には、精度や丸めの指定が必要です。

## 仕組み・特徴

`new BigDecimal(0.1)`は、`double`の近似値を正確に取り込みます。10進の`0.1`を意図するなら`new BigDecimal("0.1")`を使えます。`BigDecimal.valueOf(double)`は`Double.toString`の表現を使いますが、それ以前の浮動小数点演算の誤差を取り消すものではありません。

## コード例

```java
java.math.BigDecimal a = new java.math.BigDecimal("0.1");
java.math.BigDecimal b = new java.math.BigDecimal("0.2");
System.out.println(a.add(b)); // 0.3
java.math.BigDecimal third = java.math.BigDecimal.ONE.divide(
        new java.math.BigDecimal("3"), 2, java.math.RoundingMode.HALF_UP);
System.out.println(third); // 0.33
```

## 間違えやすい点

- `divide`の丸めを指定しない形式では、有限の10進数で表せない結果に`ArithmeticException`が発生します。
- `equals`は値とスケールを比較するため、`1.0`と`1.00`は等しくありません。`compareTo`では0になります。
- `BigDecimal`を使っても、丸めの方針や金額の計算規則は自分で定める必要があります。

## 関連用語

- [浮動小数点数](./primitive.md)
- [並べ替えと比較](./sorting.md)

## 参考資料

- [Java SE 25 API：BigDecimal](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/math/BigDecimal.html)
