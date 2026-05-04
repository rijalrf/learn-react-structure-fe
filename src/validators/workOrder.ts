export const validateWorkOrder = (data: any) => {
  const errors: Record<string, string> = {};

  if (!data.tanggal_order) {
    errors.tanggal_order = "Tanggal Order is required";
  }

  if (!data.jenis_order) {
    errors.jenis_order = "Jenis Order is required";
  }

  if (!data.nama_pelanggan) {
    errors.nama_pelanggan = "Nama Pelanggan is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
