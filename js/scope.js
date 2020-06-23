const city = 'New York City';

const logCitySkyline = () =>{
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());


//global scope
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () =>{
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());
console.log(stars)

// block scope
const logVisibleLightWaves = () =>{
    const lightWaves = 'Moonlight';
    let region = 'The Artic';
    if (region === 'The Arctic'){
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }
    console.log(lightWaves);
}
console.log(logVisibleLightWaves());
