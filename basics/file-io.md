---
description: "Path・Files、文字コードとtry-with-resourcesによるファイル操作を整理します。"
---

# ファイル入出力とは

**ファイル入出力**は、ファイルからデータを読み込んだり、ファイルへ書き込んだりする処理です。`Path`はパスを表し、`Files`はファイル操作を提供します。

## 要点

- パスを作ることと、ファイルを作ることは別です。
- 文字列とバイト列の変換では、文字コードを意識します。
- 自分で開いたリソースは、try-with-resourcesなどで閉じます。

## 仕組み・特徴

`Files.readString`や`writeString`は、小さなテキストファイルをまとめて扱うときに便利です。大きなファイルでは逐次読み込みを検討します。相対パスは、通常、実行時の作業ディレクトリを基準に解釈されます。

## コード例

```java
class FileExample {
    public static void main(String[] args) throws java.io.IOException {
        java.nio.file.Path path = java.nio.file.Path.of("note.txt");
        java.nio.file.Files.writeString(path, "Java\n", java.nio.charset.StandardCharsets.UTF_8);
        try (java.io.BufferedReader reader = java.nio.file.Files.newBufferedReader(
                path, java.nio.charset.StandardCharsets.UTF_8)) {
            System.out.println(reader.readLine()); // Java
        }
    }
}
```

この例は作業ディレクトリの`note.txt`へ書き込みます。既存ファイルがあれば内容を置き換えます。`reader`はブロック終了時に閉じられます。

## 間違えやすい点

- 読み書きは`IOException`などで失敗することがあります。
- `Files.lines`が返すStreamも閉じる必要があります。
- `Files.readString`・`writeString`の文字コードを省略した形式はUTF-8を使います。すべての入出力APIに共通する既定値とは限りません。

## 関連用語

- [例外とリソース管理](./exceptions.md)
- [Stream API](./streams.md)

## 参考資料

- [Java SE 25 API：Files](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/nio/file/Files.html)
- [Java SE 25 API：Path](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/nio/file/Path.html)
