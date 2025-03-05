import { messageStatus } from '@/consts/constants'
import { Message } from '@/types/Message'

export const getSampleMessages = (position: string): Message[] => {
  if (position === '受給された方') {
    return Array.from({ length: 10 }).map((_, i) => {
      return {
        id: `20241020-10203${i}`,
        managerId: 'm0001',
        position: '受給された方',
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
        position: '提供された方',
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
