import React from "react";
export default class Button extends React.Component {

    handleChange = () => {
        var x = document.getElementById("multiselect-specification");

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
        //
        // for (var i = 0; i < x.options.length; i++) {
        //     if (document.getElementById(x.options[i].value).style.display == 'block') {
        //         document.getElementById(x.options[i].value).style.display = 'none';
        //     }
        // }
        //
        // for (var i = 0; i < x.options.length; i++) {
        //
        //     if (x.options[i].selected == true) {
        //         document.getElementById(x.options[i].value).style.display = 'block';
        //     }
        // }
    }

    render() {

        return <select id="multiselect-specification" onChange={this.handleChange} multiple searchable="Search here..">
            <option value="blank" disabled selected>Choose extensions (hold cmd or ctrl for multiple selection)</option>
            <option value="attributions">Attributions.txt</option>
            <option value="calendar">Calendar.txt</option>
            <option value="calendar_d">Calendar_dates.txt</option>
            <option value="fare_a">Fare_attributes.txt</option>
            <option value="fare_r">Fare_rules.txt</option>
            <option value="levels">Levels.txt</option>
            <option value="pathways">Pathways.txt</option>
            <option value="shapes">Shapes.txt</option>
            <option value="transfers">Transfers.txt</option>
        </select>

    }
}
