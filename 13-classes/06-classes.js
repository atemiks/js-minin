/**
 * Вам необходимо создать дочерний класс
 * HardWordsDictionary от класса Dictionary.
 * Конструктор у HardWordsDictionary принимает в себя также параметр name
 * и вызывает конструктор родительского класса.
 *
 * Все методы, которые есть в Dictionary,
 * должны остаться без изменений в HardWordsDictionary, кроме одного.
 * Вам необходимо переопределить метод add,
 * который должен работать по той же логике,
 * что и add у Dictionary,
 * только объект слова должен выглядеть следующим образом:
 * {
 *  word: 'word',
 *  description: 'description',
 *  isDifficult: true,
 * }
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

class HardWordsDictionary extends Dictionary {
    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
                isDifficult: true,
            };
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add(
    'дилетант',
    'Тот, кто занимается наукой или исскуством без специальной подготовки, обладая только поверхностными знаниями'
);

hardWordsDictionary.add(
    'неологизм',
    'Новое слово или выражение, а также новое значение старого слова'
);

hardWordsDictionary.add(
    'квант',
    'Неделимая часть какой-либо величины в физике'
);

hardWordsDictionary.showAllWords();
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
