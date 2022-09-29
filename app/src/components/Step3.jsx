import React from "react";
import Cookies from 'universal-cookie';

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    this.state = { 'step3': false };
    
    if (my_progression !== undefined) {
      this.state = my_progression;
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    if (my_progression == undefined) {
      my_progression = {}
    }
    console.log(event.target.checked)
    this.setState({ step3: event.target.checked });
    var step3 = { 'step3': event.target.checked };

    var my_new_progression = { ...my_progression, ...step3 }
    console.log(my_new_progression)

    cookies.set('myProgression', my_new_progression, { path: '/' })

    window.location.reload(false);
  }

  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-5">
              <h1 className="font-weight-light">About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row align-items-center my-5">
            <form>
              <fieldset>
                <label>
                  <p>Are you done?</p>
                  <input type="checkbox" name="finish_step3" checked={`${this.state.step3 ? "checked" : ""}`} onChange={this.handleChange} />
                </label>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Step3;