import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classnames';
import Splash from './Splash';
import LoginForm from './LoginForm';

export const styleSheet = createStyleSheet('LoginPage', (theme) => {
  return {
    loginPage: {
      display: 'flex',
      width: '100%',
      height: '100% !important',
      'min-height': '650px'
    }
  };
});

class LoginPage extends Component {
  render() {
    const {
      className: classNameProp,
      ...other
    } = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const className = classNames(classes.loginPage, classNameProp);
    return (
      <div style={{height: '50%'}} className={className} {...other}>
        <Splash/>
        <LoginForm/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  className: PropTypes.string
};

LoginPage.contextTypes = {
  styleManager: PropTypes.object.isRequired
};

export default LoginPage;