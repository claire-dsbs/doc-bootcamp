import React from "react";
import StepBase from './StepBase';

import CompleteCheck from './CompleteCheck';
import SyntaxHighlighter from 'react-syntax-highlighter';
import image1_0 from './images/bootcamp1.0.png';
import image_vs from './images/installVS.png';
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
                <p>For the purposes of this lab, only a portion of a typical DevOps pipeline will be replicated in order to show the tasks one might expect as a DevOps developer. Multiple open-source platforms, such as Jenkins and TomCat will be used, as these represent the most used – and in demand – applications which are being used in actuality today by CGI. </p>
                <p className="fw-semibold">For this section of the lab manual, the left part of the diagram, the 'Continuous Integration' section will be setup. The main programs to use and setup in this section will be Visual Studio Code, GitBash and GitHub. </p>
              </section>
              <section>
                <h2>1.1 Download Visual Studio Code</h2>
                <p>
                  <section className="list-step">
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
                      <p>A system running Windows 10 will be used for the purposes of lab demonstrations.</p>
                      <p>
                        <span className='name-item-list'>C</span>
                        Select User Installer: 64-bit
                      </p>
                      <p>After downloading, follow the prompts to accept the terms, select a download location and to create a desktop shortcut if desired.</p>
                      <p><img src={image_vs2} className='image left' alt='Installation of Visual Studio - Step 1' /><img src={image_vs3} className='image left' alt='Installation of Visual Studio - Step 2' /></p>
                      <p>
                        <span className='name-item-list'>D</span>
                        Finish Installation and Launch
                      </p>
                      <p>After the following appears on your screen, select 'Finish' to launch Visual Studio.</p>
                      <p><img src={image_vs4} className='image center' alt='Installation of Visual Studio - Last step' /></p>
                      <p>You will be presented with the following screen upon first start-up</p>
                      <p><img src={image_vs5} className='image center' alt='Installation of Visual Studio - Opening window' /></p>
                      <p>What we would like to accomplish is to clone a repository, however, it will be seen that this option is currently greyed out. Step 2 will show the download process of Git. </p>
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
                        <span className='name-item-list'>A</span>
                        In order to <a href="https://git-scm.com/downloads" rel="noreferrer">link</a> Git with Visual studio, the Git extension pack can be installed within Visual studio. Visual Studio extensions can be accessed by selecting the 'Extensions' menu on the left. When in the menu, the Git Extension Pack can be searched and installed.
                      </p>
                      <p>Press download and following the Setup Wizard to download Git on your system.</p>
                      <p><img src={install_extension_vs} className='image center' alt='Installation Visual Studio Extension - Git' /></p>
                      <p>
                        <span className='name-item-list'>B</span>
                        Press on this link to download Git. Download the version relevant to the OS you are using.                         
                      </p>
                      <p><img src={install_git} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>You can go through the setup by pressing 'Next' on each of the steps. The default options are adequate in the scope of this bootcamp.</p>
                      <p>After the installation has complete, launch GitBash for the first time. A terminal window similar to the Windows Command Prompt will open. This confirms that GitBash has downloaded properly.</p>
                      <p>
                        <figure>
                          <img src={prompt} className='image center' alt='Terminal for Git' />
                          <figcaption>GitBash command line interface</figcaption>
                        </figure>
                      </p>
                    </div>
                  </section>
                </p>
              </section>
              <section>
                <h2>1.3 Clone from GitHub.</h2>
                <p>
                  <section className="list-step">
                    <div className="item-list">
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
                      <p><img src={install_git} className='image center' alt='Installation of Git for Windows' /></p>
                      <p>In the top left of the GitHub page of the repo is the fork button, press it to make a copy on your account.</p>
                      <p>
                        <span className='name-item-list'>D</span>
                        Now that a fork has been created on your own GitHub account, open the GitBash console by searching 'GitBash'.                      </p>
                      <p><img src={gitbash_windows} className='image center' alt='Gitbash in VS' /></p>
                      <p>To generate an RSA key of size 4096 bits with your email as the comment, type the following command into the GitBash terminal:
                      <SyntaxHighlighter language="bash">
                        {command_line_1}
                      </SyntaxHighlighter>
                      </p>
                      <p>Replace the 'your.email' with your own CGI email address, the same used to create the GitHub account.</p>
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
                      <p>Replace the 'your.name' portion with your own username. If unsure of what your username is, scroll up and locate where GitBash stored your key under <i>"Your identification has been saved in /c/Users/your.name/.ssh/id_rsa"</i></p>
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
            </div>
          </div>
          <CompleteCheck step="step1" />
        </div>
      </div>
    );
  }
}

export default Step1;