import ItemList from "./ItemList";

const ItemListContainer = () => {
    return (
        <>
            <div className="col text-center">
                <h1 className="fw-light mt-2">Productos</h1>
                <div className="container">
                    <div className="row gutter-1">
                        <ItemList />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemListContainer;