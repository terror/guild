import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './providers/AuthProvider';
import { PrivateRoute } from './components/PrivateRoute';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Room } from './pages/Room';
import { Create } from './pages/Create';
import { NotFound } from './pages/NotFound';

interface AppProps {}

export const App: React.FC<AppProps> = () => (
    <AuthProvider>
        <ChakraProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile/:id" component={Profile} />
                    <PrivateRoute path="/settings" component={Settings} />
                    <PrivateRoute path="/room/:id" component={Room} />
                    <PrivateRoute path="/create" component={Create} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ChakraProvider>
    </AuthProvider>
);
