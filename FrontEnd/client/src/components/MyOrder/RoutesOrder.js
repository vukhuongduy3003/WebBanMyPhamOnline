import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllOrder from './components/AllOrder/AllOrder';

function RoutesOrder(props) {
    return (
        <Switch>
            <Route path='/myOrder/' exact component={AllOrder}/>
        </Switch>
    );
}

export default RoutesOrder;