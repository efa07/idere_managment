"use client";
import { createContext, useContext, useState } from "react";

const DummyDataContext = createContext();

export const DummyDataProvider = ({ children }) => {
  const [members, setMembers] = useState([
    { id: 1, name: "Abebe Tesfaye", contributions: 100, status: "active" },
    { id: 2, name: "Mulugeta Alemu", contributions: 50, status: "inactive" },
  ]);

  const [contributions, setContributions] = useState([
    { id: 1, memberId: 1, amount: 100, date: "2025-09-01" },
    { id: 2, memberId: 2, amount: 50, date: "2025-09-05" },
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, title: "Funeral Support", amount: 80, date: "2025-09-10" },
  ]);

  return (
    <DummyDataContext.Provider value={{ members, contributions, expenses }}>
      {children}
    </DummyDataContext.Provider>
  );
};

export const useDummyData = () => useContext(DummyDataContext);
