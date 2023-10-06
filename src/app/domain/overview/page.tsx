"use client";
import React, { useState } from "react";
import Grid from "../../UI/Grid/components/Grid";
import DropDown from "../../UI/Input/components/Dropdown";


export default function Overview() {
  const data = [
    {
      createdAt: "2023-06-25 11:00",
      filename: "1abc.txt",
    },
    {
      createdAt: "2023-06-25 12:00",
      filename: "abc.txt",
    },
    {
      createdAt: "2023-06-25 13:00",
      filename: "01abc.txt",
    },
    {
      createdAt: "2023-06-25 14:00",
      filename: "0010abc.txt",
    },
    {
      createdAt: "2023-06-25 15:00",
      filename: "011abc.txt",
    },
    {
      createdAt: "2023-06-25 16:00",
      filename: "20-abc.txt",
    },
    {
      createdAt: "2023-06-25 17:00",
      filename: "021-abc.txt",
    },
    {
      createdAt: "2023-06-25 18:00",
      filename: "002-abc.txt",
    },
    {
      createdAt: "2023-06-25 19:00",
      filename: "cba.txt",
    },
    {
      createdAt: "2023-06-25 20:00",
      filename: "abc010.txt",
    },
    {
      createdAt: "2023-06-25 21:00",
      filename: "abc1.txt",
    },
  ];

  const [sortOption, setSortOption] = useState<string>("createdAt");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const getNumericValue = (filename: string): number => {
    const match = filename.match(/\d+/);
    return match ? parseInt(match[0], 10) : NaN;
  };

  const sortedItems = [...data].sort((a, b) => {
    if (sortOption === "filenameAZ" || sortOption === "filenameZA") {
      const aNumber = getNumericValue(a.filename);
      const bNumber = getNumericValue(b.filename);

      if (!isNaN(aNumber) && !isNaN(bNumber)) {
        return sortOption === "filenameAZ"
          ? aNumber - bNumber
          : bNumber - aNumber;
      }
    } else if (sortOption === "filenameZA") {
      return b.filename.localeCompare(a.filename);
    }

    return a.createdAt.localeCompare(b.createdAt);
  });

  return (
    <section className="bg-white dark:bg-gray-900">
    <div>
    <div className="flex justify-center items-center">
  <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
    Sort Machine
  </h1>
</div>

      <DropDown handleChange={handleSortChange} />
      <Grid data={sortedItems} />
    </div>
    </section>
  );
}
