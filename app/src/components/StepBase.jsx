import React from "react";
import Cookies from 'universal-cookie';

class StepBase extends React.Component {
    constructor(props, step) {
        super(props);
        const cookies = new Cookies();
        var my_progression = cookies.get('myProgression', { path: '/' });
        this.step = step;
        this.state = { step: false };

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

        var stepObject = {};
        stepObject[this.step] = event.target.checked;
        this.setState(stepObject);

        var my_new_progression = { ...my_progression, ...stepObject }

        cookies.set('myProgression', my_new_progression, { path: '/' })

        window.location.reload(false);
    }
}

export default StepBase;