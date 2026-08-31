import type { Flag } from '@/components/Carousel'

import { Message } from '@/types/Message'

// recipient2つprovider1つの順で旗を並べる。
// 少ない側は先頭から循環させ、両側の全メッセージが最低1回表示されるまで続ける。
// 片側が0件の場合は存在する側だけを順に並べる。
export function mixMessagesToFlags(
  rMsgs: Message[],
  pMsgs: Message[],
  rTcs: string[],
  pTcs: string[],
): Flag[] {
  if (rMsgs.length === 0) {
    return pMsgs.map((msg, i) => toFlag(msg, pTcs[i % pTcs.length]))
  }
  if (pMsgs.length === 0) {
    return rMsgs.map((msg, i) => toFlag(msg, rTcs[i % rTcs.length]))
  }

  const flags: Flag[] = []
  let index = 0
  let indexR = 0
  let indexP = 0
  while (indexR < rMsgs.length || indexP < pMsgs.length) {
    if (index % 3 === 0 || index % 3 === 1) {
      // recipient
      flags.push(toFlag(rMsgs[indexR % rMsgs.length], rTcs[indexR % rTcs.length]))
      indexR++
    } else {
      // provider
      flags.push(toFlag(pMsgs[indexP % pMsgs.length], pTcs[indexP % pTcs.length]))
      indexP++
    }
    index++
  }

  return flags
}

function toFlag(msg: Message, textColor: string): Flag {
  return {
    imageUrl: msg.imageUrl,
    textColor,
    isInvertImage: textColor.includes('pale') ? false : true,
  }
}
