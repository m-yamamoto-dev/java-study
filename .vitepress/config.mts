import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java学習ノート',
  description: 'Javaの基礎知識と専門用語を復習するサイト',
  lang: 'ja-JP',
  base: '/java-study/',
  themeConfig: {
    outline: {
      label: 'このページの内容'
    },
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '用語索引', link: '/glossary' }
    ],
    sidebar: [
      {
        text: '型と値',
        items: [
          { text: 'プリミティブ型の種類と特徴', link: '/basics/primitive' },
          { text: '参照型とオブジェクト', link: '/basics/reference' },
          { text: 'ラッパークラスとボクシング', link: '/basics/wrapper' },
          { text: '型変換とキャスト', link: '/basics/conversions' },
          { text: '参照型のキャストとinstanceof', link: '/basics/reference-casts' },
          { text: '配列の仕組みと使い方', link: '/basics/arrays' },
          { text: '文字列とString', link: '/basics/strings' },
          { text: 'BigDecimalと小数計算', link: '/basics/big-decimal' },
          { text: '日時とタイムゾーン', link: '/basics/date-time' }
        ]
      },
      {
        text: '変数と処理の流れ',
        items: [
          { text: '変数とスコープ', link: '/basics/variables' },
          { text: '演算子と計算・比較', link: '/basics/operators' },
          { text: '条件分岐と繰り返し', link: '/basics/control-flow' }
        ]
      },
      {
        text: 'オブジェクト指向',
        items: [
          { text: 'クラスとインスタンス', link: '/basics/classes' },
          { text: 'メソッドと引数・戻り値', link: '/basics/methods' },
          { text: 'パッケージとimport', link: '/basics/packages' },
          { text: '継承とインターフェース', link: '/basics/inheritance' },
          { text: '列挙型で選択肢を表す', link: '/basics/enums' },
          { text: 'Objectとequals・hashCode', link: '/basics/object-contracts' },
          { text: 'recordでデータをまとめる', link: '/basics/records' },
          { text: 'ラムダ式と関数型インターフェース', link: '/basics/lambdas' }
        ]
      },
      {
        text: 'エラーと例外処理',
        items: [{ text: '例外の種類と扱い方', link: '/basics/exceptions' }]
      },
      {
        text: '複数のデータを扱う',
        items: [
          { text: 'コレクションとジェネリクス', link: '/basics/collections' },
          { text: 'コレクションの使い方と選び方', link: '/basics/collection-operations' },
          { text: 'ジェネリクスの詳細', link: '/basics/generics' },
          { text: '並べ替えと比較', link: '/basics/sorting' },
          { text: 'Streamで抽出・変換・集計', link: '/basics/streams' }
        ]
      },
      {
        text: 'ファイルと入出力',
        items: [{ text: 'ファイルの読み書き', link: '/basics/file-io' }]
      },
      {
        text: '調べ方と動作の確認',
        items: [
          { text: 'APIドキュメントの読み方', link: '/basics/api-docs' },
          { text: 'エラーの読み方とデバッグ', link: '/basics/debugging' },
          { text: '単体テストで動作を確認', link: '/basics/testing' }
        ]
      },
      {
        text: '開発と実行の仕組み',
        items: [{ text: 'JDK・JVMとコンパイル・実行', link: '/basics/runtime' }]
      },
      {
        text: '用語から探す',
        items: [{ text: '用語索引', link: '/glossary' }]
      }
    ],
    search: { provider: 'local' }
  }
})
