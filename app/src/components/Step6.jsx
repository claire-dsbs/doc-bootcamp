import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Name from './Name';
import NameBase from './NameBase';
import ReactDOMServer from 'react-dom/server';
import Ip from './Ip';
import ansible from './images/ansible.png';
import example_hosts_file from './images/example_hosts_file.png';
import error_6 from './images/error_6.png';
import result_6 from './images/result_6.PNG';
import jenkins_container_creds_2 from './images/jenkins_container_creds_2.png'
import jenkins_ansible from './images/jenkins_ansible.png'

class Step6 extends StepBase {
  constructor(props) {
    super(props, 'step6');
  }

  render() {
    const name = ReactDOMServer.renderToString(<NameBase />);

    const name_capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    const code_1 = 'sudo mkdir /opt/docker/' + name.toLowerCase()

    const code_2 = `cd /opt/docker/` + name.toLowerCase() +
    `\nvi Dockerfile`;

    const code_3 = `# Pull tomcat latest image from dockerhub
From tomcat
# Maintainer
MAINTAINER "` + name + `"
# copy war file on to container
COPY ./webapp.war /usr/local/tomcat/webapps`;

    const code_4 = `---
- hosts: all # comes from the hosts file
  become: true # become sudo
  gather_facts: false # save time and not gather info

  tasks:
    - name: set sudo password
      set_fact:
        ansible_sudo_pass: "{{ ansible_ssh_pass }}"

    - name: copy war from Jenkins to target host
      copy:
        src: /var/lib/jenkins/workspace/` + name_capitalized + `-Deploy-on-Container-using-Ansible/webapp/target/webapp.war
        dest: /opt/docker/` + name.toLowerCase() + `

    - name: stop current container
      command: docker stop ` + name.toLowerCase() + `-devops-container
      ignore_errors: yes # in case container doesn't exist

    - name: remove stopped container
      command: docker rm ` + name.toLowerCase() + `-devops-container
      ignore_errors: yes # in case container doesn't exist

    - name: remove docker images 
      command: docker rmi ` + name.toLowerCase() + `-devops-image:latest
      ignore_errors: yes # in case image does not exist

    - name: create docker image using war file
      command: docker build -t ` + name.toLowerCase() + `-devops-image:latest .
      args:
        chdir: /opt/docker/` + name.toLowerCase() + `

    - name: run container from docker image
      command: docker run -d --name ` + name.toLowerCase() + `-devops-container -p 8081:8080 ` + name.toLowerCase() + `-devops-image:latest`;

    const code_5 = `export ANSIBLE_HOST_KEY_CHECKING=False\nsshpass -p "\${USER_PW}" ansible-playbook ansible-playbook.yml -i hosts --user=\${USER_ID} -e ansible_ssh_pass=\${USER_PW}`

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">6 -	DevOps Lab - Deploy App on Docker Container Using Ansible</h2>
              <section>
                <div className="row">
                  <div className="col">
                    <p><img src={ansible} className='image left' alt='Ansible schema' /></p>
                  </div>
                  <div className="col center">
                    Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments or zero downtime rolling updates. Ansible’s main goals are simplicity and ease-of-use.<br />
                    More documentation on Ansible <a href="https://docs.ansible.com/" rel="noreferrer">here</a>
                  </div>
                </div>
              </section>
              <section>
                <h2>6.0 Setup</h2>
                <p>
                  To complete this section, you will:
                  <ol type="1">
                    <li>Setup your Lab VM directory</li>
                    <li>Write an Ansible script and inventory file which will be used to deploy the application to a container on your VM</li>
                  </ol>
                </p>
                <h3>6.1 Setup Dockerfile</h3>
                <ol type="1">
                  <li>Log into your Lab VM</li>
                  <li>Create the path /opt/docker/<Name type="lower" />
                    <SyntaxHighlighter language="bash">
                      {code_1}
                    </SyntaxHighlighter>
                  </li>
                  <li>Recreate the Dockerfile under /opt/docker/<Name type="lower" />
                    <SyntaxHighlighter language="bash">
                      {code_2}
                    </SyntaxHighlighter>
                  </li>
                  <li>The contents of the file are:
                    <SyntaxHighlighter language="dockerfile">
                      {code_3}
                    </SyntaxHighlighter>
                  </li>
                </ol>
                <h3>6.2	Ansible Playbook</h3>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Ansible_(software)" rel="noreferrer">Ansible (software) - Wikipedia</a>
                </p>
                <ol type="1">
                  <li>Open VS Code on your local computer and create a file called ansible-playbook.yml at the root of the Bootcamp repository.</li>
                  <li>Paste the following contents (make sure it makes sense):
                    <SyntaxHighlighter language="dockerfile">
                      {code_4}
                    </SyntaxHighlighter>
                  </li>
                </ol>
                <h3>6.3	Ansible Inventory file</h3>
                <p>
                  <ol type="1">
                    <li>Similarly to the previous step, create a file named hosts (without an extension) and write in it your VM IP.</li>
                    <li>Add your Lab VM IP: <Ip type="Vm" />
                    <p><img src={example_hosts_file} className='image center' alt='Ansible schema' /></p>
                    </li>
                    <li>Once done, commit and push everything.</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>6.4 Integrate Ansible with Jenkins</h2>
                <p>
                  <ol type="1">
                    <li>
                      First of all, to not have any build conflicts when pushing new code to GitHub, make sure to remove the automatic polling in your previous Jenkins job (i.e. <Name case="capitalize" app_name="Deploy-on-Container" />)</li>
                    <li>
                      From your view, click Create a New Item <Name case="capitalize" app_name="Deploy-on-Container-using-Ansible" /> and copy from <Name case="capitalize" app_name="Deploy-on-Container" />
                    </li>
                    <li>
                      In the Source Code Management section, make sure that you still point to */master in the repo <b>https://github.com/YourForkFromGithub/bootcamp.git</b>
                    </li>
                    <li>
                      Set Poll SCM to * * * * *
                    </li>
                    <li>
                      In Build triggers, under Use secret text(s) or file(s), modify the specific credentials to bootcamper
                      <p><img src={jenkins_container_creds_2} className='image center' alt='Ansible schema' /></p>
                    </li>
                    <li>
                      Remove Execute shell script on remote host using ssh post-build step. 
                    </li>
                    <li>
                      Add Execute shell post-build step and input the following:
                      <SyntaxHighlighter language="bash">
                        {code_5}
                      </SyntaxHighlighter>
                      <p><img src={jenkins_ansible} className='image center' alt='Ansible schema' /></p>
                      This command runs the ansible-playbook.yml file and passes to it the necessary credentials to perform the tasks within the playbook.
                    </li>
                    <li>
                      Save and run job.
                    </li>
                  </ol>
                  If the build failed because of this error:
                  <p><img src={error_6} className='image center' alt='Error you can have at the end of this step' /></p>
                  Make sure to deactivate Poll SCM in your previous jobs.
                </p>
              </section>
              <section>
                <h2>6.5	Expected Output</h2>
                <p>
                  Check the console output and make sure the job ran successfully. If so, you should be able to open <b>http://<Ip type="Vm" />:8081/webapp</b> and see something like the following:
                  <p><img src={result_6} className='image center' alt='Your expected result' /></p>
                  If you get an error regarding container being in use, make sure to stop and delete the container like previously seen.
                </p>
              </section>
              <section>
                <h2>6.6	Making Changes in Source Code</h2>
                <p>
                  To make sure Jenkins polling works as expected (i.e. a new build is triggered when changes to the source code are detected), we will make a change and see if it is reflected.
                  <ol type="1">
                    <li>
                      Open the Bootcamp repo on your local computer, and make a change to index.jsp under webapp/src/main/webapp.
                    </li>
                    <li>
                      Commit and push your changes.
                    </li>
                    <li>
                      Go to your Jenkins job and make sure it was triggered (give it up to a minute as it is not immediate) and that it ran successfully.
                    </li>
                    <li>
                      Finally, go to <b>http://<Ip type='Vm' />:8081/webapp</b> and make sure the new changes are visible on the page.
                    </li>
                  </ol>
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step6" />
        </div>
      </div>
    );
  }
}

export default Step6;