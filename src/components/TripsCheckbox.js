import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class TripsCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('tripsslider').checked;

        if (checked) {
            document.getElementById('trips').style.display = 'none';
            document.getElementById('tripsbp').style.display = 'block';
        } else {
            document.getElementById('trips').style.display = 'block';
            document.getElementById('tripsbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='tripsslider' slider onClick={this.handleClick}/>
    }
}
