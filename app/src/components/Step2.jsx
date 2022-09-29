import React from "react";
import Cookies from 'universal-cookie';
import CompleteCheck from './CompleteCheck'
import Name from './Name';
import SyntaxHighlighter from 'react-syntax-highlighter';

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    this.state = { 'step2': false };

    if (my_progression !== undefined) {
      this.state = my_progression;
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    if (my_progression === undefined) {
      my_progression = {}
    }
    console.log(event.target.checked)
    this.setState({ step2: event.target.checked });
    var step2 = { 'step2': event.target.checked };

    var my_new_progression = { ...my_progression, ...step2 }
    console.log(my_new_progression)

    cookies.set('myProgression', my_new_progression, { path: '/' })

    window.location.reload(false);
  }

  render() {

    const dockerfile = `
    # Pull tomcat latest image from dockerhub
    From tomcat
    # Maintainer 
    MAINTAINER "<Name />" 
    # copy war file onto container
    COPY ./webapp.war /usr/local/tomcat/webapps
    `;

    const code_python = `
    def get_datas_api(datas, token, language):\n 
    preset = os.environ["PRESET"]\n 
    url = f"test/entries?sync=true&sync-preset=test&limit=100&token=" + token\n 

    response = requests.get(url)\n 

    if (response.status_code == 200):\n
    return "0"`;
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">2 - DevOps Lab - Jenkins Fundamentals</h1>
              <section>
                <h2>2.0	Set Up</h2>
                <p>
                  In This section we confirm that Jenkins is running.
                  <ol>
                    <li>Log into the user interface from Azure (Bootcamp-Test)
                      <ol type="a">
                        <li>username: <Name /></li>
                        <li>password: bootcamper</li>
                      </ol>
                    </li>
                    <li>
                      From a browser access the Jenkins web interface: <span className="bg-light border text-wrap">http//10.4.0.4:8080</span>
                    </li>
                    <li>
                      Log into Jenkins using your
                      <ol type="a">
                        <li>username: <Name /></li>
                        <li>password: bootcamper</li>
                      </ol>
                    </li>
                  </ol>
                </p>
              </section>
              <section>
                <h2>2.1	Creating a Basic Jenkins Job</h2>
                <p>
                  In this section we will create a basic Jenkins job that will run an arbitrary bash command and return the output.
                  <ol>
                    <li>
                      From the Jenkins Dashboard click on your view
                    </li>
                    <li>
                      From your dashboard click on “New Item”
                    </li>
                    <li>
                      Fill in the following details
                      <p>
                        Enter an item name: <Name app_name="My-First-Project" /><br />
                        Select “Freestyle Project”
                      </p>
                      <p>Select “Build”  {'>'} “Add Build step” {'>'} “Execute shell” <br />
                        In the space enter the following command
                      </p>
                      <pre><code className="language-shell">echo "Welcome to Jenkins Demo"</code></pre>
                      <p>Example Dockerfile</p>
                      <SyntaxHighlighter language="dockerfile">
                        {dockerfile}
                      </SyntaxHighlighter>
                      <pre><SyntaxHighlighter language="python">{code_python}</SyntaxHighlighter></pre>
                    </li>
                  </ol>
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step2" />
        </div>
      </div>
    );
  }
}

export default Step2;