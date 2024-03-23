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
            <div className="home">
                <TestTable data={rows}></TestTable>
                <TestModal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    onSubmit={handleAddRecord}
                ></TestModal>
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