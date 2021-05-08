import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import classes from './CountryPicker.module.css';
import { fetchCountries } from './../../api/index';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const countries = async () => {
            setFetchedCountries(await fetchCountries());
        }
        countries();
    }, [setFetchedCountries])
    return (
        <FormControl className={classes.formControl}>
            <NativeSelect defaultValue="" onChange={event => handleCountryChange(event.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key={i}value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
