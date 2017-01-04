window.addEventListener('load', function () {

getProfile();
genderFemale();
genderMale();
});



//gets new profiles and populates profileBox
function getProfile () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api?results=12');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log('getProfile loaded');
    
        let parent = document.querySelector('.profileBox');
    for (let i = 0; i < response.results.length; i++) {
    
        let child = document.createElement('div');
            child.innerHTML = Mustache.render(
            document.querySelector('#profile').innerHTML,
            {
                image: response.results[i].picture.large, 
                name: response.results[i].name.first,
                state: response.results[i].location.state,
                bd: response.results[i].dob, // convert to age if I have extra time
                button: [
                    { buttonNo: 'no no no' },
                    { buttonYes: 'yesWay' },
                ]
                
            }
        );

        let buttonNo = child.querySelector('#noWay').addEventListener('click', function() {
            console.log('no way');
        });

        let buttonYes = child.querySelector('#yesWay').addEventListener('click', function() {
            console.log('Id like to date');
        });

        parent.appendChild(child);
        console.log(Date.now());
        
    }
    });
    request.send();
}


function genderFemale() {
    let genderFemale = document.querySelector('#female');
    genderFemale.addEventListener('click', function() {
        
        console.log('gender female clicked');
        
    });
}

function genderMale() {
    let genderMale = document.querySelector('#male');
    genderMale.addEventListener('click', function() {
 
        console.log('gender male clicked');
        
    });
}


function nope () {
    let noWay = querySelector('#profile');
    no.createElement
}