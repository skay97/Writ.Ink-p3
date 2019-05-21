import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form';  // read new version of ReduxForm
import { signupUser } from '../../actions';
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

class Signup extends Component {

  componentWillMount() {
    if (this.props.authenticated) {  // if the user already signed in, navigate to '/posts'
      this.props.history.replace('/posts');
    }
  }

  handleFormSubmit({ email, password, firstName, lastName }) {
    // Call action creator to sign up the user
    this.props.signupUser({ email, password, firstName, lastName }, (path, state) => {  // callback 1: history push
      this.props.history.push(path, state);
    }, (path, state) => {  // callback 2: history replace
      this.props.history.replace(path, state);
    });
  }

  renderFieldEmail = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      { /*<label>{label}</label>*/ }
      {/* <input className="form-control" placeholder={label} {...input} type={type} required='required' /> */}
      <InputLabel htmlFor="email">Email Address</InputLabel>
      <Input id="email" name="email" autoComplete="email" autoFocus placeholder={label} {...input} type={type} required='required'/>
      { touched && error && <span className="text-danger">{error}</span> }
    </fieldset>
  );
  
  renderFieldPassword = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      { /*<label>{label}</label>*/ }
      {/* <input className="form-control" placeholder={label} {...input} type={type} required='required' /> */}
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input name="password" type="password" id="password" autoComplete="current-password" placeholder={label} {...input} type={type} required='required'/>
      { touched && error && <span className="text-danger">{error}</span> }
    </fieldset>
  );
  
  renderFieldFirstName = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      { /*<label>{label}</label>*/ }
      {/* <input className="form-control" placeholder={label} {...input} type={type} required='required' /> */}
      <InputLabel htmlFor="firstName">First Name</InputLabel>
      <Input id="firstName" name="firstName" autoComplete="firstName" autoFocus placeholder={label} {...input} type={type} required='required'/>
      { touched && error && <span className="text-danger">{error}</span> }
    </fieldset>
  );
  
  renderFieldLastName = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      { /*<label>{label}</label>*/ }
      {/* <input className="form-control" placeholder={label} {...input} type={type} required='required' /> */}
      <InputLabel htmlFor="lastName">Last Name</InputLabel>
      <Input id="lastName" name="lastName" autoComplete="lastName" autoFocus placeholder={label} {...input} type={type} required='required'/>
      { touched && error && <span className="text-danger">{error}</span> }
    </fieldset>
  );

  renderAlert() {

    const { state } = this.props.history.location;
    const { action } = this.props.history;

    // message: sign up failed
    if (state && action === 'REPLACE') {
      return (
        <div className="alert alert-danger">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }

  render() {

    const { handleSubmit } = this.props;

    const { classes } = this.props;

    return (
      <div>
        {this.renderAlert()}
        {/* <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h3>Sign Up</h3>
          <hr /> */}
          {/* <Field name="firstName" component={this.renderField} type="text" label="First Name"/>
          <Field name="lastName" component={this.renderField} type="text" label="Last Name"/>
          <Field name="email" component={this.renderField} type="email" label="Email"/>
          <Field name="password" component={this.renderField} type="password" label="Password"/>
          <Field name="passwordConfirm" component={this.renderField} type="password" label="Confirm Password"/>
          <button type="submit" className="btn btn-primary">Sign Up</button> */}
          <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h4">
              Writ.Ink
        </Typography>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon="pen-nib" />
            </Avatar>
            <form className={classes.form} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" /> */}
                <Field name="firstName" component={this.renderFieldFirstName} type="text" label="First Name" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" /> */}
                <Field name="lastName" component={this.renderFieldLastName} type="text" label="Last Name" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus /> */}
                <Field name="email" component={this.renderFieldEmail} type="email" label="Email" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" /> */}
                <Field name="password" component={this.renderFieldPassword} type="password" label="Password" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                {/* <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" /> */}
                <Field name="passwordConfirm" component={this.renderFieldPassword} type="password" label="Confirm Password" />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
          </Button>
            </form>
          </Paper>
        </main>
        {/* </form> */}
      </div>
    );
  }
}

function validate(formProps) {

  // console.log(formProps);

  const errors = {};

  /*
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter an password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter an password confirmation';
  }
  */

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Password must match!';
  }

  return errors;
}

Signup = reduxForm({
  form: 'signup',
  validate: validate
})(Signup);

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(mapStateToProps, { signupUser })(Signup);
export default compose(
  withStyles(styles, { name: 'Signup' }),
  connect(mapStateToProps, { signupUser })
)(Signup);