import { useCallback, useEffect, useState } from "react";

interface prop {
    key: string,
    initialValue: any
}

function getDefaultData(key: string, initialValue: any) {
    const savedData = JSON.parse(localStorage.getItem(key) || '[]');
    if (savedData) return savedData;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

function getLargestId(records: any[]): number {
    return records.reduce((a, b) => a.id > b.id ? a.id : b.id, 0); 
}

export default function useLocalStorage({key, initialValue}: prop) {
    const [data, setData] = useState(getDefaultData(key, []));

    // Store back to localStorage when value gets updated
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data])


    // Custom setter usage
    const setDataWithId = useCallback((newData: any) => {
        if (newData?.length > 1) {
            setData(() => {
                return newData;
            });
        } else {
            setData((oldData: any[]) => {
                const newRow = {...newData, id: getLargestId(oldData)};
                return [...oldData, newRow];
            });
        }
    }, []);
    return [data, setDataWithId];
}