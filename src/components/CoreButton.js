import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";

var countCore = 0;
var selector = {
    "attributions": 0,
    "shapes": 0,
    "fares": 0,
    "frequencies": 0,
    "transfers": 0,
    "pathways": 0,
    "levels": 0,
    "feedinfo": 0,
    "translations": 0,
};

function extendStops(extensions) {
    var stopsContent = $(#stops)
}

function updateDisplay() {
    for (var x in selector) {
        if (selector[x] == 1) {
            $('#' + x).show();
        } else {
            $('#' + x).hide();
        }
    }
    if (selector['pathways'] == 1) {
        extendStops('pathways')
    }
    if (selector['translations'] == 1) {
        selector.feedinfo = 1
        updateDisplay()
    }
    if (selector['levels'] == 1) {
        selector.stops = 0
        extendStops('levels')
    }
}

export default class CoreButton extends React.Component {

    handleClick = () => {
        countCore += 1;
        var coreSpecification = document.getElementById('core');
        var extensions = document.getElementById('extensions');

        if (countCore % 2 == 1) {
            // what to do if we click 'Only show Core specification" ?
            document.getElementById('corebutton').innerHTML = 'Show all extensions';
            document.getElementById('attributionsbutton').innerHTML = 'Show GTFS-Attributions';
            document.getElementById('shapesbutton').innerHTML = 'Show GTFS-Shapes';
            document.getElementById('faresbutton').innerHTML = 'Show GTFS-Fares';
            document.getElementById('frequenciesbutton').innerHTML = 'Show GTFS-Frequencies';
            document.getElementById('transfersbutton').innerHTML = 'Show GTFS-Transfers';
            document.getElementById('pathwaysbutton').innerHTML = 'Show GTFS-Pathways';
            document.getElementById('levelsbutton').innerHTML = 'Show GTFS-Levels';
            document.getElementById('feedinfobutton').innerHTML = 'Show GTFS-Feed_info';
            document.getElementById('translationsbutton').innerHTML = 'Show GTFS-Translations';
            $('.extensions').hide();

        } else {
            // what to do if we click show all extensions ?
            document.getElementById('corebutton').innerHTML = 'Only show Core Specifications'
            document.getElementById('attributionsbutton').innerHTML = 'Hide GTFS-Attributions';
            document.getElementById('shapesbutton').innerHTML = 'Hide GTFS-Shapes';
            document.getElementById('faresbutton').innerHTML = 'Hide GTFS-Fares';
            document.getElementById('frequenciesbutton').innerHTML = 'Hide GTFS-Frequencies';
            document.getElementById('transfersbutton').innerHTML = 'Hide GTFS-Transfers';
            document.getElementById('pathwaysbutton').innerHTML = 'Hide GTFS-Pathways';
            document.getElementById('levelsbutton').innerHTML = 'Hide GTFS-Levels';
            document.getElementById('feedinfobutton').innerHTML = 'Hide GTFS-Feed_info';
            document.getElementById('translationsbutton').innerHTML = 'Hide GTFS-Translations';
            $('.extensions').show();
        }
    }

    render() {
        return <Button id="corebutton" fluid onClick={this.handleClick} color='blue'>Only show Core
            Specifications</Button>
    }
}

export {selector, updateDisplay};
