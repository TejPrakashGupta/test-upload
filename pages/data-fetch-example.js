import axios from "axios";
import { useState } from "react";

export const DataFetchExample = () => {
    const [data, setData] = useState()

    //save this as an .env file
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://rms.softreader.in:5000/api';

    //this is juct an example, create a HOC that takes, in url, endpoint, request method and process the query then returns only the results. It is much much more efficient and cleaner
    const getTheme = async () => {
        const data = await axios.get(`${apiUrl}/customer/theme`)

        setData(data?.data?.data)
    }

    getTheme()

    if (!data) {
        return;
    }

    const {
        id,
        bgcolor,
        cardbg,
        textlines,
        btncolor,
        btntext,
        logo,
        enabled,
        createdAt,
        updatedAt,
    } = data

    return (
        <div>
            <p>Theme Details</p>
            <p>--------------------------Your Theme data-------------------------------</p>
            <ul>
                <li>{id}</li>
                <li>{bgcolor}</li>
                <li>{cardbg}</li>
                <li>{textlines}</li>
                <li>{btncolor}</li>
                <li>{btncolor}</li>
                <li>{logo}</li>
                <li>{enabled}</li>
                <li>{createdAt}</li>
                <li>{updatedAt}</li>
            </ul>
        </div>
    )
}
