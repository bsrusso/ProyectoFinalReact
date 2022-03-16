import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import ItemDetail from "./ItemDetail";
import { useParams, Link } from "react-router-dom";



const ItemDetailContainer = () => {
    const [data, setdata] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const firestoreFetch = async () => {
            const docRef = doc(db, "products", id)
            const querySnapshot = await getDoc(docRef);
            const array = []
            if (querySnapshot.data() != undefined) {
                array.push(querySnapshot.data())
                return array.map(document => ({
                    id: id,
                    ...document
                }))
            } else {
                return array
            }

        }
        firestoreFetch()
            .then(result => setdata(result[0]))
            .catch(error => console.log(error))
    }, [id]);


    if (!data) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col text-center mt-5">
                            <h2>Producto no encontrado 😞</h2>
                            <Link to="/"><button className="btn btn-danger">Volver a la tienda</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <ItemDetail item={data} />
            </>
        );
    }
};

export default ItemDetailContainer;