---
description: "JavaのJDK・JVM、コンパイル、バイトコードとガベージコレクションを整理します。"
---

# Javaの実行環境とは

Javaのプログラムは、一般にソースコードを**コンパイル**してクラスファイルを作り、**JVM（Java Virtual Machine）**上で実行します。**JDK（Java Development Kit）**は、その開発や実行に必要なツールをまとめたものです。

## 要点

- `javac`はJavaのソースコードをコンパイルするツールです。
- クラスファイルには、JVMが扱う命令であるバイトコードなどが含まれます。
- `java`コマンドはJVMを起動してプログラムを実行します。
- ガベージコレクションは、不要になったオブジェクトのメモリを自動で回収する仕組みです。

## 仕組み・特徴

### 開発から実行まで

典型的な流れは「ソースファイル（`.java`）→ コンパイル → クラスファイル（`.class`）→ JVMで実行」です。ソースファイルを直接指定して起動するモードもありますが、コンパイルの仕組みがなくなるわけではありません。

JVMは仕様で定められたクラスファイルを扱います。実行時に機械語へ変換するJITコンパイルなど、具体的な実行方式はJVMの実装によって異なります。

### JDK・JRE・JVM {#jdk-jvm}

| 用語 | 役割 |
| --- | --- |
| JDK | コンパイラなどの開発ツールと実行環境を提供する |
| JRE | Javaを動かす実行環境を指す用語。配布形態は製品やバージョンで異なる |
| JVM | クラスファイルを読み込み、Javaのプログラムを実行する仮想マシン |

### ガベージコレクション {#gc}

GCは、実行を続けるうえで到達できなくなったオブジェクトなどのメモリを回収します。ローカル変数がスコープを抜けた直後に、必ず回収されるわけではありません。

## コード例

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java");
    }
}
```

`Hello.java`として保存し、`javac Hello.java`でコンパイルした後、`java Hello`で起動すると、`Hello, Java`が出力されます。この例では、従来から使われる`main`メソッドの形式を使っています。

## 間違えやすい点

- コンパイル時のエラーと、実行中の例外は別です。
- 新しいJava向けのクラスファイルが、古いJVMで実行できるとは限りません。
- GCはファイルやネットワーク接続を適切なタイミングで閉じる代わりにはなりません。
- 参照を保持し続けると、不要なオブジェクトでも回収されず、メモリを消費する場合があります。

## 関連用語

- [参照型](./reference.md)
- [例外とリソース管理](./exceptions.md)
- [メソッド](./methods.md)

## 参考資料

- [Java SE 25：JDK Tools](https://docs.oracle.com/en/java/javase/25/docs/specs/man/index.html)
- [Java仮想マシン仕様 §2：The Structure of the Java Virtual Machine](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html)
