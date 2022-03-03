import React from "react";
function Input(props) {
    return (
        <input {...props} className={"" + props.className} />
    );
}

export default Input;