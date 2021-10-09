import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import ContactsContext from "../../context/contacts";

export default function ContactDetail() {

    const { getContactsList, contactsList } = useContext(ContactsContext);
    const { id } = useParams();
    useEffect(() => { getContactsList().catch(null) }, []);

    const history = useHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const [contact] = contactsList?.filter(c => {
        return (Number(c.id) === Number(id))
    });

    const content = contact ? ((<div className="p-3 d-flex justify-content-center align-items-center flex-column w-75 m-auto">
        <div className="list-group p-1 d-flex align-items-center">
            <h2>{contact.name}</h2>
            <span>{contact.username}</span>
        </div>
        <div className="list-group p-1 w-100">
            <div className="list-group-item list-group-item-action p-3">
                <p><b>Address:</b> {`${contact.address.street}, ${contact.address.suite} (${contact.address.city} - ${contact.address.zipcode})`} <span><a href={`http://www.google.com/maps/place/${contact.address.geo.lat},${contact.address.geo.lng}`}>show in map</a></span></p>
                <p><b>Phone:</b> <a href={`call: ${contact.phone}`}>{contact.phone}</a></p>
                <p><b>Email:</b> <a href={`mailto: ${contact.email}`}>{contact.email}</a></p>
                <p><b>Website:</b> <a href={contact.website} target='_blank' rel='noreferrer'>{contact.website}</a></p>
                <div className="list-group p-1">
                    <div className="list-group list-group-item-action">
                        <h3>Company</h3>
                        <p><b>Name:</b> <a href={`call: ${contact.company.name}`}>{contact.phone}</a></p>
                        <p><b>Catchphrase:</b>{contact.company.catchPhrase}</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="d-flex justify-content-end w-100">
            <button onClick={()=>{history.goBack()}} className="btn btn-primary">Atrás</button>
        </div>
    </div>
    ))
        : ((
            <div>
                <p>
                    ID no existente
                </p>
            </div>
        ));

    return (
        <div>
            {content}

        </div>
    );
}