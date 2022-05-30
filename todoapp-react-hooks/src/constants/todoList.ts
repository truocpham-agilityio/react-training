import { v4 as uuidv4 } from 'uuid';

import { ITask } from '../interfaces/ITask';

const TODO_LIST: ITask[] = [
  {
    id: uuidv4(),
    title: 'Task 1',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'Task 2',
    isCompleted: false,
  },
];

export { TODO_LIST };
