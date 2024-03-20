import { DepKerekAlso } from "../components/depKerekAlso";
import { DepKerekFelso } from "../components/depKerekFelso";
import { Navbar } from "../components/navbar";

export default function Root() {
    return (
        <>
            <div className="container">
                <Navbar />
                <DepKerekFelso />
                <DepKerekAlso />
            </div>
        </>
    );
}