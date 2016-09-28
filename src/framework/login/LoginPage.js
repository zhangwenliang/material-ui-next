import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classnames';
import Splash from './Splash';
import LoginForm from './LoginForm';

export const styleSheet = createStyleSheet('LoginPage', (theme) => {
  return {
    loginPage: {
      display: 'flex',
      width: '100%',
      height: '100%'
    }
  };
});

const LoginPage = (props, context) => {
  const {
    className: classNameProp,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.loginPage, classNameProp);
  return (
    <div className={className} {...other}>
      <Splash/>
      <LoginForm/>
    </div>
  );
}

LoginPage.propTypes = {
  className: PropTypes.string
};

LoginPage.contextTypes = {
  styleManager: PropTypes.object.isRequired
};

export default LoginPage;