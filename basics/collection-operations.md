---
description: "List・Set・Mapの選び方と追加・取得・削除・走査を整理します。"
---

# コレクションの使い方と選び方

目的に応じて、順序と添字が必要なら**List**、重複を除きたいなら**Set**、キーで値を探したいなら**Map**を選びます。

## 要点

- `ArrayList`、`HashSet`、`HashMap`は代表的な変更可能な実装です。
- `size()`は要素数、`contains`や`containsKey`は存在の確認に使います。
- 挿入順が必要なら`LinkedHashSet`や`LinkedHashMap`も候補になります。

## 仕組み・特徴

| 対象 | 追加・登録 | 取得・確認 | 削除 | 走査 |
| --- | --- | --- | --- | --- |
| List | `add(value)` | `get(index)` | `remove(index)`など | 拡張`for` |
| Set | `add(value)` | `contains(value)` | `remove(value)` | 拡張`for` |
| Map | `put(key, value)` | `get(key)` | `remove(key)` | `entrySet()`など |

`Map.put`は、同じキーの登録があれば値を置き換えます。`Map.get`の結果が`null`でも、キーが存在しないのか、`null`が登録されているのかは区別できません。必要なら`containsKey`を使います。

## コード例

```java
java.util.List<Integer> values = new java.util.ArrayList<>();
values.add(10);
values.add(20);
values.remove(Integer.valueOf(10)); // 値10を削除
System.out.println(values); // [20]

java.util.Map<String, Integer> scores = new java.util.HashMap<>();
scores.put("Java", 80);
for (java.util.Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue()); // Java: 80
}
```

## 間違えやすい点

- `List<Integer>.remove(0)`は値0ではなく添字0の要素を削除します。
- 拡張`for`で走査中に同じコレクションを直接追加・削除すると、実装によっては`ConcurrentModificationException`になります。条件による削除には`removeIf`などを検討します。
- `Arrays.asList`のリストは固定サイズです。要素の置換はできますが、追加・削除はできません。

## 関連用語

- [コレクションとジェネリクス](./collections.md)
- [並べ替え](./sorting.md)
- [equals・hashCode](./object-contracts.md)

## 参考資料

- [Java SE 25 API：List](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/List.html)
- [Java SE 25 API：Map](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Map.html)
- [Java SE 25 API：Arrays.asList](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html#asList(T...))
- [Java SE 25 API：LinkedHashMap](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedHashMap.html)
- [Java SE 25 API：LinkedHashSet](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/LinkedHashSet.html)
