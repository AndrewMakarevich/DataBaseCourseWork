const currentLocation = function(e){
    const currentLocation = document.location.href;
    const adminLocation = currentLocation.indexOf('/admin');
    if(adminLocation !== -1){
        const pilotButton = document.querySelector('.PilotButton');
        const airplaneButton = document.querySelector('.AirplaneButton');
        const airportButton = document.querySelector('.AirportButton');
        const crewButton = document.querySelector('.CrewButton');

        const modalPilot = document.querySelector('.modalBackgroundPilot');
        const modalAirplane = document.querySelector('.modalBackgroundAirplane');
        const modalAirport = document.querySelector('.modalBackgroundAirport');
        const modalCrew = document.querySelector('.modalBackgroundCrew');
        
        const openModal = (modal) =>{
              modal.classList.add('open');
              modal.classList.remove('hide');
        };
        const closeModal = (modal) =>{
            modal.classList.remove('open');
            modal.classList.add('hide'); 
        };

        pilotButton.addEventListener('click', function(){
              openModal(modalPilot);
              modalPilot.addEventListener('click', function(e){

                  if(e.target == modalPilot){
                     closeModal(modalPilot);
                  }
                
              });
              document.addEventListener('keydown', function(e){
                   if(e.key == 'Escape'){
                        closeModal(modalPilot);
                   }
              });
              
        });
        airplaneButton.addEventListener('click', function(){
            openModal(modalAirplane);
            modalAirplane.addEventListener('click', function(e){

                if(e.target == modalAirplane){
                   closeModal(modalAirplane);
                }
              
            });
            document.addEventListener('keydown', function(e){
                 if(e.key == 'Escape'){
                      closeModal(modalAirplane);
                 }
            });
        });
        airportButton.addEventListener('click', function(){
            openModal(modalAirport);
            modalAirport.addEventListener('click', function(e){

                if(e.target == modalAirport){
                   closeModal(modalAirport);
                }
              
            });
            document.addEventListener('keydown', function(e){
                 if(e.key == 'Escape'){
                      closeModal(modalAirport);
                 }
            });
        });
        crewButton.addEventListener('click', function(){
            openModal(modalCrew);
            modalCrew.addEventListener('click', function(e){

                if(e.target == modalCrew){
                   closeModal(modalCrew);
                }
              
            });
            document.addEventListener('keydown', function(e){
                 if(e.key == 'Escape'){
                      closeModal(modalCrew);
                 }
            });
        });


        const closePilotButton = document.querySelector('.modalWindowPilot .closeModalButton');
            closePilotButton.addEventListener('click', function(){
                closeModal(modalPilot);
              });
        const closeAirplaneButton = document.querySelector('.modalWindowAirplane .closeModalButton');
        closeAirplaneButton.addEventListener('click', function(){
            closeModal(modalAirplane);
        });
        const closeAirportButton = document.querySelector('.modalWindowAirport .closeModalButton');
        closeAirportButton.addEventListener('click', function(){
            closeModal(modalAirport);
        });
        const closeCrewButton = document.querySelector('.modalWindowCrew .closeModalButton');
        closeCrewButton.addEventListener('click', function(){
            closeModal(modalCrew);
        });
    }
};

window.addEventListener('DOMContentLoaded', currentLocation);
window.addEventListener('keydown', currentLocation);
window.addEventListener('click', currentLocation);