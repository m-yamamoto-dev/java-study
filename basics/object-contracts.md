---
description: "Object、equals・hashCodeの契約とtoStringを整理します。"
---

# Objectとequals・hashCodeとは

**Object**はクラス階層の基点です。`equals`は等価性、`hashCode`はハッシュ値、`toString`は文字列表現を定義するメソッドです。

## 要点

- `==`による同一性と、`equals`による等価性を区別します。
- `Object.equals`の既定の実装は、同じオブジェクトかを比較します。
- `equals`で等しいオブジェクトは、同じ`hashCode`を返す必要があります。

## 仕組み・特徴

`equals`には反射性・対称性・推移性・一貫性が求められます。比較に使う状態が変わらなければ結果は安定し、非`null`のオブジェクトについて`x.equals(null)`は`false`です。

自作クラスで`equals`を変更する場合は、同じ情報を使って`hashCode`も定義します。ハッシュ値が同じでも、等価とは限りません。

## コード例

```java
final class Item {
    private final int id;

    Item(int id) { this.id = id; }

    @Override
    public boolean equals(Object other) {
        return other instanceof Item item && id == item.id;
    }

    @Override
    public int hashCode() { return Integer.hashCode(id); }

    @Override
    public String toString() { return "Item[id=" + id + "]"; }
}
```

`new Item(1).equals(new Item(1))`は`true`です。このクラスは継承を禁止し、等価性の基準を`id`に統一しています。

## 間違えやすい点

- `equals(Item other)`では`equals(Object)`のオーバーライドになりません。
- `hashCode`は一意なIDやメモリアドレスであるとは限りません。
- ハッシュによる検索に使う状態を格納後に変更すると、検索に支障が出る場合があります。
- `toString`の文字列を、そのまま永続化形式とみなすことは避けます。

## 関連用語

- [参照型](./reference.md)
- [コレクション](./collections.md)
- [record](./records.md)

## 参考資料

- [Java SE 25 API：Object](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html)
