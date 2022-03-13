let initialData = {
  tasks: {
      'task-1': {id: 'task-1', content: 'Learn React'},
      'task-2': {id: 'task-2', content: 'Learn React 2'},
      'task-3': {id: 'task-3', content: 'Learn React 3'},
      'task-4': {id: 'task-4', content: 'Learn React 4'},
  },
  columns: {
      'column-1': {
          id: 'column-1',
          title: 'To do',
          taskIds: ['task-2','task-3','task-4']
      },
      'column-2': {
          id: 'column-2',
          title: 'Done',
          taskIds: ['task-1']
      }
  },
  columnOrder: ['column-1', 'column-2']
};

export default initialData;