const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const createTasksList = (
    tasksArray,
    createTaskItemCallback = createTaskItem
) => {
    const tasksList = document.createElement('div');
    tasksList.className = 'tasks-list';

    tasksArray.forEach((taskItem) => {
        tasksList.appendChild(createTaskItemCallback(taskItem));
    });

    document.body.append(tasksList);
};

const createTaskItem = (task) => {
    const { id: taskId, completed: taskCompleted, text: taskText } = task;

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', taskId);

    const taskItemMainCotainer = document.createElement('div');
    taskItemMainCotainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    const taskItemForm = document.createElement('form');
    taskItemForm.className = 'checkbox-form';

    const taskItemCheckbox = document.createElement('input');
    taskItemCheckbox.className = 'checkbox-form__checkbox';
    taskItemCheckbox.setAttribute('type', 'checkbox');
    taskItemCheckbox.setAttribute('id', `task-${taskId}`);

    const taskItemLabel = document.createElement('label');
    taskItemLabel.setAttribute('for', `task-${taskId}`);

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = taskText;

    const taskItemDeleteButton = document.createElement('button');
    taskItemDeleteButton.className =
        'task-item__delete-button default-button delete-button';
    taskItemDeleteButton.textContent = 'Удалить';
    taskItemDeleteButton.setAttribute('type', 'button');
    taskItemDeleteButton.setAttribute('data-delete-task-id', '');

    taskItem.append(taskItemMainCotainer);
    taskItemMainCotainer.append(taskItemMainContent, taskItemDeleteButton);
    taskItemMainContent.append(taskItemForm, taskItemText);
    taskItemForm.append(taskItemCheckbox, taskItemLabel);

    return taskItem;
};

createTasksList(tasks);
