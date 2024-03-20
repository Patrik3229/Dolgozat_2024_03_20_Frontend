import { useEffect, useState } from "react";

export function DepKerekFelso() {

    const [departures, setDepartures] = useState([]);

    useEffect(() => {
        const fetchDepartureTimes = async () => {
            try {
                const response = await fetch('http://localhost:3000/departures/stop/1');
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
        <h3 className="text-center" style={{ marginBottom: '20px' }}>Indulások Kerekerdő-felsőről</h3>
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
                        <td>Kerekerdő-felső</td>
                        <td>{departure.departureTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}