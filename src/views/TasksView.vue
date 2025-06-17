<template>
  <div class="tasks-container">
    <!-- Add Task Form -->
    <div class="add-task-form">
      <h2>Add New Task</h2>
      <div class="form-group">
        <input
          v-model="newTask.title"
          type="text"
          placeholder="Task title"
          class="form-input"
        />
        <textarea
          v-model="newTask.description"
          placeholder="Task description"
          class="form-input"
        ></textarea>
        <button @click="addTask" class="btn btn-primary">Add Task</button>
      </div>
    </div>

    <!-- Task List -->
    <div class="tasks-list">
      <h2>Tasks</h2>

      <!-- Task Filters -->
      <div class="task-filters">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="currentFilter = filter"
          :class="['filter-btn', { active: currentFilter === filter }]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Tasks -->
      <div class="task-items">
        <div
          v-for="task in filteredTasks"
          :key="task.id"
          class="task-item"
          :class="task.status"
        >
          <div class="task-content">
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
          </div>
          <div class="task-actions">
            <select
              v-model="task.status"
              class="status-select"
              @change="updateTaskStatus(task)"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button @click="deleteTask(task.id)" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import axios from "axios";

const API_URL = `${window.location.protocol}//${window.location.hostname}:3000/api`;

interface Task {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
}

export default defineComponent({
  name: "TasksView",
  setup() {
    const tasks = ref<Task[]>([]);
    const newTask = ref({
      title: "",
      description: "",
    });

    const filters = ["All", "Pending", "In Progress", "Completed"];
    const currentFilter = ref("All");

    // Load tasks from API
    const loadTasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/tasks`);
        tasks.value = response.data;
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };

    // Load tasks when component mounts
    onMounted(loadTasks);

    const filteredTasks = computed(() => {
      if (currentFilter.value === "All") return tasks.value;
      const status = currentFilter.value.toLowerCase().replace(" ", "_");
      return tasks.value.filter((task) => task.status === status);
    });

    const addTask = async () => {
      if (!newTask.value.title.trim()) return;

      try {
        await axios.post(`${API_URL}/tasks`, newTask.value);
        newTask.value.title = "";
        newTask.value.description = "";
        loadTasks(); // Reload tasks after adding
      } catch (error) {
        console.error("Error adding task:", error);
      }
    };

    const updateTaskStatus = async (task: Task) => {
      try {
        await axios.put(`${API_URL}/tasks/${task.id}/status`, {
          status: task.status,
        });
        loadTasks(); // Reload tasks after updating
      } catch (error) {
        console.error("Error updating task:", error);
      }
    };

    const deleteTask = async (taskId: number) => {
      try {
        await axios.delete(`${API_URL}/tasks/${taskId}`);
        loadTasks(); // Reload tasks after deleting
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    };

    return {
      tasks,
      newTask,
      filters,
      currentFilter,
      filteredTasks,
      addTask,
      updateTaskStatus,
      deleteTask,
    };
  },
});
</script>

<style scoped>
.tasks-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.add-task-form {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea.form-input {
  min-height: 100px;
  resize: vertical;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #4caf50;
  color: white;
}

.btn-danger {
  background-color: #f44336;
  color: white;
}

.task-filters {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.filter-btn.active {
  background: #4caf50;
  color: white;
  border-color: #4caf50;
}

.task-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.task-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-content {
  flex: 1;
}

.task-content h3 {
  margin: 0 0 5px 0;
}

.task-content p {
  margin: 0;
  color: #666;
}

.task-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.status-select {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.task-item.pending {
  border-left: 4px solid #ff9800;
}

.task-item.in_progress {
  border-left: 4px solid #2196f3;
}

.task-item.completed {
  border-left: 4px solid #4caf50;
}
</style>
