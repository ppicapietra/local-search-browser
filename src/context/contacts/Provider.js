import apiCall from "../../api";
import ContactsContext from "./index";
import { useState } from "react";

export default function ContactsProvider({ children }) {

    const [ contactsList,setContactsList ] = useState([]);

    const getContactsList = async () => {
        try {
            const contactsResult = await apiCall("https://jsonplaceholder.typicode.com/users");
            setContactsList(contactsResult);
        }
        catch(err) {
            setContactsList([]);
        }};

    return (
        <ContactsContext.Provider value={{getContactsList, contactsList}}>
            {children}
        </ContactsContext.Provider>
    );
}

