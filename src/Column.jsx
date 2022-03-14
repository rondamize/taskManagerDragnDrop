import classes from "./style.module.css";
import Task from "./Task";
import {Droppable} from "react-beautiful-dnd";

const Column = (props) => {
    let taskItems = props.tasks.map((t,index) => <Task key={t.id} task={t} index={index}/>);
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{props.column.title}</h3>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <div className={snapshot.isDraggingOver ? classes.taskListDraggingOver: classes.taskList} ref={provided.innerRef}
                         isDraggingOver={snapshot.isDraggingOver}{...provided.droppableProps}>
                        {taskItems}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;

