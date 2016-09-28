import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classnames';
import splashImg from '../../images/img_signin.png';

export const styleSheet = createStyleSheet('Splash', (theme) => {
  return {
    splash: {
      flex: '2 70%',
      margin: 'auto',
      'text-align': 'center'
    }
  };
});

const Splash = (props, context) => {
  const {
    className: classNameProp,
    splashImg = splashImg,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.splash, classNameProp);

  return (
    <div className={className} {...other}>
      <img src={splashImg}/>
    </div>
  );
}

Splash.propTypes = {
  className: PropTypes.string,
  splashImg: PropTypes.string
};

Splash.contextTypes = {
  styleManager: PropTypes.object.isRequired
};

export default Splash;