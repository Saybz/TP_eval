// écriture en ES6 avec le mot-clé class

class Task {
    constructor(name, date) {
        this.id = UUID.generate();
        this.name = name;
        this.date = date;
        this.done = false;
    }

    setDone() {
        this.done = true;
    }
    
}