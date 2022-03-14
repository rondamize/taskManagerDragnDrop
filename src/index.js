import React from 'react';
import ReactDOM from 'react-dom';
import initialData from "./initial-data";
import Column from "./Column";
import {DragDropContext} from "react-beautiful-dnd";
import classes from "./style.module.css";

class App extends React.Component {
    state = initialData;

    onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const end = this.state.columns[destination.droppableId];

        if (start === end) {
            const column = this.state.columns[source.droppableId];
            const newTaskIds = Array.from(column.taskIds);
            newTaskIds.splice(source.index,1);
            newTaskIds.splice(destination.index,0,draggableId);

            const newColumn = {
                ...column,
                taskIds: newTaskIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };

            this.setState(newState);
            return;
        }
        //debugger;
        let newStartTaskIds = Array.from(start.taskIds);
        newStartTaskIds.splice(source.index,  1);
        const newStartColumn = {
            ...start,
            taskIds: newStartTaskIds
        };

        let newEndTaskIds = Array.from(end.taskIds);
        newEndTaskIds.splice(destination.index,  0, draggableId);
        const newEndColumn = {
            ...end,
            taskIds: newEndTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStartColumn.id]: newStartColumn,
                [newEndColumn.id]: newEndColumn
            }
        };
        this.setState(newState);
    };

    render() {
        //debugger;
        return (
          <DragDropContext onDragEnd={this.onDragEnd}>
              <div className={classes.globalContainer}>
                  {this.state.columnOrder.map(columnId =>{
                      const column = this.state.columns[columnId];
                      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                      return <Column key={column.id} column={column} tasks={tasks} />;
                  })}
              </div>
          </DragDropContext>
        );
    }

}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
