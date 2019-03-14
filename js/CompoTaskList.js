class CompoTaskList {
    constructor(param) {
        this.param = param;
    }

    getTaskList() {
        return this.param.taskList;
    }

    getElement() {
        return this.param.element;
    }

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