import { auth, db } from '../../firebaseConfig';
import { doc, addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, where } from "firebase/firestore";

export const getPostsFirebase = async (setListaObjetos) => {
    try {
        const q = query(collection(db, 'posts'))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                texto: doc.data().texto,
                tipo: doc.data().tipo,
                url: doc.data().url,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const getPostsUIDFirebase = async (uid, setListaObjetos) => {
    try {
        const colRef = collection(db, "posts");
        const q = query(colRef, where("uid", "==", uid))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                texto: doc.data().texto,
                tipo: doc.data().tipo,
                url: doc.data().url,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const deletePostFirebase = async objeto => {
    try {
        const postDocRef = doc(db, 'posts', objeto.id)
        await deleteDoc(postDocRef);
    } catch (err) {
        throw err;
    }
}

export const addPostFirebase = async objeto => {
    try {
        let ret = await addDoc(collection(db, 'posts'),
            {
                titulo: objeto.titulo,
                texto: objeto.texto,
                tipo: objeto.tipo,
                url: objeto.url,
                uid: objeto.uid,
                usuario: objeto.usuario,
                email: objeto.email
            }).then(function (docRef) {
                objeto = { ...objeto, id: docRef.id };
                return objeto;
            });
        return ret;
    } catch (err) {
        throw err;
    }
}

export const updatePostFirebase = async objeto => {
    try {
        const postDocRef = doc(db, 'posts', objeto.id)
        await updateDoc(postDocRef, {
            titulo: objeto.titulo,
            texto: objeto.texto,
            tipo: objeto.tipo,
            url: objeto.url,
            uid: objeto.uid,
            usuario: objeto.usuario,
            email: objeto.email
        })
    } catch (err) {
        throw err;
    }
}
//aquiiiiiiiiiiiiiiii
export const getRoupasFirebase = async (setListaRoupas) => {
    try {
        const q = query(collection(db, 'roupas'))
        onSnapshot(q, (querySnapshot) => {
            setListaRoupas(querySnapshot.docs.map(doc => ({
                id: doc.id,
                modelo: doc.data().modelo,
                nome: doc.data().nome,
                tamanho: doc.data().tamanho,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const getRoupasUIDFirebase = async (uid, setListaRoupas) => {
    try {
        const colRef = collection(db, "roupas");
        const q = query(colRef, where("uid", "==", uid))
        onSnapshot(q, (querySnapshot) => {
            setListaRoupas(querySnapshot.docs.map(doc => ({
                id: doc.id,
                modelo: doc.data().modelo,
                nome: doc.data().nome,
                tamanho: doc.data().tamanho,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const deleteRoupasFirebase = async objeto => {
    try {
        const postDocRef = doc(db, 'roupas', objeto.id)
        await deleteDoc(postDocRef);
    } catch (err) {
        throw err;
    }
}

export const addRoupasFirebase = async objeto => {
    try {
        let ret = await addDoc(collection(db, 'roupas'),
            {
                modelo: objeto.modelo,
                nome: objeto.nome,
                tamanho: objeto.tamanho,
                uid: objeto.uid
            }).then(function (docRef) {
                objeto = { ...objeto };
                return objeto;
            });
        return ret;
    } catch (err) {
        throw err;
    }
}

export const updateRoupasFirebase = async objeto => {
    try {
        const postDocRef = doc(db, 'roupas', objeto.id)
        await updateDoc(postDocRef, {
            titulo: objeto.titulo,
            texto: objeto.texto,
            tipo: objeto.tipo,
            url: objeto.url,
            uid: objeto.uid,
            usuario: objeto.usuario,
            email: objeto.email
        })
    } catch (err) {
        throw err;
    }
}


