import React, {PropTypes} from 'react';
import {createStyleSheet} from 'jss-theme-reactor';
import classNames from 'classNames';
import TextField from 'material-ui-build/src/TextField';
import Button from 'material-ui-build/src/Button';
import Logo from './Logo';

export const styleSheet = createStyleSheet('LoginForm', (theme) => {
  return {
    'login-form': {
      display: 'flex',
      'flex-flow': 'column nowrap',
      flex: '1 30%',
      margin: 'auto'
    },
    'login-fields': {
      display: 'flex',
      'flex-flow': 'column nowrap',
      'justify-content': 'flex-end',
      flex: '1 60%'
    },
    'login-field': {
      'flex-grow': 0
    }
  };
});

const LoginForm = (props) => {

  const classes = this.context.styleManager.render(styleSheet);
  const className = classNames(classes['login-form'], props.className);
  const fieldsClassName = classes['login-fields'];
  const fieldClassName = classes['login-field'];

  return (
    <div className={className} {...other}>
      <Logo/>
      <div className={fieldsClassName}>
        <TextField className={fieldClassName}>
          <input name="username"/>
        </TextField>
        <TextField className={fieldClassName}>
          <input name="password"/>
        </TextField>
        <TextField className={fieldClassName}>
          <input name="language"/>
        </TextField>
        <Button className={fieldClassName}>Login</Button>
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