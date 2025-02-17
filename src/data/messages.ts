import { getSampleMessages } from './sampleMessages'

import { newFirestore } from '@/lib/firestore/firestore'
import { GetMessagesByPosition } from '@/lib/firestore/message'
import { Message } from '@/types/Message'

export const GetApprovedMessages = async (position: string): Promise<Message[]> => {
  if (
    process.env.NEXT_PUBLIC_APP_ENV === 'DEVELOPMENT' ||
    process.env.NEXT_PUBLIC_APP_ENV === 'PRODUCTION'
  ) {
    newFirestore()
    return GetMessagesByPosition(position)
  } else {
    return getSampleMessages(position)
  }
}
