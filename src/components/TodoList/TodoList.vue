<template>
    <div>
        <h1>
            Tasks
        </h1>
    </div>
    <div>
        <form @submit.prevent="onAddTasks()">
            <input type="text" v-model="createTasks" />
            <button type="submit">
                Add a task
            </button>
        </form>
    </div>
    <div>
        <div v-for="(i, index) in Tasks" :key="i.id">
            <!-- <input type="radio" id="inputTaskNameId" @change=""> -->
            <!-- <img src="" alt=""> -->
            <i v-if="i.showIcon" class="bi bi-check2" role="button" @click="i.showIcon = false"></i>
            <i v-else class="bi bi-pencil-fill" role="button" @click="i.showIcon = true"></i>
            <span>
                <s v-if="i.showIcon">
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