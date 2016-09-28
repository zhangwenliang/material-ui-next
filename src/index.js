import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui-build/src/styles/MuiThemeProvider';
import {LoginPage} from './framework';

class App extends React.Component {
  render() {
    return <MuiThemeProvider><LoginPage/></MuiThemeProvider>;
  }
}

render(<App/>, document.getElementById('app'));