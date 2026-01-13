"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="cursor-target flex items-center md:max-w-60 max-w-32 gap-2 bg-black-200/50 rounded-lg px-3 py-2 border border-white/[0.1] cursor-pointer transition-all duration-300 hover:scale-110 hover:border-purple/50 hover:bg-black-200/80 hover:shadow-[0_0_20px_rgba(148,41,255,0.3)]">
                <img
                  src={company.img}
                  alt={company.name || `tech-${company.id}`}
                  className="md:w-8 w-6 h-auto transition-transform duration-300"
                />
                {company.name && (
                  <span className="text-white text-sm md:text-base font-medium">
                    {company.name}
                  </span>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
