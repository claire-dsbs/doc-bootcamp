import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Ip from './Ip';
import global_schema from './images/global_schema.png';
import hosts_file from './images/hosts_file.png';
import pom_xml from './images/pom_xml.png';
import dockerfile_7 from './images/dockerfile_7.png';
import jenkins_7 from './images/jenkins_7.png';
import scm_section from './images/scm_section.png';
import sonar_interface from './images/sonar_interface.png';
import sonar_locally from './images/sonar_locally.png';
import build_sonar from './images/build_sonar.png';
import prestep_sonar_1 from './images/prestep_sonar_1.png';
import prestep_sonar_2 from './images/prestep_sonar_2.png';
import execute_shell_7 from './images/execute_shell_7.png';
import build_71 from './images/build_71.png';
import sonar_result from './images/sonar_result.png';
import example_hosts_file from './images/example_hosts_file.png';
import sonar_quality_gates from './images/sonar_quality_gates.png';
import pom_72 from './images/pom_72.png';
import failure_result from './images/failure_result.png';
import sonar_fail from './images/sonar_fail.png';
import sonar_status from './images/sonar_status.png';


class Step7 extends StepBase {
  constructor(props) {
    super(props, 'step7');
  }

  render() {
    const code_1 = '---\n\
- hosts: all\n\
  become: true\n\
  vars:\n\
    ansible_sudo_pass: "{{ ansible_ssh_pass }}"\n\
  tasks:\n\
  - name: copy Dockerfile\n\
    copy:\n\
      src: /var/lib/jenkins/workspace/YOUR_INFO_HERE/Dockerfile\n\
      dest: /opt/docker\n\
  - name: copy war\n\
    copy:\n\
      src: /var/lib/jenkins/workspace/YOUR_INFO_HERE/target/bootcamp.war\n\
      dest: /opt/docker\n\
  - name: Stop current container\n\
    command: docker stop YOUR_INFO_HERE\n\
    ignore_errors: yes #why do you think is here?\n\
  - name: remove stopped container\n\
    command: docker rm YOUR_INFO_HERE\n\
    ignore_errors: yes\n\
  - name: remover docker images # Clean up task\n\
    command: docker rmi YOUR_INFO_HERE:latest\n\
    ignore_errors: yes # May not find image if first run\n\
  - name: create docker image using war file\n\
    command: docker build -t YOUR_INFO_HERE .\n\
    args:\n\
      chdir: /opt/docker\n\
  - name: run container\n\
    command: docker run -d --name YOUR_INFO_HERE -p 8082:8080 YOUR_INFO_HERE';

    const code_2 = 'sonar.projectKey=<your_sonarqube_project_key>\n\
sonar.host.url=http://10.19.2.4:9000/\n\
sonar.sources=.\n\
sonar.java.binaries=target/*\n\
sonar.dependencyCheck.summarize=true\n\
sonar.dependencyCheck.htmlReportPath=target/dependency-check-report.html\n\
sonar.dependencyCheck.jsonReportPath=target/dependency-check-report.json';
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">7 -	DevSecOps Lab - Overview</h1>
              <section>
                <p><img src={global_schema} className='image center' alt='Global schema' /></p>
              </section>
              <section>
                <h2>7.0 Set Up</h2>
                <p>
                  For this section we will:
                  <ol type="1">
                    <li>Fork and clone a new web app</li>
                    <li>Access SonarQube and deploy with Ansible</li>
                  </ol>
                </p>
                <h3>7.0.1	Clone the New Web App</h3>
                This section can be completed following the same instructions for the first web application
                <ol type="1">
                  <li>Fork and Clone javalogin repo https://github.com/Sar4D/javaloginapp.git</li>
                </ol>
                <h3>7.0.2	Prepare Java Login App Job</h3>
                <ol type="1">
                  <li>Modify hosts file in the javaloginapp repo and write you’re the IP Address of your LAB VM.
                    <img src={hosts_file} className='image center' alt='Global schema' />
                  </li>
                  <li>Modify pom.xml so that it contains your information
                    <img src={pom_xml} className='image center' alt='Global schema' />
                  </li>
                  <li>Modify Dockerfile and change the maintainer name
                    <img src={dockerfile_7} className='image center' alt='Global schema' />
                  </li>
                </ol>
                <h3>6.0.3	Creating an Ansible Inventory File</h3>
                <p>
                  <ol type="1">
                    <li>In the same git repo, create a file named hosts.</li>
                    <li>Add your Lab VM IP: <Ip type="Vm" />
                      <img src={example_hosts_file} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Save the file but don't push right away.</li>
                    <li>Create a playbook called ansible-playbook.yml and paste the following in it (make sure to replace the names of paths, images and containers accordingly):
                      <SyntaxHighlighter language="yaml">
                        {code_1}
                      </SyntaxHighlighter>
                    </li>
                    <li>Commit and push your changes (make sure you turn off the automatic builds following SCM changes in your previous jobs).</li>
                    <li>Create a new job in Jenkins and copy item from previous job (deploy with Ansible).
                      <img src={jenkins_7} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Modify SCM Section to point towards your newly forked repo
                      <img src={scm_section} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Run build and make sure it succeeds (Access the webpage at http://10.19.1.7:8082/bootcamp/pages/home.jsp to make sure it works)</li>
                  </ol>
                </p>
                <h3>7.0.3	Access SonarQube</h3>
                <p>
                  <ol type="1">
                    <li>From the User interface access the SonarQube web interface: http://10.19.2.4:9000</li>
                    <li>Log into SonarQube<br />
                      username: admin<br />
                      password: B00tcamperm4aster
                    </li>
                    <li>Create New Project (select manually)
                      <img src={sonar_interface} className='image center' alt='Sonar interface' />
                    </li>
                    <li>Write display name and remember your project key (should be the same as the display name)</li>
                    <li>Select locally
                      <img src={sonar_locally} className='image center' alt='Sonar interface' />
                    </li>
                    <li>Use existing token -&gt; sqa_c77abdf91b247768224b17ce227fe6090fecf8e9</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>7.1	Adding SAST to a Jenkins Job</h2>
                <p>
                  <ol type="1">
                    <li>Go to your latest job in Jenkins and configure the SCM as such (including your information):
                      <img src={build_sonar} className='image center' alt='Ansible schema' /></li>
                    <li>
                      In pre-steps add the following:
                      <img src={prestep_sonar_1} className='image center' alt='Ansible schema' />
                      <img src={prestep_sonar_2} className='image center' alt='Ansible schema' />
                      <SyntaxHighlighter language="yaml">
                        {code_2}
                      </SyntaxHighlighter>
                      <img src={execute_shell_7} className='image center' alt='Ansible schema' />
                    </li>
                    <li>
                      In build section, put the following:
                      <img src={build_71} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Make sure to leave the Invoke Ansible Playbook step as it is.</li>
                    <li>Run the job and check that it succeeds!</li>
                    <li>Go to sonarqube (http://10.19.2.4:9000/projects) and find your project.
                      <img src={sonar_result} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Open and take a look at the report. There’s a lot of interesting things to look at here, but for the purpose of a demo, look at 13 vulnerabilities.</li>
                    <li>A quality gate http://10.19.2.4:9000/quality_gates/show/AYSXBvHz-aZ8zPsTtTcL has been setup to PASS if the number of vulnerabilities is LESS THAN OR EQUAL TO 13.
                      <img src={sonar_quality_gates} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Let’s change our code a bit and inject a new vulnerability to see what happens.</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>7.2	Injecting another vulnerability</h2>
                <p>
                  <ol type="1">
                    <li>Go to the pom.xml file and uncomment the following block:
                      <img src={pom_72} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Commit and push your changes. If you haven’t setup automatic SCM polling in your job, run your Jenkins job.</li>
                    <li>Look at the job output. You should see:
                      <img src={failure_result} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Go to sonarqube again, and take a look at your project:
                      <img src={sonar_fail} className='image center' alt='Ansible schema' />
                      It now says Failed! This is because the quality gate that we have set in place has not been met! We now have 14 vulnerabilities (i.e. greater than 13 which makes the quality gate not pass).
                    </li>
                    <li>Notice that the build did not occur in the Jenkins job. This is because the quality gate check returned a failure and prevented the job from building. Such behaviour is very useful as we don’t want to build projects that don’t pass our tests.
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