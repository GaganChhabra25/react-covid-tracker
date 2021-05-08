import React, { useEffect, useState } from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker';
import classes from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/covid.png';

const App = () => {
const [data, setData] = useState({});
const [country, setCountry] = useState('');

    useEffect(() => {
        fetchData()
        .then((data) => {
            setData(data);
        })
    }, [])

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setData(fetchedData);
        setCountry(country);
    }

    return (
        <div className={classes.container}>
            <img src={covidImage} className={classes.image} alt="COVID-19"/>
           <Cards data={data}/>
           <CountryPicker handleCountryChange={handleCountryChange}/>
           <Chart data={data} country={country}/>
        </div>
    )
}

export default App
