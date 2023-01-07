export class JSBlock {
    constructor() {
        this.container;
        // this.title;
        // this.image;
    }

    render() {
        this.container = document.createElement('div');
        this.container.className = 'js-block';

        const JSTitleBLock = document.createElement('h1');
        JSTitleBLock.className = 'js-title';
        JSTitleBLock.textContent = 'JavaScript';

        this.container.append(JSTitleBLock);

        return this.container;
    }
}
