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

    const code_python = `
    def get_datas_api(datas, token, language):\n 
    preset = os.environ["PRESET"]\n 
    url = f"test/entries?sync=true&sync-preset=test&limit=100&token=" + token\n 

    response = requests.get(url)\n 

    if (response.status_code == 200):\n
    return "0"`;
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">2 -	DevOps Lab - Jenkins Fundamentals</h1>
              <section>
                <h2>2.0	Set Up</h2>
                <p>
                  In This section we confirm that Jenkins is running.
                  <ol>
                    <li>Log into your Linux LAB VM
                      <ol type="a">
                        <li>username: <Name case="capitalize" /></li>
                        <li>password: bootcamper</li>
                      </ol>
                    </li>
                    <li>
                      From a browser (firefox) access the Jenkins web interface: <span className="bg-light border text-wrap">http://10.19.0.5:8080</span>
                    </li>
                    <li>
                      Log into Jenkins using your credentials
                      <ol type="a">
                        <li>username: <Name /></li>
                        <li>password: bootcamper</li>
                      </ol>
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>2.1	Creating a Basic Jenkins Job</h2>
                <p>
                  In this section we will create a basic Jenkins job that will run an arbitrary bash command and return the output.
                  <ol>
                    <li>
                      From the Jenkins Dashboard click on your view
                    </li>
                    <li>
                      From your dashboard click on “New Item”
                      <p><img src={menu_jenkins} className='image center' alt='Create a new item in Jenkins' /></p>
                    </li>
                    <li>
                      Fill in the following details
                    </li>
                  </ol>
                </p>
                <p>
                  Enter an item name: <Name app_name="My-First-Project" /><br />
                  Select “Freestyle Project”
                </p>
                <p><img src={interface_jenkins} className='image center' alt='Create a new project in Jenkins' /></p>
                <p>Select “Build”  {'>'} “Add Build step” {'>'} “Execute shell” <br />
                  In the space enter the following command
                </p>
                <p><SyntaxHighlighter language="bash">
                  {command_line_1}
                </SyntaxHighlighter></p>
                <p><img src={create_build} className='image center' alt='Create a build in Jenkins' /></p>
                <p>Save your job</p>
                <p> Run your job going back to dashboard by selecting the arrow next to the project name and clicking “build now”</p>
                <p><img src={status_jenkins} className='image center' alt='Verify status in Jenkins' /></p>
                <p>To ensure proper build, check the “console output"</p>
                <p> To do this, go to Build History, then select the terminal icon to the right of the project name.</p>
                <p><img src={look_history} className='image center' alt='Look build history in Jenkins' /></p>
              </section>
              <section>
                <h2>2.2	Expected Output</h2>
                <p><img src={jenkins_log} className='image center' alt='Log in Jenkins' /></p>
                <p>Upon successful creation of the task, the following message will be displayed in the console output.</p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step2" />
        </div>
      </div>
    );
  }
}

export default Step2;