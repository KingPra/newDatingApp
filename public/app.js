window.addEventListener('load', function () {

    getProfile('results=6');
    genderFemale();
    genderMale();
});


//gets new profiles and populates profileBox
function getProfile(results) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api?' + results);
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
                    bd: response.results[i].dob, 
                    button: [
                        { buttonNo: 'no no no' },
                        { buttonYes: 'yesWay' },
                    ]

                }
            );

            let buttonNo = child.querySelector('#noWay').addEventListener('click', function () {
                console.log(`${response.results[i].name.first} has been noped`);
            });

            let buttonYes = child.querySelector('#yesWay').addEventListener('click', function () {
                console.log(`Likes ${response.results[i].name.first}`);
            });

            parent.appendChild(child);
            console.log(Date.now());

        }
    });
    request.send();
}
// gets female profile
function genderFemale() {
    let genderFemale = document.querySelector('#female');
    genderFemale.addEventListener('click', function () {
        getProfile('gender=female');
    });
}
//gets male profile
function genderMale() {
    let genderMale = document.querySelector('#male');
    genderMale.addEventListener('click', function () {
        getProfile('gender=male');
    });
}