import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classNames';

export const styleSheet = createStyleSheet('Splash', (theme) => {
  return {
    splash: {
      flex: '2 70%',
      margin: 'auto'
    }
  };
});

const Splash = (props) => {
  const {
    className: classNameProp,
    splashImg = 'images/img_signin.png',
    ...other
  } = props;
  const classes = this.context.styleManager.render(styleSheet);
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