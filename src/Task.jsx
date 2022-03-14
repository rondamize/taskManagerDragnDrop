import classes from "./style.module.css";
import {Draggable} from "react-beautiful-dnd";

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className={snapshot.isDragging ? classes.taskItemIsDragging:classes.taskItem}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                >
                    {props.task.content}
                </div>
            )}
        </Draggable>
    );
};

export default Task;

