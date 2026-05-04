import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainContentLayout } from "../templates/MainContentLayout";
import { InputDate } from "../components/ui/InputDate";
import { InputDropdown } from "../components/ui/Dropdown";
import { InputText } from "../components/ui/Input";
import { ButtonIcon } from "../components/ui/ButtonWithIcon";
import workOrderService, { type WorkOrderDetail } from "../services/workOrderService";

const EditWorkOrderPage = () => {
  const { no_spk } = useParams<{ no_spk: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isUangJalanChecked, setIsUangJalanChecked] = useState(false);
  const [formData, setFormData] = useState<WorkOrderDetail | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!no_spk) return;
      try {
        const data = await workOrderService.getWorkOrderBySpk(no_spk);
        if (data) {
          setFormData(data);
          // Check if uang jalan dimuka has a value
          const uangJalan = data.section_i_detail_spk.uang_jalan_dimuka;
          if (uangJalan && uangJalan !== "Rp 0") {
            setIsUangJalanChecked(true);
          }
        }
      } catch (error) {
        console.error("Failed to fetch detail for edit", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [no_spk]);

  if (loading) {
    return (
      <MainContentLayout breadcrumb={`WORK ORDER MANAGEMENT (SPK) / EDIT SPK ${no_spk}`} description="">
        <div className="p-10 text-center text-slate-400">Loading data...</div>
      </MainContentLayout>
    );
  }

  if (!formData) {
    return (
      <MainContentLayout breadcrumb={`WORK ORDER MANAGEMENT (SPK) / EDIT SPK ${no_spk}`} description="">
        <div className="p-10 text-center text-slate-400">Data not found.</div>
      </MainContentLayout>
    );
  }

  const { section_i_detail_spk } = formData;

  return (
    <MainContentLayout
      breadcrumb={`WORK ORDER MANAGEMENT (SPK) / EDIT SPK ${no_spk}`}
      description="Update the form below to modify the work order."
    >
      <div className="flex flex-col h-full bg-white">
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Section Kiri */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Tanggal Order
                  </label>
                  <div className="col-span-2">
                    <InputDate defaultValue={section_i_detail_spk.tanggal_order} />
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Jenis Order
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Jenis Order" defaultValue={section_i_detail_spk.jenis_order}>
                      <option value="Trucking Only">Trucking Only</option>
                      <option value="Trucking & Material">Trucking & Material</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nama Pelanggan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Pelanggan" defaultValue={section_i_detail_spk.nama_pelanggan}>
                      <option value="PBI">PBI</option>
                      <option value="ASS">ASS</option>
                      <option value="TBQ">TBQ</option>
                      <option value="VCT">VCT</option>
                      <option value="BRK">BRK</option>
                      <option value="KSK">KSK</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Lokasi Asal
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Lokasi Asal" defaultValue={section_i_detail_spk.lokasi_asal}>
                      <option value="Ciamis">Ciamis</option>
                      <option value="Tasikmalaya">Tasikmalaya</option>
                      <option value="Garut">Garut</option>
                      <option value="Sumedang">Sumedang</option>
                      <option value="Purwakarta">Purwakarta</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Lokasi Tujuan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Lokasi Tujuan" defaultValue={section_i_detail_spk.lokasi_tujuan}>
                      <option value="Cianjur">Cianjur</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Bekasi">Bekasi</option>
                      <option value="Karawang">Karawang</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nama Material
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Material" defaultValue={section_i_detail_spk.nama_material}>
                      <option value="Screening Item B">Screening Item B</option>
                      <option value="Pasir Pasang">Pasir Pasang</option>
                      <option value="Batu Belah">Batu Belah</option>
                      <option value="Split 1-2">Split 1-2</option>
                      <option value="Sirdam">Sirdam</option>
                    </InputDropdown>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Kanan */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Jenis Kendaraan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Jenis Kendaraan" defaultValue={section_i_detail_spk.jenis_kendaraan}>
                      <option value="Internal">Internal</option>
                      <option value="Vendor">Vendor</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nopol Kendaraan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Nopol" defaultValue={section_i_detail_spk.nopol_kendaraan}>
                      <option value={section_i_detail_spk.nopol_kendaraan}>{section_i_detail_spk.nopol_kendaraan}</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nama Sopir
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Sopir" defaultValue={section_i_detail_spk.nama_sopir}>
                      <option value={section_i_detail_spk.nama_sopir}>{section_i_detail_spk.nama_sopir}</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    No. Surat Jalan
                  </label>
                  <div className="col-span-2">
                    <InputText placeholder="Type here" defaultValue={section_i_detail_spk.nomor_surat_jalan} />
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nomor DO
                  </label>
                  <div className="col-span-2">
                    <InputText placeholder="Type here" defaultValue={section_i_detail_spk.nomor_do} />
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4 pt-2">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Uang Jalan Dimuka
                  </label>
                  <div className="col-span-2 flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="uang-jalan"
                      checked={isUangJalanChecked}
                      onChange={(e) => setIsUangJalanChecked(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-slate-600 focus:ring-slate-500 cursor-pointer flex-shrink-0"
                    />
                    <InputText
                      placeholder="Type amount here"
                      defaultValue={section_i_detail_spk.uang_jalan_dimuka}
                      disabled={!isUangJalanChecked}
                      containerClassName={
                        !isUangJalanChecked ? "bg-slate-50 opacity-60" : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 bg-white border border-slate-200 p-[15px] hover:bg-slate-100 hover:border-slate-300 transition-all text-[13px] text-slate-600 cursor-pointer"
          >
            KEMBALI
          </button>

          <ButtonIcon
            label="UPDATE"
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
            }
          />
        </div>
      </div>
    </MainContentLayout>
  );
};

export default EditWorkOrderPage;
