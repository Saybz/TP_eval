class TaskList {
    /**
     * @class
     * Gère une liste de tâches de type Task
     */
    constructor() {
        this.list = [];
    }

    /**
     * @method
     * @returns Renvoie le tableau des tâches
     */
    getTasks() {
        return this.list;
    }

    /**
     * @method
     * @summary Ajout d'une tâche
     * @param {Task} task - tâche à ajouter
     */
    add(task) {
        this.list.push(task);
    }

    /**
     * @method
     * @summary Supprime une tâche
     * Supprime la tâche désignée par son identifiant
     * @param {String} id - identifiant de la tâche
     */
    remove(id) {
        let idx = this.findById(id);
        if (idx >= 0) this.list.splice(idx, 1);
    }

    /**
     * @method
     * @summary Recherche une tâche par son identifiant
     * @param {String} id - identifiant de la tâche
     * @returns {Task} Tâche trouvée ou null sinon
     */ 
    findTaskById(id) {
        let idx = this.findById(id);
        if (idx >= 0) return this.list[idx];
        else return null;
    }

    /**
     * @method
     * @summary Recherche une tâche par son identifiant
     * @param {String} id - identifiant de la tâche
     * @returns {Number} Numéro d'ordre dans la liste si trouvée (commence à 0)
     * -1 sinon
     */ 
    findById(id) {
        let idx = this.list.findIndex(
            function(item) {
                return item.id == id;
            }
        )
        return idx;
    }

    /**
     * @method
     * @summary Renvoie le nombre de tâches
     * @returns {Number} Nombre de tâches dans la liste
     */
    getNbTasks() {
        return this.list.length;
    }

}