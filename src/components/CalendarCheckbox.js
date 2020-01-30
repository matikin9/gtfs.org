import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class Calendarcheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('calendarslider').checked;

        if (checked) {
            document.getElementById('calendar').style.display = 'none';
            document.getElementById('calendarbp').style.display = 'block';
        } else {
            document.getElementById('calendar').style.display = 'block';
            document.getElementById('calendarbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='calendarslider' slider onClick={this.handleClick}/>
    }
}

