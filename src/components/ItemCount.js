import { useState } from 'react';

const ItemCounter = ({ item, stock, addItem, onAdd }) => {
    const [cant, setCant] = useState(1);

    const increase = () => {
        if (cant >= 1 && cant < stock) {
            setCant(cant + 1)
        }
    }

    const decrese = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    return (
        <div className="">
            <div className="">
                <button onClick={decrese} className="btn minWbtn btn-danger" type="submit">-</button>
                <p className="d-inline text-center p-3">{cant}</p>
                <button onClick={increase} className="btn minWbtn btn-danger" type="submit">+</button>
            </div>
            <div>
                <button type="button" className="btn btn-danger mt-2 btnSize" onClick={() => addItem(item, cant)}>Add to cart</button>
            </div>
        </div >
    )
}

export default ItemCounter;