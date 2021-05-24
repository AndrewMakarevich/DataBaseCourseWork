import React from 'react';
import './Admin.css';
import './AdminModal.js';

const Admin = ()=>{
    return(
        <div>
           <button className="PilotButton">Добавить пилота</button>
           <button className="AirplaneButton">Добавить самолет</button>
           <button className="AirportButton">Добавить аэропорт</button>
           <button className="CrewButton">Добавить команду</button>

           <div className="modalBackgroundPilot hide">
                <div className="modalWindowPilot">
                    <h2>Добавление пилота</h2>
                    <div className="pilotInput">
                        <input type="text" id="pilotName" placeholder="Введите имя пилота" required></input>
                        <input type="text" id="pilotSurname" placeholder="Введите фамилию пилота" required></input>
                        <input type="text" id="workExperience" placeholder="Введите стаж пилота (лет)" required></input>
                        <input type="text" id="crewId" placeholder="Введите команду пилота" required></input>
                    </div>
                        
                    <button className="addPilotButton">Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundAirplane hide">
                <div className="modalWindowAirplane">
                    <h2>Добавление самолета</h2>
                    <div className="airplaneInput">
                        <input type="text" id="planeModel" placeholder="Введите модель самолета" required></input>
                        <input type="text" id="placeAmount" placeholder="Введите кол-во мест в самолете)" required></input>
                        <input type="text" id="crewId" placeholder="Введите команду, обслуживающую самолет" required></input>
                    </div>

                    <button className="addAirplaneButton">Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundAirport hide">
                <div className="modalWindowAirport">
                    <h2>Добавление аэропорта</h2>
                    <div className="airportInput">
                        <input type="text" id="airportName" placeholder="Введите название аэропорта" required></input>
                        <input type="text" id="airportCountry" placeholder="Введите страну аэропорта" required></input>
                        <input type="text" id="airportAddress" placeholder="Введите адрес аэропорта (город включительно)" required></input>
                    </div>

                    <button className="addAirportButton">Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundCrew hide">
                <div className="modalWindowCrew">
                    <h2>Добавление команды</h2> <br/>
                    <button className="addCrewButton">Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>
        </div>
    )
}

export default Admin;