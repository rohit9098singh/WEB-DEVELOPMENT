
import Productivity from "@/components/Productivity"
import Header2 from "../../components/Header2"
import {WorkFlow} from "@/components/WorkFlow"
import PlansComponent from "@/components/PlansComponent"

const page = () => {
  return (
    <div>
         {/* <Headers/> */}
         {/* <Board/> */}
         <Header2/>
         <div className="py-14 bg-[#e6eafc]">
            <Productivity/>
            <WorkFlow/>
            <PlansComponent/>
         </div>
    </div>
  )
}

export default page
