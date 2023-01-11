import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import BookList from '../components/Booklist';
import AddBook from '../components/AddBook';

/*router işleri*/
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="ana-icerik">
                    <Routes>
                        <Route component={BookList} path="/" exact={true} />
                        <Route component={AddBook} path="/" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;