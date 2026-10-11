---
description: "Javaのパッケージ、完全修飾名、importと名前の衝突を整理します。"
---

# パッケージとimportとは

**パッケージ**は、クラスやインターフェースなどを名前で分類する仕組みです。**import**は、別のパッケージにある型などを、短い名前で参照できるようにする宣言です。

## 要点

- `package`宣言で、そのソースファイルの型が属するパッケージを指定します。
- パッケージ名を含む名前を完全修飾名と呼びます。
- `import`は、ライブラリをダウンロードしたり実行したりする操作ではありません。

## 仕組み・特徴

`java.util.ArrayList`は完全修飾名、`ArrayList`は単純名です。`import java.util.ArrayList;`を書くと、コード内で単純名を使えます。

`java.lang`の型は暗黙にインポートされるため、`String`や`Integer`には通常`import`が不要です。同じパッケージの型にも通常は不要です。

`import static`を使うと、`Math.PI`などの静的メンバーを短い名前で参照できます。

## コード例

```java
package study;

import java.util.ArrayList;
import java.util.List;

public class Names {
    private final List<String> values = new ArrayList<>();
}
```

クラスの完全修飾名は`study.Names`です。一般的なプロジェクトでは、ソースルートからパッケージ名に対応するディレクトリにファイルを配置します。

## 間違えやすい点

- `import java.util.*;`はサブパッケージの型までインポートしません。
- 同じ単純名の型が複数ある場合、完全修飾名を使うなどして区別します。
- `import`しても、アクセス修飾子やモジュールの制限はなくなりません。

## 関連用語

- [クラスとアクセス修飾子](./classes.md#access)
- [メソッドとstatic](./methods.md#static)
- [コレクション](./collections.md)

## 参考資料

- [Java言語仕様 §7：Packages and Modules](https://docs.oracle.com/javase/specs/jls/se25/html/jls-7.html)
