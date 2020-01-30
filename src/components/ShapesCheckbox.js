import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class ShapesCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('shapesslider').checked;

        if (checked) {
            document.getElementById('shapes').style.display = 'none';
            document.getElementById('shapesbp').style.display = 'block';
        } else {
            document.getElementById('shapes').style.display = 'block';
            document.getElementById('shapesbp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='shapesslider' slider onClick={this.handleClick}/>
    }
}

