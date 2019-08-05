import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../../assets/js/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import MissingRoute from './Common/MissingRoute/MissingRoute';
import Home from './Website/Home/Home';
import News from './Website/News/News';
import Architecture from './Website/Architecture/Architecture';
import Publications from './Website/Publications/Publications';
import Team from './Website/Team/Team';

class App extends React.Component {
    render() {
        return <>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/architecture" component={Architecture} />
                        <Route path="/publications" component={Publications} />
                        <Route path="/team" component={Team} />
                        <Route component={MissingRoute} />
                    </Switch>

                    <Footer />
                </Router>
            </MuiThemeProvider>
        </>;
    }
}

export default App;