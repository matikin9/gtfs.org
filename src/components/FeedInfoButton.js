import React from "react";
import {Button} from 'semantic-ui-react'

export default class FeedInfoButton extends React.Component {
    handleClick = () => {
        var content = document.getElementById('feedinfo')
        if (content.style.display == 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }
    }


    render() {
        return <Button onClick={this.handleClick} className="ui button">Show extension 4</Button>
    }
}
