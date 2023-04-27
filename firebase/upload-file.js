import { getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage"

export default async function uploadFile(folderPath, file) {
    let result = null, error = null
    const storage = getStorage()
    const storageRef = ref(storage, folderPath + "/" + file.name)

    try {
        result = await uploadBytes(storageRef, file).then((snapshot) => {
            return getDownloadURL(storage).then((url) => url)
        })
    } catch (err) {
        error = err   
    }

    return { result, error }
}
