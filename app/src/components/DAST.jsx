import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';

class DAST extends StepBase {
  constructor(props) {
    super(props, 'dast');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevSecOps Advanced Challenge: Integrate DAST through a Declarative Pipeline and Through a Jenkinsfile</h2>
              <section>
              <ul>
                <li><strong>Food for thought:</strong> What makes a SAST, such as SonarQube, and a DAST, such as OWASP ZAP different? Why can’t we pick one of the two and why do we have to use both together to provide better security?</li>
                <li><strong>Task:</strong> Create a new declarative pipeline that integrates OWASP ZAP. When running this pipeline, we should be able to generate and view reports based on the results.
                  <ol>
                    <li>Create a new job for ZAP, but this time, instead of Maven project, select Pipeline instead.</li>
                    <li>Write a declarative pipeline that lets you start a ZAP scan. Hint: Use this article to guide you. <a href="https://medium.com/globant/owasp-zap-integration-with-jenkins-795d65991404">OWASP ZAP integration with Jenkins</a> Note: Don’t try to copy/paste this code. You might have to make some changes in order to make the code work.</li>
                  </ol>
                </li>
                <li><strong>Food for thought:</strong> Take a look at the report generated. (It should be in your build’s workspace.) What are some of the vulnerabilities you see? Are they different from the vulnerabilities found by SonarQube?</li>
                <li><strong>Task:</strong> Transform that declarative pipeline into a Jenkinsfile integrated in your GitHub repo.</li>
                <li><strong>Food for thought:</strong> What are the advantages of writing a Jenkinsfile instead of selecting each step through the Jenkins user interface? Could the entire project be rewritten as a Jenkins pipeline?</li>
              </ul>
              </section>
            </div>
          </div>
          <CompleteCheck step="dast" redirectUrl="/pipelinesecurity"/>
        </div>
      </div>
    );
  }
}

export default DAST;