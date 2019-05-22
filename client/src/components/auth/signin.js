import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form';
import { signinUser } from '../../actions';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

library.add([faPenNib]);

class Signin extends Component {
  

  componentWillMount() {
    if (this.props.authenticated) {  // if the user already signed in, navigate to '/posts'
      this.props.history.replace('/posts'); // replace with profile page route
    }
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // console.log(email, password);
    // need to do something to log user in
    this.props.signinUser({ email, password }, (path) => {  // callback 1: history push
      this.props.history.push(path);
    }, (path, state) => {  // callback 2: history replace
      this.props.history.replace(path, state);
    });
  }

  renderFieldEmail = (fieldEmail) => (
    <fieldset className="form-group">
      { /*<label>{field.label}</label>*/}
      <InputLabel htmlFor="email">Email Address</InputLabel>
      <Input id="email" name="email" autoComplete="email" autoFocus placeholder={fieldEmail.label} {...fieldEmail.input} type={fieldEmail.type}/>
      {/* <input className="form-control" placeholder={field.label} {...field.input} type={field.type} required='required' /> */}
    </fieldset>
  );

  renderFieldPassword = (fieldPass) => (
    <fieldset className="form-group">
      { /*<label>{field.label}</label>*/}
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input name="password" type="password" id="password" autoComplete="current-password" placeholder={fieldPass.label} {...fieldPass.input} type={fieldPass.type}/>
      {/* <input className="form-control" placeholder={field.label} {...field.input} type={field.type} required='required' /> */}
    </fieldset>
  );

  renderAlert() {

    const { state } = this.props.history.location;
    const { action } = this.props.history;

    // message: successfully signed up, you can sign in
    if (state && action === 'PUSH') {
      return (
        <div className="alert alert-success" role="alert">
          {`[${state.time}] --- `} <strong>Congratulations!</strong> {state.message}
        </div>
      );
    }

    // message: sign in failed
    if (state && action === 'REPLACE') {
      return (
        <div className="alert alert-danger" role="alert">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }

  render() {

    // these properties comes from ReduxForm
    const { handleSubmit } = this.props;
    // declaring classes
    const { classes } = this.props;
    // when do we need .bind(this)?
    return (

      <CssBaseline>
      <div>
        {this.renderAlert()}
        {/* <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h3>Sign In</h3>
          <hr />
          <Field name="email" component={this.renderField} type="email" label="Email" />
          <Field name="password" component={this.renderField} type="password" label="Password" />
          <button action="submit" className="btn btn-primary">Sign In</button>
        </form> */}
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h4">
            Writ<span style={{ color: 'red' }}>•</span>ink
        </Typography>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon="pen-nib" />
            </Avatar>
            <form className={classes.form} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus /> */}
                <Field name="email" component={this.renderFieldEmail} type="email" label="Email" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" /> */}
                <Field name="password" component={this.renderFieldPassword} type="password" label="password" />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
          </Button>
            </form>
          </Paper>
        </main>
      </div>
      </CssBaseline>
    );
  }
}

Signin = reduxForm({
  form: 'signin',  // name of the form
})(Signin);

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(mapStateToProps, { signinUser })(Signin);
export default compose(
  withStyles(styles, { name: 'Signin' }),
  connect(mapStateToProps, { signinUser })
)(Signin);
// The new version of reduxForm (v6) also removes the ability to inject actions or props like the 'connect' helper from React Redux does.
// To fix this, you'll need to wrap your component with both the 'connect' and 'reduxForm' helpers.