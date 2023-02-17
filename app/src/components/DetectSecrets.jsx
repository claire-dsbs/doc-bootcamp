import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';

class DetectSecrets extends StepBase {
  constructor(props) {
    super(props, 'detectsecrets');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevSecOps Advanced Challenge: Secret Scanning with Yelp/detect-secrets Pre-Commit Hook</h2>
              <section>
                <p><a href="https://github.com/Yelp/detect-secrets"><strong>Yelp/detect-secrets:</strong> An enterprise friendly way of detecting and preventing secrets in code.</a></p>
                <h4>Task:</h4>
                <ul>
                  <li>Research about “shift-left methodology” and research about “pre-commit hooks”.</li>
                </ul>
                <h4>Food for thought:</h4>
                <p>How does applying pre-commit hooks which scan for secrets relate to Shift-Left Methodology? Why is it not recommended to commit any sort of secrets in a SCM like Git (even if they are for a Dev environment)?</p>
                <h4>Catch Secrets using detect-secrets Pre-Commit Hook</h4>
                <ol>
                  <li>Install pre-commit on your local system (you can use the terminal inside VS Code). See Code Formatting section if unsure how.
                    <ul>
                      <li>This will require the installation of Go: <a href="https://golang.org/dl/">Download and install - The Go Programming Language</a></li>
                    </ul>
                  </li>
                  <li>Install <a href="https://github.com/Yelp/detect-secrets">Yelp/detect-secrets: An enterprise friendly way of detecting and preventing secrets in code.</a> and configure it following the instructions provided in the README. It should be configured to work with YOUR FORK OF javaloginapp.
                    <ul>
                      <li>You will need to create a .secrets-baseline file in the javaloginapp repo.</li>
                      <li>You can find the file <a href="https://github.com/Yelp/detect-secrets/blob/master/.secrets.baseline">here</a>.</li>
                      <li>You will also need to create a .pre-commit-config.yaml file in the javaloginapp repo and add the detect-secrets hook which will include .secrets.baseline file.</li>
                      <li>Perform an auto-update and an install of the hook.</li>
                      <li>If everything is successful, after you modify the credentials in javaloginapp/src/main/resources and try to commit the modified code to your repo, it should prevent you from doing so.</li>
                    </ul>
                  </li>
                </ol>
                <h4>Food for thought:</h4>
                <p>How would one safely store and access secrets? Research online and find some solutions.</p>
              </section>
            </div>
          </div>
          <CompleteCheck step="detectsecrets" redirectUrl="/trivy"/>
        </div>
      </div>
    );
  }
}

export default DetectSecrets;