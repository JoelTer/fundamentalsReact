import React from "react";
import PropTypes from "prop-types";

const FirstApp = ( { greeting, subtitle } ) =>{

    // const object = { name: 'Joel', age: 23 };

    return (
        <div>
            <h1>{ greeting }</h1>
            {/* <pre>{ JSON.stringify(object, null, 3) }</pre> */}
            <p>{ subtitle }</p>
        </div>
    );
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    subtitle: 'I am subtitle'
}

export default FirstApp;

// = 'Hello React World'