---
description: "Javaの継承、インターフェース、オーバーライドとポリモーフィズムを整理します。"
---

# 継承とインターフェースとは

**継承**は、既存のクラスを基にクラスを定義する仕組みです。**インターフェース**は、実装するクラスが提供する操作などの契約を表す型です。

## 要点

- クラスの継承には`extends`、インターフェースの実装には`implements`を使います。
- クラスが直接継承できるクラスは一つですが、複数のインターフェースを実装できます。
- オーバーライドは、継承したインスタンスメソッドに対応する実装を定義することです。

## 仕組み・特徴

### 抽象クラスとインターフェース

抽象クラスは`abstract`で宣言し、直接インスタンス化できません。実装を持つメソッドやフィールドと、実装を持たない抽象メソッドを組み合わせられます。

インターフェースは操作の契約を表すために使えます。抽象メソッドだけでなく、実装を持つ`default`メソッド、`static`メソッドなども宣言できます。

### ポリモーフィズム {#polymorphism}

同じ型を通した操作が、実際のオブジェクトに応じて異なる振る舞いをする性質をポリモーフィズム（多態性）と呼びます。オーバーライドされたインスタンスメソッドは、実際のオブジェクトに応じて実装が選ばれます。

### super・finalと委譲 {#super-final}

`super(...)`はスーパークラスのコンストラクタ呼び出し、`super.method()`はスーパークラス側のメソッド実装の呼び出しに使います。`final`クラスは継承できず、`final`メソッドはオーバーライドできません。

処理を別のオブジェクトに任せることを委譲と呼びます。例えば、クラスが`Greeter`をフィールドに持ち、その`greet()`を呼ぶ設計です。継承先を基の型として扱う関係が必要か、協力するオブジェクトとして持つ方が自然かを考えて選びます。

## コード例

```java
interface Greeter {
    String greet();
}

class JapaneseGreeter implements Greeter {
    @Override
    public String greet() {
        return "こんにちは";
    }
}
```

`Greeter greeter = new JapaneseGreeter();`とすると、変数の型は`Greeter`、実際のオブジェクトのクラスは`JapaneseGreeter`です。`greeter.greet()`は`"こんにちは"`を返します。

## 間違えやすい点

- 継承は、単にコードを再利用したいという理由だけで選ぶものではありません。型としての関係も考えます。
- コンストラクタは継承されません。
- `static`メソッドはインスタンスメソッドのようにはオーバーライドされません。
- `@Override`を付けると、意図したオーバーライドになっているかをコンパイラが確認します。

## 関連用語

- [クラスとインスタンス](./classes.md)
- [メソッドとオーバーロード](./methods.md#overloading)
- [参照型](./reference.md)

## 参考資料

- [Java言語仕様 §8.4.8：Inheritance, Overriding, and Hiding](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.8)
- [Java言語仕様 §9：Interfaces](https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html)
