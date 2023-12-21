import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjQ1NjQwOWQ0OTU4Yjg1NWQwOTQwOTAwOWUzMzNiOCIsInN1YiI6IjY1ODQyNjYyODU4Njc4NTYzNWY2YjMyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_8Ytmgoejt9IaVM85PHMXYpX1mzt9rQeRgLmP9_BSI'
            }
        };

        try {
            const dataResponse = await fetch(url, options);
            const jsonData = await dataResponse.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return data;
};

export default useFetchData;
