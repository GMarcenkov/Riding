import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";
import GalleryContainer from "./galery/GalleryContainer";
import ProfileContainer from "./about/ProfileContainer";
import PricesContainer from "./prices/PricesContainer";
import ShopContainer from "./shop/ShopContainer";

const Routes = props => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomeContainer}/>
                <Route path="/gallery" exact component={GalleryContainer}/>
                <Route path="/about" exact component={ProfileContainer}/>
                <Route path="/price" exact component={PricesContainer}/>
                <Route path="/shop" exact component={ShopContainer}/>
            </Switch>

        </Router>
    );
};

Routes.propTypes = {

};

export default Routes;
