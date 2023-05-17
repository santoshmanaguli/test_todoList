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
                <li v-for="(list, index) in tasksList" :key="index">
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
            <i v-if="i.showIcon" class="bi bi-check2" role="button" @click="i.showIcon = false"></i>
            <i v-else class="bi bi-pencil-fill" role="button" @click="i.showIcon = true"></i>
            <span>
                <s v-if="!i.showIcon">
                    {{ i.task_name }}
                </s>
                <span v-else>{{ i.task_name }}</span>
            </span>
        </div>
    </div>
</template>

<script src="./TodoList.js"></script>
<style scoped>
@import url('./TodoList.css');
</style>