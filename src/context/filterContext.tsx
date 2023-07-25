"use client";

import { IGenre } from "@/types";
import React, { createContext, useContext, useState } from "react";

interface FilterContextInterface {
  selectedGenres: IGenre[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<IGenre[]>>;
}

export const FilterContext = createContext<FilterContextInterface>(
  {} as FilterContextInterface
);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([]);

  return (
    <FilterContext.Provider value={{ selectedGenres, setSelectedGenres }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterStore = () => {
  const context = useContext(FilterContext);
  return context;
};

export { FilterProvider, useFilterStore };
