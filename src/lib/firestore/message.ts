import { DocumentData, QueryDocumentSnapshot } from 'firebase-admin/firestore'

import { db } from './firestore'

import { messageStatus, POSITION_RECIPIENT } from '@/consts/constants'
import { Message } from '@/types/Message'

export const GetMessagesByPosition = async (position: string) => {
  // 受給者と提供者を2対1の割合で件数取得してみる
  const limit = position === POSITION_RECIPIENT ? 8 : 4

  let message: Message[] = []
  ;(
    await db
      .collection('messages')
      .where('status', '==', messageStatus.APPROVED)
      .where('position', '==', position)
      .orderBy('approvedAt', 'desc')
      .limit(limit)
      .withConverter<Message>(messageConverter)
      .get()
  ).forEach((doc) => {
    message.push(doc.data())
  })
  return message
}

const messageConverter = {
  toFirestore(message: Message): DocumentData {
    return {
      id: message.id,
      managerId: message.managerId,
      position: message.position,
      status: message.status,
      imageUrl: message.imageUrl,
      isWorkingInProgress: message.isWorkingInProgress,
      createdAt: message.createdAt,
      approvedAt: message.approvedAt,
      canceledAt: message.canceledAt,
      publishedAt: message.publishedAt,
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Message {
    const data = snapshot.data()!
    return {
      id: data.id,
      managerId: data.managerId,
      position: data.position,
      status: data.status,
      imageUrl: data.imageUrl,
      isWorkingInProgress: data.isWorkingInProgress,
      createdAt: data.createdAt.toDate(),
      approvedAt: data.approvedAt ? data.approvedAt.toDate() : null,
      canceledAt: data.canceledAt ? data.canceledAt.toDate() : null,
      publishedAt: data.publishedAt ? data.publishedAt.toDate() : null,
    }
  },
}
