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
        this.modalContainer = undefined;
        this.targetTaskID = undefined;
        this.render();
    }

    render() {
        document.body.classList.add('light-theme');
        document.body.addEventListener('keyup', (event) => {
            this.handleKeyPress(event);
        });
        this.renderOmniBox();
        this.renderToDoList();
        this.renderModal();
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
        const taskTextValues = this.tasks.map((task) => task.text);

        if (!omniBoxInputValue) {
            this.renderErrorMessage('Название задачи не должно быть пустым');
            return;
        }

        if (taskTextValues.includes(omniBoxInputValue)) {
            this.renderErrorMessage('Задача с таким названием уже существует');
            this.omniBoxInput.value = '';
            return;
        }

        if (omniBoxInputValue) {
            this.addNewTask(omniBoxInputValue);
            this.renderToDoList();
            this.destroyErrorMessage();
        }
    }

    renderToDoList() {
        this.tasksListContainer
            ? (this.tasksListContainer.innerHTML = '')
            : (this.tasksListContainer = document.createElement('div'));
        this.tasksListContainer.addEventListener('click', (event) => {
            this.handleToDoList(event);
        });

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

    handleToDoList(event) {
        const { target } = event;
        const targetContainer = target.closest('.task-item');
        this.targetTaskID = targetContainer.getAttribute('data-task-id');

        if (target.classList.contains('delete-button')) {
            this.showModal();
        }
    }

    renderErrorMessage(errorText) {
        let errorContainer = document.querySelector('.error-message-block');

        if (!errorContainer) {
            errorContainer = document.createElement('span');
            errorContainer.classList.add('error-message-block');
            this.omniBoxContainer.append(errorContainer);
        }

        errorContainer.textContent = errorText;
    }

    destroyErrorMessage() {
        const errorContainer = document.querySelector('.error-message-block');

        if (errorContainer) {
            errorContainer.remove();
        }
    }

    renderModal() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.classList.add(
            'modal-overlay',
            'modal-overlay_hidden'
        );
        this.modalContainer.addEventListener('click', (event) => {
            this.handleModal(event);
        });

        const modalContent = document.createElement('div');
        modalContent.className = 'delete-modal';

        const modalQuestion = document.createElement('h3');
        modalQuestion.classList.add('delete-modal__question');
        modalQuestion.textContent =
            'Вы действительно хотите удалить эту задачу?';

        const modalButtonsWrapper = document.createElement('div');
        modalButtonsWrapper.classList.add('delete-modal__buttons');

        const modalButtonCancel = document.createElement('button');
        modalButtonCancel.classList.add(
            'delete-modal__button',
            'delete-modal__cancel-button'
        );
        modalButtonCancel.setAttribute('type', 'button');
        modalButtonCancel.textContent = 'Отмена';

        const modalButtonConfirm = document.createElement('button');
        modalButtonConfirm.classList.add(
            'delete-modal__button',
            'delete-modal__confirm-button'
        );
        modalButtonConfirm.setAttribute('type', 'button');
        modalButtonConfirm.textContent = 'Удалить';

        this.modalContainer.append(modalContent);
        modalContent.append(modalQuestion, modalButtonsWrapper);
        modalButtonsWrapper.append(modalButtonCancel, modalButtonConfirm);

        document.body.append(this.modalContainer);
    }

    handleModal(event) {
        const { target } = event;
        if (!target.classList.contains('delete-modal__confirm-button')) {
            this.hideModal();
        }

        if (target.classList.contains('delete-modal__confirm-button')) {
            this.deleteTask();
            this.hideModal();
        }
    }

    addNewTask(taskText) {
        this.tasks.push({
            id: String(Date.now()),
            completed: false,
            text: taskText,
        });

        this.omniBoxInput.value = '';
    }

    deleteTask(taskID = this.targetTaskID) {
        this.tasks = this.tasks.filter((task) => {
            return task.id !== taskID;
        });
        this.renderToDoList();
    }

    showModal() {
        this.modalContainer.classList.remove('modal-overlay_hidden');
    }

    hideModal() {
        this.modalContainer.classList.add('modal-overlay_hidden');
    }

    handleKeyPress(event) {
        if (event.key === 'Tab') {
            this.handleThemeSwitch();
        }
    }

    handleThemeSwitch() {
        const body = document.body;
        const taskItems = document.querySelectorAll('.task-item');
        const buttons = document.querySelectorAll(
            '.create-task-block__button, .task-item__delete-button'
        );

        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            body.style.background = '#24292E';

            taskItems.forEach((task) => {
                task.style.color = '#fff';
            });

            buttons.forEach((button) => {
                button.style.border = '1px solid #fff';
            });

            return;
        }

        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            body.style.background = 'initial';

            taskItems.forEach((task) => {
                task.style.color = 'initial';
            });

            buttons.forEach((button) => {
                button.style.border = 'initial';
            });

            return;
        }
    }
}

new ToDo(tasks);
