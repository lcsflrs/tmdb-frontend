"use client";

import React, { createContext, useContext, useState } from "react";

interface FilterContextInterface {
  selectedGenresId: number[];
  setSelectedGenresId: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FilterContext = createContext<FilterContextInterface>(
  {} as FilterContextInterface
);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedGenresId, setSelectedGenresId] = useState<number[]>([]);

  return (
    <FilterContext.Provider value={{ selectedGenresId, setSelectedGenresId }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterStore = () => {
  const context = useContext(FilterContext);
  return context;
};

export { FilterProvider, useFilterStore };
