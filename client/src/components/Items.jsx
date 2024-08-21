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
            <div className="mx-auto max-w-sm rounded overflow-hidden w-40 h-60 shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl border bg-white text-black border-green-500 mt-4">
                <div className="w-40 h-28">
                    <img className="w-full h-full object-contain" src={data.itemImageURL} alt={data.itemName} />
                </div>
                <div className="px-4 py-2">
                    <div className="font-bold text-sm mb-1">{data.itemName}</div>
                    <p className="text-gray-700 text-xs">{data.itemDescription}</p>
                    <div className="font-bold text-xs mb-1">Price: ${data.itemPrice}</div>
                    <div className="font-bold text-xs mb-1">Sold: {data.itemSold ? "Yes" : "No"}</div>
                </div>
                {!data.itemSold && (
                    <div className="px-4 pb-2 flex justify-between">
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
