---
description: "recordのコンポーネント、生成されるメソッドと不変性の範囲を整理します。"
---

# recordとは

**record**は、データをまとめるクラスを簡潔に宣言する構文です。Java 16で正式導入されました。

## 要点

- ヘッダーに、保持するデータのコンポーネントを宣言します。
- コンポーネントのフィールドは`private final`です。
- アクセサ、正規コンストラクタ、`equals`・`hashCode`・`toString`が、明示的な定義がない場合に提供されます。

## 仕組み・特徴

recordは暗黙に`final`で、`java.lang.Record`を継承します。別のクラスを継承することはできませんが、インターフェースを実装できます。コンパクトコンストラクタでは、値の検証や引数の調整を記述できます。

## コード例

```java
record User(String name, int age) {
    User {
        java.util.Objects.requireNonNull(name);
        if (age < 0) {
            throw new IllegalArgumentException("age must be non-negative");
        }
    }
}
```

`new User("Java", 20).name()`は`"Java"`を返します。アクセサの名前は`getName()`ではなく`name()`です。

## 間違えやすい点

- 参照先まで不変にはなりません。可変なリストや配列を渡す場合は、防御的コピーなどを検討します。
- 配列コンポーネントの既定の等価性は、配列要素の比較ではありません。
- コンポーネント以外のインスタンスフィールドを追加することはできません。staticフィールドは宣言できます。

## 関連用語

- [クラス](./classes.md)
- [equals・hashCode](./object-contracts.md)
- [final](./variables.md#final)

## 参考資料

- [Java言語仕様 §8.10：Record Classes](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.10)
- [OpenJDK JEP 395：Records](https://openjdk.org/jeps/395)
