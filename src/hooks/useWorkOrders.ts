import { useState, useEffect } from "react";
import workOrderService from "../services/workOrderService";
import type { WorkOrder } from "../types/workOrder";

export const useWorkOrders = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWorkOrders = async () => {
    setLoading(true);
    try {
      const data = await workOrderService.getWorkOrders();
      setWorkOrders(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch work orders", err);
      setError("Failed to fetch work orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkOrders();
  }, []);

  return { workOrders, loading, error, refetch: fetchWorkOrders };
};
