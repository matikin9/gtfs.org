import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class TransfersCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('transfersslider').checked;

        if (checked) {
            document.getElementById('transfers').style.display = 'none';
            document.getElementById('transfersbp').style.display = 'block';
        } else {
            document.getElementById('transfers').style.display = 'block';
            document.getElementById('transfersbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='transfersslider' slider onClick={this.handleClick}/>
    }
}

