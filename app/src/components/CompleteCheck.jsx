import React from "react";
import Cookies from 'universal-cookie';

class CompleteCheck extends React.Component {
  constructor(props) {
    super(props);
    this.step = props.step;
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    this.state = {
      [this.step]: my_progression && my_progression[this.step] ? my_progression[this.step] : false,
      redirectToCustomPage: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    if (my_progression === undefined) {
      my_progression = {}
    }
    var step = {}
    step[this.step] = event.target.checked;

    var my_new_progression = { ...my_progression, ...step }

    // Set the cookie before updating the redirectToCustomPage state
    cookies.set('myProgression', my_new_progression, { path: '/' })

    // Update the state to redirect to custom page
    if (event.target.checked) {
      this.setState(
        {
          ...step,
          redirectToCustomPage: true
        }
      );
    } else {
      this.setState({
        ...step,
        redirectToCustomPage: false
      });
      window.scrollTo(0, 0); // Scroll to top of page
      setTimeout(() => {
        window.location.reload();
      }, 500); // Reload page after a delay of 1 second
    }
  }

  render() {
    if (this.state.redirectToCustomPage) {
      window.location.href = this.props.redirectUrl; // Redirect to custom page
      return null; // Return null to avoid rendering anything else
    }
    return (
      <div className="row align-items-center my-6">
        <form>
          <fieldset>
            <div className="form-check">
              <label htmlFor={`${this.step}`}>
                Are you done?
              </label>
              <input className="input-checkbox" type="checkbox" name={`${this.step}`} checked={`${this.state[this.step] ? "checked" : ""}`} onChange={this.handleChange} />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CompleteCheck;
