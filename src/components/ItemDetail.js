import { CartContext } from './CartContext';
import ItemCounter from './ItemCount';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const { addItem, items } = useContext(CartContext);
    const [showButton, setShowButton] = useState(true);
    useEffect(() => {
        if (items.length > 0 && items.some((i) => i.id === item.id)) {
            setShowButton(false);
        }
    }, [items]);

    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-12 text-center mb-4'>
                        <h1 className='fw-bold'>{item.title}</h1>
                    </div>
                    <div className='col-6'>
                        <img src={item.pictureURL} className='img-fluid' />
                    </div>
                    <div className='col-6'>
                        <p className='fs-4 fw-bold'>{item.description}</p>
                        <p className='fs-2'>${item.price}</p>
                        {showButton && (
                            <div>
                                <ItemCounter item={item} stock={item.stock} addItem={addItem} />
                            </div>
                        )}
                        {!showButton && (
                            <Link to='/cart'>
                                <button type='button' className='btn btn-danger mt-2 btnSize'>
                                    Checkout
                                </button>
                                <br />
                            </Link>
                        )}
                        <Link to='/DesafioClase12ReactCoder'>
                            <button type='button' className='btn btn-danger mt-2 btnSize'>
                                Volver
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
