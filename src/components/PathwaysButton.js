import React from "react";
import {Button} from 'semantic-ui-react'

export default class PathwaysButton extends React.Component {
    handleClick = () => {
        var content = document.getElementById('pathways')
        if (content.style.display == 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }        // document.getElementById("multiselect-specification");
    }


    render() {
        return <button onClick={this.handleClick} className="ui button">GTFS-Ticketing</button>
    }
}
