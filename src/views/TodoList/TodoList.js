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
            FolderName: 'My Tasks'
        }
    },
    methods: {
        onAddTasks(){
            let obj = { 
                task_name: this.createTasks, 
                showIcon: true
            }
            for (let i = 0; i < this.Tasks.length; i++) {
                if (this.Tasks[i].folder_name == this.FolderName) {
                    this.Tasks[i].tasks.push(obj);
                }
            }
            this.createTasks = null;
        },
        addFolder(){
            let obj1 = {
                folder_name: this.createFolder,
                tasks: []
            };
            this.Tasks.push(obj1);
            this.createFolder = null;
        },
        onChangeFolder(obj){
            this.FolderName = obj.folder_name;
        }
    }
}