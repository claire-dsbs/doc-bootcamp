import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';
import Ip from './Ip';
import prom1 from './images/prom1.png'
import prom2 from './images/prom2.png'

class PrometheusGrafana extends StepBase {
  constructor(props) {
    super(props, 'prometheusgrafana');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevOps Advanced Challenge: Container Monitoring with Prometheus and Grafana</h2>
              <section>
                <p><a href="https://prometheus.io/" rel="noreferrer"><strong>Prometheus:</strong> Monitoring system & time series database</a><br/>
                <a href="https://grafana.com/" rel="noreferrer"><strong>Grafana:</strong> The open observability platform | Grafana Labs</a></p>
                
                <h4>Food for thought:</h4>
                <p>Monitoring an application or a service is an important aspect of a DevOps pipeline. Come up with a few reasons to explain the importance of this aspect.</p>

                <h4>A Prometheus instance has already been setup for you and has been configured to collect information about containers. You can visualize it here (through your Lab VM):</h4>
                <p><a href="http://10.19.0.7:9090/targets">http://10.19.0.7:9090/targets</a></p>

                <h4>You should see your VM IP with the state DOWN in the list. Here’s an example of working and non-working VMs:
                  <p><img src={prom1} className='image center' alt='The result of your success' /></p>
                </h4>

                <h4>Task:</h4>
                <p>In order for Prometheus to be able to successfully gather information about your Docker containers, you need to expose the Docker port 9323 and specify that this port will publish Docker metrics. Visit this resource to figure out how to do so: <a href="https://docs.docker.com/config/daemon/prometheus/">https://docs.docker.com/config/daemon/prometheus/</a></p>

                <h4>Once you have successfully done so, you should see 2 things:</h4>
                <ol>
                  <li>In Prometheus, the state of your VM should be UP.</li>
                  <li>If you visit <b>http://<Ip type="Vm" />:9323/metrics</b>, you should see a list of metrics that Docker is publishing on this IP.</li>
                </ol>

                <h4>Food for thought:</h4>
                <p>Take a look at some metrics and think about which would be useful to monitor (consider the scenario in which you have a web application running).</p>

                <h4>Visit http://10.19.0.7:3000/ to access Grafana.</h4>
                <p>Login with credentials <b>admin/admin</b></p>

                <h4>Create a new dashboard and a new panel (use your name to name them).</h4>

                <h4>Task:</h4>
                <p>In the panel, add a query that will get information about STOPPED or RUNNING containers on YOUR VM (hint: instance should equal to <Ip type="Vm" />:9329)</p>

                <h4>Visualize the graph and make sure the information makes sense
                  <p><img src={prom2} className='image center' alt='The result of your success' /></p>
                </h4>

              </section>
            </div>
          </div>
          <CompleteCheck step="prometheusgrafana" />
        </div>
      </div>
    );
  }
}

export default PrometheusGrafana;