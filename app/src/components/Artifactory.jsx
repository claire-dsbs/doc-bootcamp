import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';

class Artifactory extends StepBase {
  constructor(props) {
    super(props, 'artifactory');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevOps Advanced Challenge: Artifacts & Binaries Management with Artifactory</h2>
              <section>
              <p>
                Read about Artifactory here: <a href="https://jfrog.com/blog/what-is-artifactory-jfrog/">https://jfrog.com/blog/what-is-artifactory-jfrog/</a>
              </p>
              <p>
                You can access the Bootcamp instance of Artifactory and visualize the tree here: <b>http://10.19.0.7:8082/ui/repos/tree/General/bootcamp-libs-release</b>. Notice the different packages (repositories) and their contents.
              </p>
              <p>Login with credentials <b>admin/Bootcamp1!</b></p>
              <h3>Food for thought:</h3>
              <p>Why do you think a tool such as Artifactory is useful?</p>
              <h3>Task: Pull Dependencies from Artifactory</h3>
              <ol>
                <li>Using the pre-installed (and pre-configured for this instance of Artifactory) Artifactory plugin in Jenkins, make sure your job (you can use any of your jobs as long as they contain a Maven compilation step) pulls the necessary dependencies for the Maven build from Artifactory and not from the internet.</li>
              </ol>
              <h3>Task: Push Build Artifacts to Artifactory</h3>
              <ol>
                <li>Make sure your job publishes the generated war file to Artifactory after the build.</li>
                <li>Verify in Artifactory that your war file has been successfully uploaded to Artifactory.</li>
              </ol>
              </section>
            </div>
          </div>
          <CompleteCheck step="artifactory" redirectUrl="/pipeline"/>
        </div>
      </div>
    );
  }
}

export default Artifactory;