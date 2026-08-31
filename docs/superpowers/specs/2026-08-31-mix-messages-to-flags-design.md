# mixMessagesToFlags 関数化・循環充足仕様への変更 設計

日付: 2026-08-31
ブランチ: feature/mix-messages-cycle-fill

## 背景

トップページのヒーロービュー(`src/components/TopHero.tsx`)は、受給者(recipient)と提供者(provider)の承認済みメッセージを「recipient 2枚 → provider 1枚」のパターンで旗のカルーセルに混ぜて表示している。

現状の `mixMessagesToFlags` は `TopHero.tsx` 内のプライベート関数であり、

- export されていないためユニットテストできない
- while ループが「どちらかの配列が尽きた時点」で打ち切るため、片側が少ないと多い側のメッセージが大量に表示されずに終わる
- 片側が0件だと旗が1枚も表示されない

という問題がある。

## 変更内容

### 1. 関数の切り出し

`mixMessagesToFlags` を `src/lib/flags.ts` に純粋関数として移動し、export する。
`TopHero.tsx` はこれを import して使う。シグネチャは現状を維持する:

```typescript
mixMessagesToFlags(
  rMsgs: Message[],
  pMsgs: Message[],
  rTcs: string[],
  pTcs: string[],
): Flag[]
```

`Flag` 型は既存の `src/components/Carousel.tsx` から import する。

### 2. ミックス仕様の変更(循環充足)

1. パターンは現状通り「recipient 2枚 → provider 1枚」の繰り返し。
2. **終了条件**: 両側のメッセージがそれぞれ最低1回表示されるまで続ける。少ない側はインデックスを剰余(`% length`)で先頭に巻き戻して充足する。
   - 例: recipient 100件・provider 50件 → ちょうど150枚で両側同時に消化。
   - 例: recipient 10件・provider 50件 → provider 50件の消化に150枚必要で、recipient は10件を10周する。
3. **片側0件**: 0件側のスロットはスキップし、存在する側だけを順に並べる(2:1パターンは適用しない)。両側0件なら空配列を返す。
4. 色の割り当ては現状ロジックを維持: `rTcs`/`pTcs` を剰余で循環し、色名に `pale` を含む場合は `isInvertImage: false`、含まない場合は `true`。

### 3. テスト基盤の導入

- **Vitest** を devDependencies に追加(ロジックのユニットテストのみ、React コンポーネントのテストは対象外)。
- `package.json` に `"test": "vitest run"` スクリプトを追加。
- 設定は最小限の `vitest.config.ts`(`@/` パスエイリアス解決のみ)。

### 4. テスト観点(`src/lib/flags.test.ts`)

- 2:1 パターン(R, R, P, R, R, P, ...)で並ぶこと
- 少ない側が先頭から循環して充足されること(巻き戻った位置の内容を検証)
- 総枚数が「長い側が尽きるまで」になること(例: r=2, p=4 → 12枚)
- 片側0件 → もう片側のみで全件表示、両側0件 → 空配列
- 色循環と `isInvertImage`(pale判定)が仕様通りであること

## スコープ外(現状維持)

- 上下2列のカルーセルが同じメッセージ内容を表示する点(色パターンのみ差別化)
- Firestore の取得件数(recipient 100件 / provider 50件)と並び順(`approvedAt` 降順)
