<template>
    <div class="container1 overflow-auto">
        <div class="align-items-center justify-content-center">
            <div class="text-center">
                <h1 style="color">
                    <b>
                        Tasks
                    </b>
                </h1>
            </div>
            <div>
                <div class="dropdown">
                    <a class=" folderNameStyle btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false">
                        {{ FolderName }}
                    </a>

                    <ul class="dropdown-menu">
                        <form @submit.prevent="addFolder()">
                            <input type="text" class="inputBoxFolder" v-model="createFolder" required />
                            <button type="submit" class="addBtnFolder btn">
                                Add
                            </button>
                        </form>
                        <li v-for="(list, index) in Tasks" :key="index">
                            <a class="dropdown-item" href="#" @click="onChangeFolder(list)">
                                <b>
                                    {{ list.folder_name }}
                                </b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                <form @submit.prevent="onAddTasks()">
                    <input type="text" v-model="createTasks" class="inputBoxTask" placeholder="Enter Here..." required />
                    <button type="submit" class="btn addTaskBtn">
                        Add a task
                    </button>
                </form>
            <div>
                <div class="align-items-center" id="myTasks1" v-for="i, index in Tasks" :key="index">
                    <div v-if="i.folder_name == FolderName">
                        <div class="d-flex align-items-center" v-for="j,index1 in i.tasks" :key="index1" style="margin-top: 10px">
                            <input type="checkbox" v-model="j.showIcon" />
                            <span class="taskName">
                                <s v-if="j.showIcon">
                                    {{ j.task_name }}
                                </s>
                                <span v-else>{{ j.task_name }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script src="./TodoList.js"></script>
<style scoped>
@import url('./TodoList.css');
</style>