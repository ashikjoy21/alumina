import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth"
import { initFirebase } from "./config"

let auth;

if (typeof window !== "undefined") {
  initFirebase();
  auth = getAuth();
}

export { auth };

export const signInWithGoogle = async (): Promise<User | null> => {
  if (!auth) {
    console.error("Auth is not initialized");
    return null;
  }
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result.user
  } catch (error) {
    console.error("Error signing in with Google", error)
    return null
  }
}

export const signOut = async (): Promise<void> => {
  if (!auth) {
    console.error("Auth is not initialized");
    return;
  }
  try {
    await auth.signOut()
  } catch (error) {
    console.error("Error signing out", error)
  }
}
