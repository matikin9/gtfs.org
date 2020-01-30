import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class FareRulesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('farerulesslider').checked;

        if (checked) {
            document.getElementById('farerules').style.display = 'none';
            document.getElementById('farerulesbp').style.display = 'block';
        } else {
            document.getElementById('farerules').style.display = 'block';
            document.getElementById('farerulesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='farerulesslider' slider onClick={this.handleClick}/>
    }
}



