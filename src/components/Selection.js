import React from "react";
import $ from 'jquery';
export default class Selection extends React.Component {

    handleChange = () => {
        var x = document.getElementById("multiselect-specification");
        var selectedElements = [];

        // get selected elements in <select> item from documentation/index.md

        for (var i = 0; i < x.options.length; i++) {

            if (x.options[i].selected == true) {
                selectedElements.push(x.options[i].value);
            }
        }

        if (selectedElements.includes('levels')) {
            var doc = document.getElementById("stopsspeclevel");
            // if (doc.style.display === "block") {
            doc.style.display = 'block';
            document.getElementById("stopsspec").style.display = 'none';


            // }
        }

        if (selectedElements.includes('calendar') & selectedElements.includes('calendar_d')) {
            document.getElementById('trips').style.display = 'block';
            // document.getElementById('trips_calendar_dates').style.display = 'none';
            document.getElementById('trips_calendar').style.display = 'none';
            alert('you selected both calendar and calendar dates');
        } else if (selectedElements.includes('calendar') & !(selectedElements.includes('calendar_d'))) {
            document.getElementById('trips').style.display = 'none';
            // document.getElementById('trips_calendar_dates').style.display = 'none';
            document.getElementById('trips_calendar').style.display = 'block';
            alert('you only selected calendar');
        } else if (!(selectedElements.includes('calendar')) & selectedElements.includes('calendar_d')) {
            document.getElementById('trips').style.display = 'none';
            document.getElementById('trips_calendar_dates').style.display = 'block';
            // document.getElementById('trips_calendar').style.display = 'none';
            alert('you only selected calendar dates');
        }

        if (selectedElements.includes('translations')) {
            document.getElementById('feed_info').style.display = 'block';
            alert('translations requires feed_info.txt');
        }

        if (selectedElements.includes('levels')) {
            alert('levels.txt is recommended to be used in conjunction with pathways');
            alert('levels affect stops.txt file also');
            // document.getElementById("testagency").style.display = 'none';
            // document.getElementById('pathways').style.display = 'block';
            // document.getElementById('stops_level').style.display = 'block';
            // document.getElementById('testagency').style.display = 'none';
            // document.getElementById('stops').style.display = 'none';
        }

        if (!(selectedElements.includes('fare_a')) & selectedElements.includes('fare_r')) {
            document.getElementById('fare_r').style.display = 'block';
            alert('fare_rules requires fare_attributes to be added to the spec');
        }
    }

    // to be updated


    render() {

        return <div class="button dropdown"><select id="multiselect-specification" onChange={this.handleChange}
                                                    multiple>
            <option disabled>Choose optional files (hold cmd or ctrl for multiple selection)
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
        </div>
    }
}