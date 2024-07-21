import React from "react";

const ContactDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="max-w-[50rem] m-auto mt-9 flex flex-col gap-7">
      <div className="flex justify-center gap-3">
        <div className={`email`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="emailInput"
          >
            Email
          </label>
          <input
            type="email"
            id="emailInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="email"
            // onChange={handleUserNameChange}
            required
          />
        </div>
        <div className={`phone`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="phoneInput"
          >
            Phone
          </label>
          <input
            type="number"
            id="phoneInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="+91 xxxxx"
            // onChange={handleUserNameChange}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default ContactDetails;
