import React from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import JobList from "./JobList";
const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Jobs = () => {
  return (
    <div>
      <Navbar />
      {/* Filter Page */}
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20">
            <FilterCard />
          </div>
          {/* Job card */}
          {jobsArray.length <= 0
            ? <span>Job not found</span>
            : <div className="flex-1 h-[80vh] overflow-auto pb-5">
                <div className="grid grid-cols-3">
                  {jobsArray.map((item, index) => <JobList />)}
                </div>
              </div>}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
