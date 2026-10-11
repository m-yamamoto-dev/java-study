---
description: "単体テストの期待値・境界値・例外とJUnit Jupiterの基本を整理します。"
---

# 単体テストとは

**単体テスト**は、メソッドなどの小さな単位が期待どおりに動くかを確認するテストです。入力・操作・期待する結果を明確にします。

## 要点

- 正常な値だけでなく、境界値や異常な値も確認します。
- 期待値は、実装の計算をそのまま繰り返さずに決めます。
- 時刻やファイルなどへの依存を分けると、再現性のあるテストを書きやすくなります。

## 仕組み・特徴

JUnitはJavaのテスト用ライブラリで、JDKには含まれません。この例はJUnit Jupiterの`@Test`とAssertionsを使います。対応するJDKの範囲はJUnitのバージョンによって異なるため、導入時に公式資料を確認します。

## コード例

以下はJUnit Jupiterをテスト用の依存関係として導入し、テスト実行環境を用意したプロジェクト向けの例です。

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class AgeTest {
    static int requireAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("negative age");
        }
        return age;
    }

    @Test
    void acceptsZero() {
        assertEquals(0, requireAge(0));
    }

    @Test
    void rejectsNegative() {
        assertThrows(IllegalArgumentException.class, () -> requireAge(-1));
    }
}
```

0という境界値と、許可しない負数の動作を確認しています。

## 間違えやすい点

- テストが通っても、すべての入力で正しいことを証明できるわけではありません。
- `assertThrows`は指定した例外型のサブクラスも許容します。
- Javaの`assert`文は、JUnitのアサーションとは別の機能です。
- 外部サービスや実行時刻に依存するテストは、条件によって結果が変わる場合があります。

## 関連用語

- [デバッグ](./debugging.md)
- [例外](./exceptions.md)
- [日時](./date-time.md)

## 参考資料

- [JUnit公式：User Guide](https://docs.junit.org/current/user-guide/)
- [JUnit Jupiter API：Assertions](https://docs.junit.org/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html)
