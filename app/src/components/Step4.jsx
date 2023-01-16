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
                    <li>Open the browser and access: http://<Ip type="Vm" />:8050</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>4.1	Jenkins Deployment Job Set up</h2>
                <p>The next step is to create a new job that will not only build, but also deploy the generated .war file
                  <ol type="1">
                    <li>From your view click create a new item with the following information:<br />
                      <span className='tab'>item name: <Name case="capitalize" app_name="Deploy_on_Tomcat_Server" /><br />
                        Copy from: <Name case="capitalize" app_name="My-First-Maven-Project" />
                      </span>
                    </li>
                    <li>2.	In « Source Code Management » Section :
                      <span className='tab'>
                        Repository: https://github.com/YourForkFromGithub/Bootcamp.git<br />
                        Branches to build : */master
                      </span>
                    </li>
                    <li>In "Build Triggers" Section :
                      <span className='tab'>
                        Poll SCM: * * * * *
                      </span>
                      <span className="notice">(Careful to put a space between each Asterix)</span>
                    </li>
                    <li>In "Build" Section :
                      <span className='tab'>
                        Root POM: pom.xml<br />
                        Goals and options: clean install package
                      </span>
                    </li>
                    <li>
                      <div class='row'>
                        <div class="col">
                          Navigate to "Post-build Actions" section and input the following:<br />
                          Deploy war/ear to container<br />
                          WAR/EAR files: **/*.war<br />
                          Containers: Tomcat 9.x<br />
                          Credentials: deployer (user created already)<br />
                          Tomcat URL: http://<Ip type="Cd" />:8050
                        </div>
                        <div class="col">
                          <img src={post_build} className='image' alt='Screen for the post build' />
                        </div>
                      </div>
                    </li>
                    <li>
                      Save and run the job now.
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>4.2	Expected Output</h2>
                <p>
                  Check the web application on the browser http://<Ip type='Cd' />:8050/webapp/index.jsp
                </p>
                <p><img src={first_result} className='image center' alt='The result of your success' /></p>
                <p>To see that Jenkins will automatically deploy changes to the application, follow the instructions in the <a href="https://docs.google.com/document/d/17zBcHiBXsOMoa5IrgD9PFxOiA1_Uc79PkcBgj-hhb9Y/edit?sharingaction=ownershiptransfer#heading=h.y8bxtfxbubdo" rel="noreferrer">"Making Changes to the Source Code Section".</a></p>
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