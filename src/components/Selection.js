import React from "react";

export default class Selection extends React.Component {

    handleChange = () => {
        var x = document.getElementById("multiselect-specification");
        var selectedElements = []

        for (var i = 0; i < x.options.length; i++) {

            if (x.options[i].selected == true) {
                selectedElements.push(x.options[i].value)
            }

            if (document.getElementById(x.options[i].value).style.display == 'block') {
                document.getElementById(x.options[i].value).style.display = 'none';
            }
        }

        for (var i = 0; i < x.options.length; i++) {

            if (x.options[i].selected == true) {
                document.getElementById(x.options[i].value).style.display = 'block';
            }
        }

        if (selectedElements.indexOf("levels") > -1) {
            var table = document.getElementById("stops");
            var row = table.insertRow(-1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);

            cell0.innerHTML = " `level_id` ";
            cell1.innerHTML = "ID referencing `levels.level_id` ";
            cell2.innerHTML = "Optional";
            cell3.innerHTML = "Level of the location. The same level can be used by multiple unlinked stations.";
        }

        if (selectedElements.indexOf("fare_r") > -1) {
            var table = document.getElementById("stops");
            var row = table.insertRow(-1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);

            cell0.innerHTML = " `zone_id` ";
            cell1.innerHTML = "ID";
            cell2.innerHTML = "Conditionally Required";
            cell3.innerHTML = "Identifies the fare zone for a stop. This field is required if providing fare information using [fare_rules.txt](#fare_rulestxt), otherwise it is optional. If this record represents a station or station entrance, the `zone_id` is ignored.";
        }

        if ((selectedElements.indexOf("calendar") > -1) && (selectedElements.indexOf("calendar_d") > -1)) {
            document.getElementById("trips").style.display = 'block';
            // document.getElementById("trips_calendar").style.display = 'none';
            // document.getElementById("trips_calendar_dates").style.display = 'block';
            //
        }
        //
        // if ((selectedElements.indexOf("calendar") > -1) && (selectedElements.indexOf("calendar_d") <= -1)){
        //     alert("calendar selected and calendar date non selected")
        //     document.getElementById("trips_calendar_dates").style.display = 'none';
        //     document.getElementById("trips_calendar_d").style.display = 'none';
        //     document.getElementById("trips_calendar").style.display = 'block';
        // }
        //
        // if ((selectedElements.indexOf("calendar") <= -1) && (selectedElements.indexOf("calendar_d") > -1)){
        //     alert("calendar date selected and calendar non selected")
        //     document.getElementById("trips_calendar_dates").style.display = 'none';
        //     document.getElementById("trips_calendar").style.display = 'none';
        //     document.getElementById("trips_calendar_d").style.display = 'block';
        // }

        //
        // var table = document.getElementById("calendar_");
        // var row = table.insertRow(0);
        // var cell0 = row.insertCell(0);
        // var cell1 = row.insertCell(1);
        // var cell2 = row.insertCell(2);
        // var cell3 = row.insertCell(3);
        //
        // cell0.innerHTML = " service_id ";
        // cell1.innerHTML = "ID referencing `calendar.service_id`";
        // cell2.innerHTML = "Required";
        // cell3.innerHTML = "Identifies a set of dates when service is available for one or more routes.";
        //

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
        </select>

    }
}
// feed_info.txt
// frequencies.txt
