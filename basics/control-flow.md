---
description: "Javaの条件分岐と繰り返し、break・continue・returnの違いを整理します。"
---

# 制御構文とは

**制御構文**は、条件に応じて処理を選んだり、処理を繰り返したりして、プログラムの実行順序を定める構文です。

## 要点

- `if`は条件による分岐、`switch`は値などに応じた分岐を表します。
- `for`、`while`、`do-while`は繰り返しを表します。
- `break`、`continue`、`return`は、それぞれ移動先が異なります。

## 仕組み・特徴

| 構文 | 主な役割 |
| --- | --- |
| `if` / `else` | `boolean`または`Boolean`の条件によって処理を選ぶ |
| `switch` | 複数の選択肢から処理や結果を選ぶ |
| `for` | 初期化・条件・更新をまとめた繰り返し |
| 拡張`for` | 配列や`Iterable`の要素を順に扱う |
| `while` | 条件を確認してから繰り返す |
| `do-while` | 一度実行してから条件を確認する |

### 処理を途中で終える

ラベルなしの`break`は最も内側のループや`switch`文を終了します。ラベルなしの`continue`は最も内側のループの残りの処理を飛ばし、次の繰り返しへ進みます。ラベル付きの`break`や`continue`では、ラベルで対象を指定できます。`return`は現在のメソッドやコンストラクタ、ラムダ式の実行を終了します。

## コード例

```java
int total = 0;
for (int value : new int[] {10, -5, 20}) {
    if (value < 0) {
        continue;
    }
    total += value;
}
System.out.println(total); // 30
```

負の値のときだけ加算を飛ばし、繰り返し自体は続けます。

## 間違えやすい点

- `if`や`while`の条件に数値を直接使うことはできません。
- 条件に`Boolean`を使うとアンボクシングされるため、値が`null`なら`NullPointerException`になります。
- 波括弧で囲むブロックと、その中で宣言した変数のスコープを意識します。
- `switch`の従来の`case ...:`では、`break`などがないと次の処理へ進む場合があります。`case ... ->`はその形式のフォールスルーを起こしません。
- `switch`には文と式があります。式は値を返し、すべての選択肢をカバーする必要があります。

## 関連用語

- [変数とスコープ](./variables.md)
- [配列](./arrays.md)
- [メソッド](./methods.md)

## 参考資料

- [Java言語仕様 §14：Blocks, Statements, and Patterns](https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html)
- [Java言語仕様 §15.28：switch Expressions](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.28)
