import { FC, useState } from 'react';

import { ITask } from '../interfaces/ITask';
import { TODO_LIST } from '../constants/todoList';
import { TODO_STATUS } from '../constants/todoStatus';
import { filterByStatus, isNotCheckAll } from '../utils/todoHelper';

import TodoFooter from '../components/TodoFooter';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const TodoApp: FC = () => {
  const [todoList, setTodoList] = useState<ITask[]>(TODO_LIST);
  const [status, setStatus] = useState<TODO_STATUS>(TODO_STATUS.ALL);
  const [todoEditingId, setTodoEditingId] = useState<string>('');
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);

  const handleAddTodoTask = (newTask: ITask): void => {
    setTodoList([...todoList, newTask]);
  };

  const handleSetTodoEditingId = (id: string = ''): void => {
    setTodoEditingId(id);
  };

  const handleEditTodoTask = (task: ITask, index: number = -1): void => {
    if (index >= 0) {
      (todoList as ITask[]).splice(index, 1, task);

      setTodoList([...todoList]);
      setTodoEditingId('');
    }
  };

  const handleMarkTodoTaskCompleted = (id: string = ''): void => {
    const updatedTodoList: ITask[] = todoList.map((task: ITask) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
    );

    setTodoList(updatedTodoList);
    setIsCheckAll(!isNotCheckAll(updatedTodoList));
  };

  const handleCheckAll = (): void => {
    const updatedTodoList: ITask[] = todoList.map((task: ITask) => ({
      ...task,
      isCompleted: !isCheckAll,
    }));

    setTodoList(updatedTodoList);
    setIsCheckAll(!isCheckAll);
  };

  const handleRemoveTodoTask = (id: string = ''): void => {
    setTodoList(filterByStatus(todoList, TODO_STATUS.REMOVE, id));
  };

  const handleSetStatusFilter = (status: TODO_STATUS): void => {
    setStatus(status);
  };

  const handleClearCompleted = (): void => {
    setTodoList(filterByStatus(todoList, TODO_STATUS.ACTIVE));
  };

  return (
    <>
      <section className="todoapp">
        <TodoHeader addTodoTask={handleAddTodoTask} />
        <TodoList
          todoList={filterByStatus(todoList, status)}
          todoEditingId={todoEditingId}
          setTodoEditingId={handleSetTodoEditingId}
          onEditTodo={handleEditTodoTask}
          onMarkTodoTaskCompleted={handleMarkTodoTaskCompleted}
          isCheckAll={isCheckAll}
          checkAll={handleCheckAll}
          onRemoveTodo={handleRemoveTodoTask}
        />
        {todoList.length > 0 && (
          <TodoFooter
            setStatusFilter={handleSetStatusFilter}
            status={status}
            numOfTodos={todoList.length}
            numOfTodosLeft={filterByStatus(todoList, TODO_STATUS.ACTIVE).length}
            onClearCompleted={handleClearCompleted}
          />
        )}
      </section>
    </>
  );
};

export default TodoApp;
