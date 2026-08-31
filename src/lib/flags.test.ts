import { describe, expect, test } from 'vitest'

import { messageStatus, POSITION_RECIPIENT } from '@/consts/constants'
import { mixMessagesToFlags } from '@/lib/flags'
import { Message } from '@/types/Message'

// テスト用のメッセージを生成する。imageUrl でどのメッセージか識別する
function makeMessages(prefix: string, count: number): Message[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i}`,
    managerId: 'manager',
    position: POSITION_RECIPIENT,
    status: messageStatus.APPROVED,
    imageUrl: `${prefix}-${i}.png`,
    isWorkingInProgress: false,
    createdAt: new Date(2026, 0, 1),
    approvedAt: new Date(2026, 0, 2),
    canceledAt: new Date(2026, 0, 3),
    publishedAt: new Date(2026, 0, 4),
  }))
}

const rTcs = ['text-my-palered', 'text-my-red']
const pTcs = ['text-my-palegreen', 'text-my-green']

describe('mixMessagesToFlags', () => {
  test('recipient2枚→provider1枚のパターンで並ぶ', () => {
    const flags = mixMessagesToFlags(makeMessages('r', 4), makeMessages('p', 2), rTcs, pTcs)

    expect(flags.map((f) => f.imageUrl)).toEqual([
      'r-0.png',
      'r-1.png',
      'p-0.png',
      'r-2.png',
      'r-3.png',
      'p-1.png',
    ])
  })

  test('少ない側は先頭から循環して、多い側が尽きるまで充足する', () => {
    // r=2, p=4: R,R,P パターンで provider 4件を消化するまで recipient は循環する
    const flags = mixMessagesToFlags(makeMessages('r', 2), makeMessages('p', 4), rTcs, pTcs)

    expect(flags.map((f) => f.imageUrl)).toEqual([
      'r-0.png',
      'r-1.png',
      'p-0.png',
      'r-0.png',
      'r-1.png',
      'p-1.png',
      'r-0.png',
      'r-1.png',
      'p-2.png',
      'r-0.png',
      'r-1.png',
      'p-3.png',
    ])
  })

  test('provider1件でも循環してrecipient全件が表示される', () => {
    const flags = mixMessagesToFlags(makeMessages('r', 5), makeMessages('p', 1), rTcs, pTcs)

    expect(flags.map((f) => f.imageUrl)).toEqual([
      'r-0.png',
      'r-1.png',
      'p-0.png',
      'r-2.png',
      'r-3.png',
      'p-0.png',
      'r-4.png',
    ])
  })

  test('providerが0件ならrecipientだけで全件並べる', () => {
    const flags = mixMessagesToFlags(makeMessages('r', 3), [], rTcs, pTcs)

    expect(flags.map((f) => f.imageUrl)).toEqual(['r-0.png', 'r-1.png', 'r-2.png'])
  })

  test('recipientが0件ならproviderだけで全件並べる', () => {
    const flags = mixMessagesToFlags([], makeMessages('p', 3), rTcs, pTcs)

    expect(flags.map((f) => f.imageUrl)).toEqual(['p-0.png', 'p-1.png', 'p-2.png'])
  })

  test('両方0件なら空配列を返す', () => {
    expect(mixMessagesToFlags([], [], rTcs, pTcs)).toEqual([])
  })

  test('文字色は各立場の表示回数に応じて循環する', () => {
    const flags = mixMessagesToFlags(makeMessages('r', 4), makeMessages('p', 2), rTcs, pTcs)

    // R0,R1,P0,R2,R3,P1 の順。recipient は rTcs を、provider は pTcs を循環する
    expect(flags.map((f) => f.textColor)).toEqual([
      'text-my-palered',
      'text-my-red',
      'text-my-palegreen',
      'text-my-palered',
      'text-my-red',
      'text-my-green',
    ])
  })

  test('pale系の色は画像を反転しない、それ以外は反転する', () => {
    const flags = mixMessagesToFlags(makeMessages('r', 4), makeMessages('p', 2), rTcs, pTcs)

    expect(flags.map((f) => f.isInvertImage)).toEqual([false, true, false, false, true, true])
  })
})
