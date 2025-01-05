import { inter } from "@/app/layout"
import { ChartBarStacked, Copy, Telescope, UsersRound, Workflow } from "lucide-react"
import { Inter } from "next/font/google"

function CRMSection() {
  return (
    <div className="flex justify-center mt-20">
      <div className="md:w-3/4 w-11/12 border-[6px] border-solid border-[#F4F5F6] rounded-3xl outline outline-[#EDEEF0] mb-16">
        <div className="rounded-3xl outline outline-[#EDEEF0] px-8  h-full pt-1">
          <div className={`${inter.className} my-8 flex md:flex-row flex-col gap-10 md:gap-0 justify-between`}>
            <div className="md:max-w-72 flex flex-col gap-4">
              <div className="flex gap-2 ">
                <Telescope className="text-blue-600 " /> <span className="text-blue-600">Explore</span>
              </div>
              <p className="text-[#1D1F20]">
                Effortlessly navigate and ask questions about any GitHub repository.
              </p>
            </div>
            <div className="md:max-w-72 flex flex-col gap-4">
              <div className="flex gap-2 ">
                <ChartBarStacked className="text-blue-600 " /> <span className="text-blue-600">Analyze</span>
              </div>
              <p className="text-[#1D1F20]">
                Convert meeting audio into actionable insights and summaries.
              </p>
            </div>
            <div className="md:max-w-72 flex flex-col gap-4">
              <div className="flex gap-2 ">
                <Workflow className="text-blue-600 " /> <span className="text-blue-600">Automate</span>
              </div>
              <p className="text-[#1D1F20]">
                Generate GitHub issues directly from meeting discussions.
              </p>
            </div>
            <div className="md:max-w-72 flex flex-col gap-4">
              <div className="flex gap-2 ">
                <UsersRound className="text-blue-600 " /> <span className="text-blue-600">Collaborate</span>
              </div>
              <p className="text-[#1D1F20]">
                Streamline teamwork with integrated codebase and meeting tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CRMSection