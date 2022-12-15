import React from "react";
import Cookies from 'universal-cookie';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.app_name = props.app_name;
    this.class_case = props.case;
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

  className() {
    return "name-user fw-semibold " + this.class_case; 
  }

  render() {
    return (
      <span className='name-element'><span className={this.className()}>{this.state.name}</span>{this.displayProject()}</span>
    );
  }
}

Name.defaultProps = {
  case: 'capitalize'
};

export default Name;