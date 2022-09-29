import React from "react";
import Cookies from 'universal-cookie';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var myName = cookies.get('myName', { path: '/' });
    this.state = {name: myName};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    const cookies = new Cookies();

    cookies.set('myName', this.state.name, { path: '/' });
    event.preventDefault();
  }

  render() {
    return (<div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p>
              First at all, indicate your name
            </p> 
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label>
                    <p>Name</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </label>
                </fieldset>
                <input type="submit" value="Submit"/>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default Home;