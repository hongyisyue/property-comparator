import { useState } from "react";
import { Property } from "../../utils/interface/interface";
import TestModal from "../Modal/testModal";
import TestTable from "../table/table";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    // Custoem hook usage here
    const [rows, setRows] = useLocalStorage({key: 'autosave', initialValue: []})

    const handleAddRecord = (v: Property) => {
        setRows(v); // Custom setter usage
        setIsOpen(false);
    }
    return (
        <>
            <div style={{display: "flex", alignItems:"center", justifyContent:"center", flexDirection: 'column'}}>
                <div className="row" style={{width: "100%"}}>
                    <div className="col">
                        <TestTable data={rows}></TestTable>
                    </div>
                </div>
                <div className="row">
                    <button
                        style={{textAlign: 'center'}}
                        onClick={() => setIsOpen(true)}
                    >
                        + Add
                    </button>
                    <TestModal
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        onSubmit={handleAddRecord}
                    />
                </div>
            </div>
        </>
    )
}