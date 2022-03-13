import initialData from "./initial-data";
import Column from "./Column";
import React from "react";
import {DragDropContext} from "react-beautiful-dnd";

const App = (props) => {
  let state = initialData;
  let onDragEnd = result => {
    //TODO: reorder our column
  };

  return (state.columnOrder.map((columnId) => {
    let column = state.columns[columnId];
    let tasks = state.columns[columnId].taskIds.map((taskId) => state.tasks[taskId]);
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Column column={column} tasks={tasks}/>
      </DragDropContext>
    );
  })
  )};

export default App;
