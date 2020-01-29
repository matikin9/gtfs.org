import React from "react";
export default class Selection extends React.Component {

    handleChange = () => {
        var x = document.getElementById("multiselect-specification");
        var selectedElements = [];
        var pList = ["stopsspeclevel", "tripsspeccalendar", "tripscalendardates", "calendarspec", "calendardatesspec", "attributionsspec", "fareattributesspec", "fareattributes", "farerulesspec", "farerules", "feedinfosspec", "feedinfo", "frequenciesspec", "frequencies", "levelspec", "pathwaysspec", "shapesspec", "shapes", "transfersspec", "transfers", "translationsspec"];

        // get selected elements in <select> item from documentation/index.md

        for (var i = 0; i < x.options.length; i++) {
            if (x.options[i].selected == true) {
                selectedElements.push(x.options[i].value);
            }
        }

        if (selectedElements.includes('levels')) {
            document.getElementById('stopslevel').style.display = 'block';
            document.getElementById('stops').style.display = 'none';
            alert('you chose to generate a documentation with only "levels.txt" as an optional file');
        }


        //
        // for (var i = 0; i < pList.length; i++) {
        //     document.getElementById(pList[i]).style.display = "none";
        // }


        // for (var i = 0; i < x.options.length; i++) {
        //     if (x.options[i].selected == true) {
        //         alert(pList[i]);
        //         document.getElementById(pList[i]).style.display = "block";
        //     }
        // }
        //
        // if (selectedElements.includes('levels')) {
        //     document.getElementById("stopsspec").style.display = 'none';
        //     document.getElementById("stopsspeclevel").style.display = 'block';
        //     document.getElementById("pathwaysspec").style.display = 'block';
        //     alert('levels.txt is recommended to be used in conjunction with pathways, we added this file to the documentation');
        //     // }
        // }
        //
        // if (!(selectedElements.includes('fare_a')) & selectedElements.includes('fare_r')) {
        //     document.getElementById('fareattributesspec').style.display = 'block';
        //     document.getElementById('fareattributes').style.display = 'block';
        //     alert('fare_rules.txt requires fare_attributes.txt to be added to the spec');
        // }
        //
        // if (selectedElements.includes('translations')) {
        //     document.getElementById('feedinfospec').style.display = 'block';
        //     document.getElementById('feedinfo').style.display = 'block';
        //     alert('translations requires feed_info.txt');
        // }
        //
        // if (selectedElements.includes('calendar') & selectedElements.includes('calendar_d')) {
        //     document.getElementById('tripsspec').style.display = 'block';
        //     document.getElementById('tripscalendardates').style.display = 'none';
        //     document.getElementById('tripsspeccalendar').style.display = 'none';
        //     alert('you selected both calendar and calendar dates');
        //
        // } else if (selectedElements.includes('calendar') & !(selectedElements.includes('calendar_d'))) {
        //     document.getElementById('tripsspec').style.display = 'none';
        //     document.getElementById('tripscalendardates').style.display = 'none';
        //     document.getElementById('tripsspeccalendar').style.display = 'block';
        //     alert('you only selected calendar');
        //
        // } else if (!(selectedElements.includes('calendar')) & selectedElements.includes('calendar_d')) {
        //     document.getElementById('tripsspec').style.display = 'none';
        //     document.getElementById('tripscalendardates').style.display = 'block';
        //     document.getElementById('tripsspeccalendar').style.display = 'none';
        //     alert('you only selected calendar dates');
        // }
        //

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