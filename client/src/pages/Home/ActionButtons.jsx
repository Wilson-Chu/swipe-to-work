import React from "react";

const ActionButtons = function (props) {
  return (
    <div className="action-buttons">
      <button type="button" onClick={props.nextJob}>
        Pass
      </button>
      <button type="button">
        Random!
      </button>
      <button type="button">
        Save
      </button>
    </div>
  )
}

export default ActionButtons;