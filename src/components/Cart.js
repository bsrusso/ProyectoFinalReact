import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { serverTimestamp, doc, collection, setDoc, updateDoc, increment } from 'firebase/firestore'
import db from "../utils/firebaseConfig";


const Cart = () => {
    const { items, removeItem, clearItems } = useContext(CartContext)
    let totalPrice = 0



    const hideEmpty = () => {
        if (items.length === 0) {
            return (
                <>
                    <div className="row text-center mt-4">
                        <div className="col">
                            <h3>No hay artículos en tu carrito... 😞</h3>
                            <Link to="/"><button className="btn btn-danger mt-3">Volver a la tienda</button></Link>
                        </div>
                    </div>
                </>
            )
        }
        return (
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <button className="btn btn-danger mt-4" onClick={() => clearItems()}>Vaciar carrito</button>
                </div>
                <div className="col d-flex justify-content-center">
                    <button className="btn btn-danger mt-4" onClick={() => createOrder()}>Checkout</button>
                </div>
            </div>
        )
    }


    const showTotalPrice = () => {
        if (totalPrice > 0) {
            return (
                <div className="row text-center">
                    <div className="col">
                        <p className="fs-3">
                            <strong>Total: ${totalPrice}</strong>
                        </p>
                    </div>
                </div>
            )
        }
    }

    const createOrder = () => {
        let order = {
            buyer: {
                email: "comprador@ejemplo.com",
                name: "Nombre Comprador",
                phone: "+54 9 11 1111-1111"
            },
            date: serverTimestamp(),
            items: items.map((it) => {
                return { id: it.id, cant: it.cant, price: it.price, title: it.title }
            }),
            total: totalPrice
        }

        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderFirestore()
            .then(result => {
                alert('Your order has been created: ' + result.id)
                items.map(async (item) => {
                    const itemRef = doc(db, "products", item.id)
                    await updateDoc(itemRef, {
                        stock: increment(-item.cant)
                    });
                });
                clearItems();
            })
            .catch(error => console.log(error))
    }

    {
        items.map((item) => {
            totalPrice = totalPrice + item.price * item.cant
        })
    }

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <h1>Tu compra</h1>
                </div>
            </div>
            {
                items.map((item) => (
                    <div className="container mt-4" key={item.id}>
                        <div className="row text-center d-flex align-items-center">
                            <div className="col-3">
                                <img className="img-fluid" src={item.pictureURL} />
                            </div>
                            <div className="col-3 col-sm-2 text-center">
                                <p><strong>Product:</strong></p>
                                <p className="fs-5"><strong>{item.title}</strong></p>
                            </div>
                            <div className="col-2 text-center">
                                <p><strong>Qty: {item.cant}</strong></p>
                            </div>
                            <div className="col-2 text-center">
                                <p><strong>${item.price * item.cant}</strong></p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger mb-2" onClick={() => removeItem(item.id)}>X</button>
                            </div>
                        </div>

                    </div>
                ))
            }
            {
                showTotalPrice()
            }
            {
                hideEmpty()
            }

        </>
    )
}
export default Cart;