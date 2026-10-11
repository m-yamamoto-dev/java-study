# Java学習ノート

Javaの基礎知識や専門用語を、忘れたときに短時間で復習するためのサイトです。用語の意味から仕組み、間違えやすい点までを整理し、Javaを学び始めた方にも、実務経験のある方にも役立つ「教科書と用語辞典」を目指します。

## 調べ方・読み進め方

- 用語の意味を調べたいときは、[用語索引](./glossary.md)から該当する記事や節に移動できます。サイト内検索も利用できます。
- 短時間で復習したいときは、各記事の冒頭の定義と「要点」を確認してください。
- 基礎から読み進める場合は、以下の学習順序を目安にしてください。各記事は用語を調べるために単独でも読めます。

### 学習順序の目安

1. [Javaの実行環境](./basics/runtime.md)で、コンパイルと実行の全体像を確認する。
2. [変数とスコープ](./basics/variables.md)、[プリミティブ型](./basics/primitive.md)、[参照型](./basics/reference.md)、[ラッパークラス](./basics/wrapper.md)で、型と値の基礎を整理する。
3. [演算子](./basics/operators.md)、[型変換](./basics/conversions.md)、[制御構文](./basics/control-flow.md)、[配列](./basics/arrays.md)、[文字列](./basics/strings.md)で、値の操作と処理の流れを理解する。
4. [クラスとインスタンス](./basics/classes.md)、[メソッド](./basics/methods.md)、[パッケージ](./basics/packages.md)、[継承とインターフェース](./basics/inheritance.md)、[列挙型](./basics/enums.md)で、オブジェクトと型の関係を学ぶ。
5. [例外](./basics/exceptions.md)、[コレクションとジェネリクス](./basics/collections.md)で、異常時の処理と複数の値の扱いを整理する。
6. [Objectとequals・hashCode](./basics/object-contracts.md)、[コレクションの使い方](./basics/collection-operations.md)、[参照型のキャスト](./basics/reference-casts.md)、[ジェネリクスの詳細](./basics/generics.md)で、型とオブジェクトの理解を深める。
7. [ラムダ式](./basics/lambdas.md)、[並べ替え](./basics/sorting.md)、[Stream API](./basics/streams.md)で、複数の値に対する処理を組み立てる。
8. [ファイル入出力](./basics/file-io.md)、[日時](./basics/date-time.md)、[BigDecimal](./basics/big-decimal.md)、[record](./basics/records.md)で、データを扱うための道具を増やす。

[APIドキュメントの読み方](./basics/api-docs.md)と[エラーの読み方・デバッグ](./basics/debugging.md)は、最初のプログラムから並行して学ぶと役立ちます。メソッドと例外を学んだら、[単体テスト](./basics/testing.md)で境界値や異常時の動作も確認します。

## 学習カテゴリ

### 型と値

- [プリミティブ型とは](./basics/primitive.md)
- [参照型とは](./basics/reference.md)
- [ラッパークラスとは](./basics/wrapper.md)
- [型変換とキャストとは](./basics/conversions.md)
- [参照型のキャストとinstanceof](./basics/reference-casts.md)
- [配列とは](./basics/arrays.md)
- [文字列とStringとは](./basics/strings.md)
- [BigDecimalと正確な小数計算](./basics/big-decimal.md)
- [日時とタイムゾーン](./basics/date-time.md)

### 変数と処理の流れ

- [変数とスコープとは](./basics/variables.md)
- [演算子とは](./basics/operators.md)
- [制御構文とは](./basics/control-flow.md)

### オブジェクト指向

- [クラスとインスタンスとは](./basics/classes.md)
- [メソッドとは](./basics/methods.md)
- [パッケージとimportとは](./basics/packages.md)
- [継承とインターフェースとは](./basics/inheritance.md)
- [列挙型とは](./basics/enums.md)
- [Objectとequals・hashCode](./basics/object-contracts.md)
- [recordとは](./basics/records.md)
- [ラムダ式と関数型インターフェース](./basics/lambdas.md)

### エラーと例外処理

- [例外とは](./basics/exceptions.md)

### 複数のデータを扱う

- [コレクションとジェネリクスとは](./basics/collections.md)
- [コレクションの使い方と選び方](./basics/collection-operations.md)
- [ジェネリクスの詳細](./basics/generics.md)
- [並べ替えと比較](./basics/sorting.md)
- [Stream APIとは](./basics/streams.md)

### ファイルと入出力

- [ファイル入出力とは](./basics/file-io.md)

### 調べ方と動作の確認

- [APIドキュメントの読み方](./basics/api-docs.md)
- [エラーの読み方とデバッグ](./basics/debugging.md)
- [単体テストとは](./basics/testing.md)

### 開発と実行の仕組み

- [Javaの実行環境とは](./basics/runtime.md)

## このサイトについて

自分の学習記録を整理し、同じようにJavaを学ぶ方にも役立つ情報を公開していきます。専門用語・概念・仕組みの解説を中心とし、コード例は挙動や違いを確かめるための短い例に絞ります。

記事は「定義・要点・仕組みと特徴・コード例・間違えやすい点・関連用語・参考資料」を基本構成とします。関連する概念はリンクでつなぎ、詳しい説明が必要になった用語は独立した記事に整理していきます。

### 対象バージョンと参考資料

特記のない限り、Java SE 25の言語仕様と公式APIドキュメントを基準に説明します。バージョンによって仕様や利用できる機能が異なる場合は、該当記事に対象バージョンを記載します。各記事の「参考資料」から、説明の根拠を確認できます。
