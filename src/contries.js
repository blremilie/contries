import React, { useState, useEffect } from 'react';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(url);
            const countries = await response.json();
            setCountries(countries);
            console.log(countries);
        };

        fetchCountryData();
    }, []);

    return (
        <div>
            <section className='grid'>
            {countries.map((country) => {
                const { cca3, name, population, region, capital, flags } = country;
                return (
                    <article key={cca3}>
                        <div>
                            <img src={flags.png} alt={name.common} />
                                <div className='legend'>
                                    <h3>{name.common}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                </div>
                        </div>
                    </article>
                );
            })}
            </section>
        </div>
    );
};

export default Countries;