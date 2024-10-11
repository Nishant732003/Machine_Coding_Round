import React, { useState } from "react";

const Card = ({ title, task, setTask }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (clickedTitle) => {
    const taskList = task.filter((item) => item !== clickedTitle);
    setTask(taskList);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    const updatedTasks = task.map((item) => (item === title ? newTitle : item));
    setTask(updatedTasks);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(title);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={newTitle} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>{title}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(title)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Card;
