document.addEventListener('DOMContentLoaded', function() {
    QUnit.module('task');

    QUnit.test("création tâche", function(assert) {
        const name = 'test de tâche';
        const date = new Date(2019, 0, 1);
        let task = new Task(name, date);
        assert.equal(task.name, name, "nom ok");
        assert.equal(task.date, date, "date ok");
        let ok = true;
        for(let i = 1; i <= 1000 && ok; i++) {
            let taskTest = new Task('', null);
            if (task.id == taskTest.id) ok = false;
        }
        assert.ok(ok, 'uuid vrai');
    });

    QUnit.module('tasklist');

    QUnit.test("création liste", function(assert) {
        let tl = new TaskList();
        assert.equal(tl.getNbTasks(), 0);
    });

    QUnit.test("ajout tâche", function(assert) {
        let task = new Task('test', null);
        let tl = new TaskList();
        tl.add(task);
        assert.ok(tl.findTaskById(task.id));
    });

    QUnit.test("suppression tâche", function(assert) {
        let task = new Task('test', null);
        let tl = new TaskList();
        tl.add(task);
        let ok = tl.findTaskById(task.id) != null;
        tl.remove(task.id);
        assert.ok(ok && tl.findTaskById(task.id) == null);
    });
});
