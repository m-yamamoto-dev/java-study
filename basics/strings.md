---
description: "JavaのString、文字列の不変性、equalsとStringBuilderを整理します。"
---

# 文字列とStringとは

**文字列**は、文字の並びを表すデータです。Javaでは主に`String`クラスで扱います。`String`はプリミティブ型ではなく参照型です。

## 要点

- `String`オブジェクトはimmutable（不変）です。
- 文字列の内容は`equals`で比較します。
- `length()`はUTF-16のコード単位の数を返します。
- 文字列を繰り返し組み立てるための可変なクラスとして`StringBuilder`があります。

## 仕組み・特徴

### 不変性と文字列操作

連結・置換などの操作は、元の文字列を変更する操作ではありません。必要な結果は戻り値として受け取ります。結果が同じ内容になる操作では、元のオブジェクトが返される場合もあります。

### 内容と参照の比較 {#equality}

`==`は同じオブジェクトへの参照かを比較し、`String.equals`は内容を比較します。文字列リテラルは共有されるため、`==`でも一致する例がありますが、内容の比較には使いません。

### StringBuilder {#builder}

`StringBuilder`は、`append`などで内容を変更できるクラスです。組み立てた結果は`toString()`で`String`として取得できます。複数スレッドから同時に変更するための同期は備えていません。

### エスケープとテキストブロック {#text-blocks}

通常の文字列リテラルでは、`\n`は改行、`\t`はタブ、`\"`はダブルクォート、`\\`はバックスラッシュを表します。

Java 15以降のテキストブロックは、複数行の文字列を記述できます。開始の`"""`の後には改行が必要です。共通の付随的なインデントが除かれ、行末がLFへ正規化されます。エスケープも解釈されるため、入力をそのまま保持する生の文字列ではありません。

```java
String message = """
        Java
        入門
        """;
System.out.println(message.equals("Java\n入門\n")); // true
```

## コード例

```java
String name = "Java";
String upper = name.toUpperCase(java.util.Locale.ROOT);
System.out.println(name);                // Java
System.out.println(upper);               // JAVA
System.out.println("Java".equals(name)); // true
```

大文字に変換した結果を受け取っても、`name`が参照する元の文字列は変わりません。

## 間違えやすい点

- `null`と空文字列は異なります。`null`に対して`equals`や`length()`を呼ぶと例外になります。
- `length()`の結果は、見た目の文字数と一致しない場合があります。
- `char`はシングルクォート、文字列はダブルクォートで囲みます。

## 関連用語

- [プリミティブ型とchar](./primitive.md)
- [参照型](./reference.md)
- [ラッパークラスの比較](./wrapper.md#equality)

## 参考資料

- [Java SE 25 API：String](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html)
- [Java SE 25 API：StringBuilder](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuilder.html)
- [Java言語仕様 §3.10.6・3.10.7：Text Blocks・Escape Sequences](https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.10.6)
