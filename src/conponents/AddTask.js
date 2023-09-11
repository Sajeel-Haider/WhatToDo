export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()}${date.toLocaleTimeString()}`,
            }
          : todo
      );
      setTaskList(updateTaskList);
      setTask({});
    } else {
      if (e.target.task.value) {
        const date = new Date();
        const newTask = {
          id: date.getTime(),
          name: e.target.task.value,
          time: `${date.toLocaleTimeString()}${date.toLocaleTimeString()}`,
        };

        setTaskList([...taskList, newTask]);
        setTask({});
      }
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Enter"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add Task"}</button>
      </form>
    </section>
  );
};
