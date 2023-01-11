import React from "react";
import NameBase from './NameBase';

class Name extends NameBase {
  constructor(props) {
    super(props);
    this.app_name = props.app_name;
    this.class_case = props.case;
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