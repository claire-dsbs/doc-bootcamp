import React from "react";
import StepBase from './StepBase';

class Step11 extends StepBase {
  constructor(props) {
    super(props, 'step11');
  }

  render() {

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">11 - Appendix B</h1>
              <section>
                <h2>A.1	Resources Used</h2>
                <p>
                  <ul>
                    <li>(1)	<a href="https://security.cioreview.com/cioviewpoint/security-is-only-as-good-as-your-weakest-link-nid-14901-cid-21.html" rel="noreferrer">Security is Only As Good As Your Weakest Link (cioreview.com)</a></li>
                    <li>(2) <a href="https://snyk.io/learn/owasp-top-10-vulnerabilities/#:~:text=The%20Latest%20List%20of%20OWASP%20Top%2010%20Vulnerabilities,Logging%20and%20Monitoring%20Failures%2010%20Server-Side%20Request%20Forgery" rel="noreferrer">OWASP Top 10 | OWASP Top 10 Vulnerabilities 2021 | Snyk</a></li>
                    <li>(3) <a href="https://www.ibm.com/cloud/learn/devops-a-complete-guide" rel="noreferrer">What is DevOps? | IBM</a></li>
                    <li>(4) <a href="https://www.ibm.com/cloud/learn/continuous-integration" rel="noreferrer">Continuous Integration | IBM</a></li>
                    <li>(5) <a href="https://www.ibm.com/cloud/learn/continuous-delivery" rel="noreferrer">Introduction to Continuous Delivery | IBM</a></li>
                    <li>(6) <a href="https://www.ibm.com/cloud/learn/continuous-integration" rel="noreferrer">Continuous Integration | IBM</a></li>
                  </ul>
                </p>
              </section>
              <section>
                <h2>A.2	Further Information</h2>
                <h3>Step 1: Download Visual Studio Code</h3>
                <p>
                  <ol type="A">
                    <li>*For those unfamiliar with Visual Studio Code, it will act as the source-code editor for the purposes of this lab. It will allow us to manipulate and download code from external sources and repositories, such as GithHub, to facilitate the DevOps pipeline creation process. </li>
                    <li>*The vast majority of Windows system are 64-bit, ever since the introduction of Windows XP. This is the version which will be used in this lab</li>
                  </ol>
                  *If you are on a Mac system and unsure if using an Intel or Apple Silicon processor: press the small Apple logo at the top left of your screen. Select ‘About this Mac’. Under processor, check if the processor is listed as being made by Intel (eg: Intel Core i7) or Apple (eg: Apple M1). Select the Intel Chip or Apple Silicon download link as appropriate.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step11;