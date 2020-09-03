import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound'
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetailContainer from '../pages/BadgeDetailContainer';
import BadgeEdit from '../pages/BadgeEdit';
import Home from '../pages/Home'
import Badges from '../pages/Badges';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges/new' component={BadgeNew} />
                    <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
                    <Route exact path='/badges/:badgeId' component={BadgeDetailContainer} />
                    <Route exact path='/badges' component={Badges} />
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App