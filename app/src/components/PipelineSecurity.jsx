import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ps1 from './images/ps1.png'
import ps2 from './images/ps2.png'
import ps3 from './images/ps3.png'
import ps4 from './images/ps4.png'

class PipelineSecurity extends StepBase {
  constructor(props) {
    super(props, 'pipelinesecurity');
  }

  render() {
    const code_1 = `stage('KICS scan') {
    steps {
        script {
            docker.image('checkmarx/kics:latest').inside("--entrypoint=''") {
              sh('/app/bin/kics scan -p \'\$(pwd)\' --ci --report-formats html -o \'\$(pwd)\' --ignore-on-exit results')
              archiveArtifacts(artifacts: '$(pwd)/results.html', fingerprint: true)
              publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: '.', reportFiles: '$(pwd)/results.html', reportName: 'KICS Results', reportTitles: ''])
            }
        }
    }
}`;
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevSecOps Advanced Challenge: Integrate Security Control on the Pipeline Itself</h2>
              <section>
                <h4>Using the declarative pipeline built for deploying and running ZAP scan, we can add a security control on the pipeline pretty easily with KICS:</h4>
                <p><a href="https://github.com/Checkmarx/kics">https://github.com/Checkmarx/kics</a></p>
                <h4>For easy Jenkins integration, refer to that quick documentation:</h4>
                <p><a href="https://github.com/Checkmarx/kics/blob/master/docs/integrations_jenkins.md">https://github.com/Checkmarx/kics/blob/master/docs/integrations_jenkins.md</a></p>
                <p>The required add-ons to Jenkins have already been installed.</p>
                <h4>Create in Jenkins a new project, choosing the pipeline option:</h4>
                <p><img src={ps1} className='image center' alt='Output after the build' /></p>
                <h4>Once your project created, got get the same script you used to deploy ZAP, and copy/paste it to the appropriate place.</h4>
                <p><img src={ps2} className='image center' alt='Output after the build' /></p>
                <p>As you can see, you pretty much have to take the file with the declarative pipeline and paste this part at the right place in it (the grayed one in the previous screenshot):</p>
                <SyntaxHighlighter language="bash">
                  {code_1}
                </SyntaxHighlighter>
                <h4>Now save it and run.</h4>
                <p><img src={ps3} className='image center' alt='Output after the build' /></p>
                <p>Here you can see the parts that are interesting to us.</p>
                <h4>Click in the KICS Results and you will see what the pipeline’s scan results can look like.</h4>
                <p><img src={ps4} className='image center' alt='Output after the build' /></p>
                <p>Here there are no vulnerabilities discovered in the pipeline, but obviously in some instances you could introduce vulnerabilities in your DevOps / CI/CD.
                This tool is there to make sure the changes to your CI/CD pipeline are not introducing vulnerable components.</p>
                <h4>Try to integrate it with DefectDojo, by formatting the output and pushing it through a POST request. If you haven't done the Trivy part yet, we recommend completing it first.</h4>
                <h4>If you want to have a good idea of the power of this tool, check its targeted queries, allowing a more targeted scan:</h4>
                <a href="https://docs.kics.io/latest/queries/">https://docs.kics.io/latest/queries/</a><br/>and<br/>
                <a href="https://docs.kics.io/latest/queries/all-queries/">https://docs.kics.io/latest/queries/all-queries/</a>
              </section>
            </div>
          </div>
          <CompleteCheck step="pipelinesecurity" redirectUrl="/fuzzing"/>
        </div>
      </div>
    );
  }
}

export default PipelineSecurity;