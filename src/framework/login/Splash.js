import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classnames';
import splashImage from '../../assets/images/img_signin.png';

export const styleSheet = createStyleSheet('Splash', (theme) => {
  return {
    splash: {
      flex: '2 60%',
      //margin: 'auto',
      'vertical-align': 'middle',
      'text-align': 'center'
    },
    splashImg: {
      display: 'block',
      'min-width': '500px',
      'max-width': '100%',
      'max-height': '100%'
    }
  };
});

const Splash = (props, context) => {
  const {
    className: classNameProp,
    splashImg = splashImage,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.splash, classNameProp);

  return (
    <div className={className} {...other}>
      <img className={classes.splashImg} src={splashImg}/>
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