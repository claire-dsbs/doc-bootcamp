import React from "react";
import Cookies from 'universal-cookie';

class Ip extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    const type = "my" + props.type + "Ip";
    var myIp = cookies.get(type, { path: '/' });
    this.state = {ip: myIp};
    console.log(this.state.ip);
  }

  render() {
    console.log(this.state.ip);
    return (
      <span className="ip-user fw-semibold">{this.state.ip}</span>
    );
  }
}

export default Ip;