class CustomSelect {
    #currentSelectedOption;

    constructor(id, options) {
        this.id = id;
        this.options = options;
        this.#currentSelectedOption = undefined;
    }

    get selectedValue() {
        return this.#currentSelectedOption;
    }

    render(container) {
        const selectContainer = document.createElement('div');
        selectContainer.classList.add(
            'select-dropdown',
            `select-dropdown-${this.id}`
        );

        const selectButton = document.createElement('button');
        selectButton.classList.add(
            'select-dropdown__button',
            `select-dropdown__button--${this.id}`
        );
        selectButton.addEventListener('click', this.#handleSelectButton);

        const selectButtonText = document.createElement('span');
        selectButtonText.classList.add(
            'select-dropdown',
            `select-dropdown--${this.id}`
        );
        selectButtonText.textContent = 'Выберите элемент';
        selectButton.append(selectButtonText);

        const selectDropdownList = document.createElement('ul');
        selectDropdownList.classList.add(
            'select-dropdown__list',
            `select-dropdown__list--${this.id}`
        );
        selectDropdownList.addEventListener('click', (event) => {
            this.#handleSelectDropdown(event);
        });

        this.options.forEach((option) => {
            const dropdownItem = document.createElement('li');
            dropdownItem.classList.add('select-dropdown__list-item');
            dropdownItem.setAttribute('data-value', option.value);
            dropdownItem.textContent = option.text;
            selectDropdownList.appendChild(dropdownItem);
        });

        selectContainer.append(selectButton, selectDropdownList);
        container.append(selectContainer);
    }

    #handleSelectButton(event) {
        const { target } = event;
        const selectButton = target.closest('.select-dropdown__button');
        const selectDropdown = selectButton.nextSibling;
        selectDropdown.classList.toggle('active');
    }

    #handleSelectDropdown(event) {
        const { target } = event;
        const targetValue = target.getAttribute('data-value');
        const selectContainer = target.closest('.select-dropdown');
        const selectButtonTxt = selectContainer.querySelector(
            'span.select-dropdown'
        );
        const selectDropdown = target.closest('.select-dropdown__list');
        const selectDropdownItems = selectDropdown.querySelectorAll(
            '.select-dropdown__list-item'
        );

        selectDropdownItems.forEach((item) =>
            item.classList.remove('selected')
        );
        target.classList.add('selected');

        this.#currentSelectedOption = this.options[targetValue - 1];
        selectButtonTxt.textContent = this.selectedValue.text;
        selectDropdown.classList.remove('active');
    }
}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
