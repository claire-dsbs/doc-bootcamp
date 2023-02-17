import React from "react";
import CompleteCheck from './CompleteCheck';
import Name from './Name';
import SyntaxHighlighter from 'react-syntax-highlighter';
import StepBase from './StepBase';
import menu_jenkins from './images/menu_jenkins.png';
import interface_jenkins from './images/interface_jenkins.png';
import create_build from './images/create_build.png';
import status_jenkins from './images/status_jenkins.png';
import look_history from './images/look_history.png';
import jenkins_log from './images/jenkins_log.png';

class Step2 extends StepBase {
  constructor(props) {
    super(props, 'step2');
  }

  render() {

    const command_line_1 = `echo "Welcome to Jenkins Demo"`;
    
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">2 -	DevOps Lab - Jenkins Fundamentals</h2>
              <section>
                <h2>2.0	Setup</h2>
                <p>
                  In this section, we confirm that Jenkins is running.
                  <ol>
                    <li>
                      Log in to your Linux LAB VM (through Bastion RDP using your credentials).
                    </li>
                    <li>
                      From a browser (Firefox), access the Jenkins UI: <b>http://10.19.0.5:8080</b>
                    </li>
                    <li>
                      Log in to Jenkins using your credentials (same as you used to login to the VM).
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>2.1	Create a Basic Jenkins Job</h2>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Jenkins_(software)" rel="noreferrer">Jenkins (software) - Wikipedia</a>
                </p>
                <p>
                  In this section we will create a basic Jenkins job that will run an arbitrary bash command and return the output.
                  <ol>
                    <li>
                      From the Jenkins Dashboard click on Your View.
                    </li>
                    <li>
                      From your dashboard click on “New Item”.
                      <p><img src={menu_jenkins} className='image center' alt='Create a new item in Jenkins' /></p>
                    </li>
                    <li>
                      Perform the following:
                    </li>
                  </ol>
                </p>
                <p>
                  Enter an item name: <Name app_name="My-First-Project" /> and select "Freestyle Project".
                </p>
                <p><img src={interface_jenkins} className='image center' alt='Create a new project in Jenkins' /></p>
                <p>Select "Build"  {'>'} "Add Build step" {'>'} "Execute shell" <br />
                  In the space enter the following command:
                </p>
                <p><SyntaxHighlighter language="bash">
                  {command_line_1}
                </SyntaxHighlighter></p>
                <p><img src={create_build} className='image center' alt='Create a build in Jenkins' /></p>
                <p>Save your job</p>
                <p> Run your job going back to dashboard by selecting the arrow next to the project name and clicking "Build Now"</p>
                <p><img src={status_jenkins} className='image center' alt='Verify status in Jenkins' /></p>
                <p>To ensure proper build, check the "console output"</p>
                <p> To do this, go to Build History, then select the terminal icon to the right of the project name.</p>
                <p><img src={look_history} className='image center' alt='Look build history in Jenkins' /></p>
              </section>
              <section>
                <h2>2.2	Expected Output</h2>
                <p>Upon successful creation of the task, the following message will be displayed in the console output.</p>
                <p><img src={jenkins_log} className='image center' alt='Log in Jenkins' /></p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step2" redirectUrl="/step3"/>
        </div>
      </div>
    );
  }
}

export default Step2;