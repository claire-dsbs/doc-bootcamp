import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Name from './Name';
import Ip from './Ip';
import post_build from './images/post_build.png';
import first_result from './images/first_result.png';

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
                <h2>4.0 Setup</h2>
                <p>
                  In this exercise, we are going to deploy the generated war file on a Tomcat server. To do so we will:
                  <ol type="1">
                    <li>Create a Jenkins job to create a war file and deploy it whenever a change is made to the source code</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>4.1 Setup Tomcat</h2>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Apache_Tomcat" rel="noreferrer">Apache Tomcat - Wikipedia</a>
                </p>
                <p>
                  Tomcat should already be installed on your Lab VM. To make sure that's the case:
                  <ol type="1">
                    <li>
                      Open the Terminal in your Lab VM.
                    </li>
                    <li>Run the following commands and enter your password if prompted:
                      <SyntaxHighlighter language="bash">
                        {command_line_1}
                      </SyntaxHighlighter>
                    </li>
                    <li>
                      Open your browser and access http://<Ip type="Vm" />:8050
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>4.2	Setup Jenkins</h2>
                <p>The next step is to create a new job that will not only build, but also deploy the generated .war file
                  <ol type="1">
                    <li>From your view click create a new item with the following information:<br />
                      <span className='tab'>Item name: <Name case="capitalize" app_name="Deploy-on-Tomcat-Server" /><br />
                        Copy from: <Name case="capitalize" app_name="My-First-Maven-Project" />
                      </span>
                    </li>
                    <li>
                      In Build Triggers section, under Poll SCM, put * * * * * (make sure to put spaces between each asterix) and make sure to disable the default “Whenever a SNAPSHOT dependency is build”.
                    </li>
                    <p>
                      <a href="https://blog.knoldus.com/jenkins-build-triggers/" rel="noreferrer">Jenkins: Build Triggers</a>
                    </p>
                    <li>
                      In Post-Build Actions section, select Deploy war/ear to container and input the following:
                      <ul>**/*.war for WAR/EAR files</ul>
                      <ul>Tomcat 9.x for Containers</ul>
                      <ul>Your credentials for Credentials</ul>
                      <ul>http://<Ip type="Vm" />:8050 for Tomcat URL</ul>
                    </li>
                    <li>
                      Save and run the job now.
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>4.3	Expected Output</h2>
                <p>
                  Check the console output and make sure the job ran successfully. If so, you should be able to open http://<Ip type='Cd' />:8050/webapp/index.jsp and see something like the following:
                </p>
                <p><img src={first_result} className='image center' alt='The result of your success' /></p>
              </section>
              <section>
                <h2>4.4	Making Changes in Source Code</h2>
                <p>
                  To make sure Jenkins polling works as expected (i.e. a new build is triggered when changes to the source code are detected), we will make a change and see if it is reflected.
                  <ol type="1">
                    <li>
                      Open the Bootcamp repo on your local computer, and make a change to index.jsp under webapp/src/main/webapp.
                    </li>
                    <li>
                      Commit and push your changes. See <a href="https://zeroesandones.medium.com/how-to-commit-and-push-your-changes-to-your-github-repository-in-vscode-77a7a3d7dd02here" rel="noreferrer">here</a> if you're not sure how.
                    </li>
                    <li>
                      Go to your Jenkins job and make sure it was triggered (give it up to a minute as it is not immediate) and that it ran successfully.
                    </li>
                    <li>
                      Finally, go to http://<Ip type="Vm" />:8050/webapp/index.jsp and make sure the new changes are visible on the page.
                    </li>
                  </ol>
                </p>
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