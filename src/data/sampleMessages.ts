import { messageStatus, POSITION_PROVIDER, POSITION_RECIPIENT } from '@/consts/constants'
import { Message } from '@/types/Message'

export const getSampleMessages = (position: string): Message[] => {
  if (position === POSITION_RECIPIENT) {
    return Array.from({ length: 10 }).map((_, i) => {
      return {
        id: `20241020-10203${i}`,
        managerId: 'm0001',
        position: POSITION_RECIPIENT,
        status: messageStatus.APPROVED,
        imageUrl: 'http://localhost:3000/img/message-sample-recipient.png',
        isWorkingInProgress: false,
        createdAt: new Date(),
        approvedAt: new Date(),
        canceledAt: new Date(),
        publishedAt: new Date(),
      }
    })
  } else {
    return Array.from({ length: 5 }).map((_, i) => {
      return {
        id: `20241020-10203${i}`,
        managerId: 'm0001',
        position: POSITION_PROVIDER,
        status: messageStatus.APPROVED,
        imageUrl: 'http://localhost:3000/img/message-sample-provider.png',
        isWorkingInProgress: false,
        createdAt: new Date(),
        approvedAt: new Date(),
        canceledAt: new Date(),
        publishedAt: new Date(),
      }
    })
  }
}
