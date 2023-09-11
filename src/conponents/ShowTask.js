export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id) => {
    const updateTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updateTaskList);
  };
  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="showTask">
      <div className="headShowTask">
        <div>
          <span className="title">ToDo</span>
          <span className="counter">{taskList.length}</span>
        </div>
        <button
          onClick={() => {
            setTaskList([]);
          }}
        >
          {" "}
          Clear All
        </button>
      </div>
      <ul className="container-taskCard">
        {taskList.map((todo) => (
          <li className="taskCard" key={todo.id}>
            <p>
              <span className="taskName">{todo.name}</span>
              <span className="taskTime">{todo.time}</span>
            </p>
            <i className="deleteBtn" onClick={() => handleDelete(todo.id)}>
              <ion-icon name="trash-outline"></ion-icon>
            </i>
            <i className="editBtn" onClick={() => handleEdit(todo.id)}>
              <ion-icon name="create-outline"></ion-icon>
            </i>
          </li>
        ))}
      </ul>
    </section>
  );
};
