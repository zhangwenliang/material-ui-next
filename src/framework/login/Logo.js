import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classNames';

export const styleSheet = createStyleSheet('LoginForm', (theme) => {
  return {
    loginLogo: {
      flexGrow: 0
    }
  };
});

const Logo = (props) => {
  const {
    className: classNameProp,
    logoImg = 'images/logo_login.png',
    ...other
  } = props;
  const classes = this.context.styleManager.render(styleSheet);
  const className = classNames(classes.splash, classNameProp);

  return (
    <div className={className} {...other}>
      <img src={logoImg}/>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  logoImg: PropTypes.string
};

Logo.contextTypes = {
  styleManager: PropTypes.object.isRequired
};

export default Logo;