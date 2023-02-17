import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    var my_progression = cookies.get('myProgression', { path: '/' });

    this.state = {}

    if (my_progression !== undefined) {
      this.state = my_progression;
    }
  }

  isDone(step) {
    if (this.state[step] && this.state[step] === true) {
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
      </svg>;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              DevSecOps Bootcamp
              <br /><i>Instructional and Setup Document</i>
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state.step1 ? "finished" : ""}`} to="/step1" name="step1">
                    Step 1
                    {this.isDone("step1")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.step2 ? "finished" : ""}`} to="/step2" name="step2">
                    Step 2
                    {this.isDone("step2")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.step3 ? "finished" : ""}`} to="/step3" name="step3">
                    Step 3
                    {this.isDone("step3")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.step4 ? "finished" : ""}`} to="/step4" name="step4">
                    Step 4
                    {this.isDone("step4")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.step5 ? "finished" : ""}`} to="/step5" name="step5">
                    Step 5
                    {this.isDone("step5")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.step6 ? "finished" : ""}`} to="/step6" name="step6">
                    Step 6
                    {this.isDone("step6")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.step7 ? "finished" : ""}`} to="/step7" name="step7">
                    Step 7
                    {this.isDone("step7")}
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <NavLink className='nav-link' to="/advancedchallenges" name="advancedchallenges">
                    Advanced Challenges
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.codeformatting ? "finished" : ""}`} to="/codeformatting" name="codeformatting">
                    Code Formatting
                    {this.isDone("codeformatting")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.detectsecrets ? "finished" : ""}`} to="/detectsecrets" name="detectsecrets">
                    Detect-Secrets
                    {this.isDone("detectsecrets")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.trivy ? "finished" : ""}`} to="/trivy" name="trivy">
                    Trivy
                    {this.isDone("trivy")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.dast ? "finished" : ""}`} to="/dast" name="dast">
                    DAST
                    {this.isDone("dast")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.pipelinesecurity ? "finished" : ""}`} to="/pipelinesecurity" name="pipelinesecurity">
                    KICS
                    {this.isDone("pipelinesecurity")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.fuzzing ? "finished" : ""}`} to="/fuzzing" name="fuzzing">
                    Fuzzing
                    {this.isDone("fuzzing")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.prometheusgrafana ? "finished" : ""}`} to="/prometheusgrafana" name="prometheusgrafana">
                    Monitoring
                    {this.isDone("prometheusgrafana")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.artifactory ? "finished" : ""}`} to="/artifactory" name="artifactory">
                    Artifactory
                    {this.isDone("artifactory")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.pipeline ? "finished" : ""}`} to="/pipeline" name="pipeline">
                    Pipelining
                    {this.isDone("pipeline")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${this.state !== undefined && this.state.patchapp ? "finished" : ""}`} to="/patchapp" name="patchapp">
                    Patching
                    {this.isDone("patchapp")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;