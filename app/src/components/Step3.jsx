import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import Name from './Name';
import jenkins_build from './images/jenkins_build.png';
import jenkins_output from './images/jenkins_output.png';

class Step3 extends StepBase {
  constructor(props) {
    super(props, 'step3');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">3 -	DevOps Lab - Building a CI pipeline for the Web Application</h1>
              <section>
                <p>
                  In this exercise, we are going to build the web application and generate a .war file. To do so we will:
                  <ol type="1">
                    <li>Integrate Jenkins with Git and Maven</li>
                    <li>Set up a Jenkins job to create a war file whenever a change is made to the source code</li>
                  </ol>
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseSection1A" role="button" aria-expanded="false" aria-controls="collapseSection1A">
                      More about Maven
                    </a>
                  </p>
                  <div class="collapse" id="collapseSection1A">
                    <div class="card card-body">
                      Maven is a project management and comprehension tool that provides developers a complete build lifecycle framework. Development team can automate the project's build infrastructure in almost no time as Maven uses a standard directory layout and a default build lifecycle.<br/>
                      <a href="https://maven.apache.org/what-is-maven.html" rel="noreferrer">What is Maven?</a>                    
                    </div>
                  </div>
                </p>
              </section>
              <section>
                <h2>3.0	Building the Web app</h2>
                <p>
                  The first step is to build the web app using maven. That is, we will instruct Jenkins to
                  <ol type="1">
                    <li>pull in the web app source code from the repository,</li>
                    <li>Create a runnable war file from it.</li>
                  </ol>

                  The final output will be a war file that can be deployed on a tomcat server
                  <ol type="1">
                    <li>From your view click "New Item"</li>
                    <li>Enter the following details:
                      <p>
                        Enter an item name: <Name />-My-First-Maven-Project<br />
                        Select "Maven project"<br />
                        In the "Source Code Management" Section:<br />
                        Repository: https://github.com/YourForkFromGithub/Bootcamp.git <br />
                        Branches to build : */master
                      </p>
                      In the "Build" Section:<br />
                      Root POM:pom.xml<br />
                      Goals and options: clean install package
                      <p><img src={jenkins_build} className='image center' alt='Menu build in jenkins interface' /></p>
                    </li>
                    <li>Save your job</li>
                    <li>Build job</li>
                    <li>Check "console output"</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>3.1	Expected Output</h2>
                <p><img src={jenkins_output} className='image center' alt='Output after the build' />
                  <figcaption>To ensure successful creation of the task, scroll down to the end of the console output, it should read:<br />
                    Finished: SUCCESS
                  </figcaption>
                </p>

              </section>
            </div>
          </div>
          <CompleteCheck step="step3" />
        </div>
      </div>
    );
  }
}

export default Step3;