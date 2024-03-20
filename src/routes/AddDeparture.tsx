import { FormEvent, useState } from "react";
import { Navbar } from "../components/navbar";

export default function AddDeparture() {

    const [stop_id, setSelectedStop] = useState<number>();
    const [selectedStopName, setSelectedStopName] = useState<string>('');
    const [departureTime, setDepartureTime] = useState<string>('');
    const [submitError, setSubmitError] = useState<string>('');

    const stops = [
        { id: 1, name: 'Kerekerdő-felső' },
        { id: 2, name: 'Kerekerdő-alsó' },
    ];

    async function addDepartureLogic(e:FormEvent) {
        e.preventDefault();

        const sendData = {
            stop_id,
            departureTime
        }

        const response = await fetch(`http://localhost:3000/departures/addDeparture`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(sendData),
        });

        if (!response.ok) {
            const errorObj = await response.json();
            setSubmitError(errorObj.message);
            return;
        }
    }

    return <>
        <div className="container">
            <Navbar />
            <form style={{marginTop: '20px'}} onSubmit={addDepartureLogic}>
                <div className="mb-3">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {selectedStopName || 'Megálló'}
                        </button>
                        <ul className="dropdown-menu">
                            {stops.map(stop => (
                                    <li key={stop.id}>
                                        <a className="dropdown-item" onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedStop(stop.id);
                                            setSelectedStopName(stop.name);
                                            }} >
                                            {stop.name}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="deptime" className="form-label">
                        Indulási idő:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="deptime"
                        onChange={e => setDepartureTime(e.currentTarget.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {<p>{submitError}</p>}
        </div>
    </>
}