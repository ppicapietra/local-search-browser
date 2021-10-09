import { Link } from "react-router-dom";

export default function SearchResultItem({ contact }) {
    return (
        <div>
            <div className="list-group p-1">
                <div className="list-group-item list-group-item-action p-3">
                    <h3>{contact.name} - ({contact.username})</h3>
                    <p><b>Address:</b> {`${contact.address.street}, ${contact.address.suite}`} ({contact.address.city}) <span><a href={`http://www.google.com/maps/place/${contact.address.geo.lat},${contact.address.geo.lng}`}>show in map</a></span></p>
                    <p><b>Phone:</b> <a href={`call: ${contact.phone}`}>{contact.phone}</a></p>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-info me-0">
                            <Link to={`/Detail/${contact.id}`} className="text-decoration-none text-dark">
                                See details
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}