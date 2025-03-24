import AdmissionChart from "../components/AdmissionDashboard/AdmissionChart"
import GenderRatioCard from "../components/AdmissionDashboard/GenderRatioChart"
import CasteRatioChart from "../components/AdmissionDashboard/CasteRatioChart"
import AdmissionGrowthChart from "../components/AdmissionDashboard/AdmissionGrowthChart"
import LocationBarChart from "../components/AdmissionDashboard/LocationWiseChart"
import SubCasteChart from "../components/AdmissionDashboard/SubCasteRatioChart";
import SchoolChart from "../components/AdmissionDashboard/SchoolWiseChart"
import AdmissionCriteriaChart from "../components/AdmissionDashboard/AdmissionCriteriaChart"
import AdmissionBreakdown from "../components/AdmissionDashboard/AdmissionBreakdownChart"
import AdmissionTarget from "../components/AdmissionDashboard/AdmissionTarget"
import EducationBoardChart from "../components/AdmissionDashboard/EducationBoardChart"

function AdmissionDashboard() {
  return (
    <div className="m-2">
      <div className="w-full   rounded-2xl overflow-auto border border-gray-300 bg-white px-0 pt-6 mx-auto mt-10">
        <AdmissionChart />
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto  mt-10">
        <div className="w-full sm:w-[50%] rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
          <GenderRatioCard />
        </div>
        <div className="w-full sm:w-[50%] h-auto rounded-2xl overflow-auto border border-gray-300 bg-white p-4">
          <CasteRatioChart />
        </div>
      </div>
      <div className="w-full   rounded-2xl overflow-auto border border-gray-300 bg-white px-0 pt-6 mx-auto mt-10">
        <AdmissionGrowthChart />
      </div>
      <div className="w-full   rounded-2xl overflow-auto border border-gray-300 bg-white px-0 pt-6 mx-auto mt-10">
        <LocationBarChart />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto  mt-10">
        <div className="w-full sm:w-[50%] h-auto rounded-2xl  border border-gray-300 bg-white p-4">
        <SchoolChart />
        </div>
        <div className="w-full sm:w-[50%] h-auto rounded-2xl  border border-gray-300 bg-white p-4">
          <AdmissionCriteriaChart />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mx-auto  mt-10">
        <div className="w-full sm:w-[40%] h-auto rounded-2xl  border border-gray-300 bg-white p-4">
        <AdmissionBreakdown />
        </div>
        <div className="w-full sm:w-[60%] h-auto rounded-2xl  border border-gray-300 bg-white p-4">
          <AdmissionTarget />
        </div>
      </div>
     
      <div className="w-full   rounded-2xl overflow-auto border border-gray-300 bg-white px-0 pt-6 mx-auto mt-10">
        <SubCasteChart />
      </div>
      <div className="w-full   rounded-2xl overflow-auto border border-gray-300 bg-white px-0 pt-6 mx-auto mt-10">
        <EducationBoardChart />
      </div>
    </div>
  )
}

export default AdmissionDashboard
