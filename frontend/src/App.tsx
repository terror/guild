import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';

import { Home } from './pages/Home';

interface AppProps {}

export const App: React.FC<AppProps> = () => (
    <AuthProvider>
        <ChakraProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </ChakraProvider>
    </AuthProvider>
);
