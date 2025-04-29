import React, { useEffect, useState } from "react";

const ProgramFilter = ({ programs, onFilter }) => {


    useEffect(() => {
        // Show all programs by default on mount
        onFilter(programs);
      }, [programs]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterPrograms(e.target.value, selectedMonth);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    filterPrograms(searchTerm, e.target.value);
  };

  const filterPrograms = (search, month) => {
    let filtered = programs;

    if (search) {
      filtered = filtered.filter((program) =>
        program.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (month) {   

    filtered = filtered.filter((program) =>
        program.date.some((d) => {
          const parts = d.split(" "); // e.g., "09 May" → ["09", "May"]
          const monthPart = parts[1]; // "May"
          return monthPart && monthPart.toLowerCase() === month.toLowerCase();
        })
      );

    }

    onFilter(filtered);
  };

  return (
    <div className="flex small:flex-col large:flex-row w-100 h-auto justify-between small:gap-2 large:gap-0">
      
      <input
        type="text"
        placeholder="Search program title"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 rounded large:w-40 small:w-100 h-40px"
      />

      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className="border  rounded large:w-40 small:w-100 h-40px cursor-pointer"
      >
        <option value="">Filter by Month</option>
        {[
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ].map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </div>
  );
};

export default ProgramFilter;
