import apiClient from "./apiClient";
import type { WorkOrder, WorkOrderDetail } from "../types/workOrder";

const workOrderService = {
  getWorkOrders: async (): Promise<WorkOrder[]> => {
    try {
      const response = await apiClient.get("/src/dummy/data.json");
      return response.data;
    } catch (error) {
      console.error("Error fetching work orders:", error);
      throw error;
    }
  },

  getWorkOrderBySpk: async (no_spk: string): Promise<WorkOrderDetail | null> => {
    try {
      const response = await apiClient.get("/src/dummy/workorder.json");
      const details: WorkOrderDetail[] = response.data;
      const detail = details.find(
        (item) => item.section_i_detail_spk.nomor_spk === no_spk
      );
      return detail || null;
    } catch (error) {
      console.error("Error fetching work order detail:", error);
      throw error;
    }
  },
};

export default workOrderService;
