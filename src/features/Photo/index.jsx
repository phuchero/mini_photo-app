import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

function Photo(props) {

    const match = useRouteMatch();
    console.log({match});


    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={MainPage} />
                <Route path={`${match.url}/add`} component={AddEditPage} />



                <Route path={`${match.url}/:photoId`} component={AddEditPage} />
                {/* :/phtoId nghĩa là biến mà mình đặt và sẻ nhận đc qua hook useParam */}

                <Route component={NotFound} />

            </Switch>
        </div>
    );
}

export default Photo;