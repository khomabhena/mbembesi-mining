import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config"

const signIn = async (email, password) => {
  let result = null, error = null

  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    error = err
  }

  return { result, error }
}

export default signIn