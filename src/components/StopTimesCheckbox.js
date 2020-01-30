import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class StopTimesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('stoptimesslider').checked;

        if (checked) {
            document.getElementById('stoptimes').style.display = 'none';
            document.getElementById('stoptimesbp').style.display = 'block';
        } else {
            document.getElementById('stoptimes').style.display = 'block';
            document.getElementById('stoptimesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='stoptimesslider' slider onClick={this.handleClick}/>
    }
}

