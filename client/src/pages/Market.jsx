import React, { useState, useEffect } from "react";
import axios from "axios";
import DNav from "../components/DNav";
import NormalItems from "../components/NormalItems";
import BASE_URL from "../pathConstants";

// all unsold items for view
export default function Market() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL[0]}/api/items/unsold`, { headers: { 'Authorization': sessionStorage.getItem("token") } });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching unsold items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <DNav />
      <div className="flex flex-col items-center min-h-screen bg-gray-400">
        <h3 className="text-3xl font-bold mt-6 mb-4 text-gray-800">Welcome to the Market! Check out the items for sale!</h3>
        {data.length === 0 ? (
          <h5 className="text-2xl font-bold mt-4 text-gray-900 mb-4">No items available for sale!</h5>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <NormalItems key={item._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
