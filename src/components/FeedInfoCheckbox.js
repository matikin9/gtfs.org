import React from 'react'
import {Checkbox} from 'semantic-ui-react'

export default class FeedInfoCheckbox extends React.Component {

    handleClick = () => {
        var checked = document.getElementById('feedinfoslider').checked;

        if (checked) {
            document.getElementById('feedinfo').style.display = 'none';
            document.getElementById('feedinfobp').style.display = 'block';
        } else {
            document.getElementById('feedinfo').style.display = 'block';
            document.getElementById('feedinfobp').style.display = 'none';
        }
    }

    render() {
        return <Checkbox id='feedinfoslider' slider onClick={this.handleClick}/>
    }
}

