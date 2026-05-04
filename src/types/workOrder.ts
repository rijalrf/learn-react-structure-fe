export interface WorkOrder {
  no_spk: string;
  no_surat_jalan: string;
  nama_pelanggan: string;
  jenis_order: string;
  tanggal_order: string;
  nopol: string;
  status: string;
}

export interface WorkOrderDetail {
  section_i_detail_spk: {
    nomor_spk: string;
    tanggal_order: string;
    jenis_order: string;
    nama_pelanggan: string;
    nama_material: string;
    lokasi_asal: string;
    lokasi_tujuan: string;
    jenis_kendaraan: string;
    nopol_kendaraan: string;
    nama_sopir: string;
    nomor_surat_jalan: string;
    nomor_do: string;
    uang_jalan_dimuka: string;
    penambahan_uang_jalan_dimuka: string;
    total_uang_jalan_dimuka: string;
  };
  section_ii_detail_volume: {
    target_volume: string;
    realisasi_volume: string;
    selisih_volume: string;
    satuan_material: string;
    keterangan_volume: string;
    status_volume: string;
  };
  section_iii_detail_lampiran: {
    foto_muatan: string;
    scan_surat_jalan: string;
    foto_nopol: string;
    dokumen_do: string;
    keterangan_lampiran: string;
  };
}
