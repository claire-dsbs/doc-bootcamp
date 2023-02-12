import React from "react";
import StepBase from './StepBase';
import CompleteCheck from './CompleteCheck';

class CodeFormatting extends StepBase {
  constructor(props) {
    super(props, 'codeformatting');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row align-items-center my-12">
            <div className="col-lg-12">
              <h2 className="font-weight-light">DevOps Advanced Challenge: Integrate a Code-Formatting Pre-Commit Hook</h2>
              <section>
              <h3>Task: Use pre-commit hooks to format the app’s code and apply stylistic standards.</h3>
              <ol>
                <li>
                  If it isn’t already done, install <a href="https://pre-commit.com/">pre-commit</a> on your local system. Make sure you have the most recent Python version installed from the Python website. (<a href="https://www.python.org/downloads/">Download Python</a>)
                </li>
                <li>Create a new file named .pre-commit-config.yaml.</li>
                <li>On the pre-commit website, look for a hook called clang-format. Add it to your configuration file.</li>
                <li>Install the hook.</li>
                <li>Modify one of the java files (You can simply add a newline).</li>
                <li>Try to commit the java file.</li>
                <li>The commit should fail because of your newly-added hook.</li>
                <li>Look at the file you modified once again. You should notice some differences.</li>
              </ol>
              <h3>Food for thought:</h3>
              <p>Why does the commit fail? Did something change in the file after you tried committing it? How is a code formatter useful?</p>
              </section>
            </div>
          </div>
          <CompleteCheck step="codeformatting" />
        </div>
      </div>
    );
  }
}

export default CodeFormatting;