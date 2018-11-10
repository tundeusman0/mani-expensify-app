import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import ExpenseDashboard from '../components/ExpenseDashboard'
import NotFound from '../components/NotFound'
import Header from '../components/Header'



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/CreatePage" component={AddExpensePage} />
                <Route path="/EditPage/:id" component={EditExpensePage} />
                <Route path="/HelpPage" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter
