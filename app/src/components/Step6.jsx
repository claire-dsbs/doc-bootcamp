import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Name from './Name';
import Ip from './Ip';
import ansible from './images/ansible.png';
import example_hosts_file from './images/example_hosts_file.png';
import post_build_6 from './images/post_build_6.png';
import error_6 from './images/error_6.png';
import result_6 from './images/result_6.png';

class Step6 extends StepBase {
  constructor(props) {
    super(props, 'step6');
  }

  render() {
    const code_1 = 'sudo mkdir /opt/docker/' + <Name type="lower" />

    const code_2 = 'cd /opt/docker/' + <Name type="lower" /> + '/nvi Dockerfile';

    const code_3 = '# Pull tomcat latest image from dockerhub\n \
    From tomcat\n \
    # Maintainer\n \
    MAINTAINER "' + <Name type="capitalize" /> + '"\n\n \
    # copy war file on to container\n \
    COPY ./webapp.war /usr/local/tomcat/webapps';

    const code_4 = '- hosts: all\n \
 become: true\n \
 vars:\n \
    ansible_sudo_pass: “{{ ansible_ssh_pass }}”\n \
 tasks:\n\
    - name: copy war\n \
      copy:\n\
        src: /var/lib/jenkins/workspace/YOURNAME-DeployOnContainer/webapp/target/webapp.war\n\
        dest: /opt/docker/ YOURNAME\n\
    - name: Stop current container\n\
      command: docker stop YOURNAME -devops-container\n\
      ignore_errors: yes\n\
    - name: remove stopped container\n\
      command: docker rm YOURNAME -devops-container\n\
      ignore_errors: yes\n\
    - name: remover docker images # Clean up\n\
      command: docker rmi YOURNAME -devops-image:latest\n\
      ignore_errors: yes # May not find image if first run\n\
    - name: create docker image using war file\n\
      command: docker build -t YOURNAME -devops-image:latest .\n\
      args:\n\
        chdir: /opt/docker/ YOURNAME\n\
    - name: run container\n\
      command: docker run -d --name YOURNAME -devops-container -p 8081:8080 -devops-image:latest';

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">6 -	DevOps Lab - Deploy App on Docker Container Using Ansible</h1>
              <section>
                <p><img src={ansible} className='image left' alt='Ansible schema' />
                  Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments or zero downtime rolling updates. Ansible’s main goals are simplicity and ease-of-use.<br />
                  More documentation on Ansible <a href="https://docs.ansible.com/" target="_blank">here</a>
                </p>
              </section>
              <section>
                <h2>6.0 Set Up</h2>
                <p>
                  To complete this section we will need to:
                  <ol type="1">
                    <li>Set up your Lab VM directory</li>
                    <li>Set up the Ansible script</li>
                    <li>Creating an Ansible inventory file</li>
                  </ol>
                </p>
                <h3>6.0.1 Setting up the Dockerfile</h3>
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
                <h3>6.0.2	Setting up the Ansible Script</h3>
                <ol type="1">
                  <li>Ouvrez VS Code sur votre Laptop CGI, créez le fichier ansible_playbook.yml dans le repo Git bootcamp.</li>
                  <li>Le contenu devrait ressembler à ça:
                    <SyntaxHighlighter language="dockerfile">
                      {code_4}
                    </SyntaxHighlighter>
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
                  </ol>
                </p>
              </section>
              <section>
                <h2>6.1	Integrating Ansible and Jenkins</h2>
                <p>
                  <ol type="1">
                    <li>From your view click create a new item with the following information<br />
                      Enter an item name: Deploy_on_Container_using_ansible<br />
                      Copy from: Deploy_on_Container<br />
                      Source Code Management:<br />
                      Repository: https://github.com/YOURNAME/bootcamp.git<br />
                      Branches to build : */master<br />
                      Poll SCM : - * * * * *<br />
                      Build:<br />
                      Root POM:pom.xml<br />
                      Goals and options: clean install package<br />
                      <br />
                      Build Environment – Post Steps</li>
                    <li>Add post-build steps -&gt; Invoke Ansible Playbook
                      <ol type="a">
                        <li>Playbook path = ./ansible-playbook.yml (chemin du playbook dans le repo Git)</li>
                        <li>Inventory -&gt; File or host list -&gt; ./hosts (chemin du fichier hosts dans le repo Git)</li>
                        <li>Credentials -&gt; bootcamper</li>
                        <li>Leave other parameters empty</li>
                      </ol>
                      <img src={post_build_6} className='image center' alt='Screen of the post build parameters' />
                    </li>
                    <li>Save your job and push your last changes in Git.</li>
                  </ol>
                  If the build failed because of this error:
                  <img src={error_6} className='image center' alt='Error you can have at the end of this step' />
                  Make sure to deactivate Poll SCM in your previous build of Deploy_on_Container and Deploy_on_Tomcat_server.
                </p>
              </section>
              <section>
                <h2>6.2	Expected Output</h2>
                <p>
                  <img src={result_6} className='image center' alt='Your expected result' />
                  Check the web application on the browser http://<Ip type="Cd" />:8081/webapp/index.jsp<br />
                  To see that Jenkins will automatically deploy changes to the application, follow the instructions in the <a href="https://support.google.com/drive/answer/6283888#heading=h.y8bxtfxbubdo" target="_blank">“Making Changes to the Source Code Section”.</a>

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