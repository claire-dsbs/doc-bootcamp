import React from "react";
import Cookies from 'universal-cookie';

class NameBase extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var myName = cookies.get('myName', { path: '/' });
    this.state = {name: myName};
  }

  render() {
    const lower = (this.state.name).toLowerCase();
    return (this.state.name).charAt(0).toUpperCase() + lower.slice(1);
  }
}

export default NameBase;