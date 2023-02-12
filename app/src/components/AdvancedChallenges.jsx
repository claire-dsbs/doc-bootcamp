import React from "react";
import StepBase from './StepBase';

class AdvancedChallenges extends StepBase {
  constructor(props) {
    super(props, 'advancedchallenges');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">Advanced Challenges</h2>
              <section>
                <h4>Welcome to Advanced Challenges!</h4>
                <p>Congratulations on finishing the core part of the bootcamp. It is now time to tackle the advanced challenges we have prepared for you.</p>
                <p>Most of these challenges are meant to <strong>*drumroll*</strong> <i>challenge</i> you and hence, they will not be as <i>step-by-step</i> and as clear as the core section on purpose.<br/><strong>Good luck!</strong></p>
                <h4>Recommended Advanced Challenges Order</h4>
                <p>Considering that you probably won't have time to complete all of them (even though we invite you to complete all of them during your own time), we recommend the following order:</p>
                <ol>
                  <li>Detect-Secrets: Secret Scanning Pre-Commit Hook</li>
                  <li>Linting: Code Formatting Pre-Commit Hook</li>
                  <li>Trivy: Container Security Scanning Tool</li>
                  <li>DAST: Dynamic Application Security Testing</li>
                  <li>KICS: Pipeline Security Integration</li>
                  <li>Fuzzing: Automated Software Testing</li>
                  <li>Monitoring: Application/Service Monitoring</li>
                  <li>Artifactory: Artifacts and Binaries Management</li>
                  <li>Pipelining: Jenkins Pipelines</li>
                  <li>Patching: Application Issue Fixing</li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedChallenges;