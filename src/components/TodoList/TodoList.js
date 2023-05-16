export default{
    name: 'TodoList',
    data() {
        return{
            Tasks: [],
            createTasks: null,
            tasksList: [],
            createFolder: null
        }
    },
    methods: {
        onAddTasks(){
            let obj = {task_name: this.createTasks, showIcon: true}
            this.Tasks.push(obj);
            this.createTasks = null;
        },
        addFolder(){
            let obj1 = {folder_name: this.createFolder};
            this.tasksList.push(obj1);
            this.createFolder = null
        }
    }
}