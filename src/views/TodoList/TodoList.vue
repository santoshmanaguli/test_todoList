<template>
    <div>
        <h1>
            <b>
                Tasks
            </b>
        </h1>
    </div>
    <div>
        <div class="dropdown">
            <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ FolderName }}
            </a>

            <ul class="dropdown-menu">
                <form @submit.prevent="addFolder()">
                    <input type="text" v-model="createFolder" required />
                    <button type="submit">
                        Add
                    </button>
                </form>
                <li v-for="(list, index) in Tasks" :key="index">
                    <a class="dropdown-item" href="#" @click="onChangeFolder(list)">{{ list.folder_name }}</a>
                </li>
            </ul>
        </div>
    </div>
        <form @submit.prevent="onAddTasks()">
            <input type="text" v-model="createTasks" placeholder="Enter Here..." required />
            <button type="submit">
                Add a task
            </button>
        </form>
    <div>
        <div id="myTasks1" v-for="i, index in Tasks" :key="index">
            <div v-if="i.folder_name == FolderName">
                <div v-for="j,index1 in i.tasks" :key="index1">
                    <i v-if="j.showIcon" class="bi bi-check2" role="button" @click="j.showIcon = false"></i>
                    <i v-else class="bi bi-pencil-fill" role="button" @click="j.showIcon = true"></i>
                    <span>
                        <s v-if="!j.showIcon">
                            {{ j.task_name }}
                        </s>
                        <span v-else>{{ j.task_name }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TodoList.js"></script>
<style scoped>
@import url('./TodoList.css');
</style>