import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DNav from "../components/DNav";
import BASE_URL from "../pathConstants";

export default function Update() {

    const { id } = useParams();

    const navigate = useNavigate();

    const sendToDashboard = () => {
        navigate("/dashboard");
    };

    const [data, setData] = React.useState({
        itemName: "",
        itemDescription: "",
        itemImageURL: "",
        itemPrice: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL[0]}/api/items/one/${id}`,  {headers: {'Authorization': sessionStorage.getItem("token")}});
                setData(response.data);
            } catch (error) {
                console.error("Error fetching item data:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${BASE_URL[0]}/api/items/mod/${id}`,  data, {headers: {'Authorization': sessionStorage.getItem("token")}});
            if (response.status === 200) {
                sendToDashboard();
            } else {
                alert("Error in updating item");
            }
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <>
            <DNav />
            <div className="min-h-screen bg-dark py-6 flex flex-col justify-center sm:py-12 bg-white">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Update Your Item</h2>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Updated Item Name</label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Item name"
                                            value={data.itemName}
                                            onChange={(e) => setData({ ...data, itemName: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Updated Item Description</label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Item description"
                                            value={data.itemDescription}
                                            onChange={(e) => setData({ ...data, itemDescription: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Updated Item Image URL</label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Item image URL"
                                            value={data.itemImageURL}
                                            onChange={(e) => setData({ ...data, itemImageURL: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Updated Item Price</label>
                                        <input
                                            type="number"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Item price"
                                            value={data.itemPrice}
                                            onChange={(e) => setData({ ...data, itemPrice: parseFloat(e.target.value) })}
                                        />
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button onClick={sendToDashboard} className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                    </button>
                                    <button onClick={handleUpdate} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
