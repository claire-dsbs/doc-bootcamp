import React from "react";
import Cookies from 'universal-cookie';

class CompleteCheck extends React.Component {
  constructor(props) {

    super(props);
    this.step = props.step;
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    this.state = {};
    this.state[this.step] = false;

    if (my_progression !== undefined) {
      this.state = my_progression;
    }

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
    this.setState(step);

    var my_new_progression = { ...my_progression, ...step }

    cookies.set('myProgression', my_new_progression, { path: '/' })

    window.location.reload(false);
  }

  render() {
    return (
      <div className="row align-items-center my-6">
        <form>
          <fieldset>

            <div className="form-check">
              <label for={`${this.step}`}>
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