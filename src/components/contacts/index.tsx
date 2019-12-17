import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {
    ContactsContainer,
    AddressContainer,
    FormContainer
} from './styles';

class Contacts extends React.Component<any, any> {
    render() {
        return (
            <ContactsContainer>
                <Map
                    center={[55.7809, 49.1313]}
                    zoom={15}
                    maxZoom={18}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[55.7809, 49.1313]}>
                        <Popup>
                            Akvelon.
                        </Popup>
                    </Marker>
                </Map>
                <AddressContainer>
                    <h2>Address</h2>
                    <div>Peterburgskaya St, 50к23,<br />
                        office 521,<br />
                        Kazan, Tatarstan,<br />
                        420107</div>
                    <h2>Contact Us</h2>
                    <FormContainer>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea id="story" name="story"
                            rows={5} cols={33} placeholder="Message" />
                        <button type="submit">Submit</button>
                    </FormContainer>
                </AddressContainer>
            </ContactsContainer>
        );
    }
}

export default Contacts;
