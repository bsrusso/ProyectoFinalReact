import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src='https://i.imgur.com/igCF650.png' className='img-navbar img-fluid' /> Store</Link> {/*Link to store*/}
                    <div className="d-block d-sm-none">
                        <CartWidget />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page" >Productos</Link>
                            <Link to="/category/1" className="nav-link active">Kimetsu</Link>
                            <Link to="/category/2" className="nav-link active">Jujutsu</Link>
                        </div>
                    </div>
                    <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                        <CartWidget /> {/*Muestra dos veces el cart widget, una vez en pantalla grande y cuando se achica, esconde uno y muestra otro en un distinto lugar*/}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;