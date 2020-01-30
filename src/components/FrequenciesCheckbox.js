import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class FrequenciesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('frequenciesslider').checked;

        if (checked) {
            document.getElementById('frequencies').style.display = 'none';
            document.getElementById('frequenciesbp').style.display = 'block';
        } else {
            document.getElementById('frequencies').style.display = 'block';
            document.getElementById('frequenciesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='frequenciesslider' slider onClick={this.handleClick}/>
    }
}