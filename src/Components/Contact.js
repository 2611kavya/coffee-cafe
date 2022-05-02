import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
class Contact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            email: "",
            phone_number: ""
          },
          errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
          // Do you ajax calls here.
        }
      }
    render()
    {
        return(
            <div className="form" >
                <h1>contact us</h1>

<form onSubmit={this.form.handleSubmit}>
            <p>
              <label className="ss">
                Name
                <input className="vv"
                  type="text"
                  name="name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                />
              </label>
              <label className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </label>
            </p>
 
            <p>
              <label className="ss">
                Email
                <input className="vv"
                  type="email"
                  name="email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
              </label>
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </p>
 
            <p>
              <label className="ss">
                Phone
                <input className="vv"
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              </label>
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </p>
            <p className="nn">
              <button className="submit" type="submit">Submit</button>
            </p>
        </form>

            </div>
        )
    }
}
export default Contact;