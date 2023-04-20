import { doc, getDoc } from "firebase/firestore"
import { db } from "./config"

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