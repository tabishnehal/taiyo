// react
import React from "react";
// react-router-dom
import { createBrowserRouter } from "react-router-dom";
// App files
import App from "../../App";
import ErrorPage from "../../error-page";
import ChartMap from "../chart-map/chart-map";
import ContactsList from "../contacts/contactsList";
import CreateContactForm from "../contacts/createContactForm";
import DeleteContactForm from "../contacts/deleteContactForm";
import EditContactForm from "../contacts/editContactForm";
import ViewContact from "../contacts/viewContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/",
        element: <ContactsList />,
      },
      {
        path: "contacts/createContactForm/",
        element: <CreateContactForm />,
      },
      {
        path: "contacts/view/:contactId",
        element: <ViewContact />,
      },
      {
        path: "contacts/edit/:contactId",
        element: <EditContactForm />,
      },
      {
        path: "contacts/delete/:contactId",
        element: <DeleteContactForm />,
      },
      {
        path: "chart-map/",
        element: <ChartMap />
      },
    ],
  },
]);