import React from "react";
import axios from "axios";
import BASE_URL from "../pathConstants";

export default function NormalItems({ data }) {

    const markAsSold = async () => {
        try {
            const response = await axios.put(`${BASE_URL[0]}/api/items/sold/${data._id}`,  {}, {headers: {'Authorization': sessionStorage.getItem("token")}});
            if (response.status === 200) {
                alert("Item purchased successfully!");
                window.location.reload();
            } else {
                alert("Error purchasing item!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error marking item as sold:", error);
            alert("An error occurred while trying to purchase the item!");
            window.location.reload();
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
                    <p className="text-gray-700 text-base">Seller: {data.itemSeller.email}</p>
                    <button
                        onClick={markAsSold}
                        className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </>
    );
}

