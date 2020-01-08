import React from "react";
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
    render() {
        return <button onClick={this.handleClick}>Generate Specification with selected extensions</button>
    }
}

