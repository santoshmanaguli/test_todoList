export default{
    name: 'TodoList',
    data() {
        return{
            Tasks: [],
            createTasks: null,
            count: 0
        }
    },
    methods: {
        onAddTasks(){
            console.log(1, this.createTasks);
            let obj = {id: this.count + 1, task_name: this.createTasks, showIcon: true}
            this.Tasks.push(obj);
            console.log(this.Tasks, obj);
            this.createTasks = null;
        },
    }
}