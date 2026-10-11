---
description: "Java APIドキュメントの宣言、引数、戻り値と例外の読み方を整理します。"
---

# APIドキュメントの読み方

**APIドキュメント**は、クラスやメソッドをどのように使うかを説明する資料です。利用するJavaのバージョンに対応した資料を読みます。

## 要点

- 宣言でアクセス修飾子、`static`、戻り値、引数の型を確認します。
- `Parameters`、`Returns`、`Throws`で利用条件と結果を確認します。
- クラス全体の説明や、継承されたメソッドも確認します。

## 仕組み・特徴

| 表示 | 確認すること |
| --- | --- |
| Parameters | 引数の意味、許される値、`null`の扱い |
| Returns | 戻る値、変更可能性などの条件 |
| Throws | どの条件でどの例外が起きるか |
| Since | そのAPIが導入されたバージョン |
| Deprecated | 非推奨の理由、移行先や削除予定の有無 |

同じ名前でも引数が異なるオーバーロードは、別の説明を持ちます。実装上の補足と、利用者が頼れる契約を区別して読みます。

## コード例

```java
int value = Integer.parseInt("123");
System.out.println(value); // 123
```

`parseInt(String)`は`public static int`のメソッドです。インスタンスを作らず呼び出せて、戻り値は`int`です。10進整数として解析できない文字列や範囲外の値では`NumberFormatException`になります。

## 間違えやすい点

- メソッド名だけで、`null`許容や変更可能性を推測しません。
- `throws`節にない非検査例外が、`Throws`に記載されることもあります。
- 新しい資料に載っているAPIが、手元の古いJDKで使えるとは限りません。

## 関連用語

- [メソッド](./methods.md)
- [例外](./exceptions.md)
- [実行環境](./runtime.md)

## 参考資料

- [Java SE 25 API：Integer.parseInt](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Integer.html#parseInt(java.lang.String))
- [Javadocの仕様：標準ドックレット](https://docs.oracle.com/en/java/javase/25/docs/specs/javadoc/doc-comment-spec.html)
