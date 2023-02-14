import React from "react";
import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";

const Event = () => {
  return (
    <div className="bg-[#f0f0f0] pt-32 pb-48">
      <div className="section">
        <h1 className="text-Purple text-5xl uppercase font-bold pb-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-2 gap-16">
          {/* EVENT 1 */}
          <div className="col-span-1 flex flex-col gap-8">
            <img src={event1} alt="/" />
            <h3 className="font-bold text-Purple text-2xl">NEAR 101</h3>
            <p className="text-sm leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              placeat dolores voluptatem a omnis magnam quam reprehenderit ut.
              Ducimus ipsam voluptates officiis, molestiae aut dolorum cumque!
              Minus, aspernatur. Nesciunt, reiciendis!
            </p>
            <div className="flex justify-between">
              <span className="text-sm leading-7 underline text-Purple">Read More</span>
              <p className="text-sm leading-7 text-[#777777]">Date of Publish</p>
            </div>
          </div>
          {/* EVENT 2 */}
          <div className="col-span-1 flex flex-col gap-8">
            <img src={event2} alt="/" />
            <h3 className="font-bold text-Purple text-2xl">BAF PRESIDEN'S ROUNDTABLE</h3>
            <p className="text-sm leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              placeat dolores voluptatem a omnis magnam quam reprehenderit ut.
              Ducimus ipsam voluptates officiis, molestiae aut dolorum cumque!
              Minus, aspernatur. Nesciunt, reiciendis!
            </p>
            <div className="flex justify-between">
              <span className="text-sm leading-7 underline text-Purple ">Read More</span>
              <p className="text-sm leading-7 text-[#777777]">Date of Publish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
