import React from "react";

const DocumentDetails = ({ formData, setFormData }) => {
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  return (
    <form className="max-w-[50rem] m-auto mt-9 flex gap-7">
      <div>
        <label
          className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
          htmlFor="pandocInput"
        >
          Upload Pan card
        </label>
        <input
          type="file"
          id="pandocInput"
          className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.3rem]"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <label
          className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
          htmlFor="aadharInput"
        >
          Upload Aadhar card
        </label>
        <input
          type="file"
          id="aadharInput"
          className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.3rem]"
          onChange={handleFileChange}
          required
        />
      </div>
    </form>
  );
};

export default DocumentDetails;
