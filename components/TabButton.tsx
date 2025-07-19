import React from "react";

type TabButtonProps = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabButton = ({
  id,
  label,
  icon: Icon,
  activeTab,
  setActiveTab,
}: TabButtonProps) => (
  <button
    onClick={() => setActiveTab(id)}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
      activeTab === id
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

export default TabButton;
