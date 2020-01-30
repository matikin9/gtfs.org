import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class CalendarDatesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('fareattributesslider').checked;

        if (checked) {
            document.getElementById('fareattributes').style.display = 'none';
            document.getElementById('fareattributesbp').style.display = 'block';
        } else {
            document.getElementById('fareattributes').style.display = 'block';
            document.getElementById('fareattributesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='fareattributesslider' slider onClick={this.handleClick}/>
    }
}

