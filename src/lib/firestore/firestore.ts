import admin from 'firebase-admin'

export var db: admin.firestore.Firestore

export const newFirestore = () => {
  if (db === undefined) {
    admin.initializeApp()
    db = admin.firestore()
  }
}
