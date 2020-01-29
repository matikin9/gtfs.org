import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class AgencyCheckBox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('agencyslider').checked;

        if (checked) {
            document.getElementById('agencyspec').style.display = 'none';
            document.getElementById('agencyspecbp').style.display = 'block';
        } else {
            document.getElementById('agencyspec').style.display = 'block';
            document.getElementById('agencyspecbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='agencyslider' slider onClick={this.handleClick}/>
    }
}