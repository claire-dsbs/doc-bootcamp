import React from "react";
import StepBase from './StepBase';

import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import image1_0 from './images/bootcamp1.0.png';
import image_vs from './images/installVS.png';
import image_vs1 from './images/installVS.png';
import image_vs2 from './images/installVS2.png';
import image_vs3 from './images/installVS3.png';
import image_vs4 from './images/installVS4.png';
import image_vs5 from './images/installVS5.png';
import install_extension_vs from './images/install_extension_vs.png';
import install_git from './images/install_git.png';
import prompt from './images/prompt.png';
import git_in_vs from './images/git_in_vs.png';
import gitbash_windows from './images/gitbash_windows.png'
import menu_github from './images/menu_github.png'
import add_ssh_key from './images/add_ssh_key.png'
import clone_repo from './images/clone_repo.png'
import authorize_github from './images/authorize_github.png'
import github_signin from './images/github_signin.png'
import clone_vs from './images/clone_vs.png'
import fork_git from './images/fork_git.png'
import azure_1 from './images/azure_1.png'
import azure_2 from './images/azure_2.png'
import azure_3 from './images/azure_3.png'
import azure_4 from './images/azure_4.png'
import azure_5 from './images/azure_5.png'

class Step1 extends StepBase {
  constructor(props) {
    super(props, 'step1');
  }

  render() {
    const command_line_1 = `ssh-keygen -t rsa -b 4096 -C "your.email@cgi.com"`;
    const command_line_2 = `Enter file in which to save the key (/c/Users/your.name/.ssh/id_rsa):`
    const command_line_3 = `Enter passphrase (empty for no passphrase):
Enter same passphrase again:`
    const command_line_4 = `cd /c/Users/firstname.lastname/.ssh/`
    const command_line_5 = `ls`
    const command_line_6 = `cat id_rsa.pub`

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
                <p>For the purposes of this lab, only a portion of a typical DevOps pipeline will be replicated in order to show the tasks one might expect as a DevOps developer. Multiple open-source platforms, such as Jenkins and TomCat will be used, as these represent one of the most used – and in demand – applications which are being used in actuality today by CGI.</p>
                <p className="fw-semibold">For this section of the lab manual, the left part of the diagram, the ‘Continuous Integration’ section will be setup. The main programs to use and setup in this section will be Visual Studio Code, GitBash and GitHub.</p>
              </section>
              <section>
                <h2>1.1 Download and Install Visual Studio Code</h2>
                <p>
                  <section className="list-step">
                    <p>
                      <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code" rel="noreferrer">Visual Studio Code - Wikipedia</a>
                    </p>
                    <div className="item-list">
                      <p>
                        <span className='name-item-list'>A</span>
                        Head over to this <a href="https://code.visualstudio.com/Download" rel="noreferrer">link</a>. This link will redirect to the Visual Studio Code main download page.
                      </p>
                      <p>
                        <span className='name-item-list'>B</span>
                        You will be presented with the following page, download the version relevant to the OS you are using.
                      </p>
                      <p><img src={image_vs} className='image center' alt='Installation of Visual Studio' /></p>
                      <p>Download the User Installer x64 and install VS Code following default options.</p>
                      <p>
                        <span className='name-item-list'>C</span>
                        Finish installation and launch VS Code.
                      </p>
                      <p>
                        <span className='name-item-list'>C</span>
                        What we would like to accomplish is to clone a repository, however, it will be seen that this option is currently greyed out.
                      </p>
                      <p><img src={image_vs5} className='image left' alt='Installation of Visual Studio - Step 1' /></p>
                    </div>
                  </section>
                </p>
              </section>
              <section>
                <h2>1.2 Download Git Dependencies.</h2>
                <p>
                  <section className="list-step">
                    <div className="item-list">
                      <p>
                        <a href="https://en.wikipedia.org/wiki/Git" rel="noreferrer">Git - Wikipedia</a>
                      </p>
                      <p>
                        <span className='name-item-list'>A</span>
                        In order to link Git with Visual studio, the Git extension pack can be installed within Visual studio. Visual Studio extensions can be accessed by selecting the ‘Extensions’ menu on the left. When in the menu, the Git Extension Pack can be searched and installed.
                      </p>
                      <p><img src={install_extension_vs} className='image center' alt='Installation Visual Studio Extension - Git' /></p>
                      <p>
                        <span className='name-item-list'>B</span>
                        Press on this <a href="https://git-scm.com/downloads" rel="noreferrer">link</a> to download Git. Download the version relevant to the OS you are using and install Git following default options.                      
                      </p>
                      <p><img src={install_git} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>
                        <span className='name-item-list'>C</span>
                        After the installation has completed, launch GitBash for the first time. A terminal window similar to the Windows Command Prompt will open. This confirms that GitBash has been installed properly.                      
                      </p>
                      <p><img src={prompt} className='image center' alt='Installation of Git for Windows' /></p>
                    </div>
                  </section>
                </p>
              </section>
              <section>
                <h2>1.3 Clone Bootcamp Repo from GitHub</h2>
                <p>
                  <section className="list-step">
                    <div className="item-list">
                      <p>
                        <a href="https://en.wikipedia.org/wiki/GitHub" rel="noreferrer">GitHub - Wikipedia</a>
                      </p>
                      <p>
                        <span className='name-item-list'>A</span>
                        Now that GitBash has been installed, close Visual Studio code and relaunch it. 
                      </p>
                      <p><img src={git_in_vs} className='image center' alt='Git in VS' /></p>
                      <p>The option to clone from a repo should now no longer be greyed out.</p>
                      <p>
                        <span className='name-item-list'>B</span>
                        The link to access the public repo can be accessed at this <a href="https://github.com/Sar4D/Bootcamp.git" rel="noreferrer">link</a>. The invite link redirects to a code base with all of the code necessary for the bootcamp.
                      </p>                      
                      <p>
                        If you do not have a GitHub account with CGI yet, create one for free by pressing this <a href="https://github.com/join" rel="noreferrer">link</a> and use your CGI email.                      
                      </p>
                      <p>
                        <span className='name-item-list'>C</span>
                        After accessing the repo, a 'fork' or the repo – essentially a copy, now needs to be made.
                      </p>
                      <p><img src={fork_git} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>In the top left of the GitHub page of the repo is the fork button, press it to make a copy on your account.</p>
                      <p>
                        <span className='name-item-list'>D</span>
                          Now that a fork has been created on your own GitHub account, open the GitBash console by searching ‘GitBash’. In simple terms, we will now generate a private-public key pair in order to be able to perform work on our local computer and have it reflected in GitHub.</p>
                      <p><img src={gitbash_windows} className='image center' alt='Gitbash in VS' /></p>
                      <p>Type the following command into the GitBash terminal:
                      <SyntaxHighlighter language="bash">
                        {command_line_1}
                      </SyntaxHighlighter>
                      </p>
                      <p>Replace the ‘your.email’ with your own CGI email address, the same used to create the GitHub account.</p>
                      <p>You will then be asked:
                      <SyntaxHighlighter language="text">
                        {command_line_2}
                      </SyntaxHighlighter>
                      </p>
                      <p>Press enter, without entering a file name.</p>
                      <p>You will then be asked:
                      <SyntaxHighlighter language="text">
                        {command_line_3}
                      </SyntaxHighlighter>
                      </p>
                      <p>For both messages, press enter without typing anything. </p>
                      <p>A large private and public key will then be generated</p>
                      <p>Now enter the following command into the terminal:
                      <SyntaxHighlighter language="bash">
                        {command_line_4}
                      </SyntaxHighlighter>
                      </p>
                      <p>Replace the ‘firstname.lastname’ portion with your own. If unsure of what your username is, scroll up and locate where GitBash stored your key: Your identification has been saved in <i>"/c/Users/firstname.lastname/.ssh/id_rsa"</i></p>
                      <p>Now type in the command:
                      <SyntaxHighlighter language="bash">
                        {command_line_5}
                      </SyntaxHighlighter>
                      </p>
                      <p>Note the use of the lowercase letter 'ell', not a capital I.</p>
                      <p>Two separate files will appear, id_rsa and id_rsa.pub</p>
                      <p>Type in the command:
                      <SyntaxHighlighter language="bash">
                        {command_line_6}
                      </SyntaxHighlighter>
                      </p>
                      <p>Your large public key will then be displayed, copy it in its entirety, including the ssh-rsa beginning portion.</p>
                      <p>
                        <span className='name-item-list'>E</span>
                        Return to GitHub on your browser and locate the settings options in the top right of GitHub.
                      </p>
                      <p><img src={menu_github} className='image center' alt='Menu github' /></p>
                      <p>Select the option 'SHH and GPG keys' in the left of the menu.</p>
                      <p><img src={add_ssh_key} className='image center' alt='Add ssh key' /></p>
                      <p>The key must be named in the 'Title' section, such as 'my_private_key'. The key which was copied from the GitBash terminal can now be copied in the 'Key' section.</p>
                      <p>Returning back to the repository the green 'Code' button can now be selected and the link through HTTPS copied over by pressing the copy icon.</p>
                      <p><img src={clone_repo} className='image center' alt='Clone the repo' /></p>
                      <p>
                        <span className='name-item-list'>F</span>
                        Back in Visual Studio. From the "source control" tab, press the 'Clone from repository' button, select 'Clone from GitHub' to be redirected to the following page in your browser.
                      </p>
                      <p><img src={authorize_github} className='image center' alt='Authorize VS to clone Github repo' /></p>
                      <p>Press 'Continue', followed by 'Authorize GitHub'. Retype your password if prompted. GitHub will now connect to Visual Studio and allow the fork to be copied.</p>
                      <p>A pop-up will then appear, select 'Sign in with your browser'.</p>
                      <p><img src={github_signin} className='image center' alt='Github signin page' /></p>
                      <p>Follow the instructions and enter any credentials when prompted. </p>
                      <p>
                        <span className='name-item-list'>G</span>
                        Before returning to Visual Studio, create a new empty folder on your desktop named 'Git Repos'. All repos will be saved here when prompted by Visual Studio. 
                      </p>
                      <p>
                        <span className='name-item-list'>H</span>
                        Returning to Visual Studio, the 'Source Control' option can be selected on the left-hand menu. The 'Views and more options' button can be selected (the ellipsis) and finally the clone option.
                      </p>
                      <p><img src={clone_vs} className='image center' alt='Clone from VS' /></p>
                      <p>The URL copied from Github can now be pasted in the dialogue box at the top of Visual Studio. The location where the repo will be saved is the 'Git Repos' folder created on the desktop for ease of access.</p>
                    </div>
                  </section>
                </p>
              </section>
              <section>
                <h2>1.4 Connect to LAB VMs</h2>
                <p>
                  <section className="list-step">
                    <div className="item-list">
                      <p>
                        <a href="https://en.wikipedia.org/wiki/Microsoft_Azure" rel="noreferrer">Microsoft Azure - Wikipedia</a>
                      </p>
                      <p>
                        <span className='name-item-list'>A</span>
                          You should have an email in your CGI mailbox from Azure inviting you to join the Munder Difflyn Tenant in Azure. (Previously set up in the Cloud Lab)
                      </p>
                      <p><img src={install_extension_vs} className='image center' alt='Installation Visual Studio Extension - Git' /></p>
                      <p>
                        <span className='name-item-list'>B</span>
                          Navigate to https://portal.azure.com and log in with your CGI account.
                      </p>
                      <p>
                        <span className='name-item-list'>C</span>
                          Make sure you are in the Munder Difflyn directory (under your email address on the top right screen you should see MunderDifflyn, if you see CGI, click on Switch Directory and choose MunderDifflyn.
                      </p>
                      <p><img src={azure_1} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>
                        <span className='name-item-list'>D</span>
                          You will be redirected to the home page.
                      </p>
                      <p>
                        <span className='name-item-list'>E</span>
                          In the search bar on the top middle, enter BootcampLabVMs. Click on the Resource Group with that name. It is the resource group that contains your VM to access the lab environment. 
                      </p>
                      <p><img src={azure_2} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>
                        <span className='name-item-list'>F</span>
                          You can find your lab VM in that resource group. You can click on the VM that has your name. That will be your VM for the entire lab. Ex:
                      </p>
                      <p><img src={azure_3} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>
                        <span className='name-item-list'>G</span>
                          On your VMs page, you should see the Start button on the top left grayed out. That means the VM is already started. The VMs are configured to start at 8am and shut at 8 pm. If you wish to work after hours you can simply click on the Start button. It might take up to 5 minutes for the VM to start.
                      </p>
                      <p>
                        <span className='name-item-list'>H</span>
                          To connect to your VM, click on the connect button on the top left. Choose Bastion. (Bastion is a service that lets you connect securely to a virtual machine using your browser without exposing the public ip.)
                      </p>
                      <p>
                        <span className='name-item-list'>I</span>
                          On the Bastion page, Click on Connection Settings. Choose the RDP protocol, it will make you able to access the GUI on the Linux VM.  Connect using the Password authentication Type, Enter your name as the username and the Password is Bootc@mper2023.
                      </p>
                      <p><img src={azure_4} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>
                        <span className='name-item-list'>J</span>
                          If you are prompted with a XRDP Blue screen asking you for login credentials again, enter the same credentials as mentioned above.
                      </p>
                      <p>
                        <span className='name-item-list'>K</span>
                          Your VM will open on another browser page.
                      </p>
                      <p><img src={azure_5} className='image center' alt='Installation of Git for Windows' /></p>
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