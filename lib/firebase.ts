import { initializeApp, getApps, FirebaseApp } from "firebase/app"

const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
] as const

const firebaseConfig = Object.fromEntries(
  requiredEnvVars.map(key => [key.replace('NEXT_PUBLIC_FIREBASE_', '').toLowerCase(), process.env[key]])
)

export const initFirebase = (): FirebaseApp => {
  try {
    requiredEnvVars.forEach(key => {
      if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`)
      }
    })

    if (!getApps().length) {
      return initializeApp(firebaseConfig)
    }
    return getApps()[0]
  } catch (error) {
    console.error('Failed to initialize Firebase:', error)
    throw error
  }
}
