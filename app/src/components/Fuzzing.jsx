import React from "react";
import StepBase from './StepBase';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CompleteCheck from './CompleteCheck';
import fuzz1 from './images/fuzz1.png'
import fuzz2 from './images/fuzz2.png'
import fuzz3 from './images/fuzz3.png'
import fuzz4 from './images/fuzz4.png'
import fuzz5 from './images/fuzz5.png'
import fuzz6 from './images/fuzz6.png'
import fuzz7 from './images/fuzz7.png'
import fuzz8 from './images/fuzz8.png'

class Fuzzing extends StepBase {
  constructor(props) {
    super(props, 'fuzzing');
  }

  render() {
    const code_1 = `#include <stddef.h>
#include <stdint.h>
#include "include/crypto/puniycode.h"
int LLVMFuzzerTestOneInput(const uint8_t *data,size_t size) {
  unsigned int bar[32];
  unsigned int x = 32;
  ossl_punycode_decode((const char*)data,size,bar,&x);
  return 0;
}`
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevSecOps Advanced Challenge: Fuzzing, Automated Pentesting</h2>
              <section>
              <h3>So, at this point you’ve seen DAST, SAST, and other security automated tools.</h3>
              <ul>
                <li>What general security principle(s) can you associate with the choice of having several security tools in the same DevOps environment targeting the same solution under development, which would apply to other information systems?</li>
                <li>One of the end goal of this section is to expose you to the main concepts, and eventually be able to distinguish it from SonarQube, Zap, Trivy and Unit tests.</li>
              </ul>
              <h3>A fuzzer is yet another (security) tool, and it can fit in the already known category, DAST.</h3>
              <p>
                It exists since the 90’s and has been used to discover vulnerabilities, both with attack and protection in mind, but it also has been used having robust applications, discovering bugs that other techniques and tools would not discover.
              </p>
              <p><img src={fuzz1} className='image center' alt='The result of your success' /></p>
              <p>
                Many improvements have been made since the 90’s, including the recent work on guided fuzzing, coverage guided mutation-based fuzzing, and other fancy names. What you should keep in mind at this stage is that we have tools that moved from random inputs to inputs that are generated and mutated depending on the application under test responses. There is a variety of clever way to do it, in automated ways, and selecting the most relevant inputs. Also, we now talk about security-focused fuzzer instead of mixing the robustness/quality tests with those fuzzing techniques.
              </p>
              <p><img src={fuzz2} className='image center' alt='The result of your success' /></p>
              <p>
                There are many tools, and some open source tools enable bundling together “fuzzers” targeting different development and build environment (C/C++, Java, Rust, GO, etc.). We are going to start with a tool called cifuzz, then usine another, Jazzer, and finally libFuzzer, a library for coverage-guided fuzz testing. But first, let’s gain som famiiliarity with the core concepts of fuzzing. Start by reading the section “2.1 Fuzzing & Fuzz Testing”, and the few formal definitions in this academic article: <a href="https://koasas.kaist.ac.kr/bitstream/10203/289589/1/111726.pdf">https://koasas.kaist.ac.kr/bitstream/10203/289589/1/111726.pdf</a>
              </p>
              <h3>The next document</h3>
              <p>
                is written by John Neystadt from Microsoft, who wrote a great summary that should help you put it all together, and help you answer some of the questions to come in this introduction to fuzzing in the DevOps - CI/CD context. You can go through it quickly and come back later, even at the very end of the few examples we will go through.
              </p>
              <p>
                It is entitled Automated Penetration Testing with White-Box Fuzzing and should answer your remaining doubts about fuzzing as a must-have in the DevSecOps arsenal: <a href="https://learn.microsoft.com/en-us/previous-versions/software-testing/cc162782(v=msdn.10)?redirectedfrom=MSDN">https://learn.microsoft.com/en-us/previous-versions/software-testing/cc162782(v=msdn.10)?redirectedfrom=MSDN</a>
              </p>
              <h3>There are different techniques: write down some you now understand as belonging to different categories.</h3>
              <ol>
                <li>What can you infer about the possible different use cases of fuzzing in a development cycle, based on your current understanding of fuzzing?</li>
                <li>What are the parameters in your solution under development to consider to properly apply fuzz testing?</li>
              </ol>
              <h3>Go to <a href="https://docs.code-intelligence.com/cifuzz-cli">https://docs.code-intelligence.com/cifuzz-cli</a></h3>
              <p>This project is built upon oss-fuzz, and aims at making it easier to integrate fuzzing in a DevOps pipeline. 
                Focus on a Java build target, and follow this example provided in the main cifuzz repository, <a href="https://docs.code-intelligence.com/cli-quick-start-java">https://docs.code-intelligence.com/cli-quick-start-java</a></p>
              <ol>
                <li>Clone the cifuzz repository, <a href="https://github.com/CodeIntelligenceTesting/cifuzz.git">https://github.com/CodeIntelligenceTesting/cifuzz.git</a>, on your VM. It will be useful to run one of its examples.</li>
                <li>Install and build cifuzz on your VM. To do that, you can use this simple command (in the readme.md of the repository):<br/>
                  <code>sh -c "$(curl -fsSL https://raw.githubusercontent.com/CodeIntelligenceTesting/cifuzz/main/install.sh)"</code>
                  <br/>Add, as instructed, the cifuzz/bin to your PATH environment variable.
                </li>
                <li>Then, go through the example locally (forget for now the pipeline), look at the fuzz target example (spoiler: not a real world test case, simplified, but still a good example). Try to understand the vulnerability here, and wha tis its location in the code .</li>
                <li>Check the output from the fuzz test:<br/>
                  <code>fuzz finding &lt;name_of_your_fuzz_test&gt;</code>
                </li>
                <li>And finally:<br/>
                  <code>cifuzz coverage &lt;name_of_your_fuzz_test&gt; --format=html</code>
                </li>
                <li>At last, try to understand and explain what "code coverage" means in the context of fuzzing and why is it valuable.</li>
                <li>And by the way, cifuzz has an IDE integration, including Visual Code… which is obviously interesting to integrate in a developer day to day work:<br/>
                  <code>cifuzz integrate cmake git vscode</code>
                  <br/>And read the output to get the information and check for the files created in the project / example repository. 
                  Open it in Visual Code, if you did not already, and look at the bottom bar.
                </li>
              </ol>
              <h3>Now we are quickly going to explore another fuzzer, dedicated to Java and JVM targets.</h3>
              
              <p>Actually the one that was leveraged by cifuzz which, as oss-fuzz (Google open-sourced fuzzer framework, dedicated to help open-source projects), is a powerful framework that integrates several fuzzers in the backend, to have a similar process and adapt to different build and programs targets/development&rsquo;s environments.</p>

              <p>This fuzz engine is called Jazzer: <a href="https://github.com/CodeIntelligenceTesting/jazzer">https://github.com/CodeIntelligenceTesting/jazzer</a></p>

              <ol>
                  <li>Clone it locally again (you will not have to modify the code base).</li>
                  <li>Then, going through the readme.md file:
                      <ol>
                          <li>read first the command:<br/>
                              <code>docker run -it cifuzz/jazzer-autofuzz <br/>
                com.mikesamuel:json-sanitizer:1.2.0 <br/>
                com.google.json.JsonSanitizer::sanitize <br/>
                --autofuzz_ignore=java.lang.ArrayIndexOutOfBoundsException</code>
                              <p>The explanation is already well written to understand each part of this command--and the overall documentation as well if you wish to go deeper.</p>
                              <p>The part that is interesting here for the DevSecOps context, is the Jazzer's Autofuzz mode.</p>
                              <p>What it does is that it will build by itself (auto…fuzz), in the Java&rsquo;s context that Jazzer covers, fuzzing targets based on the codebase passed to it. Here, the example is a widely used Java library, json-sanitizer .</p>
                              <p>Several vulnerabilities have been discovered thanks to the use of Jazzer… And if you check the current version, you can see that this fuzzing applies to a vulnerable version, not the last one.</p>
                          </li>
                      </ol>
                  </li>
                  <li>Can you try to explain how this feature, autofuzz, is especially relevant to the DevSecOps context, elaborating a little bit? You should have a better idea once you go through the next step.</li>
              </ol>
              <h3>
                Let’s try to create a fuzz test case, or fuzz target, on our own.</h3>
                <ol>
                  <li>
                  <p>
                    Following our (little) experience of cifuzz we have now, we know a bit what a fuzz target or function target is.
                    We now want to apply our knowledge and check the relevance of fuzzing, but also what might be the challenges to integrate it in a DevOps cycle, and how could they be overcome (food for thought...).
                    So, we want a vulnerable application.
                    We choose OpenSSL: <a href="https://en.wikipedia.org/wiki/OpenSSL">https://en.wikipedia.org/wiki/OpenSSL</a>
                    We check at the vulnerabilities and find those recent ones: CVE-2022-3602 and CVE-2022-3786.
                    Looking at the openssl Gihtub repository, we go look at the commits history. Knowing that the version 3.0.6 is the vulnerable one, we start by looking at the commit history:
                    <p><img src={fuzz3} className='image center' alt='The result of your success' /></p>
                  </p>
                  <p>
                    We want to check the git difference between the commits 3.0.6 and 3.0.7 to identify the patch, and consequently the vulnerabilities.
                    <p><img src={fuzz4} className='image center' alt='The result of your success' /></p>
                    It is very interesting to us, as you can see tags include the versions…
                    So look for the version after the vulnerable one, 3.0.7:
                    <p><img src={fuzz5} className='image center' alt='The result of your success' /></p>
                  </p>
                  <p>
                    Now click on the commit hash id of the CVE-2022-3602 fix, on the right of the screen, and you should look at this:
                    <p><img src={fuzz6} className='image center' alt='The result of your success' /></p>
                  </p>
                  </li>
                  <li>
                <p>
                  From there, let’s try to replicate the vulnerability discovery with a fuzzer (not through a CVE database, already known, but based on fuzzing instrumentation and techniques).
                  I will be using as my fuzzer the library libFuzzer, part of the LLVM project (<a href="https://en.wikipedia.org/wiki/LLVM">https://en.wikipedia.org/wiki/LLVM</a>), because now I have to compile and run an application that was built with old tooling and build chains, so it felt like a pain to integrate the other tools, like cifuzz or clusterfuzzlite (it does not mean it is not possible, it is longer and require a deeper understanding of the C/C++ development environment and build process—you are welcome to try).
                  We can see the patch, and the test case implemented. It leads us to the vulnerable function.
                </p>
                <code>git clone https://github.com/openssl/openssl</code>
                <code>cd openssl</code><br/>
                <code>git checkout openssl-3.0.7</code><br/>
                <code>cd test</code><br/>
                <code>ls</code><br/>
                <code>grep -ir "punycode" </code><br/>
                <code>cd ../crypto/punycode.c</code>
                <p>ossl_punycode_decode() is the vulnerable function.</p>
                <p>We can go back to the fuzz test cass in punycode_test.c</p>
                <p>To reproduce vulnerabilities in openssl, they make it easy, use the ./Configure command and the parameter as the path, with a new folder we'll call "build". When we'll do make install it will install all the built files inside this folder. It's great to have multiple version of a software at different locations--and consequently, great for us to replicate tests on a vulnerable software version:</p>
                <code>./Configure --prefix=/home/advancedtoolsadmin/tmp_fuzz_test/openssl/build</code>
                <p>Then we'll set CFLAGS to define with the debugger gdb where to stop in the code--truth is I stumbled upon an error, googled my way to this and it worked and I still don't know exactly how to use it with my gdb. But it would be great to observe the finding of our fuzzer, so let's keep it in mind, even if we will not use it in our example.</p>
                <code>export CFLAGS="-ggdb -O0 -fsanitize=address,undefined"</code><br/>
                <code>make && make install</code>
                <p>It will take some time. You can check this as you wait for it to finish:</p>
                <p>Fuzzing Java to Find Log4j Vulnerability - CVE-2021-45046:</p>
                <p><a href="https://www.youtube.com/watch?v=kvREvOvSWt4">https://www.youtube.com/watch?v=kvREvOvSWt4</a></p>
                <p>Just a great resource in general on everything cybersec-related. It's always technical, made very accessible (if you follow the sequence of most videos), and goes through the vulnerability (actually 2…) you've heard about and saw during this bootcamp, log4j. That allows us to go back to fuzzing java programs.</p>
                <p>Now, your build finished. You can keep looking at this amazing youtuber, or get back on this track.</p>
                <code>cd build</code><br/>
                <code>ls</code><br/>
                <code>cd bin</code><br/>
                <code>ls</code>
                <p>…and now you can see it has the openssl binary.</p>
                <p>Ok, it builds.Now let's go back to the test folder.</p>
                <code> cd ../../test/</code>
                <p>Run the test case punycode_test (where we know the vulnerabilities are tested):</p>
                <code>./punycode_test</code>
                <p>And it runs all the test cases you can see in the output of your terminal</p>
                <p>Let's look at some more info on this binary to see if we can pass some parameters to it:</p>
                <code>./punycode_test -h</code><br/>
                <p>See the different modes.</p>
                <code>./punycode_test -list</code><br/>
                <p>Now ok there are 3 different test cases.</p>
                <p>So let's run one test:</p>
                <code>./punycode_test -test 2</code><br/>
                <p>Looks like we get nothing, and indeed the vulnerability is not present over here.</p>
                <code>./punycode_test -test 3</code><br/>
                <p>Same thing. Kind of expected. We are in the 3.0.7 version where the vulnerability was fixed (you can go through the github differences to observe in more detail the fix and so understand better the vulnerability).</p>
                <p>Now we're going to try it on the vulnerable function, found in 3.0.6. We will do a git clone as we did before, in a different folder so we don't get conficts or other weird entanglement in our results: </p>
                <code>git clone https://github.com/openssl/openssl openssl_vulnerable</code><br/>
                <p>Then we copy the test case from 3.0.7 to our vulnerable version (once we checkout to 3.0.6).</p>
                <code>cd openssl_vulnerable</code><br/>
                <code>git checkout openssl-3.0.6</code><br/>
                <p>To check if we are indeed in the vulnerable folder, we go to the crypto folder and open (vim) punycode.c and look et the particular function ossl_punycode_decode()</p>
                <code>vim crypto/punycode.c</code><br/>
                <p>Search for the function ossl_punycode_decode in your editor:</p>
                <p>Now to copy the test cases from the patched version to the vulnerable one so we can reuse the one to easily target the vulnerabilities we are interested in:</p>
                <code>cp -r ../openssl/test/* test</code><br/>
                <p>Then check and you'll see the test cases.</p>
                <p>Finally, we use again the Configure command to set the build for our vulnerable openssl repository:</p>
                <code>./Configure --prefix=/home/advancedtoolsadmin/tmp_fuzz_test/openssl_vulnerable/build</code><br/>
                <code>make && make install</code><br/>
                <p>Ok, let's go back to our video of the LiveOverFlow channel--why? because there's so much to learn from the process alone to understand the vulnerability and its impact, and the guy is great at making it understandable:</p>
                <p><a href="https://www.youtube.com/watch?v=kvREvOvSWt4">https://www.youtube.com/watch?v=kvREvOvSWt4</a></p>
                <p>Alright, here you are, build done. What is next? Let's run the punycode_test test case from the patched version on our vulnerable binary:</p>
                <code>cd test</code><br/>
                <code>./punycode_test</code><br/>
                <p>Oho!, look at the last line of our output… A segmentation fault…</p>
                <p>Let's run it again, test by test:</p>
                <code>
                ./punycode_test --test 1</code><br/>
                <p>Nothing, all good.</p>
                <code>
                ./punycode_test --test 2</code><br/>
                <p>Here is our seg fault</p>
                <code>
                ./punycode_test --test 3</code><br/>
                <p>And now we get more details in our output (it didn't run the first time because we hit the seg fault first):</p>
                <code>
                # ERROR: (bool) 'ossl_punycode_decode(in, strlen(in), buf, &bsize) == false' failed @ test/punycode_test.c:206<br/>
                # true<br/>
                # ERROR:  @ test/punycode_test.c:208<br/>
                # CRITICAL: buffer overrun detected!<br/>
                # <br/>
                # OPENSSL_TEST_RAND_ORDER=1675621237<br/>
                not ok 1 - test_puny_overrun<br/>
                </code>
                <p>Googling buffer overrun, we find a first definition:</p>
                <p><a href="https://learn.microsoft.com/en-us/windows/win32/secbp/avoiding-buffer-overruns">Security and Identity Best Practices for the Security APIs</a></p>
                <code>
                sudo apt install gdb<br/></code>
                <p>Now some quick gdb exploration:</p><code>
                gdb test/punycode_test<br/>
                run -test<br/></code>
                <p>You can see where the seg fault happens (what is the function called). And it is 0x0000555555605bbf in ossl_a2ulabel () (likely you won't have the same memory address here)</p>
                <p>Now you could debug, understand the vulnerability and work on a fix / patch. If you know your way with gdb (or a variant), it is a great way to get to know better the vulnerabilities at a low-level, and how to fix them.</p>
                <p>Now let's build a fuzz target on the vulnerable code, taking the easiest path, calling our vulnerable function (check again cifuzz documentation if in doubt):
                <SyntaxHighlighter language="c">
                  {code_1}
                </SyntaxHighlighter></p>
                <p>In the end, here is what we obtain, which is exactly the vulnerabilities that are now known as CVE-2022-3602 and CVE-2022-3786.</p>
                <code>clang -Iinclude -fsanitize=fuzzer,address,undefined test/fuzz_punycode_decode.c -o fuzz_punycode_decode ./build/lib64/libcrypto.a ./build/lib64/libssl.a</code>
                <p>Then run it:</p>
                <code>./fuzz_punycode_decode </code>
                <p>And, voilà.
                <p><img src={fuzz7} className='image center' alt='The result of your success' /></p>
                </p>
                <p>Take time, as for every previous run, to check and understand the output, the artifacts created as output of the fuzzing process and their content.</p>
                </li>
                <li>Go to the artifacts created by the successful fuzzing.
                <ul>
                  <li>This section was built following along with this video: <a href="https://www.youtube.com/watch?v=vhTuXph1dtY">https://www.youtube.com/watch?v=vhTuXph1dtY</a></li>
                </ul>
                </li>
              </ol>
              <h3>You now have seen most of the main components of fuzzing.</h3>
              <p>We will touch upon the topic of sanitizers to conclude, even if you already went through it.</p>
              <ol type="1">
                <li>Example of sanitizers in a C/C++ development environment, some that you actually already used in the previous tools are:
                  <ul>
                    <li>AddressSanitizer</li>
                    <li>MemorySanitizer</li>
                    <li>UndefinedBehaviorSanitizer</li>
                  </ul>
                </li>
                <li>You can read about them, but just know that they are powerful heuristics to discover specific categories / types of bugs and vulnerabilities. They are basically hooks added to your code, or the libraries linked to your code mostly, as in AddressSanitizer example.
                  <ul>
                    <li>AddressSanitizer is built around the malloc and free functions (responsible for most memory allocations) in the standard c library, and enable to detect when those functions are called if a call or an assigned portion in memory is in in or out of the logic applied by your code, or if it falls in an edge case that you might have no idea about (basically look up for buffer overflows, stack overflows, use after free, memory leaks, etc.).</li>
                  </ul>
                </li>
              </ol>
              <h3>A last important part that brings fuzzing to CI/CD pipelines</h3>
              <p>is the notion of continuous fuzzing (that builds on the previous notions we explored, especially guide-coverage fuzzing).</p>
              <p>Make a search with your favorite search engine and have a look to understand the implications.</p>
              <h5>Finally, what distinguish a fuzzer from SonarQube or tryvy in their output, and their role in a DevSecOps pipelines? How do they complement each others?</h5>
                <ul>
                  <li>Hint: focus on the output of the tools. Why are the fuzzer outputs not linking to a known vulnerability, with CVE identifiers and a CVSS scores?</li>
                  <li>How does it make fuzzer relevant to integrate in your CI/CD? Why might it bring value to it?</li>
                </ul>
              <h5>Also, once you have gone through some documents, articles or examples of the definition of fuzz target (see above), try to think what skills are actually required to add an efficient fuzzer in your DevSecOps environment.</h5>
                <ul>
                  <li>What do you think it add in terms of complexity in a developers’ team?</li>
                  <li>What are your thoughts about it? Is it worth it? How to actually have developers using it?</li>
                </ul>
                <h5>An important step to be efficient in applying fuzzing principles to your environments is to have a rough idea of the good use cases to take as fuzzing targets (although as always, do not limit yourself to this list, the mindset is more important here—not all code is equal, and worth spending time over):</h5>
                <p><img src={fuzz8} className='image center' alt='The result of your success' /></p>
                <ul>
                  <li>How relevant is a fuzzer integrated tool in the vulnerability discovery step, of the overall vulnerability management process? Again, think of the other tools linked to known CVE databases.</li>
                  <li>Try to think of some good business cases relevant to security, DevSecOps and Secure SDLC. Present them to your peers if you will.</li>
                </ul>
              </section>
            </div>
          </div>
          <CompleteCheck step="fuzzing" />
        </div>
      </div>
    );
  }
}

export default Fuzzing;