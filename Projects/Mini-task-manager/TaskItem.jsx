export default function TaskItem({task, onDelete}){ 
    // taking props 
    // (child component)
    return(
        <li>
            {task}

            <button onClick={onDelete}
            style={{marginRight: '10px'}}>Delete</button>
        </li>
    );
}