import React from "react";
import StepBase from './StepBase';
import SyntaxHighlighter from 'react-syntax-highlighter';

class Step10 extends StepBase {
  constructor(props) {
    super(props, 'step10');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">10 - Appendix A</h1>
              <section>
                <h2>Useful Docker Commands</h2>
                <p>
                  <ol type="1">
                    <li>how to search a docker image in hub.docker.com
                      <SyntaxHighlighter language="bash">
                        docker search httpd
                      </SyntaxHighlighter>
                    </li>
                    <li>Download a docker image from hub.docker.com
                      <SyntaxHighlighter language="bash">
                        docker image pull &lt;image_name&gt;:&lt;image_version/tag&gt;
                      </SyntaxHighlighter>
                    </li>
                    <li>List out docker images from your local system
                      <SyntaxHighlighter language="bash">
                        docker image ls
                      </SyntaxHighlighter>
                    </li>
                    <li>Create/run/start a docker container from image run your container in background (detached)
                      <SyntaxHighlighter language="bash">
                        docker run -d --name &lt;container_Name&gt; &lt;image_name&gt;:&lt;image_version/tag&gt;
                      </SyntaxHighlighter>
                    </li>
                    <li>Expose your application to host server
                      <SyntaxHighlighter language="bash">
                        docker run -d  -p &lt;host_port&gt;:&lt;container_port&gt; --name &lt;container_Name&gt; &lt;image_name&gt;:&lt;Image_version/tag&gt;<br />
                        docker run -d --name httpd_server -p 8080:80 httpd:2.2
                      </SyntaxHighlighter>
                    </li>
                    <li>List out running containers
                      <SyntaxHighlighter language="bash">
                        docker ps
                      </SyntaxHighlighter>
                    </li>
                    <li>List out all docker container (running, stpooed, terminated, etc...)
                      <SyntaxHighlighter language="bash">
                        docker ps -a
                      </SyntaxHighlighter>
                    </li>
                    <li>run a OS based container which interactive mode (nothing but login to container after it is up and running)
                      <SyntaxHighlighter language="bash">
                        docker run -i -t --name centos_server centos:latest
                      </SyntaxHighlighter>
                      i - interactive<br />
                      t - Terminal
                    </li>
                    <li>Stop a container
                      <SyntaxHighlighter language="bash">
                        docker stop &lt;container_id&gt;
                      </SyntaxHighlighter>
                    </li>
                    <li>Start a container which is in stopped or exit state
                      <SyntaxHighlighter language="bash">
                        docker start &lt;container_id&gt;
                      </SyntaxHighlighter>
                    </li>
                    <li>Remove a container
                      <SyntaxHighlighter language="bash">
                        docker rm &lt;container_id&gt;
                      </SyntaxHighlighter>
                    </li>
                    <li>login to a docker container
                      <SyntaxHighlighter language="bash">
                        docker exec -it &lt;container_Name&gt; /bin/bash
                      </SyntaxHighlighter>
                    </li>
                  </ol>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step10;