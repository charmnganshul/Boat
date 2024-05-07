import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import axios from "axios";
function AddProduct() {
  const [addProduct, setAddProduct] = useState({ content: [] });
  const [content, setContent] = useState("");
  const [contents, setContents] = useState([]);

  const addDatafunc = () => {
    axios
      .post("http://localhost:5002/api/product", addProduct)
      .then(() => alert("Posted"));
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
                    setAddProduct({
                      ...addProduct,
                      productName: e.target.value,
                    })
                  }
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Category</label>
                <input
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, category: e.target.value })
                  }
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Price</label>
                <input
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, price: e.target.value })
                  }
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Discount</label>
                <input
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, discount: e.target.value })
                  }
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[23%]">
                <label>Image</label>
                <input
                  onChange={(e) =>
                    setAddProduct({
                      ...addProduct,
                      images: [...addProduct.images, e.target.value],
                    })
                  }
                  className="border rounded-lg px-1"
                ></input>
              </div>
              <div className="flex flex-col gap-4 w-[100%]">
                <label>Content</label>
                <input
                  onChange={(e) => setContent(e.target.value)}
                  className="border rounded-lg px-1"
                ></input>
                <button
                  className="bg-gray-200 w-[15%] font-bold border rounded"
                  onClick={() =>
                    setAddProduct({
                      ...addProduct,
                      content: [...addProduct?.content, content],
                    })
                  }
                >
                  Add
                </button>
                <div className="flex flex-col">
                  {addProduct?.content?.map((i, index) => (
                    <div>
                      <label>{i}</label>
                      <button
                        onClick={() =>
                          setAddProduct({
                            ...addProduct,
                            content: addProduct.content.filter((j) => j != i),
                          })
                        }
                        className="font-bold w-[10px] bg-red-400"
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center flex-col items-center">
                  <div className="flex flex-col items-center gap-6"></div>
                </div>
                {/* -----content section------ */}
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-white font-bold mt-4">
            <button
              onClick={() => addDatafunc()}
              className="bg-[#FF9F43] px-2 py-1 rounded-lg"
            >
              Submit
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

export default AddProduct;
