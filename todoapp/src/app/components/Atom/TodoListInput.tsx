"use client";

import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

const TodoListInput = () => {
  const [open, setOpen] = useState(false);

  const handleAddClick = () => {
    setOpen(true);
    console.log("todolistinput state:", open);
  };
  return (
    <div className="flex items-center">
      <Fab
        size="small"
        aria-label="add"
        sx={{
          backgroundColor: "red",
        }}
        onClick={handleAddClick}
      >
        <AddIcon />
      </Fab>
      <div className="ml-2">Add a task</div>
    </div>
  );
};

export default TodoListInput;
