import apiClient from "./apiClient";

export interface User {
  username: string;
  name: string;
  role: string;
}

const authService = {
  login: async (username: string, password: string): Promise<User | null> => {
    try {
      const response = await apiClient.get("/src/dummy/users.json");
      const users = response.data;
      const user = users.find(
        (u: any) => u.username === username && u.password === password
      );

      if (user) {
        // In a real app, we would store a token
        localStorage.setItem("user", JSON.stringify({
          username: user.username,
          name: user.name,
          role: user.role
        }));
        return user;
      }
      return null;
    } catch (error) {
      console.error("Login service error:", error);
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem("user");
  },
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
};

export default authService;
