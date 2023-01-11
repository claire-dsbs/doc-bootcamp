import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import image_90_1 from './images/image_90_1.png';
import image_90_2 from './images/image_90_2.png';
import image_90_3 from './images/image_90_3.png';
import image_90_4 from './images/image_90_4.png';
import image_90_5 from './images/image_90_5.png';

class Step9 extends StepBase {
  constructor(props) {
    super(props, 'step9');
  }

  render() {
    const code_1 = 'git config --global http.sslVerify false\n\
    git config --global user.name "Your Name"\n\
    git config --global user.email "your.email@cgi.com"';

    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">9 -	Making Changes to the Source Code </h1>
              <section>
                <p>This section outlines how to make changes to the web application source code, in order to see that Jenkins job will automatically build and deploy the web application. Learning Goals</p>
                <h2>9.0	Triggering a Change</h2>
                <p>
                  From your Windows machine:
                  <ol type="1">
                    <li>Open the web application code in visual studio</li>
                    <li>Navigate to /src/main/webapp/index.jsp</li>
                    <li>Change the text on line to another meaningful string and save (Ctrl + S)
                      <img src={image_90_1} className='image center' alt='Ansible schema' />
                    </li>
                    <li>Stage your code
                      <img src={image_90_2} className='image center' alt='Ansible schema' />
                      Commit your code with a meaningful message
                      <img src={image_90_3} className='image center' alt='Ansible schema' />
                      Finally, push the new code back up to the remote git server
                      <img src={image_90_4} className='image center' alt='Ansible schema' />
                      A pop-up to add additional commands to initialize GitHub will need to be added in the ‘Terminal’ section of Visual Studio, located at the bottom of the Visual Studio interface:
                      <img src={image_90_5} className='image center' alt='Ansible schema' />
                      <SyntaxHighlighter language="bash">
                      {code_1}
                    </SyntaxHighlighter>
                    Each command should be typed individually into the terminal section of the Terminal, with ‘Your Name’ changed to your GitHub username and your CGI email replaced.
                    </li>
                  </ol>
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step9" />
        </div>
      </div>
    );
  }
}

export default Step9;