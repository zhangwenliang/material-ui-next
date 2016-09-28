import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classnames';
import logoImg from '../../images/logo_login.png';

export const styleSheet = createStyleSheet('Logo', (theme) => {
  return {
    loginLogo: {
      flexGrow: 0
    }
  };
});

const Logo = (props, context) => {
  const {
    className: classNameProp,
    logoImg = logoImg,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
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