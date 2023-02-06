import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-2">
      {/* CARDS#1 */}
      <div className="rounded-xl relative">
        {/* OVERLAY */}
        <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
          <p className="font-bold text-2xl px-8 pt-4 sm:px-2">Sun's Out, BOGO's Out</p>
          <p className="px-8 sm:px-2">Sun's Out, BOGO's Out</p>
          <button className="border-white bg-white text-black mx-8 sm:mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full obeject-cover rounded-xl"
          src="https://images.unsplash.com/photo-1558030137-d464dd688b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="/"
        />
      </div>

      {/* CARDS#2 */}
      <div className="rounded-xl relative">
        {/* OVERLAY */}
        <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Sun's Out, BOGO's Out</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full obeject-cover rounded-xl"
          src="https://images.unsplash.com/photo-1558030137-d464dd688b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="/"
        />
      </div>

      {/* CARDS#3 */}
      <div className="rounded-xl relative">
        {/* OVERLAY */}
        <div className="absolute w-full h-full bg-black/20 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Sun's Out, BOGO's Out</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full obeject-cover rounded-xl"
          src="https://images.unsplash.com/photo-1558030137-d464dd688b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
