import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Name from './Name';
import NameBase from './NameBase';
import Ip from './Ip';
import ReactDOMServer from 'react-dom/server';
import docker_logo from './images/docker_logo.png';
import config_system from './images/config_system.png';
import ssh_remote_hosts from './images/ssh_remote_hosts.png';
import error_5 from './images/error_5.png';
import result_5 from './images/result_5.PNG';
import tomcat_container from './images/tomcat_container.PNG'
import jenkins_container_creds_2 from './images/jenkins_container_creds_2.png'
import jenkins_container_cmd from './images/jenkins_container_cmd.png'
import jenkins_container_post_actions from './images/jenkins_container_post_actions.png'

class Step5 extends StepBase {
  constructor(props) {
    super(props, 'step5');
  }

  render() {

    const name = ReactDOMServer.renderToString(<NameBase />);
    const command_line_0 = `sudo su -`;
    const command_line_1 = `docker --version`;
    const command_line_2 = `service docker status`;
    const command_line_3 = `docker run -d --name test-tomcat-server -p 8081:8080 tomcat:latest`;
    const command_line_4 = `docker stop test-tomcat-server\ndocker rm test-tomcat-server`;
    const command_line_5 = `cd /home/bootcamper\nvi Dockerfile`;
    const delete_docker = `docker stop [id1] [id2]
docker rm [id1] [id2]`;
    const command_line_6 = `# Pull tomcat latest image from dockerhub
From tomcat

# Maintainer
MAINTAINER "` + name +  `"

# copy war file onto container
COPY ./webapp.war /usr/local/tomcat/webapps`;
    const command_line_7 = 'docker build -t simple-devops-image .';
    const command_line_8 = 'docker run -d --name simple-devops-container -p 8081:8080 simple-devops-image';
    const command_line_9 = `docker exec -it <your-container> /bin/bash
cd webapp
ls`;
    const command_line_10 = `sshpass -p "\${USER_PW}" scp -o "StrictHostKeyChecking=no" \${USER_ID}@10.19.0.5:/var/lib/jenkins/workspace/` + name + `-Deploy-on-Container/webapp/target/webapp.war /home/bootcamper;
cd /home/bootcamper
docker build -t simple_devops-image .
docker run -d --name simple-devops-container -p 8081:8080 simple-devops-image`;
    const command_line_11 = `docker stop name_of_container
docker rm name_of_container`;

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">5 -	DevOps Lab - Deploy App on Docker container</h2>
              <section>
                <div className="row">
                  <div className="col">
                  <p><img src={docker_logo} className='image center' alt='Logo of Docker' /></p>
                  </div>
                  <div className="col center">
                    Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.
                  </div>
                </div>
              </section>
              <section>
                <h2>5.0 Setup</h2>
                <p>
                  In this section, we will:
                  <ol type="1">
                    <li>Confirm that Docker is properly installed</li>
                    <li>Validate that Docker is working</li>
                    <li>Create a Dockerfile that will take care of the war file</li>
                    <li>Deploy the app on a container through Jenkins</li>
                  </ol>
                </p>
                <h3>5.1	Setup Docker</h3>
                <p>
                  <a href="https://en.wikipedia.org/wiki/Docker_(software)" rel="noreferrer">Docker (software) - Wikipedia</a>
                </p>
                <p>
                  Docker should already be installed on your Lab VM. To make sure that’s the case:
                  <ol type="1">
                    <li>Open the Terminal in your Lab VM</li>
                    <li>Become root
                      <SyntaxHighlighter language="bash">
                        {command_line_0}
                      </SyntaxHighlighter>
                    </li>
                    <li>Make sure docker is installed
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
                <h3>5.2	Validate Docker</h3>
                <p>
                  <ol type="1">
                    <li>Create a tomcat docker container by pulling a docker image from the public docker registry. (Here we are mapping the external port 8081 to the default Tomcat 8080 port inside the container)
                      <SyntaxHighlighter language="bash">
                        {command_line_3}
                      </SyntaxHighlighter>
                    </li>
                    <li>Check that the Tomcat server in the Docker container is up: <b>http://<Ip type='Vm' />:8081/</b>
                    </li>
                    <li>Delete the container to prevent future port conflicts:
                      <SyntaxHighlighter language="bash">
                        {command_line_4}
                      </SyntaxHighlighter>
                    </li>
                  </ol>
                </p>
                <h3>5.3	Create a Dockerfile</h3>
                <p>
                  <a href="https://docs.docker.com/engine/reference/builder/" rel="noreferrer">Dockerfile reference | Docker Documentation</a>
                </p>
                <p>
                  <ol type="1">
                    <li>Create a file called "Dockerfile" under /home/bootcamper in the user home directory
                      <SyntaxHighlighter language="bash">
                        {command_line_5}
                      </SyntaxHighlighter>
                    </li>
                    <li>Enable edit mode by clicking "i" on your keyboard
                    </li>
                    <li>Copy and paste the below code
                      <SyntaxHighlighter language="dockerfile">
                        {command_line_6}
                      </SyntaxHighlighter>
                    </li>
                    <li>To exit the editor and save click "Esc" on your keyboard then type ":wq!"</li>
                    <li>Build the Docker image from the Dockerfile that was just created
                      <SyntaxHighlighter language="bash">
                        {command_line_7}
                      </SyntaxHighlighter>
                    </li>
                    <li>Run the new Docker image
                      <SyntaxHighlighter language="bash">
                        {command_line_8}
                      </SyntaxHighlighter>
                      NOTE: If you get an error saying that the container is already in use, run the commands in 6.b.iii to stop and delete the running container (with the name simple-devops-container).
                    </li>
                    <li>
                      Check that the page loads by visiting: <b>http://<Ip type='Vm' />:8081/webapp</b>
                      <p><img src={tomcat_container} className='image center' alt='Installation of Git for Windows' /></p>
                    </li>
                    <li>
                      IMPORTANT - now that the Docker container is up, we must destroy it to avoid port conflicts if using port 8081.
                    </li>
                  </ol>
                  If the tomcat page doesn't load or shows 'Not found', run:<br />
                  <div>
                    docker ps -a <br />
                    If there's more than one container stop and delete them all using their ids with : <br />
                    <SyntaxHighlighter language="bash">
                      {delete_docker}
                    </SyntaxHighlighter>
                    and redo step 1 to 6.<br />
                  </div>
                  You can also verify your image in your container:
                  <SyntaxHighlighter language="bash">
                    {command_line_9}
                  </SyntaxHighlighter>
                </p>
              </section>
              <section>
                <h2>5.4 Deploying a Container with Jenkins</h2>
                <p>
                  First of all, to not have any build conflicts when pushing new code to GitHub, make sure to remove the automatic polling in your previous Jenkins job (i.e. <Name case="capitalize" app_name="Deploy-on-Tomcat-Server" />)
                </p>
                <p>
                  <ol type="1">
                    <li>In Jenkins, go to Dashboard {'>'} Manage Jenkins {'>'} Configure System
                      <p><img src={config_system} className='image center' alt='Config system interface' /></p>
                      Scroll down and add a new SSH remote hosts with the IP of your target with the preconfigured credentials bootcamper
                      <p><img src={ssh_remote_hosts} className='image center' alt='Configuration of the SSH remote hosts' /></p>
                    </li>
                    <li>
                      From your view, click Create a New Item <Name case="capitalize" app_name="Deploy-on-Container" /> and copy from <Name case="capitalize" app_name="Deploy-on-Tomcat-Server" />
                    </li>
                    <li>
                      In the Source Code Management section, make sure that you still point to */master in the repo <b>https://github.com/YourForkFromGithub/bootcamp.git</b>
                    </li>
                    <li>
                      Set Poll SCM to * * * * *
                    </li>
                    <li>
                      Under build environment, set the following credentials so the can be used in the shell script below without being cleartext:
                      <p><img src={jenkins_container_creds_2} className='image center' alt='Config system interface' /></p>
                    </li>
                    <li>
                      In the Post Steps section, click Add post-build step, add Execute shell script on remote host using ssh and paste the following code under Command:
                      <SyntaxHighlighter language="text">
                        {command_line_10}
                      </SyntaxHighlighter>
                      What the code does is that it pulls the image from the Jenkins server (where it's built) into the /home/bootcamper directory, creates a docker image from it and runs it.
                      <p><img src={jenkins_container_cmd} className='image center' alt='Config system interface' /></p>
                    </li>
                    <li>
                      Make sure to select your VM IP under SSH Site.
                    </li>
                    <li>
                      Also, delete everything under Post-build Actions:
                      <p><img src={jenkins_container_post_actions} className='image center' alt='Config system interface' /></p>
                    </li>
                    <li>
                      Save job.
                    </li>
                    <div>
                      If your build doesn't work. Look at your build console output. It probably shows this:
                      <p><img src={error_5} className='image center' alt='Configuration of your IP' /></p>
                      If so, go to your terminal, and enter these commands with the name of your container:
                      <SyntaxHighlighter language="bash">
                        {command_line_11}
                      </SyntaxHighlighter>
                    </div>
                  </ol>
                </p>
              </section>
              <section>
                <h2>5.5	Expected Output</h2>
                <p>
                  Check the console output and make sure the job ran successfully. If so, you should be able to open <b>http://<Ip type='Vm' />:8081/webapp</b> and see something like the following:
                  <p><img src={result_5} className='image center' alt='The result you should have' /></p>
                </p>
              </section>
              <section>
                <h2>5.6	Making Changes in Source Code</h2>
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
          <CompleteCheck step="step5" />
        </div>
      </div>
    );
  }
}

export default Step5;