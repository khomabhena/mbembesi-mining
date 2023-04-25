import { doc, getDoc, getFirestore } from "firebase/firestore"
import firebase_app from "./config"

const db = getFirestore(firebase_app)

const getDocument = async (collection, id) => {
    let docRef = doc(db, collection, id)

    let result = null, error = null

    try {
        result = await getDoc(docRef)
    } catch (err) {
        error = err
    }

    return { result, error }
}

export default getDocument