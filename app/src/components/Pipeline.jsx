import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import Name from './Name';

class Pipeline extends StepBase {
  constructor(props) {
    super(props, 'pipeline');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
            <h2 className="font-weight-light">DevOps Advanced Challenge: Convert a Jenkins Job into a Jenkins Pipeline</h2>
              <section>
                <h4>Task:</h4>
                <ul>
                  <li>Figure out a way to convert <Name case="capitalize" app_name="Deploy-on-Container-using-Ansible-with-SonarQube" /> Freestyle Job into a Jenkins Pipeline.</li>
                </ul>
                <h4>Hints:</h4>
                <ul><li>None. You're on your own for this one! Good luck!</li></ul>
              </section>
            </div>
          </div>
          <CompleteCheck step="pipeline" redirectUrl="/patchapp"/>
        </div>
      </div>
    );
  }
}

export default Pipeline;