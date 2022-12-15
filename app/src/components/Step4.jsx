import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Name from './Name';

class Step4 extends StepBase {
  constructor(props) {
    super(props, 'step4');
  }

  render() {
    const command_line_1 = `sudo su -\ntomcatdown\ntomcatup\n`;

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">4 -	DevOps Lab - Deploying the Web Application</h1>
              <section>
                <p>
                  In this exercise, we are going to deploy the generated war file on a Tomcat server. To do so we will:
                  <ol type="1">
                    <li>Create a Jenkins job to create a war file and deploy it whenever a change is made to the source code</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>4.0 Set Up</h2>
                <h3>4.0.1 Tomcat Server Status Setup</h3>
                <p>
                  Make sure that the Tomcat server is up:
                  <ol type="1">
                    <li>Log into your Lab VM 
                    <ol type="a">
                      <li>Username is <Name case="lower" />, all lower case, password is TOBECHANGED</li>
                    </ol>
                    </li>
                    <li>Access the Terminal and run the following commands (enter your password if prompted)
                    <SyntaxHighlighter language="bash">
                        {command_line_1}
                      </SyntaxHighlighter>
                    </li>
                    <li>Open the browser and access: http://[ your VM IP ]:8050</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>3.1	Expected Output</h2>
                

              </section>
            </div>
          </div>
          <CompleteCheck step="step4" />
        </div>
      </div>
    );
  }
}

export default Step4;