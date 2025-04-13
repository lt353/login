import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

function Form(props) {
    return (
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegistered && <Input type="password" placeholder="Confirm Password" />}
            <SubmitButton isRegistered={props.isRegistered} />
        </form>
    );
}
export default Form;