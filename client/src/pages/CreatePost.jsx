import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    image: "",
  });

  const [generatingImage, setGeneratingImage] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };

  // this will call the back-end
  const generateImage = () => {};

  // class util func o nsure new prompt
  const handleSurpriseMe = (e) => {
    // need to get  random prompt
    const randomPrompt=getRandomPrompt(form.prompt)
    setForm({
      ...form, prompt:randomPrompt
    })

  };
  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2  text-[#666e75] text-[16px] ">
          Generate imaginative and visually stunning images through DALL-E AI
          and share it with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 ">
          <FormField
            LabelName="Your Name.."
            type="text"
            name="name"
            placeholder="testing"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="panda mad scientist mixing sparkling chemicals, digital art"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          {/* this is the container where the image will be genrated with preview */}
          <div className="relative bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex justify-center items-center">
            {form.photo ? (
              <img
                alt={form.prompt}
                src={form.photo}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="/preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImage && (
              <div className="absolute inset-0 z-0 flex justify-center items-center  bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        {/* ********submit img after generation******** */}
        {/* generation */}
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            {generatingImage ? "Generating..." : "Generate"}
          </button>
        </div>
        
        {/* submit */}
        <div className="mt-10 ">
          <p className="mt-2 text-[#666e75] text-[14px] ">Once you created the Image you can share it in the community   </p>
          <button
           type="submit"
           className="mt-2 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading?"Sharing...":"Share with your community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
