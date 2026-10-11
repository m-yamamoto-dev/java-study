---
description: "Javaのenum、列挙定数、型の安全性と比較の注意点を整理します。"
---

# 列挙型とは

**列挙型（enum）**は、あらかじめ決めた名前付きの選択肢を型として表す仕組みです。例えば、注文の状態や曜日を表せます。

## 要点

- 列挙型はクラス型の一種で、各列挙定数はその型のインスタンスです。
- 任意の文字列や数値ではなく、その型の選択肢を使えるようにします。
- フィールドやメソッド、コンストラクタを定義できます。

## 仕組み・特徴

`enum Status { NEW, DONE }`は、`NEW`と`DONE`を持つ型を宣言します。利用側で`new Status()`のようにインスタンスを作ることはできません。

`Status`型の変数に別の列挙型の定数や文字列を代入することはできません。ただし参照型なので`null`は代入できます。

## コード例

```java
enum Status {
    NEW, DONE
}

class Order {
    private Status status = Status.NEW;

    boolean isDone() {
        return status == Status.DONE;
    }
}
```

列挙定数の比較には`==`を使えます。各定数が固有のインスタンスだからです。`status`が`null`でも、この比較自体は例外になりません。

## 間違えやすい点

- `ordinal()`は宣言順の番号です。定数の追加や並び替えで変わるため、永続化する識別子として使うと変更の影響を受けます。
- `valueOf`は定数の名前を完全一致で探し、該当しなければ`IllegalArgumentException`になります。
- 列挙型というだけでオブジェクトの状態が不変になるわけではありません。変更可能なフィールドを持たせることもできます。

## 関連用語

- [参照型](./reference.md)
- [クラスとインスタンス](./classes.md)
- [制御構文](./control-flow.md)：`switch`の選択肢にも使えます。

## 参考資料

- [Java言語仕様 §8.9：Enum Classes](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.9)
- [Java SE 25 API：Enum](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Enum.html)
