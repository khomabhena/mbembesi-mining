import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config"

const signUp = async (email, password) => {
  let result = null, error = null

  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (err) {
    error = err
  }

  return { result, error }
}

export default signUp