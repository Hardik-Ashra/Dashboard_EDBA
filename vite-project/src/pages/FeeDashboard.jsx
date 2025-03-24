import ScholarshipChart from "../components/FeeDashBoard/ScholarshipChart"
import FeeOverviewChart from "../components/FeeDashBoard/FeeOverviewChart"
import TotalFeesCovered from "../components/FeeDashBoard/TotalFeesCoveredChart"
import OfflinePaymentsChart from "../components/FeeDashBoard/OfflinePaymentChart"
import OnlinePaymentsChart from "../components/FeeDashBoard/OnlinePaymentChart"
import AnnualFeeChart from "../components/FeeDashBoard/AnnualFeeIncreaseChart"
import FeeStructureChart from "../components/FeeDashBoard/FeeStructureBreakdownChart"

function FeeDashboard() {
  return (
    <div className="m-2">
      <div className="w-full   rounded-2xl overflow-auto border border-gray-300 bg-white px-0 pt-6 mx-auto mt-10">
        <FeeOverviewChart />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto  mt-10">
        <div className="w-full  sm:w-[60%] rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
        <AnnualFeeChart />
        </div>
        <div className="w-full sm:w-[40%] h-auto rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
         <FeeStructureChart/>
        </div>
      </div>
     
      <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto  mt-10">
        <div className="w-full  sm:w-[50%] rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
        <OfflinePaymentsChart />  
        </div>
        <div className="w-full sm:w-[50%] h-auto rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
         <OnlinePaymentsChart/>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto  mt-10">
        <div className="w-full  sm:w-[65%] rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
        <ScholarshipChart />  
        </div>
        <div className="w-full sm:w-[35%] h-auto rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
         <TotalFeesCovered/>
        </div>
      </div>

    </div>
  )
}

export default FeeDashboard
