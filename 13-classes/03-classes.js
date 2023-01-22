/**
 *  Необходимо разработать словарь,
 * в который можно добавлять слова с их описанием,
 * удалять слова и получать их.
 *
 * Для начала создайте класс Dictionary.
 * Его конструктор принимает 1 параметр name.
 * Инициализируйте данное значение при помощи this.
 * Также в конструкторе должно объявляться поле words,
 * которое по умолчанию должно быть пустым объектом.
 *
 * Вам необходимо в класс Dictionary добавить 4 метода:
 * add.
 * Данный метод добавляет новое слово в словарь.
 * Он принимает в себя 2 параметра:
 * word - слово (тип данных строка)
 * description - описание слова (тип данных строка)
 * Если слово уже существует в объекте words,
 * то не нужно перезаписывать слово, которое уже было сохранено ранее.
 *
 * remove.
 * Данный метод удаляет слово из словаря.
 * Он принимает в себя ключ по которому нужно удалить объект слова из объекта words
 *
 * get.
 * Данный метод получает слово из словаря.
 * Он принимает в себя ключ из объекта words.
 * Из метода необходимо возвратить найденный объект слова по переданному параметру ключа
 *
 * showAllWords.
 * Данный метод не принимает в себя никаких параметров.
 * Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words,
 * в консоль в формате “word - description” (word - само слово, description - описание слова)
 */
class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = description;
        }
    }
    remove(word) {
        delete this.words[word];
    }
    get(word) {
        return this.words[word];
    }
    showAllWords() {
        return console.log(this.words);
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JS', 'Язык по программированию');
dictionary.add('HTML', 'Язык разметки веб страницы');
dictionary.add('CSS', 'Каскадные стили для веб страницы');
dictionary.showAllWords();
dictionary.remove('JS');
dictionary.showAllWords();