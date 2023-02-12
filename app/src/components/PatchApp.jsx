import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import Name from './Name';

class PatchApp extends StepBase {
  constructor(props) {
    super(props, 'patchapp');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
            <h2 className="font-weight-light">DevSecOps Advanced Challenge: Fix Issues in JavaLoginApp</h2>
              <section>
                <h4>Task:</h4>
                <ul>
                  <li>Reduce as much as you can the amount of issues (vulnerabilities, etc.) SonarQube has detected during the execution of <Name case="capitalize" app_name="Deploy-on-Container-using-Ansible-with-SonarQube" />.</li>
                </ul>
                <h4>Hints:</h4>
                <ul><li>Look at the SonarQube scan output. Refer to Step 7 if you forgot how.</li>
                <li>Look at the pom.xml file of javaloginapp.</li></ul>
              </section>
            </div>
          </div>
          <CompleteCheck step="patchapp" />
        </div>
      </div>
    );
  }
}

export default PatchApp;