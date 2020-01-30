import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class CalendarDatesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('calendardatesslider').checked;

        if (checked) {
            document.getElementById('calendardates').style.display = 'none';
            document.getElementById('calendardatesbp').style.display = 'block';
        } else {
            document.getElementById('calendardates').style.display = 'block';
            document.getElementById('calendardatesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='calendardatesslider' slider onClick={this.handleClick}/>
    }
}

