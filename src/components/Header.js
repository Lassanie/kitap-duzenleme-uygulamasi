import React from 'react';
import { NavLink } from 'react-router-dom';

/*header */
const Header = () => {
    return(
        <header>
            <h1>Kitap Düzenleme Uygulaması</h1>
            <hr />
            <div className='links'>
                <NavLink to="/" className="link" activeClassName="active" exact>                    
                Kitap Listesi
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">                    
                Kitap ekle
                </NavLink>
            </div>
        </header>
    );
};

export default Header;