import React, { createContext, useState } from 'react';

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const encontrar = items.find(item => item.id === id)
        return encontrar
    };

    const addItem = (item, cant) => {
        alert('Agregaste ' + cant + ' productos al carrito')
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
                if (prod.id === item.id) {
                    prod.cant += cant
                }
                return prod
            }))
            :
            setItems([...items, { id: item.id, title: item.title, price: item.price, cant: cant, pictureURL: item.pictureURL }])
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
            {children}
        </CartContext.Provider>
    );


}