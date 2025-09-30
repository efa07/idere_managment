"use client";
import React, { useState } from "react";

// Reusing the futuristic/modern font definitions (assuming tailwind.config.js is set up)

const Members = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for the table as seen in the image
  const membersData = [
    {
      id: 1,
      name: "Abebe Kebede",
      phone: "+251 912 345 678",
      status: "Active",
      lastContribution: "2023-11-15",
    },
    {
      id: 2,
      name: "Tigist Alemayehu",
      phone: "+251 923 456 789",
      status: "Active",
      lastContribution: "2023-11-15",
    },
    {
      id: 3,
      name: "Tesfaye Halie",
      phone: "+251 934 567 890",
      status: "Inactive",
      lastContribution: "2023-10-15",
    },
    {
      id: 4,
      name: "Mulugeta Bekele",
      phone: "+251 945 678 901",
      status: "Active",
      lastContribution: "2023-11-15",
    },
    {
      id: 5,
      name: "Aster Mengistu",
      phone: "+251 956 789 012",
      status: "Active",
      lastContribution: "2023-11-15",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you would typically send the form data to an API
  //   console.log("Member registration form submitted!");
  //   closeModal(); // Close modal after submission
  // };

  const [familyMembers, setFamilyMembers] = useState([]);

  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { name: "", relation: "", age: "" }]);
  };

  const handleFamilyChange = (index, field, value) => {
    const updated = [...familyMembers];
    updated[index][field] = value;
    setFamilyMembers(updated);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const householdHead = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      status: formData.get("status"),
    };

    const fullData = { householdHead, familyMembers };
    console.log("Submitted Data:", fullData);

    // send `fullData` to backend API
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-modern-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-futuristic font-bold text-gray-800 tracking-wide">
          Miseensota Dhaabbata
        </h1>
        <button
          onClick={openModal}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Miseensa Dabalii
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto border border-gray-100">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                NAME
              </th>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                PHONE
              </th>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                STATUS
              </th>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                LAST CONTRIBUTION
              </th>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest text-center">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {membersData.map((member) => (
              <tr
                key={member.id}
                className="border-b border-gray-100 transition-colors hover:bg-indigo-50/30"
              >
                <td className="py-3 px-4 text-gray-800 font-semibold">
                  {member.name}
                </td>
                <td className="py-3 px-4 text-gray-600 font-mono text-sm">
                  {member.phone}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      member.status === "Active"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600 font-mono text-sm">
                  {member.lastContribution}
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Member Registration Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl transform transition-all duration-300 scale-100 animate-scale-up">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-futuristic font-bold text-gray-800">
                Galmee Maatii Haaraa
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Household Head Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Odeeffannoo Abbaa Warraa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Maqaa Guutuu
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-modern-sans"
                      placeholder="Maqaa Abbaa Warraa"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Lakkoofsa Bilbilaa
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-modern-sans"
                      placeholder="+251 ..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Addireesii
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-modern-sans"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Haala
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-modern-sans"
                      defaultValue="Active"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Family Members Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Miseensa Maatii
                </h3>
                {familyMembers.map((member, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 border p-3 rounded-lg bg-gray-50"
                  >
                    <input
                      type="text"
                      placeholder="Maqaa Miseensaa"
                      value={member.name}
                      onChange={(e) =>
                        handleFamilyChange(index, "name", e.target.value)
                      }
                      className="px-3 py-2 border rounded-md"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Relation (e.g. Haadha, Ilma, Intala)"
                      value={member.relation}
                      onChange={(e) =>
                        handleFamilyChange(index, "relation", e.target.value)
                      }
                      className="px-3 py-2 border rounded-md"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Umuri (Age)"
                      value={member.age}
                      onChange={(e) =>
                        handleFamilyChange(index, "age", e.target.value)
                      }
                      className="px-3 py-2 border rounded-md"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addFamilyMember}
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  + Miseensa Dabaluu
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors font-semibold"
                >
                  Dhiisi
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-semibold"
                >
                  Galmee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
