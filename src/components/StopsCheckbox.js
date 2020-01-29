import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class StopsCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('stopsslider').checked;

        if (checked) {
            document.getElementById('stops').style.display = 'none';
            document.getElementById('stopsbp').style.display = 'block';
        } else {
            document.getElementById('stops').style.display = 'block';
            document.getElementById('stopsbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='stopsslider' slider onClick={this.handleClick}/>
    }
}