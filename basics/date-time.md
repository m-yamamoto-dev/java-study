---
description: "java.timeの日時・期間・タイムゾーンの使い分けを整理します。"
---

# 日時とタイムゾーン

`java.time`は日時を扱うAPIです。**日付**、**時刻**、**タイムゾーン付き日時**、**時間軸上の一時点**を区別して型を選びます。

## 要点

- `LocalDate`は日付、`LocalDateTime`はタイムゾーンを持たない日時です。
- `Instant`は時間軸上の一時点、`ZonedDateTime`はタイムゾーン付き日時です。
- 主な日時型は不変で、加減算などの結果は戻り値で受け取ります。

## 仕組み・特徴

`Period`は年月日を基にした期間、`Duration`は秒・ナノ秒を基にした時間量です。夏時間のある地域では、日付としての1日と経過時間24時間が同じになるとは限りません。

`LocalDateTime`だけでは、世界のどの一時点なのかを決められません。地域のタイムゾーンやUTCからのオフセットが必要です。

## コード例

```java
java.time.LocalDate date = java.time.LocalDate.of(2026, 10, 11);
System.out.println(date.plusDays(1)); // 2026-10-12
java.time.Instant instant = java.time.Instant.parse("2026-10-11T00:00:00Z");
java.time.ZonedDateTime tokyo = instant.atZone(java.time.ZoneId.of("Asia/Tokyo"));
System.out.println(tokyo.getHour()); // 9
```

## 間違えやすい点

- `now()`を使う処理は、実行時刻や既定のタイムゾーンに依存する場合があります。テストでは`Clock`を渡す設計も使えます。
- 存在しない日付は`DateTimeException`になります。
- 日時の文字列化・解析には`DateTimeFormatter`を使えます。書式の`yyyy`と`YYYY`は異なる意味です。

## 関連用語

- [不変性](./primitive.md#mutability)
- [単体テスト](./testing.md)

## 参考資料

- [Java SE 25 API：java.time](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/time/package-summary.html)
- [Java SE 25 API：DateTimeFormatter](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/time/format/DateTimeFormatter.html)
- [Java SE 25 API：Clock](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/time/Clock.html)
