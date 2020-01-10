import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {
    ContactsContainer,
    AddressContainer,
    FormContainer,
    Title,
    FormInput,
    TextArea,
    FullAddress,
    SubmitButton,
} from './styles';

const Contacts: React.FC = () => {
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
                easeLinearity={0.35}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[55.7809, 49.1313]}>
                    <Popup>Akvelon.</Popup>
                </Marker>
            </Map>
            <AddressContainer>
                <Title>Address</Title>
                <FullAddress>
                    Akvelon
                        <br />
                    Peterburgskaya St, 50к23,
                        <br />
                    office 521, Kazan, Tatarstan, 420107
                        <br />
                    +7 (999) 222-22-22
                    </FullAddress>
                <Title>Contact Us</Title>
                <FormContainer>
                    <FormInput type="text" placeholder="Name" />
                    <FormInput type="email" placeholder="Email" />
                    <TextArea
                        id="story"
                        name="story"
                        rows={5}
                        cols={33}
                        placeholder="Message"
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </FormContainer>
            </AddressContainer>
        </ContactsContainer>
    );
}

export default Contacts;
