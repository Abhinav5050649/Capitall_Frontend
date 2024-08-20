import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../pathConstants";

export default function Items({ data }) {
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate(`/update/${data._id}`);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${BASE_URL[0]}/api/items/del/${data._id}`, { headers: { 'Authorization': sessionStorage.getItem("token") } });
            window.location.reload(); // Simple page refresh
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <>
            <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl border bg-white text-black border-green-500 mt-4">
                <img className="w-full" src={data.itemImageURL} alt={data.itemName} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.itemName}</div>
                    <p className="text-gray-700 text-base">{data.itemDescription}</p>
                    <div className="font-bold text-l mb-2">Price: ${data.itemPrice}</div>
                    <div className="font-bold text-l mb-2">Sold: {data.itemSold ? "Yes" : "No"}</div>
                </div>
                {!data.itemSold && (
                    <div className="px-6 pb-4 flex justify-between">
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
