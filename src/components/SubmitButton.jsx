import React from "react";

function SubmitButton(props) {
    return (
        <button type="submit">
            {props.isRegistered ? "Login" : "Register"}
        </button>
    );
}
export default SubmitButton;