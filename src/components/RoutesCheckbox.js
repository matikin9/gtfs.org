import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class RoutesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('routesslider').checked;

        if (checked) {
            document.getElementById('routes').style.display = 'none';
            document.getElementById('routesbp').style.display = 'block';
        } else {
            document.getElementById('routes').style.display = 'block';
            document.getElementById('routesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='routesslider' slider onClick={this.handleClick}/>
    }
}
