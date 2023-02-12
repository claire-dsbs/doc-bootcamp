import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation" 
import Home from "./components/Home"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"
import Step5 from "./components/Step5"
import Step6 from "./components/Step6"
import Step7 from "./components/Step7"
import CodeFormatting from "./components/CodeFormatting"
import PipelineSecurity from "./components/PipelineSecurity"
import AdvancedChallenges from "./components/AdvancedChallenges"
import DAST from "./components/DAST"
import Trivy from "./components/Trivy"
import PrometheusGrafana from "./components/PrometheusGrafana"
import Artifactory from "./components/Artifactory"
import DetectSecrets from "./components/DetectSecrets"
import Fuzzing from "./components/Fuzzing"
import PatchApp from "./components/PatchApp"
import Pipeline from "./components/Pipeline"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
        <Route path="/codeformatting" element={<CodeFormatting />} />
        <Route path="/pipelinesecurity" element={<PipelineSecurity />} />
        <Route path="/advancedchallenges" element={<AdvancedChallenges />} />
        <Route path="/dast" element={<DAST />} />
        <Route path="/trivy" element={<Trivy />} />
        <Route path="/prometheusgrafana" element={<PrometheusGrafana />} />
        <Route path="/artifactory" element={<Artifactory />} />
        <Route path="/detectSecrets" element={<DetectSecrets />} />
        <Route path="/fuzzing" element={<Fuzzing />} />
        <Route path="/patchApp" element={<PatchApp />} />
        <Route path="/pipeline" element={<Pipeline />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
