export default function ContactDetail(contact) {

    return (
        <div>
            <h2>{contact.name}</h2>
            <span>{contact.username}</span>
            <div className="list-group p-1">
                <div className="list-group-item list-group-item-action p-3">
                    <p><b>Address:</b> {`${contact.address.street}, ${contact.address.suite} (${contact.address.city} - ${contact.address.zipcode})`} <span><a href={`http://www.google.com/maps/place/${contact.address.geo.lat},${contact.address.geo.lng}`}>show in map</a></span></p>
                    <p><b>Phone:</b> <a href={`call: ${contact.phone}`}>{contact.phone}</a></p>
                    <p><b>Email:</b> <a href={`mailto: ${contact.email}`}>{contact.email}</a></p>
                    <p><b>Website:</b> <a href={contact.website} target='_blank' rel='noreferrer'>{contact.website}</a></p>
                    <div className="list-group p-1">
                        <div className="list-group-item list-group-item-action p-3">
                            <h3>Company</h3>
                            <p><b>Name:</b> <a href={`call: ${contact.company.name}`}>{contact.phone}</a></p>
                            <p><b>Catchphrase:</b>{contact.company.catchPhrase}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}