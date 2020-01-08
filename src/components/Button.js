import React from "react";
import ReactDOM from "react";
import ReactMarkdown from 'react-markdown';

import ReactMd from 'react-md-file';

// import ReactMd from 'react-md-file';
// import parseMD from 'parse-md';

// import * as RNFS from 'react-native-fs';

// const fileContents = RNFS.readFile('/Users/lionel/IdeaProjects/gtfs.org/src/pages/en/index.md', 'utf8')
// const { metadata, content } = parseMD(fileContents)


var showdown = require('showdown'),
    converter = new showdown.Converter(),
    textToConvert = 'text',
    convertedText = converter.makeHtml(textToConvert);

export default class Button extends React.Component {


    handleClick = () => {
        var x = document.getElementById("documentation");
        var selectedValues = [];

        for (var i = 0; i < x.options.length; i++) {
            if (x.options[i].selected == true) {
                selectedValues.push(x.options[i].value);
            }
        }

        for (var i = 0; i < selectedValues.length; i++) {
            document.getElementById(selectedValues[i]).style.display = 'block';
        }

    }

    // }

    render() {
        return <button onClick={this.handleClick}>Generate Specification with selected extensions</button>
    }
}

