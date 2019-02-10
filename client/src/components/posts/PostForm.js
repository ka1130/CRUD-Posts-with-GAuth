import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, meta, label, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          type="text"
          {...input}
          autoComplete="off"
          placeholder={placeholder}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { post } = this.props;
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          label="Post title"
          component={this.renderInput}
          placeholder={post ? post.title : ""}
        />
        <Field
          name="body"
          component={this.renderInput}
          label="Post body"
          placeholder={post ? post.body : ""}
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a post's title";
  }

  if (!formValues.body) {
    errors.body = "Please enter a post's body";
  }

  return errors;
};

export default reduxForm({ form: "PostForm", validate })(PostForm);
