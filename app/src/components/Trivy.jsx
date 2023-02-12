import React from "react";
import StepBase from './StepBase';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CompleteCheck from './CompleteCheck';

class Trivy extends StepBase {
  constructor(props) {
    super(props, 'trivy');
  }

  render() {
    const code_1 = `sudo apt-get install wget apt-transport-https gnupg lsb-release -y;
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -;
trivy_repo="deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main";
if grep -q "$trivy_repo" /etc/apt/sources.list.d/trivy.list; then echo $trivy_repo already in apt sources list; else echo $trivy_repo | sudo tee -a /etc/apt/sources.list.d/trivy.list; fi;
sudo apt-get update -y;
sudo apt-get install -y trivy;`
    const code_2 = `FROM scratch AS exportscan
COPY --from=<scanstep> <outputfile> .`
    const code_3 = `curl -X POST '<URL DEFECDOJO>/api/v2/import-scan/' -H 'accept: application/json' -H 'Content-Type: multipart/form-data' -H 'Authorization: Token <TOKENDD>' -F 'minimum_severity=<MIN SEVERITY WANTED>' -F 'active=true' -F 'verified=true' -F 'scan_type=Trivy Scan' -F 'close_old_findings=false' -F 'push_to_jira=false' -F 'file=@<PATH TO THE JSON REPORT FILE>report.json' -F 'engagement_name=<YOUR DEFECTDOJO ENGAGEMENT>' -F 'product_name=<PRODUCT NAME DD> ' -F 'test_title=<YOUR DD TEST NAME>'`
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevSecOps Advanced Challenge: Container Scanning with Trivy</h2>
              <section>
              <h3>Build and deploy the vulnerable app in a local container</h3>
              <p>You can fork this git repository: <a href="https://github.com/rabhan/webgoat_bootcamp.git">https://github.com/rabhan/webgoat_bootcamp.git</a></p>
              <p>This is a light version of the Webgoat app (you can find the complete version on the official git here : <a href="https://github.com/WebGoat/WebGoat">https://github.com/WebGoat/WebGoat</a>, the app has been shrunk to focus on few vulnerabilities only). WebGoat is maintained by OWASP and is described as: a deliberately insecure web application designed to teach web application security lessons.</p>
              <ol>
                <li>You already did this exercise during the bootcamp, you'll find the Dockerfile needed to deploy your local container with the right parameters in your newly forked repository. Docker will search for the jar file in the local directory.</li>
                <li>Once deployed, you can access WebGoat on the URL: <a href="http://localhost:8080/WebGoat">http://localhost:8080/WebGoat</a> (to verify the deployment is successful).</li>
                <li>You can create a user and look around to see what kind of vulnerabilities remains if you feel like it (or ... you can still have the surprise later!).</li>
              </ol>
              <h3>Integrate Trivy in your job/pipeline</h3>
              <p>Trivy is a vulnerability scanner by Aquasecurity. You can find the documentation <a href="https://aquasecurity.github.io/trivy/v0.36/">here</a>.</p>
              <p>In this exercise, we will focus on 3 of its potential targets: git repository, container image and filesystem (you can see all in the doc). Trivy has 3 modes available (scanner):</p>
              <ul>
                <li>-vuln: will search for known vulnerabilities on code dependencies and OS packages</li>
                <li>-config: will search for misconfigurations</li>
                <li>-secret: will search for sensitive information and secrets</li>
              </ul>
              <p>Use of Trivy:<br/>
                Trivy &lt;target&gt; [--security-checks &lt;scanner1,scanner2,scanner3&gt;] &lt;subject&gt;</p>
              <p>Options that can be useful:</p>
              <ul>
                <li>-o &lt;file&gt; (to redirect the output to a file)</li>
                <li>-f json (to change the output format to json (you'll see all the formats in the doc))</li>
                <li>--exit-code 1 (to change the default exit code (0). When vulnerabilities are found, the build will be stopped)</li>
                <li>--no-progress (to not overwrite the standard output)</li>
                <li>--timeout 15m (to set a longer timeout)</li>
                <li>--ignore-unfixed (to not show unfixed vulnerabilities)</li>
              </ul>
              <p>Here is a shell script you can use in one shot, or integrate into your job/pipeline, to install Trivy on your local host:</p>
              <SyntaxHighlighter language="bash">
                {code_1}
              </SyntaxHighlighter>
              <h3>Add Trivy scans (git, image, filesystem) in the job/pipeline you used for building and deploying Webgoat</h3>
              <ol>
                <li>What kind of scans can be useful here and why? (between repo/fs/image but also config/secret/vuln)
                </li>
                <li>Where do you integrate this scans and which options you used? Explain</li>
                <li>
                  Bonus 1: Let's try to do an embedded Trivy scan in the docker file (on the filesystem in the image, target the directory where the app is installed), while building the image.
                  <ol type="i">
                    <li>How do you adapt your docker file?</li>
                    <li>How do you call your embedded scan and retrieve its results?
                      <p>HINT 1: You can redirect an embedded file from the Dockerfile to the host with this step:<br/>
                      <SyntaxHighlighter language="bash">
                        {code_2}
                      </SyntaxHighlighter></p>
                      <p>HINT 2: don't forget you can use stages in docker files</p>
                    </li>
                  </ol>
                </li>
                <li>
                  Bonus 2: Redirect your scan results to DefectDojo
                  <ol type="i">
                    <li>You have to create a new engagement for the product &lt;PRODUCT NAME DD&gt; where you will send your new tests</li>
                    <li>Format your trivy scan results to json and send them to your engagement in DefectDojo. You can find the token for the API in Jenkins credentials vault (TOKENDD variable).
                      <ol type="1">
                        <li>How do you integrate this variable to your job/pipeline?</li>
                        <li>Where in your code do you make the API calls? warning: the Ansible version used in this bootcamp will not permit you to make your call with the url module (well for this API because of the content-type of the request). If you integrate your API calls in your Ansible playbook, you'll have to do it with curl in shell command.
                          <p>HINT 1: you have to use this API endpoint to import your scan results:<br/>
                            <strong>api/v2/import-scan/<br/>
                            method: POST<br/>
                            Content-Type: multipart/form-data</strong></p>
                          <p>HINT 2: Here a template of the request you have to use:<br/>
                          <SyntaxHighlighter language="bash">
                            {code_3}
                          </SyntaxHighlighter></p>
                        </li>
                        <li>See your result in DefectDojo</li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
              <h3>Fix vulnerabilities, secrets and misconfigurations (if any) detected by Trivy</h3>
              <ol>
                <li>How would you fix what trivy detected? (misconfigurations and secrets will be easy, but vuln may be difficult knowing that the purpose of WebGoat is to be vulnerable, you can correct some if you want but others corrections may break the dependencies of the application.) The objective here is to elaborate a remediation plan.
                  <br/><br/><i>HINT: The report give you the CVE associated with the vulnerability detected, if not directly the answer, time to do some reading.</i>
                </li>
              </ol>
              <h3>Questions:</h3>
              <ol>
                <li>Do you see any similarities between some Trivy scans features and other tools you used during the bootcamp? If yes, what and which ones?</li>
                <li>What addition Trivy brings on the table compared to the other tools seen?</li>
              </ol>
              </section>
            </div>
          </div>
          <CompleteCheck step="trivy" />
        </div>
      </div>
    );
  }
}

export default Trivy;