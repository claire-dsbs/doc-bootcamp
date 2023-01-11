import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Name from './Name';
import Ip from './Ip';
import docker_logo from './images/docker_logo.png';
import config_system from './images/config_system.png';
import ssh_remote_hosts from './images/ssh_remote_hosts.png';
import config_build_5 from './images/config_build_5.png';
import post_build_5 from './images/post_build_5.png';
import error_5 from './images/error_5.png';
import result_5 from './images/result_5.png';

const name = <Name case="capitalize" />;

class Step5 extends StepBase {
  constructor(props) {
    super(props, 'step5');
  }
                                        
  render() {
    const command_line_1 = `docker --version`;
    const command_line_2 = `service docker status`;
    const command_line_3 = `docker run -d --name test-tomcat-server -p 8081:8080 tomcat:latest`;
    const command_line_4 = `docker stop test-tomcat-server\ndocker rm test-tomcat-server`;
    const command_line_5 = `cd /home/bootcamper\nvi Dockerfile`;
    const command_line_6 = '# Pull tomcat latest image from dockerhub\n\
From tomcat\n\
# Maintainer\n\
MAINTAINER "' + <Name case="capitalize" /> + '"\n\n\
# copy war file onto container\n\
COPY ./webapp.war /usr/local/tomcat/webapps';

    const command_line_7 = 'docker build -t simple-devops-image';
    const command_line_8 = 'docker run -d --name simple-devops-container -p 8081:8080 simple-devops-image';
    const command_line_9 = 'docker exec -it <your-container> /bin/bash \
    cd webapps \
    ls';
    const command_line_10 = 'sshpass -p "admjin2837678fy!" scp -o "StrictHostKeyChecking=no" jenkins-admin@10.19.0.5:/var/lib/jenkins/workspace/' + <Name case="capitalize" /> + '-DeployOnContainer/webapp/target/webapp.war /home/bootcamper \
    cd /home/bootcamper; \
    docker build -t simple_devops-image .; \
    docker run -d --name simple-devops-container -p 8081:8080 simple-devops-image;';
    const command_line_11 = 'docker stop name_of_container\n \
    docker rm name_of_container';

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">5 -	DevOps Lab - Deploy App on Docker container</h1>
              <section>
                <div className="row">
                  <div className="col">
                    <img src={docker_logo} className='image center' alt='Logo of Docker' />
                  </div>
                  <div className="col center">
                    Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.
                  </div>
                </div>
              </section>
              <section>
                <h2>5.0 Set Up</h2>
                <p>
                  For this section we will need to:
                  <ol type="1">
                    <li>Confirm that Docker is installed on</li>
                    <li>Validate that Docker is working</li>
                    <li>Create a Dockerfile that will accept the .war file</li>
                    <li>Creating a Docker ssh</li>
                  </ol>
                </p>
                <h3>5.0.1	Setting Up Docker</h3>
                <p>
                  <ol type="1">
                    <li>Log into your LAB VM</li>
                    <li>Make sure docker is installed and start docker services
                      <SyntaxHighlighter language="bash">
                        {command_line_1}
                      </SyntaxHighlighter>
                    </li>
                    <li>Check that the docker service is running
                      <SyntaxHighlighter language="bash">
                        {command_line_2}
                      </SyntaxHighlighter>
                    </li>
                  </ol>
                </p>
                <h3>5.0.2	Validating Docker</h3>
                <p>
                  <ol type="1">
                    <li>Create a tomcat docker container by pulling a docker image from the public docker registry
                      <SyntaxHighlighter language="bash">
                        {command_line_3}
                      </SyntaxHighlighter>
                    </li>
                    <li>Check that the Tomcat server in the Docker container is up: http://<Ip type='Cd' />:8081/
                    </li>
                    <li>Delete the container so it doesn’t trigger an “already use port error” in the future:
                      <SyntaxHighlighter language="bash">
                        {command_line_4}
                      </SyntaxHighlighter>
                    </li>
                  </ol>
                  NOTE - For more Docker commands, check out <a href="/step10" target="_blank">“Appendix”</a> section at the end of the document
                </p>
                <h3>5.0.3	Creating the Docker File</h3>
                <p>
                  <ol type="1">
                    <li>Create a file called “Dockerfile” under /home/bootcamper in the user home directory
                      <SyntaxHighlighter language="bash">
                        {command_line_5}
                      </SyntaxHighlighter>
                    </li>
                    <li>Enable edit mode by clicking “i” on your keyboard
                    </li>
                    <li>Copy and paste the below code
                      <SyntaxHighlighter language="dockerfile">
                        {command_line_6}
                      </SyntaxHighlighter>
                    </li>
                    <li>To exit the editor and save click “Esc” on your keyboard then type “:wq!”</li>
                    <li>Build the Docker image from the Dockerfile that was just created
                      <SyntaxHighlighter language="bash">
                        {command_line_7}
                      </SyntaxHighlighter>
                    </li>
                    <li>Run the new Docker image
                      <SyntaxHighlighter language="bash">
                        {command_line_8}
                      </SyntaxHighlighter>
                    </li>
                    <li>
                      From the User interface check that tomcat page loads: http://<Ip type='Cd' />:/8081/webapp
                    </li>
                  </ol>
                  <div className="warning">
                    IMPORTANT - now that the Docker container is up, we must destroy it to avoid port conflicts if using port 8081. Check out the “Appendix” section at the end of the document for details on the Docker commands to stop and remove an already existing container.
                  </div>
                  If the tomcat page doesn’t load and shows Not found:  <br />
                  <div>
                    In /home/bootcamper you can enter:  docker ps -a <br />
                    If there’s more than one container stop and delete them all with their id with : <br />
                    docker stop [id1] [id2]<br />
                    docker rm [id1] [id2]<br />
                    and redo step 1 to 6.<br />
                  </div>
                  You can verify your image in your container:
                  <SyntaxHighlighter language="bash">
                    {command_line_9}
                  </SyntaxHighlighter>
                </p>
              </section>
              <section>
                <h2>5.1 Deploying the Container with Jenkins</h2>
                <p>
                  <ol type="1">
                    <li>Navigate to Dashboard -> Manage Jenkins -> Configure System
                      <img src={config_system} className='image center' alt='Config system interface' />
                      Scroll down and add a new SSH remote hosts with the IP of your target with the preconfigured credentials bootcamper
                      <img src={ssh_remote_hosts} className='image center' alt='Configuration of the SSH remote hosts' />
                    </li>
                    <li>
                      From your view click create a new item with the following information
                      <div className='tab'>Enter an item name: <Name case="capitalize" />-Deploy_on_Container<br />
                        Copy from: <Name case="capitalize" />-Deploy_on_Tomcat_Server<br />
                        Source Code Management:<br />
                        <div className='tab'>Repository: https://github.com/YourForkFromGithub/bootcamp.git<br />
                          Branches to build : */master</div>
                        Poll SCM : * * * * *<br />
                        Build Environment<br />
                      </div>
                      In the “Post Build Section” paste the following code (this will pull the .war file from the Jenkins box to your target box).
                      <SyntaxHighlighter language="text">
                        {command_line_10}
                      </SyntaxHighlighter>
                      <img src={config_build_5} className='image center' alt='Configuration of your IP' />
                    </li>
                    <li>Make sure to delete everything in “Post-build Actions” Section. Press X.
                      <img src={post_build_5} className='image center' alt='Configuration of your IP' />
                      <div>
                        If your build doesn’t work. Look at your build console output. It probably shows this:
                        <img src={error_5} className='image center' alt='Configuration of your IP' />
                        Then go to your target SSH, and enter these commands with the name of your container:
                        <SyntaxHighlighter language="bash">
                          {command_line_11}
                        </SyntaxHighlighter>
                      </div>
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>5.2	Expected Output</h2>
                <p>
                  Check the web application on the browser: http://<Ip type='Cd' />:8081/webapp/index.jsp
                  <img src={result_5} className='image center' alt='The result you should have' />
                  To see that Jenkins will automatically deploy changes to the application, follow the instructions in Section 10 of this document ‘Making Changes to the Source Code’.
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step5" />
        </div>
      </div>
    );
  }
}

export default Step5;