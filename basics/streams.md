---
description: "Streamの中間操作・終端操作、遅延評価と注意点を整理します。"
---

# Stream APIとは

**Stream API**は、要素の列に対して抽出・変換・集計などの処理を組み立てる仕組みです。コレクションのように要素を保存する容器ではありません。

## 要点

- `filter`・`map`などの中間操作と、`toList`・`sum`などの終端操作を組み合わせます。
- 中間操作は遅延評価され、終端操作が処理を開始します。
- 同じStreamを繰り返し使い回すことはできません。

## 仕組み・特徴

`filter`は条件を満たす要素を残し、`map`は要素を変換します。`mapToInt`は`IntStream`へ変換し、整数の`sum`などを使えるようにします。通常、コレクションからのStream操作は元のコレクションを変更しません。

## コード例

```java
java.util.List<String> names = java.util.List.of("Java", "Go", "Ruby");
java.util.List<String> selected = names.stream()
        .filter(name -> name.length() >= 4)
        .map(name -> name.toUpperCase(java.util.Locale.ROOT))
        .toList();
System.out.println(selected); // [JAVA, RUBY]
int total = names.stream().mapToInt(String::length).sum();
System.out.println(total); // 10
```

## 間違えやすい点

- `Stream.toList()`は変更不可のリストを返します。Java 16以降のAPIです。
- `Collectors.toList()`は、返すリストの具体的な型や変更可能性を保証しません。
- 最適化によって処理の一部が省略されることがあります。`peek`などの副作用に、必須の処理を依存させません。
- 並列化すれば必ず速くなるわけではありません。まず逐次処理で理解します。
- ファイルなどの入出力由来のStreamは、閉じる必要がある場合があります。

## 関連用語

- [ラムダ式](./lambdas.md)
- [コレクション](./collections.md)
- [ファイル入出力](./file-io.md)

## 参考資料

- [Java SE 25 API：java.util.stream](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/stream/package-summary.html)
- [Java SE 25 API：Stream.toList](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html#toList())
- [Java SE 25 API：Collectors.toList](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/stream/Collectors.html#toList())
