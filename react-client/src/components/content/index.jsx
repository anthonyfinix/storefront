import React from 'react';
import './content.css';
import { Route, Switch } from 'react-router-dom';
import Role from '../role';
import Product from '../product';
import Customer from '../customer';
import Supplier from '../supplier';
import Dashboard from '../dashboard';
import Purchase from '../purchase';
import PointOfSale from '../pos';
import ProductCategory from '../productCategory';
import ContentProvider from '../contentProvider';

const Content = () => {
    const [isLoading, setLoading] = React.useState(true);
    return (
        <article id="content-wrapper">
                <ContentProvider>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/product" component={Product} />
                        <Route exact path="/customer" component={Customer} />
                        <Route exact path="/supplier" component={Supplier} />
                        <Route exact path="/role" component={Role} />
                        <Route exact path="/purchase" component={Purchase} />
                        <Route exact path="/productCategory" component={ProductCategory} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/pos" component={PointOfSale} />
                    </Switch>
                </ContentProvider>
        </article>
    )
}
export default Content;