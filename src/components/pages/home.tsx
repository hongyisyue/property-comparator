import { useEffect, useState } from "react";
import { Property } from "../../utils/interface/interface";
import TestModal from "../Modal/testModal";
import TestTable from "../table/table";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const sessionRows = localStorage.getItem('autosave');
    const [rows, setRows] = useState<Property[]>(sessionRows ? JSON.parse(sessionRows) : []);

    const handleAddRecord = (v: Property) => {
        const newRow: Property = {...v, id: rows.length +1};
        setRows([...rows, newRow]);
        setIsOpen(false);
    }
    useEffect(() => {
        localStorage.setItem('autosave', JSON.stringify(rows));
    }, [rows])
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