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

class ToDo {
    constructor(tasksArray) {
        this.tasks = tasksArray;
        this.renderToDoList();
    }

    renderToDoList() {
        const tasksArray = this.tasks;

        const taskListContainer = document.createElement('div');

        tasksArray.forEach((item) => {
            taskListContainer.append(this.renderToDoItem(item));
        });

        document.body.append(taskListContainer);
    }

    renderToDoItem({ id: taskID, completed: taskCompleted, text: taskText }) {
        const taskItemContainer = document.createElement('div');
        taskItemContainer.classList.add('task-item');
        taskItemContainer.setAttribute('data-task-id', taskID);

        const taskItemInner = document.createElement('div');
        taskItemInner.classList.add('task-item__main-container');

        const taskItemContent = document.createElement('div');
        taskItemContent.classList.add('task-item__main-content');

        const taskItemForm = document.createElement('form');
        taskItemForm.classList.add('checkbox-form');

        const taskItemFormCheckbox = document.createElement('input');
        taskItemFormCheckbox.classList.add('checkbox-form__checkbox');
        taskItemFormCheckbox.setAttribute('type', 'checkbox');
        taskItemFormCheckbox.setAttribute('id', taskID);
        if (taskCompleted) {
            taskItemFormCheckbox.setAttribute('checked', '');
        }

        const taskItemFormLabel = document.createElement('label');
        taskItemFormLabel.setAttribute('for', taskID);

        const taskItemText = document.createElement('span');
        taskItemText.classList.add('task-item__text');
        taskItemText.textContent = taskText;

        const taskItemDeleteButton = document.createElement('button');
        taskItemDeleteButton.classList.add(
            'task-item__delete-button',
            'default-button',
            'delete-button'
        );
        taskItemDeleteButton.setAttribute('data-delete-task-id', taskID);
        taskItemDeleteButton.textContent = 'Удалить';

        taskItemForm.append(taskItemFormCheckbox, taskItemFormLabel);
        taskItemContent.append(taskItemForm, taskItemText);
        taskItemInner.append(taskItemContent, taskItemDeleteButton);
        taskItemContainer.append(taskItemInner);

        return taskItemContainer;
    }
}

new ToDo(tasks);
