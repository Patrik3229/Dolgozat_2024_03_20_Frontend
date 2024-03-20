import { useEffect, useState } from "react";

export function DepKerekAlso() {

    const [departures, setDepartures] = useState([]);

    useEffect(() => {
        const fetchDepartureTimes = async () => {
            try {
                const response = await fetch('http://localhost:3000/departures/stop/2');
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const data = await response.json();
                console.log(data)
                setDepartures(data);
            } catch {
                return;
            }
        };

        fetchDepartureTimes();
    }, []);

    return <>
        <h3 className="text-center" style={{ marginTop: '20px' }}>Indulások Kerekerdő-alsóról</h3>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Megálló</th>
                    <th>Indulási idő</th>
                </tr>
            </thead>
            <tbody>
                {departures.map((departure, index) => (
                    <tr key={index}>
                        <td>Kerekerdő-alsó</td>
                        <td>{departure.departureTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}