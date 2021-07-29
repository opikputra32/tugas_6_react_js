import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const appRoute = () => (
    <Router>
        <div>
            <Route path="/" exact component={App}/>
            <Route path="/menu-makanan" component={MenuMakanan} />
            <Route path="/menu-minuman" component={MenuMinuman} />
            <Route path="/kontak" component={Kontak}/>
        </div>
    </Router>
);

export default appRoute;