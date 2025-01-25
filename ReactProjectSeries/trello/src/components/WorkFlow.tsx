import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { workflowList } from "@/lib/data"
import { Button } from "./ui/button";

export function WorkFlow() {
    // console.log(workflowList);
    return (
        <div className="px-[10%] py-16 mt-10 bg-white">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full relative"
            >
                <CarouselContent>
                    {workflowList && workflowList.length > 0 ? (
                        workflowList.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="bg-white rounded-md h-56 shadow-md">
                                    <div className={`h-10 w-full ${item.color} bg-red-500 rounded-t-md relative`}>
                                        <div className="h-10 w-10 bg-white absolute bottom-[-15px] left-3 rounded-md p-1 cursor-pointer shadow-sm">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                    </div>
                                    <div className="p-3 pt-6">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight">{item.title}</h5>
                                        <p className="mb-3 text-sm font-medium text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 italic">
                            No items to display. Please check back later!
                        </p>
                    )}
                </CarouselContent>

                {/* Updated Button Styling */}
                <div className="absolute right-12 top-[-8%] flex flex-col gap-2">
                    <CarouselPrevious className="bg-slate-900 text-white p-2 rounded-full shadow-lg hover:bg-slate-700" />
                    <CarouselNext className="bg-slate-900 text-white p-2 rounded-full shadow-lg hover:bg-slate-700" />
                </div>
            </Carousel>
            <div className="">
                <p className=" text-gray-600 text-start mb-2 text-md w-full md:w-3/4 lg:w-2/3 ">
                     No Need to start from the scratch jump-start workflow with a proven 
                      playbook designed for different teams customize it to make it yours 
                </p>
                <Button className="text-md bg-blue-600 hover:bg-black  font-semibold leading-6 text-white px-8 py-2 rounded-md">Explore all use cases</Button>
            </div>
        </div>
    )
}
