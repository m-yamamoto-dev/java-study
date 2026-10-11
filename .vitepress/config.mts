import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java学習ノート',
  description: 'Javaの基礎知識と専門用語を復習するサイト',
  lang: 'ja-JP',
  base: '/java-study/',
  themeConfig: {
    nav: [{ text: 'ホーム', link: '/' }],
    sidebar: [
      {
        text: 'Javaの基本',
        items: [
          { text: 'プリミティブ型', link: '/basics/primitive' },
          { text: 'ラッパークラス', link: '/basics/wrapper' }
        ]
      }
    ],
    search: { provider: 'local' }
  }
})
