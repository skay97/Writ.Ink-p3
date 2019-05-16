import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../../actions';
import Quill from "../Quill";

class PostNew extends Component {
  constructor(props) {
    
    super(props);
    this.myRef = React.createRef();
  }

  handleFormSubmit({ title, categories, content }) {
    console.log('submitting...', this)
    console.log(title);
    console.log(categories);
    console.log(this.myRef.current.state.editorHtml);
    content = this.myRef.current.state.editorHtml;
    this.props.createPost({ title, categories, content }, (path) => {  // callback 1: history push
      this.props.history.push(path);
    }, (path, state) => {  // callback 2: history replace
      this.props.history.replace(path, state);
    });
  }
  handleQuilChange(value) {
    console.log(value);
    this.setState({ quilText: value })
  }

  renderInput = (field) => (
    <fieldset className="form-group">
      <label>{field.label}</label>
      <input
        className="form-control"
        {...field.input}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required ? 'required' : ''}
        disabled={field.disabled ? 'disabled' : ''}
      />
    </fieldset>
  );

  renderTextEditor = (field) => (
    <fieldset className="form-group">
      <label>{field.label}</label>
      {/* <textarea className="form-control"  {...field.input}  type="text" id="content" name="content" /> */}
      {/* <input className="form-control" id="x" type="hidden" name="content" /> */}
      {/* //  input="x" {...field.input} */}

      {/* <trix-editor input="x" {...field.input} /> */}
      {/* <br></br> */}

      {/* <Quill value={"content"} name="content" placeholder={'Write something...'} /> */}
      {/* <Quill name="content" value={this.state.text}  onChange={this.handleQuilChange} placeholder={'Write something...'} /> */}
    </fieldset>
  );

  renderAlert() {

    const { state } = this.props.history.location;
    const { action } = this.props.history;

    if (state && action === 'REPLACE') {
      return (
        // add some animation later from animate.css and remove the state.time for better feedback
        <div className="alert alert-danger" role="alert">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="post">
        {this.renderAlert()}
        <h2 className="mb-5">New Post</h2>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="title" component={this.renderInput} type="text" label="Title:" placeholder="Enter your title" required={true} />
          <Field name="categories" component={this.renderInput} type="text" label="Categories:" placeholder="Enter your categories, use ',' to separate them" required={true} />
          <Quill ref={this.myRef} name="content" placeholder={'Write something...'} />
          <button action="submit" className="btn btn-primary">Publish</button>
        </form>
      </div>
    );
  }
}

PostNew = reduxForm({
  form: 'post_new',  // name of the form
})(PostNew);

export default connect(null, { createPost })(PostNew);