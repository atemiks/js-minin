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
        this.omniBoxContainer = undefined;
        this.omniBoxInput = undefined;
        this.omniBoxButton = undefined;
        this.tasksListContainer = undefined;
        this.render();
    }

    render() {
        this.renderOmniBox();
        this.renderToDoList();
    }

    renderOmniBox() {
        this.omniBoxContainer = document.createElement('form');
        this.omniBoxContainer.classList.add('create-task-block');
        this.omniBoxContainer.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleOmniBox();
        });

        this.omniBoxInput = document.createElement('input');
        this.omniBoxInput.classList.add('create-task-block__input');
        this.omniBoxInput.setAttribute('type', 'input');
        this.omniBoxInput.setAttribute('name', 'createTaskInput');
        this.omniBoxInput.setAttribute('placeholder', 'Введите текст задачи');
        this.omniBoxInput.setAttribute('required', 'required');

        this.omniBoxButton = document.createElement('button');
        this.omniBoxButton.classList.add('create-task-block__button');
        this.omniBoxButton.setAttribute('type', 'submit');
        this.omniBoxButton.setAttribute('name', 'createTaskButton');
        this.omniBoxButton.textContent = 'Добавить';

        this.omniBoxContainer.append(this.omniBoxInput, this.omniBoxButton);

        document.body.append(this.omniBoxContainer);
    }

    handleOmniBox() {
        const omniBoxInputValue = this.omniBoxInput.value.trim();

        if (omniBoxInputValue) {
            this.addNewTask(omniBoxInputValue);
            this.renderToDoList();
        }
    }

    renderToDoList() {
        this.tasksListContainer
            ? (this.tasksListContainer.innerHTML = '')
            : (this.tasksListContainer = document.createElement('div'));

        this.tasks.forEach((item) => {
            this.tasksListContainer.append(this.renderToDoItem(item));
        });

        document.body.append(this.tasksListContainer);
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

    addNewTask(taskText) {
        this.tasks.push({
            id: String(Date.now()),
            completed: false,
            text: taskText,
        });

        this.omniBoxInput.value = '';
    }
}

new ToDo(tasks);
