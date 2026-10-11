---
description: "Javaのラッパークラスの対応表、ボクシングとアンボクシング、nullや比較の注意点を整理します。"
---

# ラッパークラスとは

**ラッパークラス**（wrapper class）は、[プリミティブ型](./primitive.md)の値をオブジェクトとして扱うためのクラスです。例えば、`int`に対応するクラスは`Integer`です。

## 要点

- 8種類のプリミティブ型に、それぞれ対応するクラスがあります。
- ラッパークラスは参照型なので、変数に`null`を代入できます。
- プリミティブ値との変換を、ボクシング／アンボクシングと呼びます。
- 保持する値は不変です。変数への再代入と、オブジェクトの値の変更は別のことです。

## 仕組み・特徴

### プリミティブ型との対応表

| プリミティブ型 | ラッパークラス |
| --- | --- |
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

いずれも`java.lang`パッケージにあり、通常は`import`なしで使えます。

`List<Integer>`のように、ジェネリクスの型引数として数値を扱う場合にも使います。プリミティブ型は型引数に指定できないため、`List<int>`とは書けません。

### ボクシングとアンボクシング {#boxing-unboxing}

- **ボクシング（boxing）**：プリミティブ値を、対応するラッパークラスのオブジェクトへの参照に変換します。
- **アンボクシング（unboxing）**：ラッパークラスのオブジェクトから、対応するプリミティブ値を取り出します。

代入やメソッド呼び出しなどの文脈で、これらの変換が暗黙に行われることを、オートボクシング／オートアンボクシングと呼びます。毎回新しいオブジェクトが作られるとは限らず、ボクシングでは既存のオブジェクトが再利用される場合もあります。

また、ラッパークラスには文字列の変換などのメソッドがあります。`Integer.parseInt("123")`は`int`を、`Integer.valueOf("123")`は`Integer`を返します。

## コード例

```java
int number = 10;
Integer wrapped = number; // オートボクシング：int → Integer
int unwrapped = wrapped;  // オートアンボクシング：Integer → int
```

`wrapped`は値`10`を保持する`Integer`オブジェクトを参照し、`unwrapped`にはプリミティブ値`10`が代入されます。

## 間違えやすい点

### nullのアンボクシング {#null-unboxing}

`null`をアンボクシングすると、取り出せる値がないため`NullPointerException`が発生します。`0`や`false`へ自動的に変換されることはありません。

```java
Integer missing = null;
int number = missing; // NullPointerException
```

代入だけでなく、`missing + 1`や`missing == 0`でもアンボクシングが発生します。`Boolean`も同様で、値が`null`なら`if`の条件として使用したときに例外になります。

`null`が入り得る値は、プリミティブ値として使う前に確認します。未設定をエラーにするのか、既定値を使うのかは、その値の意味に応じて決めます。

### ==とequalsの違い {#equality}

両辺が`Integer`などの参照型の場合、`==`は値ではなく、同じオブジェクトへの参照かを比較します。同じ値のオブジェクトが再利用される場合もあるため、ラッパークラス同士の値の比較を`==`に頼ることはできません。

例えば、`Integer`同士の値を比較するなら`equals`を使います。ただし、呼び出し元が`null`の場合は例外になるため、`null`を許容する比較には`java.util.Objects.equals(a, b)`を使えます。

`Integer.equals`は相手も`Integer`である場合に値を比較します。`Integer.valueOf(1).equals(Long.valueOf(1L))`は、型が異なるため`false`です。

一方、`Integer`と`int`を`==`で比較すると、アンボクシング後の数値比較になります。この場合は`null`の注意が必要です。

## 関連用語

- [コレクションとジェネリクス](./collections.md)：`List<Integer>`などの型引数を説明します。
- [参照型](./reference.md)：オブジェクトへの参照の仕組みを説明します。
- [プリミティブ型](./primitive.md)：ラッパークラスに対応する8種類の基本データ型です。
- [参照型との違い](./primitive.md#reference-types)：`int`と`Integer`で、変数が保持するものや比較の意味がどう違うかを確認できます。

## 参考資料

- [Java言語仕様（Java SE 25）§5.1.7：Boxing Conversion](https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.7)
- [Java言語仕様（Java SE 25）§5.1.8：Unboxing Conversion](https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.8)
- [Java言語仕様（Java SE 25）§15.21：Equality Operators](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.21)
- [Java SE 25 API：Integer](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Integer.html)
- [Java SE 25 API：Value-based Classes](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/doc-files/ValueBased.html)
