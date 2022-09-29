import React from "react";
import Cookies from 'universal-cookie';
import CompleteCheck from './CompleteCheck';
import image1_0 from './images/bootcamp1.0.png';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });
    this.state = { 'step1': false };

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
    this.setState({ step1: event.target.checked });
    var step1 = { 'step1': event.target.checked };

    var my_new_progression = { ...my_progression, ...step1 }
    console.log(my_new_progression)

    cookies.set('myProgression', my_new_progression, { path: '/' })

    window.location.reload(false);
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h1 className="font-weight-light">1 - DevOps in Action</h1>
              <section>
                <h2>1.0 Program Setup</h2>
                <p>
                  Shown in the figure below is a simulated DevOps environment which will be replicated in this lab. At first glance, the various parts, programs and tools which will be used may seem numerous. However, during the course of the lab, it will be seen that each of the distinct sections will be interconnected.
                </p>
                <p><img src={image1_0} className='image center' alt='Architecture for the bootcamp' /></p>
                <p>For the purposes of this lab, only a portion of a typical DevOps pipeline will be replicated in order to show the tasks one might expect as a DevOps developer. Multiple open-source platforms, such as Jenkins and TomCat will be used, as these represent the most used – and in demand – applications which are being used in actuality today by CGI. </p>
                <p className="fw-semibold">For this section of the lab manual, the left part of the diagram, the ‘Continuous Integration’ section will be setup. The main programs to use and setup in this section will be Visual Studio Code, GitBash and GitHub. </p>
              </section>
              <section>
                <h2>1.1 Download Visual Studio Code</h2>
                <p>
                  <section className="list-step">
                    <div className="item-list">
                      <p>
                        <span className='name-item-list'>A</span>
                        Head over to this <a href="https://code.visualstudio.com/Download">link</a>. This link will redirect to the Visual Studio Code main download page.
                      </p>
                      <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseSection1A" role="button" aria-expanded="false" aria-controls="collapseSection1A">
                          More details for the installation
                        </a>
                      </p>
                      <div class="collapse" id="collapseSection1A">
                        <div class="card card-body">
                          I didn't find the Appendix A.2 in the doc but it's for the example
                        </div>
                      </div>
                    </div>
                  </section>
                </p>
              </section>
            </div>
          </div>
          <CompleteCheck step="step1" />
        </div>
      </div>
    );
  }
}

export default Step1;