import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Ip from './Ip';
import NameBase from './NameBase';
import ReactDOMServer from 'react-dom/server';
import hosts_file from './images/hosts_file.png';
import pom_xml from './images/pom_xml.png';
import sonar_interface from './images/sonar_interface.png';
import sonar_locally from './images/sonar_locally.png';
import build_sonar from './images/build_sonar.png';
import prestep_sonar_1 from './images/prestep_sonar_1.png';
import prestep_sonar_2 from './images/prestep_sonar_2.png';
import execute_shell_7 from './images/execute_shell_7.png';
import sonar_result from './images/sonar_result.png';
import sonar_quality_gates from './images/sonar_quality_gates.png';
import pom_72 from './images/pom_72.png';
import failure_result from './images/failure_result.png';
import sonar_fail from './images/sonar_fail.png';
import sonar_status from './images/sonar_status.png';
import image1_0 from './images/bootcamp1.0.png';
import dockerfile_github from './images/dockerfile_github.png';
import Name from './Name';


class Step7 extends StepBase {
  constructor(props) {
    super(props, 'step7');
  }

  render() {
    const name = ReactDOMServer.renderToString(<NameBase />);
    const name_capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    const code_1 = `---
- hosts: all # comes from the hosts file
  become: true # become sudo
  gather_facts: false # save time and not gather info

  tasks:
    - name: set sudo password
      set_fact:
        ansible_sudo_pass: "{{ ansible_ssh_pass }}"

    - name: copy Dockerfile from Jenkins to target host
      copy:
        src: /var/lib/jenkins/workspace/` + name_capitalized + `-Deploy-on-Container-using-Ansible-with-SonarQube/Dockerfile
        dest: /opt/docker

    - name: copy war from Jenkins to target host
      copy:
        src: /var/lib/jenkins/workspace/` + name_capitalized + `-Deploy-on-Container-using-Ansible-with-SonarQube/target/webapp.war
        dest: /opt/docker

    - name: stop current container
      command: docker stop ` + name.toLowerCase() + `-devops-container-2
      ignore_errors: yes # in case container doesn’t exist

    - name: remove stopped container
      command: docker rm ` + name.toLowerCase() + `-devops-container-2
      ignore_errors: yes # in case container doesn’t exist

    - name: remove docker images 
      command: docker rmi ` + name.toLowerCase() + `-devops-image-2:latest
      ignore_errors: yes # in case image does not exist

    - name: create docker image using war file
      command: docker build -t ` + name.toLowerCase() + `-devops-image-2:latest .
      args:
        chdir: /opt/docker

    - name: run container from docker image
      command: docker run -d --name ` + name.toLowerCase() + `-devops-container-2 -p 8082:8080 ` + name.toLowerCase() + `-devops-image-2:latest`;

    const code_2 = `sonar.projectKey=<your_sonarqube_project_key>
sonar.host.url=http://10.19.2.4:9000/
sonar.sources=.
sonar.java.binaries=target/*
sonar.dependencyCheck.summarize=true
sonar.dependencyCheck.htmlReportPath=target/dependency-check-report.html
sonar.dependencyCheck.jsonReportPath=target/dependency-check-report.json`;

    const code_3 = `sh sonar-gate.sh \$SONAR_INSTANCE \$SONAR_ACCESS_TOKEN`;

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">7 -	DevSecOps Lab - Integrate SonarQube</h2>
              <section>
                <p><img src={image1_0} className='image center' alt='Global schema' /></p>
                <p>
                  In this section, we will:
                  <ol type="1">
                    <li>Fork and clone a new web app</li>
                    <li>Integrate SonarQube to perform static code analysis</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>7.0 Setup</h2>
                <h3>7.0.1	Web Application</h3>
                <ol type="1">
                  <li>Fork and clone javaloginapp from <a href="https://github.com/Sar4D/javaloginapp.git" rel="noreferrer">https://github.com/Sar4D/javaloginapp.git</a> (refer to STEP 1 if you forgot, or if you are unsure how to do it)</li>
                  <li>
                    Modify hosts file and put your Lab VM IP.
                    <p><img src={hosts_file} className='image center' alt='Global schema' /></p>
                  </li>
                  <li>
                    Modify pom.xml file so that it contains your information.
                    <p><img src={pom_xml} className='image center' alt='Global schema' /></p>
                  </li>
                  <li>
                    Modify the Dockerfile and change the maintainer name.
                    <p><img src={dockerfile_github} className='image center' alt='Global schema' /></p>
                  </li>
                  <li>Create a playbook called ansible-playbook.yml and paste the following in it:
                    <SyntaxHighlighter language="yaml">
                      {code_1}
                    </SyntaxHighlighter>
                  </li>
                  <li>Commit and push your changes.</li>
                </ol>
                <h3>7.0.2	Jenkins</h3>
                <ol type="1">
                  <li>From your view, click Create a New Item <Name case="capitalize" app_name="Deploy-on-Container-using-Ansible-with-SonarQube" /> and copy from <Name case="capitalize" app_name="Deploy-on-Container-using-Ansible" />
                  </li>
                  <li>In the Source Code Management section, make to point to */master in the repo <b>https://github.com/YourForkFromGithub/javaloginapp.git</b> 
                  </li>
                  <li>Save and run a build. You should be able to see an HTML page when you visit <b>http://<Ip type='Vm' />:8082/webapp/pages/home.jsp</b> 
                  </li>
                </ol>
                <h3>7.0.3	SonarQube</h3>
                <p>
                  <a href="https://en.wikipedia.org/wiki/SonarQube" rel="noreferrer">SonarQube - Wikipedia</a>
                </p>
                  <ol type="1">
                    <li>From your Lab VM, go to <b>http://10.19.2.4:9000</b> to access SonarQube</li>
                    <li>Log into SonarQube<br />
                      Username: admin<br />
                      Password: B00tcamperm4aster
                    </li>
                    <li>Click Create Project and select manually
                      <img src={sonar_interface} className='image center' alt='Sonar interface' />
                    </li>
                    <li>Name your SonarQube project with the same name as your Jenkins job and make sure to keep the project key the same.</li>
                    <li>Select locally
                      <img src={sonar_locally} className='image center' alt='Sonar interface' />
                    </li>
                    <li>Select use existing token and input the following: -&gt; sqa_c77abdf91b247768224b17ce227fe6090fecf8e9</li>
                  </ol>
              </section>
              <section>
                <h2>7.1	Adding SAST to a Jenkins Job</h2>
                <p>
                  <ol type="1">
                    <li>Go back to your Jenkins job and add the SonarQube token under Build Environment:
                      <img src={build_sonar} className='image center' alt='Ansible schema' /></li>
                    <li>
                      In pre-steps add the following step to perform a dependency-check:
                      <img src={prestep_sonar_1} className='image center' alt='Ansible schema' />
                    </li>
                    <li>
                      Also in pre-steps, add a step called Execute SonarQube scanner and fill the Analysis properties with your information:
                      <img src={prestep_sonar_2} className='image center' alt='Ansible schema' />
                      <SyntaxHighlighter language="yaml">
                        {code_2}
                      </SyntaxHighlighter>
                    </li>
                    <li>
                      Add another pre-step as follows:
                      <img src={execute_shell_7} className='image center' alt='Ansible schema' />
                      <SyntaxHighlighter language="bash">
                        {code_3}
                      </SyntaxHighlighter>
                      This will call a predefined quality gate in SonarQube that will make the job pass or fail depending on the outcome of the analysis.
                    </li>
                    <li>
                      The Build and Post steps should remain the same.
                    </li>
                    <li>Run your job and check that it succeeds.</li>
                    <li>Go to SonarQube and find your project:
                      <img src={sonar_result} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Click on the name and take a look at the report. There’s a lot of interesting things to look at here, but for the purpose of a demo, look at 13 vulnerabilities.</li>
                    <li>A quality gate <b>http://10.19.2.4:9000/quality_gates/show/AYSXBvHz-aZ8zPsTtTcL</b> has been setup to PASS if the number of vulnerabilities is LESS THAN OR EQUAL TO 13.
                      <img src={sonar_quality_gates} className='image center' alt='Ansible schema' />
                      FOOD FOR THOUGHT: This is an example of a quality gate that was setup for this bootcamp for simplicity reasons. Having more or less than 13 vulnerabilities to decide whether an analysis is ok or not does not make sense in the real world. What do you think a good quality gate condition (or a set of conditions) would be?
                    </li>
                    <li>Now, let’s change our code a bit and inject a new vulnerability to see what happens.</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>7.2	Injecting another vulnerability</h2>
                <p>
                  <ol type="1">
                    <li>In order to see how the quality gate works in more detail, we will inject a new vulnerability and see what happens.
                    </li>
                    <li>Go to the pom.xml file in your repository and uncomment the log4j dependency:
                      <img src={pom_72} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Commit and push your changes. The Jenkins job should start running soon after it discovers a new change in your repository.</li>
                    <li>Look at the job output, you should see that it FAILED and you should the following:
                      <img src={failure_result} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Go to sonarqube again, and take a look at your project:
                      <img src={sonar_fail} className='image center' alt='Ansible schema' />
                      It now says Failed! This is because the quality gate that we have set in place has not been met. We now have more than 13 vulnerabilities which makes the quality gate not pass.
                    </li>
                    <li>Back in your Jenkins job, notice that the build did not occur in the Jenkins job. This is because the quality gate check returned a failure and prevented the job from building. Such behavior is very useful as we don’t want to build projects that don’t pass our tests.
                      <img src={sonar_status} className='image center' alt='Ansible schema' />
                    </li>
                  </ol>
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step7" />
        </div>
      </div>
    );
  }
}

export default Step7;