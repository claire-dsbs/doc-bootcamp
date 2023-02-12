import React from "react";
import Cookies from 'universal-cookie';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var myName = cookies.get('myName', { path: '/' });
    var myVmIp = cookies.get('myVmIp', { path: '/' });
    //var myCdIp = cookies.get('myCdIp', { path: '/' });
    this.state = { name: myName, ip_vm: myVmIp, alertClass: "hide" }; //ip_cd: myCdIp, 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var state = [];
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {

    console.log(event);
    const cookies = new Cookies();

    this.setState({'alertClass': 'info'});
    cookies.set('myName', this.state.name, { path: '/' });
    cookies.set('myVmIp', this.state.ip_vm, { path: '/' });
    //cookies.set('myCdIp', this.state.ip_cd, { path: '/' });

    event.preventDefault();
  }

  render() {
    return (<div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h2 className="font-weight-light">Home</h2>
            <p className={this.state.alertClass}>Values have been saved!</p>
            <p>
              First at all, input your information!
            </p>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <label>First Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </fieldset>
              <fieldset>
                <label>IP of your Lab VM</label>
                <input type="text" name="ip_vm" value={this.state.ip_vm} onChange={this.handleChange} />
              </fieldset>
              {/* <fieldset>
                <label>IP of your CD Server</label>
                <input type="text" name="ip_cd" value={this.state.ip_cd} onChange={this.handleChange} />
              </fieldset> */}
              <input type="submit" value="Save" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;