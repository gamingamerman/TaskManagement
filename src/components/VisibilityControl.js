import React from "react";

export const VisibilityControl = props => {
    return (
        <div className="from-check">
            <input 
            type="checkbox" 
            className ="from-check-input"
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Show {props.description}
            </label>
        </div>
    )
}