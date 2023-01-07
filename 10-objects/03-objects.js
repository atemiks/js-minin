const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
};

const handleObjects = (obj, key, action = 'get') => {
    switch (action) {
        case 'get':
            return obj[key];
        case 'add':
            obj[key] = '';
            return obj;
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
    }
};

const result = handleObjects(student, 'programmingLanguage', 'delete');
console.log('result', result);
