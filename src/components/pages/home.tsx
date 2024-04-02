import { useState } from "react";
import { Property } from "../../utils/interface/interface";
import TestModal from "../Modal/testModal";
import TestTable from "../table/table";
import useLocalStorage from "../../hooks/useLocalStorage";
import { GridRowId } from "@mui/x-data-grid";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    // Custoem hook usage here
    const [rows, setRows] = useLocalStorage({key: 'autosave', initialValue: []})

    const handleAddRecord = (v: Property) => {
        setRows(v); // Custom setter usage
    }

    const handleRemoveRecord = (id: GridRowId) => {
        setRows(rows.filter((r: Property)  => r.id != id));
    }

    return (
        <>
            <div className="home">
                <TestTable
                    data={rows}
                    onDelete={handleRemoveRecord}
                />
                <TestModal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    onSubmit={handleAddRecord}
                />
                <button
                    className="button wide-button"
                    onClick={() => setIsOpen(true)}
                >
                    + Add
                </button>
            </div>

        </>
    )
}