import React, { Component, Fragment } from 'react';
import ProductList from '../../components/ProductList';
import withTemplatePage from '../../hoc/withTemplatePage';

class MainPage extends Component {
    render() {
        return (
            <ProductList />
        );
    }
}

export default withTemplatePage(MainPage);