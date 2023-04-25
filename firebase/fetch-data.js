import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore"
import firebase_app from "./config"
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage"

export const FirebaseStorage = () => {

    const db = getFirestore(firebase_app)

    const setData = async (path, id, data) => {
        let result = null, error = null
        
        try {
            result = await setDoc(doc(db, path, id), data)
        } catch (err) {
            error = err
        }

        return { result, error }
    }

    const addData = async (path, data) => {
        let result = null, error = null

        try {
            result = await addDoc(collection(db, path), data)
        } catch (err) {
            error = err
        }

        return { result, error }
    }

    const getUniqueId = async (path) => {
        let result = null, error = null

        try {
            let res = await doc(collection(db, path))
            result = await res.id
        } catch (err) {
            error = err
        }

        return { result, error }
    }

    const updateData = async (path, id, data) => {
        let result = null, error = null

        try {
            result = await updateDoc(doc(db, path, id), data)
        } catch (err) {
            error = err            
        }
        
        return { result, error }
    }

    const getData = async (path, id) => {
        let result = null, error = null

        const snapshot = await getDoc(doc(db, path, id))

        if (snapshot.exists()) {
            result = await snapshot.data()
        } else {
            error = "No data found."
        }

        return { result, error }
    }

    const getAllData = async (path) => {
        let result = null, error = null

        const snapshot = await getDocs(collection(db, path))
        const array = []
        snapshot.forEach(doc => {
            array.push({id: doc.id, data: doc.data()})
        })

        if (array.length > 0) {
            result = array
        } else {
            error = "No data found"
        }

        return { result, error }
    }

    const uploadFile = async (folderPath, file, path, id, data, dUrl, name) => {
        let result = null, error = null
        const storage = getStorage()
        const storageRef = ref(storage, folderPath + "/" + file.name)

        try {
            result = await uploadBytes(storageRef, file).then((snapshot) => {
                return getDownloadURL(storage).then((url) => {
                    updateData(path, id, { ...data, [dUrl]: url, [name]: file.name})
                    return url
                })
            })
        } catch (err) {
            error = err            
        }

        return { result, error }
    }

    const deleteFile = async (folderPath, fileName) => {
        let result = null, error = null

        const storage = getStorage()
        const storageRef = ref(storage, folderPath + "/" + fileName)

        deleteObject(storageRef).then(() => {
            result = true
        }).catch((error) => {
            error = true
        })

        return { result, error }
    }

    return { setData, addData, getUniqueId, updateData, 
        getData, getAllData, uploadFile, deleteFile }

}