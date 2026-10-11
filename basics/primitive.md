---
description: "Javaの8種類のプリミティブ型の特徴、参照型との違い、間違えやすい点を整理します。"
---

# プリミティブ型とは

Javaの型は、大きくプリミティブ型と参照型に分かれます。

**プリミティブ型**（primitive type／基本データ型）は、Javaがあらかじめ定義している8種類の型です。プリミティブ型の変数は、オブジェクトへの参照ではなく、数値や真偽値などの値そのものを保持します。

## 要点

- `byte`、`short`、`int`、`long`、`float`、`double`、`char`、`boolean`の8種類です。
- プリミティブ型には`null`を代入できません。
- オブジェクトとして扱う場合は、対応する[ラッパークラス](./wrapper.md)を使います。

## 仕組み・特徴

### 8種類の型

| 分類 | 型 | 値の表現 | 範囲・特徴 |
| --- | --- | --- | --- |
| 整数 | `byte` | 符号付き8ビット整数 | −128〜127 |
| 整数 | `short` | 符号付き16ビット整数 | −32,768〜32,767 |
| 整数 | `int` | 符号付き32ビット整数 | −2,147,483,648〜2,147,483,647 |
| 整数 | `long` | 符号付き64ビット整数 | −2⁶³〜2⁶³−1 |
| 浮動小数点数 | `float` | IEEE 754 binary32（32ビット） | 有効桁数の目安は10進で約6〜7桁 |
| 浮動小数点数 | `double` | IEEE 754 binary64（64ビット） | 有効桁数の目安は10進で約15〜16桁 |
| 文字 | `char` | 符号なし16ビット整数 | 0〜65,535。UTF-16のコード単位を表す |
| 真偽値 | `boolean` | `true`または`false` | 言語仕様は記憶領域のサイズを定めていない |

`char`は文字の表現に使いますが、仕様上は整数型に分類されます。`float`と`double`は有限の数に加え、正負のゼロ、正負の無限大、NaN（数でない値）も表します。

表の有効桁数は目安であり、その桁数の10進数を常に正確に表せるという意味ではありません。仕様上の精度は、2進で`float`が24桁、`double`が53桁です。例えば`0.1`は、どちらの型でも正確には表せません。

表のビット数は値の表現を示すもので、変数や配列が実際に使用するメモリ量をそのまま示すものではありません。

### リテラルの書き方 {#literals}

コードに直接書く`10`や`'A'`などの値を、リテラルと呼びます。数値の末尾に付ける文字や引用符によって、値の型を表します。

```java
long count = 3_000_000_000L;
float rate = 1.5F;
double price = 1.5;
char initial = 'A';
boolean enabled = true;
```

- 整数リテラルは、末尾に`L`を付けると`long`型、付けなければ`int`型になります。例の`3_000_000_000`は`int`の範囲を超えるため、`L`が必要です。小文字の`l`も使えますが、数字の`1`と区別しやすい大文字の`L`がおすすめです。
- 浮動小数点リテラルは、末尾に`F`または`f`を付けると`float`型になります。接尾辞を付けない場合、または`D`・`d`を付ける場合は`double`型になります。
- `char`のリテラルはシングルクォート（`'A'`）で囲みます。ダブルクォートで囲む`"A"`は`String`型の文字列です。
- `boolean`のリテラルは`true`と`false`です。
- 数字の間に`_`を入れると、桁数を読み取りやすくなります。値は変わりません。

### 参照型との違い {#reference-types}

参照型にはクラス型、インターフェース型、配列型があります。列挙型（`enum`）はクラス型の一種です。参照型の変数は、オブジェクトへの参照または`null`を保持します。`null`は、オブジェクトを参照していないことを表します。

| 比較項目 | プリミティブ型 | 参照型 |
| --- | --- | --- |
| 例 | `int`、`boolean` | `String`、`Integer`、`int[]` |
| 変数が保持するもの | プリミティブ値 | オブジェクトへの参照または`null` |
| `null`の代入 | 不可 | 可能 |
| 同じ型の変数への代入 | 値をコピーする | 参照をコピーする。オブジェクト自体は複製しない |
| 両辺が同じ型の場合の`==` | 値を比較する（NaNなどに注意） | 同じオブジェクトを参照するかを比較する。両方`null`なら`true` |

`int[]`は、要素がプリミティブ型でも、配列自体は参照型です。

#### オブジェクトの可変性と再代入 {#mutability}

オブジェクトには、作成後に状態を変更できるmutable（可変）なものと、変更できないimmutable（不変）なものがあります。これは、変数への再代入とは別の概念です。変数に別のオブジェクトへの参照を代入しても、元のオブジェクトの状態を変更したことにはなりません。

## コード例 {#value-reference-examples}

```java
int original = 10;
int copied = original;
copied = 20;

System.out.println(original); // 10
System.out.println(copied);   // 20
```

代入で値がコピーされるため、`copied`への再代入は`original`に影響しません。

一方、配列では参照がコピーされるため、両方の変数が同じ配列を参照します。

```java
int[] original = {10};
int[] copied = original;

copied[0] = 20;

System.out.println(original[0]); // 20
System.out.println(copied[0]);   // 20
```

配列自体はコピーされません。配列はmutableなので、`copied`を通して要素を変更すると、`original`から見える値も変わります。`copied[0] = 20`は配列の要素の変更であり、変数`copied`への再代入ではありません。

参照型の例である`String`のオブジェクトはimmutableです。文字列を連結しても、元のオブジェクトの内容は変わりません。

```java
String original = "Java";
String changed = original.concat("入門");

System.out.println(original); // Java
System.out.println(changed);  // Java入門
```

`concat`は連結した結果の文字列を返します。この例では、`changed`は元の文字列とは別の`String`オブジェクトを参照します。

## 間違えやすい点

- **`String`はプリミティブ型ではありません。** 文字列を表すクラス型です。
- **`char`1つが必ず1文字に対応するわけではありません。** 絵文字など、UTF-16のコード単位2つで表される文字もあります。
- **浮動小数点数には丸め誤差があります。** 例えば`0.1 + 0.2 == 0.3`は`false`です。
- **整数演算のオーバーフローは自動で例外になりません。** 例えば`Integer.MAX_VALUE + 1`は`Integer.MIN_VALUE`になります。
- **`boolean`は数値型ではありません。** `0`や`1`を直接代入したり、数値型へキャストしたりできません。
- **ローカル変数に自動の初期値はありません。** フィールドや配列要素は型に応じて`0`、`false`などで初期化されますが、ローカル変数は使用前に値の代入が必要です。

## 関連用語

- [参照型](./reference.md)：参照の共有、比較、`null`を詳しく説明します。
- [型変換とキャスト](./conversions.md)：異なる数値型の変換を説明します。
- [変数とスコープ](./variables.md)：初期化と`final`の意味を説明します。
- [ラッパークラス](./wrapper.md)：プリミティブ値をオブジェクトとして扱うためのクラスです。
- [ボクシングとアンボクシング](./wrapper.md#boxing-unboxing)：プリミティブ型とラッパークラスの間の変換です。

## 参考資料

- [Java言語仕様（Java SE 25）§3.10：Literals](https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.10)
- [Java言語仕様（Java SE 25）§4.2：Primitive Types and Values](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.2)
- [Java言語仕様（Java SE 25）§4.3：Reference Types and Values](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.3)
- [Java言語仕様（Java SE 25）§4.12.5：Initial Values of Variables](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.12.5)
- [Java言語仕様（Java SE 25）§8.9：Enum Classes](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.9)
- [Java SE 25 API：String](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html)
