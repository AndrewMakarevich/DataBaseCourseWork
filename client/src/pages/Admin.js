import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import {createPilot, createAirplane, createAirport, createCrew} from '../http/pilotAPI';
import { Context } from '..';
import './Admin.css';
import './AdminModal.js';

const Admin = observer(()=>{
    const {flight} = useContext(Context);
    const {user} = useContext(Context);
    // PILOT
    const [pilotName, setPilotName] = useState('');
    const [pilotSurname, setPilotSurname] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [education, setEducation] = useState('');
    const [crewId, setCrewId] = useState('');

    // AIRPLANE
    const [placeAmount, setPlaceAmount] = useState('');
    const [planeModel, setPlaneModel] = useState('');

    // AIRPORT
    const [airportName, setAirportName] = useState('');
    const [airportCountry, setAirportCountry] = useState('');
    const [airportAddress, setAirportAddress] = useState('');



    const click = async (e)=> {
        if(e.target.className == "addPilotButton"){
            try{
                let data;

                    data = await createPilot(pilotName, pilotSurname, workExperience, education, crewId);

                    flight.setPilots(data);

            }catch(e){
                alert(e.response.data.message);
            }  
        }else if(e.target.className == "addAirplaneButton"){
            try{
                let data;

                    data = await createAirplane(placeAmount, planeModel, crewId);

                    flight.setAirplanes(data);

            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addAirportButton"){
            try{
                let data;

                    data = await createAirport(airportName, airportCountry, airportAddress);

                    flight.setAirports(data);

            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addCrewButton"){
            try{
                let data;

                    data = await createCrew(airportName, airportCountry, airportAddress);


            }catch(e){
                alert(e.response.data.message);
            } 
        }
        
        
    };

    return(
        <div>
            <div className="adminEmail">Admin email: {user._user.email}</div>
           <button className="PilotButton">Добавить пилота</button>
           <button className="AirplaneButton">Добавить самолет</button>
           <button className="AirportButton">Добавить аэропорт</button>
           <button className="CrewButton">Добавить команду</button>

           <div className="modalBackgroundPilot hide">
                <div className="modalWindowPilot">
                    <h2>Добавление пилота</h2>
                    <div className="pilotInput">
                        <input type="text" id="pilotName" placeholder="Введите имя пилота" required value={pilotName} onChange={e=>setPilotName(e.target.value)}></input>
                        <input type="text" id="pilotSurname" placeholder="Введите фамилию пилота" required value={pilotSurname} onChange={e=>setPilotSurname(e.target.value)}></input>
                        <input type="text" id="workExperience" placeholder="Введите стаж пилота (лет)" required value={workExperience} onChange={e=>setWorkExperience(e.target.value)}></input>
                        <input type="text" id="education" placeholder="Введите образование пилота" required value={education} onChange={e=>setEducation(e.target.value)}></input>
                        <input type="text" id="crewId" placeholder="Введите команду пилота" required value={crewId} onChange={e=>setCrewId(e.target.value)}></input>
                    </div>
                        
                    <button className="addPilotButton" onClick={click}>Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundAirplane hide">
                <div className="modalWindowAirplane">
                    <h2>Добавление самолета</h2>
                    <div className="airplaneInput">
                        <input type="text" id="placeAmount" placeholder="Введите кол-во мест в самолете" required value={placeAmount} onChange={e=>setPlaceAmount(e.target.value)}></input>
                        <input type="text" id="planeModel" placeholder="Введите модель самолета" required value={planeModel} onChange={e=>setPlaneModel(e.target.value)}></input>
                        
                        <input type="text" id="crewId" placeholder="Введите команду, обслуживающую самолет" required value={crewId} onChange={e=>setCrewId(e.target.value)}></input>
                        
                    </div>

                    <button className="addAirplaneButton" onClick={click}>Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundAirport hide">
                <div className="modalWindowAirport">
                    <h2>Добавление аэропорта</h2>
                    <div className="airportInput">
                        <input type="text" id="airportName" placeholder="Введите название аэропорта" required value={airportName} onChange={e=>setAirportName(e.target.value)}></input>
                        <input type="text" id="airportCountry" placeholder="Введите страну аэропорта" required value={airportCountry} onChange={e=>setAirportCountry(e.target.value)}></input>
                        <input type="text" id="airportAddress" placeholder="Введите адрес аэропорта (город включительно)" required value={airportAddress} onChange={e=>setAirportAddress(e.target.value)}></input>
                    </div>

                    <button className="addAirportButton" onClick={click}>Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundCrew hide">
                <div className="modalWindowCrew">
                    <h2>Добавление команды</h2> <br/>
                    <button className="addCrewButton" onClick={click}>Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>
        </div>
    )
});

export default Admin;