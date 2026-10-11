---
description: "Javaの例外、検査例外と非検査例外、throw・throwsとリソース管理を整理します。"
---

# 例外とは

**例外**は、処理中に発生した異常などをオブジェクトとして伝え、通常の実行の流れを中断する仕組みです。

## 要点

- `try`で対象の処理を囲み、`catch`で例外に応じた処理を行います。
- `throw`は例外を送出し、`throws`はメソッドから送出し得る例外を宣言します。
- 検査例外には、捕捉するか`throws`で宣言することが必要です。

## 仕組み・特徴

### 例外の分類 {#kinds}

例外処理で扱う型は`Throwable`を基にします。`RuntimeException`とそのサブクラス、`Error`とそのサブクラスは非検査例外です。それ以外は検査例外で、`IOException`などが該当します。

非検査例外は捕捉や宣言をコンパイラが要求しませんが、無視してよいという意味ではありません。`Error`は、アプリケーションが通常の処理で回復することを想定しない問題を表すことが多い型です。

### finallyとリソース管理

`finally`は、`try`の後処理などに使います。ファイルなどの`AutoCloseable`なリソースには、終了時に自動で`close()`を呼ぶtry-with-resourcesが使えます。

## コード例

```java
try {
    int number = Integer.parseInt("abc");
    System.out.println(number);
} catch (NumberFormatException e) {
    System.out.println("整数として解釈できません");
}
```

変換に失敗すると、`try`内の残りの処理を飛ばして、対応する`catch`へ進みます。

## 間違えやすい点

- 例外を捕捉して何もしないと、失敗の原因や状態が分からなくなることがあります。
- `throws`を書くだけでは、例外を処理したことにはなりません。
- `finally`も、JVMの終了などでは実行されない場合があります。
- `finally`内の`return`は、元の戻り値や例外を隠してしまう場合があります。

## 関連用語

- [ラッパークラスとnull](./wrapper.md#null-unboxing)
- [メソッド](./methods.md)
- [Javaの実行環境](./runtime.md)
- [エラーの読み方とデバッグ](./debugging.md)
- [ファイル入出力](./file-io.md)

## 参考資料

- [Java言語仕様 §11：Exceptions](https://docs.oracle.com/javase/specs/jls/se25/html/jls-11.html)
- [Java言語仕様 §14.20：The try Statement](https://docs.oracle.com/javase/specs/jls/se25/html/jls-14.html#jls-14.20)
