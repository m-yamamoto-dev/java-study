---
description: "コンパイルエラー、スタックトレースとデバッガの使い方を整理します。"
---

# エラーの読み方とデバッグ

**デバッグ**は、期待する動作と実際の動作の差を調べ、その原因を見つけて修正する作業です。

## 要点

- コンパイルエラーと実行時の例外を分けて考えます。
- 例外の型・メッセージ・発生箇所・原因例外を確認します。
- 問題を再現できる最小の入力と処理に絞ります。

## 仕組み・特徴

スタックトレースの各行は、呼び出しの位置を表します。ソースファイル名と行番号が表示される場合、自分のコードの該当箇所を確認します。`Caused by`があれば原因例外も追います。最上段がライブラリ内部でも、自分の呼び出し時の引数が原因の場合があります。

デバッガでは、ブレークポイントで実行を止め、変数と呼び出し履歴を確認します。ステップオーバーはメソッド呼び出しを一つの処理として進め、ステップインは呼び出し先へ入って確認する操作です。

## コード例

```java
class DebugExample {
    public static void main(String[] args) {
        int[] values = {10};
        System.out.println(values[1]); // 実行すると範囲外のアクセス
    }
}
```

この例では`ArrayIndexOutOfBoundsException`が発生します。添字は1、配列の長さは1なので、有効な添字は0だけです。

## 間違えやすい点

- 表示されるメッセージや行番号は、JDK・コンパイル設定・コードの配置によって変わります。
- 例外を消すために`catch`を追加するだけでは、原因が解決しないことがあります。
- 式を評価するデバッガの操作でも、メソッドの呼び出しによって状態が変わる場合があります。

## 関連用語

- [例外](./exceptions.md)
- [配列](./arrays.md)
- [単体テスト](./testing.md)

## 参考資料

- [Java SE 25 API：Throwable.printStackTrace](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Throwable.html#printStackTrace())
- [Java SE 25 API：StackTraceElement](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StackTraceElement.html)
- [JDK 25：jdbコマンド](https://docs.oracle.com/en/java/javase/25/docs/specs/man/jdb.html)
