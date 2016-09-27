import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return <MuiThemeProvider><p>Will start...</p></MuiThemeProvider>;
  }
}

render(<App/>, document.getElementById('app'));