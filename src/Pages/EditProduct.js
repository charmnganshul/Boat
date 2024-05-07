import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import axios from "axios";
function EditProduct() {
  const stringData = localStorage.getItem("productinfo");
  const [productInfo, setProductInfo] = useState(JSON.parse(stringData));
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscout] = useState(0);
  const [content, setContent] = useState("");
  const updateProductData = () => {
    axios
      .put("http://localhost:5002/api/product/" + productInfo._id, productInfo)
      .then(() => alert("Updated Successfully"));
  };
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
        <Navbar></Navbar>
        {/* ---------------------Content---------------------------- */}
        <div className="bg-[#FAFBFE] p-8">
          <div>
            {/* {JSON.stringify(content)}
            <br></br>
            {JSON.stringify(productInfo)} */}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="font-bold">Product Edit</label>
              <label className="font-semibold text-[#957C60]">
                Update your product
              </label>
            </div>
            <div className="border bg-white flex flex-wrap p-4 justify-between gap-y-4 mt-4 rounded-lg">
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Product Name</label>
                <input
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      productName: e.target.value,
                    })
                  }
                  value={productInfo.productName}
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Category</label>
                <input
                  onChange={(e) =>
                    setProductInfo({ ...productInfo, category: e.target.value })
                  }
                  value={productInfo.category}
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Price</label>
                <input
                  onChange={(e) =>
                    setProductInfo({ ...productInfo, price: e.target.value })
                  }
                  value={productInfo.price}
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Discount</label>
                <input
                  onChange={(e) =>
                    setProductInfo({ ...productInfo, discount: e.target.value })
                  }
                  value={productInfo.discount}
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[100%]">
                <label>Content</label>
                <input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="border rounded-lg px-1"
                ></input>
                <div className="flex justify-center flex-col items-center">
                  <button
                    className="bg-gray-200 w-[15%] font-bold border rounded"
                    onClick={() =>
                      setProductInfo({
                        ...productInfo,
                        content: [...productInfo.content, content],
                      })
                    }
                  >
                    Add
                  </button>
                  <div className="flex flex-col items-center gap-6">
                    {productInfo.content.map((i, index) => (
                      <>
                        <label>
                          {index + 1} {i}{" "}
                        </label>{" "}
                        <button
                          className="bg-gray-200 w-[15%] font-bold border rounded"
                          onClick={() => setContent(i)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-gray-200 w-[15%] font-bold border rounded"
                          onClick={() =>
                            setProductInfo({
                              ...productInfo,
                              content: productInfo.content.filter(
                                (j) => j != i
                              ),
                            })
                          }
                        >
                          Delete
                        </button>
                      </>
                    ))}
                  </div>
                </div>
                {/* -----content section------ */}
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-white font-bold mt-4">
            <button
              className="bg-[#FF9F43] px-2 py-1 rounded-lg"
              onClick={() => updateProductData()}
            >
              Update
            </button>
            <button className="bg-[#61707E] px-2 py-1 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
