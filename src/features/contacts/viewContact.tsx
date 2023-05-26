// react
import React from "react";

// react-redux
import { useSelector } from "react-redux";

// react-router-dom
import { useNavigate, useParams } from "react-router-dom";

// feature file
import { selectContactById } from "./contactsSlice";

// ViewContact component
const ViewContact = () => {

  // get contactid from useparams
  const { contactId } = useParams();

  let contactExist = true;

  // access redux store to get contact having id as contactId
  const contact = useSelector((state: any) => selectContactById(state, contactId)) || { id: contactId, firstName: "", lastName: "", isActive: "" };

  // no contact
  if (contact.firstName === "") contactExist = false;

  // useNavigate api to navigate
  const navigate = useNavigate();

  // navigate to edit
  const edit = () => {
    navigate(`view/${contactId}`, { replace: true });
    navigate(`contacts/edit/${contactId}`);
  }

  // naviagte to delete
  const delet = () => {
    navigate(`view/${contactId}`, { replace: true });
    navigate(`contacts/delete/${contactId}`);
  }

  // naviagte to contacts
  const contacts = () => {
    navigate(`view/${contactId}`, { replace: true });
    navigate(`contacts/`);
  }

  return (
    <div className="flex flex-col">
      <h3 className="heading">View Contact</h3>
      <div className="mx-auto">
        {
          contactExist ? (
            <section className="card text-center">
              <p className="card-item">First Name: {contact.firstName}</p>
              <p className="card-item">Last Name: {contact.lastName}</p>
              <p className="card-item">Status: {contact.isActive === "Yes" ? "Active" : "Inactive"}</p>
              <button className="btn btn-green mt-2 mr-5" onClick={edit}>Edit</button>
              <button className="btn btn-red mt-2 ml-5" onClick={delet}>Delete</button>
            </section>
          ) : (
            <div className="card">
              <p>Contact does not exist! It might have been deleted</p>
              Go to<button className="btn btn-green m-2" onClick={contacts}>Contact List</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ViewContact;