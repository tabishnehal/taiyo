// react
import React from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// react-toastify
import { toast } from "react-toastify";
// feature file
import { contactDeleted, selectContactById } from "./contactsSlice";

export default function DeleteContactForm() {

  const { contactId } = useParams();

  const contact = useSelector((state: any) => selectContactById(state, contactId)) || { firstName: "" };

  const { firstName } = contact;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onYesClicked = () => {
    if (firstName !== "") {
      dispatch(
        contactDeleted({
          id: contactId
        })
      );

      toast.success("Contact deleted");
      setTimeout(() => {
        navigate(`delete/${contactId}`, { replace: true });
        navigate(`contacts/`);
      }, 5);
    }
  }

  const onNoClicked = () => {
    toast.info("Contact not deleted");
    setTimeout(() => {
      navigate(`delete/${contactId}`, { replace: true });
      navigate(`contacts/view/${contactId}`);
    }, 5);
  }

  const contacts = () => {
    navigate(`delete/${contactId}`, { replace: true });
    navigate(`contacts/`);
  }

  if (firstName === "") {
    return <div className="card">
      <p>Contact does not exist! It might have been deleted</p>
      Go to<button className="btn btn-green m-2" onClick={contacts}>Contact List</button>
    </div>
  }

  return (
    <div className="flex flex-col">
      <h3 className="heading">Delete Contact</h3>
      <p className="mx-auto">Are you sure to delete following contact?</p>
      <div className="mx-auto">
        <form className="card text-center">
          <p className="card-item">First Name: {contact.firstName}</p>
          <p className="card-item">Last Name: {contact.lastName}</p>
          <p className="card-item">Status: {contact.isActive === "Yes" ? "Active" : "Not Active"}</p>
          <button type="button" className="btn btn-red mr-5" onClick={onYesClicked}>Yes</button>
          <button type="button" className="btn btn-green ml-5" onClick={onNoClicked}>No</button>
        </form>
      </div>
    </div>
  );
}