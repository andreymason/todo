const root = "http://localhost:8000";

const fetchTasks = root + "/tasks";

const fetchAuth = root + "/api-token-auth/";

const api = { fetchTasks, fetchAuth }

export default api;
