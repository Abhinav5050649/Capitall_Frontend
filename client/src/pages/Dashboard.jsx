import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DNav from "../components/DNav";
import BASE_URL from "../pathConstants";
import Items from "../components/Items";

//to view items being sold by us --> We can also update details through this page and delete unsold items
export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL[0]}/api/items/for/sale`, { headers: { 'Authorization': sessionStorage.getItem("token") } });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <DNav />
            <div className="flex flex-col items-center min-h-screen bg-gray-400">
                <h3 className="text-3xl font-bold mt-6 mb-4 text-gray-800">Welcome to Your Dashboard: Review Your Posted Items!</h3>
                {data.length === 0 ? (
                    <h5 className="text-2xl font-bold mt-4 text-gray-900 mb-4">No items have been posted by you!</h5>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((item) => (
                            <Items key={item._id} data={item} />
                        ))}
                    </div>
                )}
            </div>

        </>
    );
}
