import { useNavigate } from "react-router-dom";
import { MainContentLayout } from "../templates/MainContentLayout";
import BadgeStatus from "../components/ui/BadgeStatus";
import { ButtonIcon } from "../components/ui/ButtonWithIcon";
import { InputDropdown } from "../components/ui/Dropdown";
import { InputText } from "../components/ui/Input";
import { InputDate } from "../components/ui/InputDate";
import { InputIcon } from "../components/ui/InputWithIcon";
import { ActionMenu } from "../components/ui/ActionMenu";
import { useWorkOrders } from "../hooks/useWorkOrders";

const WorkOrderPage = () => {
  const navigate = useNavigate();
  const { workOrders, loading } = useWorkOrders();

  return (
    <MainContentLayout
      breadcrumb="Work Order Management (SPK)"
      description="An in-depth description of the work order management system, highlighting current projects, their statuses, deadlines, and the main team members involved."
      action={
        <>
          <div className="flex-1 h-full flex items-center gap-3">
            <InputIcon
              placeholder="Search here"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              containerClassName="max-w-[200px]"
            />

            <InputDropdown label="No. SPK" containerClassName="max-w-[200px]">
              {workOrders.map((order) => (
                <option key={order.no_spk} value={order.no_spk}>
                  {order.no_spk}
                </option>
              ))}
            </InputDropdown>

            <InputText placeholder="Type No. SPK" containerClassName="max-w-[200px]" />

            <InputDate containerClassName="max-w-[200px]" />
          </div>

          <div className="px-3 h-full flex items-center bg-[#FDFDFD]">
            <ButtonIcon
              onClick={() => navigate("/create-spk")}
              label="Create SPK"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
          </div>
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-slate-200">
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                No. SPK
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                No. Surat Jalan
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                Pelanggan
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                Order
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                Tanggal
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                Nopol
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4">
                Status
              </th>
              <th className="text-left text-[13px] font-semibold text-slate-500 p-4 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="p-10 text-center text-slate-400">
                  Loading data...
                </td>
              </tr>
            ) : workOrders.length > 0 ? (
              workOrders.map((order) => (
                <tr
                  key={order.no_spk}
                  className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4 text-[13px] font-medium text-slate-700">
                    {order.no_spk}
                  </td>
                  <td className="p-4 text-[13px] text-slate-600">
                    {order.no_surat_jalan}
                  </td>
                  <td className="p-4 text-[13px] text-slate-600">
                    {order.nama_pelanggan}
                  </td>
                  <td className="p-4 text-[13px] text-slate-600">
                    {order.jenis_order}
                  </td>
                  <td className="p-4 text-[13px] text-slate-600">
                    {order.tanggal_order}
                  </td>
                  <td className="p-4 text-[13px] font-medium text-slate-700">
                    {order.nopol}
                  </td>
                  <td className="p-4">
                    <BadgeStatus status={order.status as "Ongoing" | "Ready To Process" | "Done"} />
                  </td>
                  <td className="p-4 text-center">
                    <ActionMenu
                      items={[
                        {
                          label: "Detail SPK",
                          icon: (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          ),
                          onClick: () => navigate(`/spk-detail/${order.no_spk}`),
                        },
                        {
                          label: "Edit SPK",
                          icon: (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          ),
                          onClick: () => navigate(`/edit-spk/${order.no_spk}`),
                        },
                        {
                          label: "Reprint Voucher",
                          icon: (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                          ),
                          onClick: () => console.log("Reprint Voucher", order.no_spk),
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-10 text-center text-slate-400">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </MainContentLayout>
  );
};

export default WorkOrderPage;
