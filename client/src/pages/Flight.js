import React, {useContext} from 'react';
import {Context} from '../index';
import "./Flight.css";

const Flight = ()=>{
      const flightInfo = 
      {
        departureDate: "2021-07-28T06:18:45.063Z",
        arrivalDate: "2021-07-28T23:48:47.204Z",
        departureTime: "17:10:26",
        arrivalTime: "21:23:19",
        id: 4,
        placeOfDestinationId: 1,
        departurePointId: 3,
        airplaneId: 7,
        airplane: {
            "id": 7,
            "placeAmount": 120,
            "planeModel": "boeing 800",
            "crewId": 1
        }
    };
          const {flight} = useContext(Context);
    return(
        <div className="flightInfo">
           <div>Flight ID: {flightInfo.id}</div>

           <div className="departurePoint">
                From: {flight.DeparturePoints.map(departure=>
                      departure.id == flightInfo.departurePointId ?
                      <div key={departure.id}>
                        {departure.airport.airportName} <br/> ({departure.airport.airportCountry})
                      </div>
                        :
                        null
                            )}
            </div>  
           <div className="placeOfDestination">
                To: {flight.PlaceOfDestinations.map(destination=>
            
                destination.id == flightInfo.id ?
                    <div key={destination.id}>
                        {destination.airport.airportName} <br/> ({destination.airport.airportCountry})
                    </div>
                :
                    null
                )}
            </div>    
           <div className="airplaneInfo">
             Plane: {flightInfo.airplane.planeModel}
             <div className="placeAmount">PlaceAmount: {flightInfo.airplane.placeAmount} </div>
             <div className="seats"> Seats: <br/>
               {flight.Airplanes.map((airplane) =>
                 airplane.id == flightInfo.airplaneId ?
                  airplane.seats.map(seat=>
                    <div className="seat">{seat.seatNumber}</div>
                  )
                 :
                 null
               )}
             </div>
           </div>
        </div> 

           


    )
}

export default Flight;