export default{
    name: 'TodoList',
    data() {
        return{
            Tasks: [{
                folder_name: 'My Tasks',
                tasks: [{
                    task_name: 'sample task',
                    showIcon: true
                }]
            }],
            createTasks: null,
            tasksList: [],
            createFolder: null,
            FolderName: 'MyTasks'
        }
    },
    methods: {
        onAddTasks(){
            let obj = { 
                task_name: this.createTasks, 
                showIcon: true
            }
            this.Tasks.push(obj);
            this.createTasks = null;
        },
        addFolder(){
            let obj1 = {
                folder_name: this.createFolder,
            };
            this.tasksList.push(obj1);
            this.createFolder = null
        },
        onChangeFolder(obj){
            console.log(obj); 
        }
    }
}