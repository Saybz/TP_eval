class CompoTaskList {
    /** 
     * @class
     * @summary Composant qui affiche une liste
     * Les paramètres obligatoire, transmettre sous la forme
     * d'un objet, sont :
     * - tasklist : objet TaskList à afficher
     * - element : objet HTMLElement du DOM dans lequel
     *   le code HTML doit être affiché
     * @param {*} param - Object de paramétrage
     * @example
     * let tl = new TaskList('test', null);
     * let compoTk = new CompoTask({
     *    taskList: tl,
     *    element: document.getElementById('tastlist')
     * })
     * compoTk.render();
     */
    constructor(param) {
        this.param = param;
    }

    /**
     * Retourne la liste passée en paramètre au constructeur
     */

    getTaskList() {
        return this.param.taskList;
    }

    /**
     * Retourne l'élément du DOM passé en paramètre au constructeur
     */

    getElement() {
        return this.param.element;
    }

    /**
     * Affiche la liste dans l'élément du DOM en utilisant un bloc div
     * avec la classe CSS "tasklist"
     */

    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}