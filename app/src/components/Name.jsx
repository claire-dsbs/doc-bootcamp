import React from "react";
import Cookies from 'universal-cookie';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.app_name = props.app_name;
    const cookies = new Cookies();
    var myName = cookies.get('myName', { path: '/' });
    this.state = {name: myName};

  }

  displayProject() {
    if(this.app_name !== undefined) {
      return <span className="name-app">-{this.app_name}</span>
    }
    else return "";
  }

  render() {
    return (
      <span className='name-element'><span className="name-user fw-semibold">{this.state.name}</span>{this.displayProject()}</span>
    );
  }
}

export default Name;