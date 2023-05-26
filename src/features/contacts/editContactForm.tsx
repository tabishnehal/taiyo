// react
import React, { useState } from "react";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-router-dom
import { useNavigate, useParams } from "react-router-dom";

// react-toastify
import { toast } from "react-toastify";

// feature file
import { contactEdited, selectContactById } from "./contactsSlice";

// EditContactForm component
const EditContactForm = () => {

  // get contactid from useparams
  const { contactId } = useParams();

  // access redux store to get contact having id as contactId
  const contact = useSelector((state: any) => selectContactById(state, contactId)) || { firstName: "", lastName: "", isActive: "" };

  // properties of contact
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [isActive, setIsActive] = useState(contact.isActive);

  // usedispatch api to dispatch action
  const dispatch = useDispatch();

  // useNavigate api to navigate
  const navigate = useNavigate();

  const onFirstNameChanged = (e: any) => setFirstName(e.target.value);
  const onLastNameChanged = (e: any) => setLastName(e.target.value);
  const onIsActiveChanged = (e: any) => setIsActive(e.target.value);

  // handle update contact
  const onEditContactClicked = () => {
    if (firstName !== "" && lastName !== "" && isActive !== "") {
      dispatch(
        contactEdited({
          id: contactId,
          firstName,
          lastName,
          isActive
        })
      );
      toast.success("Contact Updated");
      setTimeout(() => {
        navigate(`edit/${contactId}`, { replace: true });
        navigate(`contacts/view/${contactId}`);
      }, 5);
    }
    else {
      toast.warning("Please provide non-empty input");
    }
  }

  // navigate to contacts
  const contacts = () => {
    navigate(`edit/${contactId}`, { replace: true });
    navigate(`contacts/`);
  }

  // no contact
  if (isActive === "") {
    return <div className="card">
      <p>Contact does not exist! It might have been deleted</p>
      Go to<button className="btn btn-green m-2" onClick={contacts}>Contact List</button>
    </div>
  }

  return (
    <div className="flex flex-col">
      <h3 className="heading">Edit Contact</h3>
      <div className="mx-auto">
        <form className="card">
          <div className="flex flex-col justify-center">
            <div className="mb-3">
              <label htmlFor="firstName">First Name:</label><br></br>
              <input type="text" className="input" id="firstName" name="firstName" value={firstName} onChange={onFirstNameChanged} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">Last Name:</label><br></br>
              <input type="text" className="input" id="lastName" name="lastName" value={lastName} onChange={onLastNameChanged} />
            </div>
            <div className="mb-3">
              <p className="mb-2">Status:</p>
              <input type="radio" id="active" name="isActive" value="Yes" onChange={onIsActiveChanged} checked={isActive === "Yes" ? true : false} />
              <label htmlFor="active"> Active</label><br></br>
              <input type="radio" id="inactive" name="isActive" value="No" onChange={onIsActiveChanged} checked={isActive === "No" ? true : false} />
              <label htmlFor="inactive"> Inactive</label><br></br>
            </div>
            <button type="button" className="btn btn-green" onClick={onEditContactClicked}>Update Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContactForm;