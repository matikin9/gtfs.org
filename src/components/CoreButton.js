import React from "react";
import {Button} from 'semantic-ui-react'

var countCore = 0;
export default class CoreButton extends React.Component {
    handleClick = () => {
        // document.getElementById("multiselect-specification");
        countCore += 1
        // alert(countCore);
        if (countCore % 2 == 0) {
            document.getElementById('corebutton').innerHTML = 'Show Core Specification';
        } else {
            document.getElementById('corebutton').innerHTML = 'Hide Core Specification';
        }

        var requiredFiles = document.getElementById('requiredFiles')
        if (requiredFiles.style.display == 'block') {
            requiredFiles.style.display = 'none'
        } else {
            requiredFiles.style.display = 'block'
        }
    }

    render() {
        return <Button id="corebutton" fluid onClick={this.handleClick} color='blue'>Show Core Specification</Button>
    }
}

