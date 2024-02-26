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
export default function useLocalStorage({key, initialValue}: prop) {
    const [data, setData] = useState(getDefaultData(key, []));

    // Store back to localStorage when value gets updated
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data])


    // Custom setter usage
    const setDataWithId = useCallback((newData: any) => {
        setData((oldData: any[]) => {
            const newRow = {...newData, id: oldData.length+1};
            return [...oldData, newRow];
        });
    }, []);
    return [data, setDataWithId];
}