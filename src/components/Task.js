import React from "react";

function Task({text, category, onDeleteTask}) {
  // eslint-disable-next-line 
  function handleClick(){
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">
        X
        </button>
    </div>
  );
}

export default Task;
