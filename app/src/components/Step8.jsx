import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';

class Step8 extends StepBase {
  constructor(props) {
    super(props, 'step8');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">8 -	Advanced Challenges</h1>
              <section>
                <h2>8.0	Ansible Optimizations</h2>
                <p>
                  Migrate the Sonar-gate script to Git
                </p>
              </section>
              <section>
                <h2>8.1	Docker Optimizations</h2>
                <p>
                  <ol type="1">
                    <li>Migrate the Dockerfile to Git and use Ansible to transfer it to the target host</li>
                    <li>Use <a href="https://docs.ansible.com/ansible/2.9/scenario_guides/guide_docker.html" rel="noreferrer">Docker modules</a> in Ansible to optimize the Ansible code, add conditions instead of ignore_errors</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>8.2	Artifact Repository</h2>
                <p>
                  <ol type="1">
                    <li>Install <a href="https://www.jfrog.com/confluence/display/JFROG/Installing+Artifactory#InstallingArtifactory-DockerInstallation" rel="noreferrer">JFROG</a> Artifactory on the CI host</li>
                    <li>Log into JFROG and create a maven repository</li>
                    <li>Install the <a href="https://www.jfrog.com/confluence/display/JFROG/Jenkins+Artifactory+Plug-in" rel="noreferrer">Artifactory Jenkins Plugin</a></li>
                    <li>Configure the Artifactory server in Jenkins</li>
                    <li>Add a <a href="https://www.jfrog.com/confluence/display/JFROG/Maven+Builds#MavenBuilds-ConfiguringFreestyleMaven3Projects" rel="noreferrer">Post-Build Action</a> to your Jenkins pipeline to upload the war files to Artifactory</li>
                    <li>Download the war files from Artifactory using Ansible and Ansible Vault where appropriate</li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>8.3	Security Integrations</h2>
                <p>
                  <ol type="1">
                    <li>Integrate DAST into your Jenkins pipeline – e.g ZAP</li>
                    <li>Integrate container security into the Jenkins pipeline – e.g. Anchor</li>
                    <li>Integrate secret scanning into Git – e.g Trufflehog</li>
                    <li>Integrate IAST – e.g Contrast </li>
                  </ol>
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step8" />
        </div>
      </div>
    );
  }
}

export default Step8;