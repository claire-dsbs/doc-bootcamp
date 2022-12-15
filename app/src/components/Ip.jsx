import React from "react";
import Cookies from 'universal-cookie';

class Ip extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var myIp = cookies.get('myIp', { path: '/' });
    this.state = {ip: myIp};

  }

  render() {
    return (
      <span className="ip-user fw-semibold">{this.state.ip}</span>
    );
  }
}

export default Ip;