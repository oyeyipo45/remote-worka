import React, { useEffect } from 'react';
import axios from 'axios'

const HomeScreen = () => {
    useEffect(() => {
        const bid = async () => {
            const bids = await axios.get('/api/v1/posts')
            console.log(bids)
       }
       bid()
	}, []);
    return (
        <>
            <h1>HELLO WORLD</h1>
        </>
        )
}


export default HomeScreen