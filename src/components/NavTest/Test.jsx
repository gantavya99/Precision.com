import React from "react";
import { useState, useEffect } from "react";

const Test = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkData, setCheckedData] = useState([]);

  const handleItemClick = (itemId, itemTitle) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
      setCheckedData(checkData.filter((title) => title !== itemTitle));
    } else {
      setCheckedItems([...checkedItems, itemId]);
      setCheckedData([...checkData, itemTitle]);
    }
  };

  const isItemChecked = (itemId) => {
    return checkedItems.includes(itemId);
  };

  const renderTree = (data) => {
    if (!Array.isArray(data)) {
      console.error("Invalid data source provided");
      return null;
    }
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={isItemChecked(item.id)}
              onChange={() => handleItemClick(item.id, item.title)}
              className="mr-2"
            />
            <span>{item.title}</span>
            {item.children && renderTree(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="border border-gray-200 p-2 mb-4">
        <h2 className="text-xl font-bold">Checked Items:</h2>
        <ul>
          {checkData.map((item) => (
            <li key={item} className="ml-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-80 border border-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Checklist:</h2>
        {renderTree(data)}
      </div>
    </div>
  );
};

export default Test;
