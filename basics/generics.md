---
description: "型パラメータ、境界、ワイルドカードと型消去を整理します。"
---

# ジェネリクスの詳細

**型パラメータ**は、クラスやメソッドで扱う型を抽象化するための名前です。利用側は`String`などの**型引数**を指定します。

## 要点

- `class Box<T>`の`T`は型パラメータです。
- `<T extends Number>`のように型の上限を指定できます。
- `List<Integer>`は`List<Number>`のサブタイプではありません。

## 仕組み・特徴

| 型 | 主な使い方・制約 |
| --- | --- |
| `List<?>` | 型引数が不明なリスト。取得値は`Object`として扱える |
| `List<? extends Number>` | `Number`として値を取り出せるが、任意の`Number`を追加できない |
| `List<? super Integer>` | `Integer`を追加できるが、取得値は一般には`Object`として扱う |

上の「追加できる」は、変更操作をサポートするリストであることが前提です。`? extends Number`でも`null`の追加は型の規則上可能ですが、実装が許すとは限りません。

## コード例

```java
class GenericExample {
    static <T> T first(java.util.List<T> values) {
        return values.get(0);
    }

    static double total(java.util.List<? extends Number> values) {
        double result = 0;
        for (Number value : values) {
            result += value.doubleValue();
        }
        return result;
    }
}
```

`first(List.of("Java"))`の戻り値は`String`として扱えます。`total`には`List<Integer>`も`List<Double>`も渡せます。空のリストへの`first`呼び出しは範囲外のアクセスになります。

## 間違えやすい点

- 型消去は、型パラメータなどを境界に基づく型へ置き換える仕組みです。ジェネリクスの情報がすべて消えるという意味ではありません。
- 通常、`new T()`や`new T[3]`は書けません。
- `instanceof List<String>`で型引数を検査することはできません。`instanceof List<?>`は使えます。
- 生の型を使うと、コンパイル時に発見できたはずの問題が実行時に現れる場合があります。

## 関連用語

- [コレクション](./collections.md)
- [オーバーロード](./methods.md#overloading)

## 参考資料

- [Java言語仕様 §4.4〜4.8：型変数・型引数・型消去](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.4)
- [Java言語仕様 §8.4.4：Generic Methods](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.4)
