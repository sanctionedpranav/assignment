import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="max-w-[40rem] m-auto mt-9 flex flex-col gap-7">
      <div className="flex justify-center gap-3">
        <div className={`username`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="phoneNumberInput"
          >
            Username
          </label>
          <input
            type="text"
            id="userNameInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="username"
            // onChange={handleUserNameChange}
            required
          />
        </div>
        <div className={`gender`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="genderInput"
          >
            Gender
          </label>
          <input
            type="text"
            id="genderInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="male or female"
            // onChange={handleUserNameChange}
            required
          />
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <div className={`dob`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="dobInput"
          >
            Date of birth
          </label>
          <input
            type="text"
            id="dobInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="dd/mm/yyyy"
            // onChange={handleUserNameChange}
            required
          />
        </div>
        <div className={`pan-card`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="pancardInput"
          >
            Pan Card
          </label>
          <input
            type="text"
            id="pancardInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="pan card"
            // onChange={handleUserNameChange}
            required
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className={`aadhar-card`}>
          <label
            className="text-skin-primary text-[1.3rem] w-full block text-start font-semibold mb-[-1rem]"
            htmlFor="phoneNumberInput"
          >
            Aadhar Card
          </label>
          <input
            type="number"
            id="aadharcardInput"
            className="w-full p-2 rounded focus:outline-none text-skin-white bg-[#cfd4d8] text-[1.6rem]"
            placeholder="aadhar card"
            // onChange={handleUserNameChange}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;
