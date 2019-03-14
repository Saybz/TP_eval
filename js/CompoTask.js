class CompoTask {
    /**
     * @class
     * @summary Composant qui affiche une tâche
     * Les paramètres obligatoire, à transmettre sous la forme
     * d'un objet, sont :
     * - task : objet Task à afficher
     * - element : objet HTMLElement du DOM dans lequel
     *   le code HTML doit être affiché
     * @param {*} param - Objet de paramétrage
     * @example
     * let tk = new Task('test', null);
     * let compoTk = new CompoTask({
     *    task: tk,
     *    element: document.getElementById('task')
     * }) 
     * compoTk.render();
     */
    constructor(param) {
        this.param = param;
    }

    /**
     * Retourne la tâche passée en paramètre au constructeur
     */
    getTask() {
        return this.param.task;
    }

    /**
     * Retourne l'élément du DOM passé en paramètre au constructeur
     */
    getElement() {
        return this.param.element;
    }

    /**
     * Affiche la tâche dans l'élément du DOM en utilisant un bloc div
     * avec la classe CSS "task"
     */
    render() {
        this.getElement().innerHTML = `<div class="task">${this.getTask().name}</div>`;
    }
}