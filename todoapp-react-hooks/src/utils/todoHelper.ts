import { ITask } from '../interfaces/ITask';
import { TODO_STATUS } from '../constants/todoStatus';

const isNotCheckAll = (todoList: ITask[] = []): boolean =>
  Boolean(todoList.find((todo: ITask) => !todo.isCompleted));

const filterByStatus = (
  todoList: ITask[] = [],
  status: TODO_STATUS = TODO_STATUS.ALL,
  id: string = '',
): ITask[] => {
  switch (status) {
    case TODO_STATUS.ACTIVE:
      return todoList.filter((todo: ITask) => !todo.isCompleted);
    case TODO_STATUS.COMPLETED:
      return todoList.filter((todo: ITask) => todo.isCompleted);
    case TODO_STATUS.REMOVE:
      return todoList.filter((todo: ITask) => todo.id !== id);
    default:
      return todoList;
  }
};

export { isNotCheckAll, filterByStatus };
