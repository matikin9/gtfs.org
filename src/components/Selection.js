import React from "react";

export default class Selection extends React.Component {

    handleChange = () => {
        var x = document.getElementById("multiselect-specification");
        var selectedElements = []

        // get selected elements in <select> item from documentation/index.md

        for (var i = 0; i < x.options.length; i++) {

            if (x.options[i].selected == true) {
                selectedElements.push(x.options[i].value);
                document.getElementById(x.options[i].value).style.display = "none";
            }

            // if element is select then display the related content:
            // if content is hidden: display it
            // else: continue display

            // reset all optional files to hidden
            // if (document.getElementById(x.options[i].value).style.display == 'block') {
            //     document.getElementById(x.options[i].value).style.display = 'none';
            // }
        }

        // if fare rule is selected, alert(fare attributes is required in this case) and display fare_attributes

        // if levels is selected AND pathways is not selected : then recommend to display pathways

        // if translation is selected and feed_info is not selected: display both and alert that feed_info was required therefore has been added to the generated documentation

        // if calendar only selected: adapt trips, same avec calendar_Dates, or both selected

    }

    render() {

        return <select id="multiselect-specification" onChange={this.handleChange} multiple searchable="Search here..">
            <option value="blank" disabled selected>Choose optional files (hold cmd or ctrl for multiple selection)
            </option>
            <option value="attributions">Attributions.txt</option>
            <option value="calendar">Calendar.txt (conditionally required)</option>
            <option value="calendar_d">Calendar_dates.txt (conditionally required)</option>
            <option value="fare_a">Fare_attributes.txt</option>
            <option value="fare_r">Fare_rules.txt</option>
            <option value="feed_info">Feed_info.txt</option>
            <option value="frequencies">Frequencies.txt</option>
            <option value="levels">Levels.txt</option>
            <option value="pathways">Pathways.txt</option>
            <option value="shapes">Shapes.txt</option>
            <option value="transfers">Transfers.txt</option>
            <option value="translations">Translations.txt</option>
        </select>

    }
}
