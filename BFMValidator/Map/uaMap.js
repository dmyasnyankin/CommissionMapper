const allAirports = require('./airports.json');

const viableTransAtlanticCountries = allAirports.filter(element => element.category === 'EU');
const belgiumAirports = allAirports.filter(element => element.country === 'Belgium');
const ukAirports = allAirports.filter(element => element.country === 'United Kingdom');
const irelandAirports = allAirports.filter(element => element.country === 'Ireland');
const usaAirports = allAirports.filter(element => element.country === 'United States');
const canadaAirports = allAirports.filter(element => element.country === 'Canada');

// CLASSES
function classRemove(arr, values) {   
    return arr.filter(function(el){ 
        if (!values.includes(el)) return el; 
    });
}
const allClasses = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'M', 'N', 'O', 'P', 'R', 'U', 'Y', 'Z'];
const sectionOneClasses = classRemove(allClasses, ['F']);
const sectionTwoClasses = [...allClasses];
const sectionThreeClasses = ['A', 'F'];
const sectionFourClasses = classRemove(allClasses, ['F']);
const sectionFiveClassesA = classRemove(allClasses, ['C', 'D', 'F', 'J']);
const sectionFiveClassesB = ['C', 'D', 'J'];
const sectionSixClasses = [...allClasses];

// ORIGINS
const originExceptions = ['DEN', 'IAD', 'IAH', 'LAX', 'ORD', 'SFO', 'EWR', 'JFK'];
const exceptionalOrigins = allAirports.filter(element => originExceptions.includes(element.code));

const sectionOneOrigins = [...usaAirports];
const sectionTwoOriginsA = exceptionalOrigins.filter(element => ['DEN', 'IAD', 'IAH', 'LAX', 'ORD', 'SFO'].includes(element.code));
const sectionTwoOriginsB = exceptionalOrigins.filter(element => ['EWR', 'IAD', 'IAH', 'JFK', 'ORD', 'SFO'].includes(element.code));
const sectionTwoOriginsC = exceptionalOrigins.filter(element => ['EWR', 'IAD', 'JFK'].includes(element.code));
const sectionTwoOriginsD = exceptionalOrigins.filter(el => el.code === 'IAD');
const sectionTwoOriginsE = exceptionalOrigins.filter(element => ['IAD', 'LAX', 'SFO'].includes(element.code));
const sectionThreeOrigins =  canadaAirports.concat(usaAirports);
const sectionFourOrigins = canadaAirports.concat(exceptionalOrigins.filter(element => ['DEN', 'IAD', 'IAH', 'SFO'].includes(element.code)))
const sectionFiveOriginsA = [...usaAirports];
const sectionFiveOriginsB = [...usaAirports];
const sectionSixOrigins = [...viableTransAtlanticCountries];

// DESTINATIONS
const destinationExceptions = ['FRA', 'MUC', 'GVA', 'VIE', 'ZRH'];
const exceptionalDestinations = allAirports.filter(element => destinationExceptions.includes(element.code));

const sectionOneDestinations = belgiumAirports.concat(ukAirports).concat(irelandAirports);
const sectionTwoDestinationsA = exceptionalDestinations.filter( el => el.code === 'FRA');
const sectionTwoDestinationsB = exceptionalDestinations.filter( el => el.code === 'MUC');
const sectionTwoDestinationsC = exceptionalDestinations.filter( el => el.code === 'GVA');
const sectionTwoDestinationsD = exceptionalDestinations.filter( el => el.code === 'VIE');
const sectionTwoDestinationsE = exceptionalDestinations.filter( el => el.code === 'ZRH');
const sectionThreeDestinations = [...viableTransAtlanticCountries];
const sectionFourDestinations = [...viableTransAtlanticCountries];
const sectionFiveDestinationsA = [...viableTransAtlanticCountries];
const sectionFiveDestinationsB = [...viableTransAtlanticCountries];
const sectionSixDestinations = canadaAirports.concat(usaAirports);

// * UA_TATL MAP
const UA_TATL = [
    {
        'Section': '1',
        'Origin': sectionOneOrigins,
        'Destination': sectionOneDestinations,
        'Class': sectionOneClasses,
        'Commission': 22,
        'Legs': '',
    },
    {
        'Section': '2a',
        'Origin': sectionTwoOriginsA,
        'Destination': sectionTwoDestinationsA,
        'Class': sectionTwoClasses,
        'Commission': 2,
        'Legs': '',
    },
    {
        'Section': '2b',
        'Origin': sectionTwoOriginsB,
        'Destination': sectionTwoDestinationsB,
        'Class': sectionTwoClasses,
        'Commission': 2,
        'Legs': '',
    },
    {
        'Section': '2c',
        'Origin': sectionTwoOriginsC,
        'Destination': sectionTwoDestinationsC,
        'Class': sectionTwoClasses,
        'Commission': 2,
        'Legs': '',
    },
    {
        'Section': '2d',
        'Origin': sectionTwoOriginsD,
        'Destination': sectionTwoDestinationsD,
        'Class': sectionTwoClasses,
        'Commission': 2,
        'Legs': '',
    },
    {
        'Section': '2e',
        'Origin': sectionTwoOriginsE,
        'Destination': sectionTwoDestinationsE,
        'Class': sectionTwoClasses,
        'Commission': 2,
        'Legs': '',
    },
    {
        'Section': '3',
        'Origin': sectionThreeOrigins,
        'Destination': sectionThreeDestinations,
        'Class': sectionThreeClasses,
        'Commission': 10,
        'Legs': '',
    },
    {
        'Section': '4',
        'Origin': sectionFourOrigins,
        'Destination': sectionFourDestinations,
        'Class': sectionFourClasses,
        'Commission': 12,
        'Legs': '',
    },
    {
        'Section': '5a',
        'Origin': sectionFiveOriginsA,
        'Destination': sectionFiveDestinationsA,
        'Class': sectionFiveClassesA,
        'Commission': 18,
        'Legs': '',
    },
    {
        'Section': '5b',
        'Origin': sectionFiveOriginsB,
        'Destination': sectionFiveDestinationsB,
        'Class': sectionFiveClassesB,
        'Commission': 22,
        'Legs': '',
    },
    {
        'Section': '6',
        'Origin': sectionSixOrigins,
        'Destination': sectionSixDestinations,
        'Class': sectionSixClasses,
        'Commission': 8,
        'Legs': '',
    }
]

module.exports = UA_TATL;
