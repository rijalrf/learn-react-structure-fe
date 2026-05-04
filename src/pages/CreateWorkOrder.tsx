import { useState } from "react";
import { MainContentLayout } from "../templates/MainContentLayout";
import { InputDate } from "../components/ui/InputDate";
import { InputDropdown } from "../components/ui/Dropdown";
import { InputText } from "../components/ui/Input";
import { ButtonIcon } from "../components/ui/ButtonWithIcon";
import { useNavigate } from "react-router-dom";

const CreateWorkOrderPage = () => {
  const navigate = useNavigate();
  const [isUangJalanChecked, setIsUangJalanChecked] = useState(false);

  return (
    <MainContentLayout
      breadcrumb="WORK ORDER MANAGEMENT (SPK) / CREATE SPK"
      description="Please fill out the form below to start creating a work order."
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
                    <InputDate />
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Jenis Order
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Jenis Order">
                      <option value="trucking">Trucking Only</option>
                      <option value="material">Trucking & Material</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nama Pelanggan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Pelanggan">
                      <option value="ksk">KSK</option>
                      <option value="ass">ASS</option>
                      <option value="tbq">TBQ</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Lokasi Asal
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Lokasi Asal">
                      <option value="jakarta">Jakarta</option>
                      <option value="bogor">Bogor</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Lokasi Tujuan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Lokasi Tujuan">
                      <option value="bandung">Bandung</option>
                      <option value="surabaya">Surabaya</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nama Material
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Material">
                      <option value="pasir">Pasir</option>
                      <option value="batu">Batu</option>
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
                    <InputDropdown label="Pilih Jenis Kendaraan">
                      <option value="fuso">Fuso</option>
                      <option value="tronton">Tronton</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nopol Kendaraan
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Nopol">
                      <option value="f9888ba">F 9888 BA</option>
                      <option value="b9765az">B 9765 AZ</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nama Sopir
                  </label>
                  <div className="col-span-2">
                    <InputDropdown label="Pilih Sopir">
                      <option value="ahmadi">Ahmadi</option>
                      <option value="supri">Supri</option>
                    </InputDropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    No. Surat Jalan
                  </label>
                  <div className="col-span-2">
                    <InputText placeholder="Type here" />
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <label className="text-[13px] font-semibold text-slate-700">
                    Nomor DO
                  </label>
                  <div className="col-span-2">
                    <InputText placeholder="Type here" />
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
            label="SIMPAN"
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
          <ButtonIcon
            label="KIRIM"
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            }
          />
          <ButtonIcon
            label="CETAK"
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
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </MainContentLayout>
  );
};

export default CreateWorkOrderPage;
