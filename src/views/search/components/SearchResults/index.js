import { useState } from "react";
import "./style.css";

export default function SearchResults({ results }) {
    return (
        <div>
            {
                results?.map((item) => {
                    return (
                        <div className="list-group p-1" key={item.id}>
                            <div className="ist-group-item list-group-item-action p-3">
                                <h3>{item.name} - ({item.username})</h3>
                                <p><b>Address:</b> {`${item.address.street}, ${item.address.suite}`} ({item.address.city}) <span><a href={`http://www.google.com/maps/place/${item.address.geo.lat},${item.address.geo.lng}`}>show in map</a></span></p>
                                <p><b>Phone:</b> <a href={`call: ${item.phone}`}>{item.phone}</a></p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}