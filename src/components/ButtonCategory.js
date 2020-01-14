import React from "react";

export default class Button extends React.Component {

    handleChange = () => {
        var x = document.getElementById("warningCategories");
        for (var i = 0; i < x.options.length; i++) {
            if (document.getElementById(x.options[i].value).style.display == 'block') {
                document.getElementById(x.options[i].value).style.display = 'none';
            }
        }

        for (var i = 0; i < x.options.length; i++) {

            if (x.options[i].selected == true) {
                document.getElementById(x.options[i].value).style.display = 'block';
            }
        }
    }

    render() {

        return <select onChange={this.handleChange} id="warningCategories">
            <option value="blank" disabled selected> Categories</option>
            <option value="fares">Fares</option>
            <option value="routes-duplicate">Routes</option>
            <option value="frequencies">Frequencies</option>
            <option value="service">Service date and times</option>
            <option value="shapes">Shapes</option>
            <option value="stops">Stop and stations</option>
            <option value="time">Time</option>
            <option value="transfers">Transfers</option>
            <option value="trips">Trips</option>
        </select>

    }
}
