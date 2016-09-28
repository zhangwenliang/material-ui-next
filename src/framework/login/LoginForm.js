import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classnames';
import TextField, {TextFieldInput} from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Logo from './Logo';

export const styleSheet = createStyleSheet('LoginForm', (theme) => {
  return {
    'loginForm': {
      display: 'flex',
      'flex-flow': 'column nowrap',
      flex: '0 400px',
      padding: '20px',
      'box-sizing': 'border-box'
    },
    'loginFields': {
      display: 'flex',
      'flex-flow': 'column nowrap',
      'justify-content': 'flex-end',
      flex: '1 60%'
    },
    'loginField': {
      'flex-grow': 0
    },
    loginBtn: {
      'flex-grow': 0,
      margin: '30px 0'
    }
  };
});

const LoginForm = (props, context) => {

  const {
    className: classNameProp,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);
  const className = classNames(classes.loginForm, classNameProp);
  const fieldsClassName = classes.loginFields;
  const fieldClassName = classes.loginField;
  const btnClass = classes.loginBtn;

  return (
    <div className={className} {...other}>
      <Logo/>
      <div className={fieldsClassName}>
        <TextField className={fieldClassName}>
          <TextFieldInput/>
        </TextField>
        <TextField className={fieldClassName}>
          <TextFieldInput/>
        </TextField>
        <TextField className={fieldClassName}>
          <TextFieldInput/>
        </TextField>
        <Button className={btnClass} raised={true} primary={true}>Login</Button>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string
};

LoginForm.contextTypes = {
  styleManager: PropTypes.object.isRequired
};

export default LoginForm;