import { useParams } from "react-router-dom";
import { MainContentLayout } from "../templates/MainContentLayout";
import { Accordion } from "../components/ui/Accordion";
import { useWorkOrderDetail } from "../hooks/useWorkOrderDetail";

const DetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => (
  <div className="flex items-center justify-between py-3 px-1 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
    <span className="text-[12px] text-slate-400 uppercase font-medium">
      {label}
    </span>
    <span className="text-[14px] text-slate-700 font-semibold">
      {value || "-"}
    </span>
  </div>
);

const WorkOrderDetailPage = () => {
  const { no_spk } = useParams<{ no_spk: string }>();
  const { detail, loading } = useWorkOrderDetail(no_spk);

  if (loading) {
    return (
      <MainContentLayout
        breadcrumb={`${no_spk} / Detail Work Order (SPK)`}
        description=""
      >
        <div className="p-10 text-center text-slate-400">Loading detail...</div>
      </MainContentLayout>
    );
  }

  if (!detail) {
    return (
      <MainContentLayout
        breadcrumb={`${no_spk} / Detail Work Order (SPK)`}
        description=""
      >
        <div className="p-10 text-center text-slate-400">Detail not found.</div>
      </MainContentLayout>
    );
  }

  const {
    section_i_detail_spk,
    section_ii_detail_volume,
    section_iii_detail_lampiran,
  } = detail;

  return (
    <MainContentLayout
      breadcrumb={`${no_spk} / Detail Work Order (SPK)`}
      description=""
    >
      <div className="mt-4">
        <Accordion title="Section I: Detail SPK" defaultOpen={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            <DetailItem
              label="Nomor SPK"
              value={section_i_detail_spk.nomor_spk}
            />
            <DetailItem
              label="Tanggal Order"
              value={section_i_detail_spk.tanggal_order}
            />
            <DetailItem
              label="Jenis Order"
              value={section_i_detail_spk.jenis_order}
            />
            <DetailItem
              label="Nama Pelanggan"
              value={section_i_detail_spk.nama_pelanggan}
            />
            <DetailItem
              label="Nama Material"
              value={section_i_detail_spk.nama_material}
            />
            <DetailItem
              label="Lokasi Asal"
              value={section_i_detail_spk.lokasi_asal}
            />
            <DetailItem
              label="Lokasi Tujuan"
              value={section_i_detail_spk.lokasi_tujuan}
            />
            <DetailItem
              label="Jenis Kendaraan"
              value={section_i_detail_spk.jenis_kendaraan}
            />
            <DetailItem
              label="Nopol Kendaraan"
              value={section_i_detail_spk.nopol_kendaraan}
            />
            <DetailItem
              label="Nama Sopir"
              value={section_i_detail_spk.nama_sopir}
            />
            <DetailItem
              label="Nomor Surat Jalan"
              value={section_i_detail_spk.nomor_surat_jalan}
            />
            <DetailItem
              label="Nomor DO"
              value={section_i_detail_spk.nomor_do}
            />
            <DetailItem
              label="Uang Jalan Dimuka"
              value={section_i_detail_spk.uang_jalan_dimuka}
            />
            <DetailItem
              label="Penambahan Uang Jalan"
              value={section_i_detail_spk.penambahan_uang_jalan_dimuka}
            />
            <DetailItem
              label="Total Uang Jalan"
              value={section_i_detail_spk.total_uang_jalan_dimuka}
            />
          </div>
        </Accordion>

        <Accordion title="Section II: Detail Volume">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            <DetailItem
              label="Target Volume"
              value={section_ii_detail_volume.target_volume}
            />
            <DetailItem
              label="Realisasi Volume"
              value={section_ii_detail_volume.realisasi_volume}
            />
            <DetailItem
              label="Selisih Volume"
              value={section_ii_detail_volume.selisih_volume}
            />
            <DetailItem
              label="Satuan Material"
              value={section_ii_detail_volume.satuan_material}
            />
            <DetailItem
              label="Keterangan Volume"
              value={section_ii_detail_volume.keterangan_volume}
            />
            <DetailItem
              label="Status Volume"
              value={section_ii_detail_volume.status_volume}
            />
          </div>
        </Accordion>

        <Accordion title="Section III: Detail Lampiran">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-slate-400 uppercase font-medium">
                Foto Muatan
              </span>
              <div className="aspect-video bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-sm overflow-hidden">
                <img
                  src={section_iii_detail_lampiran.foto_muatan}
                  alt="Foto Muatan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] text-slate-400 uppercase font-medium">
                Foto Nopol
              </span>
              <div className="aspect-video bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-sm overflow-hidden">
                <img
                  src={section_iii_detail_lampiran.foto_nopol}
                  alt="Foto Nopol"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <DetailItem
              label="Scan Surat Jalan"
              value={section_iii_detail_lampiran.scan_surat_jalan}
            />
            <DetailItem
              label="Dokumen DO"
              value={section_iii_detail_lampiran.dokumen_do}
            />
            <DetailItem
              label="Keterangan Lampiran"
              value={section_iii_detail_lampiran.keterangan_lampiran}
            />
          </div>
        </Accordion>
      </div>
    </MainContentLayout>
  );
};

export default WorkOrderDetailPage;
