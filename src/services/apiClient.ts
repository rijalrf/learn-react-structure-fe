import axios from "axios";

const apiClient = axios.create({
  baseURL: "/", // Base URL bisa disesuaikan, untuk dummy data kita gunakan root
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Interceptor Request (Contoh: Menambahkan Token)
apiClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor Response (Contoh: Global Error Handling)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Global error handling bisa di sini
    return Promise.reject(error);
  }
);

export default apiClient;
