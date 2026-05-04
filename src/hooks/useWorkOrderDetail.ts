import { useState, useEffect } from "react";
import workOrderService from "../services/workOrderService";
import type { WorkOrderDetail } from "../types/workOrder";

export const useWorkOrderDetail = (no_spk: string | undefined) => {
  const [detail, setDetail] = useState<WorkOrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!no_spk) return;
      setLoading(true);
      try {
        const data = await workOrderService.getWorkOrderBySpk(no_spk);
        setDetail(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch detail", err);
        setError("Failed to fetch work order detail");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [no_spk]);

  return { detail, loading, error };
};
