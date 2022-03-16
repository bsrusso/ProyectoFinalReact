import { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import Item from "./Item";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";

const ItemList = () => {
    const [promiseResult, setPromiseResult] = useState([]);
    const { categoryID } = useParams();

    useEffect(() => {
        const firestoreFetch = async () => {
            if (categoryID === undefined) {
                const querySnapshot = await getDocs(collection(db, "products"));
                return querySnapshot.docs.map(document => ({
                    id: document.id,
                    ...document.data()
                }))
            } else {
                const q = query(collection(db, "products"), where("categoryID", "==", parseInt(categoryID)))
                const querySnapshot = await getDocs(q);
                return querySnapshot.docs.map(document => ({
                    id: document.id,
                    ...document.data()
                }))
            }
        }
        firestoreFetch()
            .then(result => setPromiseResult(result))
            .catch(error => console.log(error))
    }, [categoryID])

    return (
        <>
            {promiseResult &&
                promiseResult.map((product) => <Item product={product} key={product.id} />)}
        </>
    );
};


export default ItemList;