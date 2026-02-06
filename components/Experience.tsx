import React from 'react'
import { Button } from "./ui/MovingBorders"
import { workExperience } from "@/data";
const Experience = () => {
  return (
    <div className="py-20 relative z-[20]" id="experience">
    <h1 className="heading">
    Work <span className="text-purple"> Experience</span>
    </h1>
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
    {workExperience.map((card) => (
  <Button
    key={card.id}
    duration={Math.floor(Math.random() * 10000) + 10000}
    borderRadius="1.75rem"
    style={{
      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      borderRadius: `calc(1.75rem* 0.96)`,
      position: "relative",
      zIndex: 20,
    }}
    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
  >
    <div className="flex lg:flex-row flex-col lg:items-center p-5 py-6 lg:p-8 gap-4">
      <div className="lg:ms-5 w-full">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <h1 className="text-start text-xl md:text-2xl font-bold">
            {card.role}
          </h1>
          <span className="text-sm text-purple">
            {card.duration}
          </span>
        </div>

        <p className="text-start text-white-100 font-semibold mt-1">
          {card.company}
        </p>

        <ul className="list-disc list-inside text-start text-white-100 mt-3 space-y-1">
          {card.desc.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </Button>
))}

        </div>
        </div>
  )
}

export default Experience;