import React from "react";
import {Button} from 'semantic-ui-react'

export default class AttributionButton extends React.Component {
    handleClick = () => {
    }        // document.getElementById("multiselect-specification");

    render() {
        return <Button onClick={this.handleClick} className="ui button">Show extension 1</Button>
    }
}

