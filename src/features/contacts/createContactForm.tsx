// react
import React, { useState } from "react";

// react-redux
import { useDispatch } from "react-redux";

// reduxjs/toolkit
import { nanoid } from "@reduxjs/toolkit";

// react-router-dom
import { useNavigate } from "react-router-dom";

// react-toastify
import { toast } from 'react-toastify';

// app file
import { contactAdded } from "./contactsSlice";

// createcontactform component
const CreateContactForm = () => {

  // properties of contact
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isActive, setIsActive] = useState("");

  // usedispatch api to dispatch action
  const dispatch = useDispatch();

  const onFirstNameChanged = (e: any) => setFirstName(e.target.value);
  const onLastNameChanged = (e: any) => setLastName(e.target.value);
  const onIsActiveChanged = (e: any) => setIsActive(e.target.value);

  // useNavigate api to navigate
  let navigate = useNavigate();

  // handle save contact
  const onSaveContactClicked = () => {
    if (firstName !== "" && lastName !== "" && isActive !== "") {
      dispatch(
        contactAdded({
          id: nanoid(),
          firstName,
          lastName,
          isActive
        })
      );

      setFirstName("");
      setLastName("");
      setIsActive("");
      toast.success("Contact saved");
      setTimeout(() => {
        navigate(-1)
      }, 5);
    }
  }

  return (
    <div className="flex flex-col">
      <h3 className='heading'>Create Contact</h3>
      <div className="mx-auto">
        <form className="card">
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <label htmlFor="firstName">First Name:</label><br></br>
              <input type="text" className="input" id="firstName" name="firstName" value={firstName} onChange={onFirstNameChanged} />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName">Last Name:</label><br></br>
              <input type="text" className="input" id="lastName" name="lastName" value={lastName} onChange={onLastNameChanged} />
            </div>
            <div className="mb-3">
              <p className="mb-2">Status:</p>
              <input type="radio" id="active" name="isActive" value="Yes" onChange={onIsActiveChanged} />
              <label htmlFor="active"> Active</label><br></br>
              <input type="radio" id="inactive" name="isActive" value="No" onChange={onIsActiveChanged} />
              <label htmlFor="inactive"> Inactive</label>
            </div>
            <button type="button" className="btn btn-green" onClick={onSaveContactClicked}>Save Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContactForm;