import React, { useContext, useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import { FLIGHTS_ROUTE } from '../utils/consts';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import FlightItem from './FlightItem';
import {getFlights} from '../http/flightsAPI';

const FlightsList = observer(()=>{
    const {flight} = useContext(Context);
    useEffect(()=>{

        getFlights().then(data => flight.setFlights(data));

    }, []);

    return (
        <div>    
            {flight.Flights.map(Flight=>    
                <FlightItem key={Flight.id} Flight ={Flight} flight ={flight} />   
            )}                   
        </div>    
    );
});

export default FlightsList;