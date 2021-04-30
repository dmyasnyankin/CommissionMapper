const Extractor = require('./SectionExtractor/SectionExtractor');
const Checker = require('./SectionValidator/SectionValidator');
const UA_TATL = require('./Map/uaMap');

const BFMValidator = {
    validate: (itinerary) => {
        for (let section of UA_TATL){
            let sectionOrigin = Extractor.extractOrigin(section)
            let sectionDestination = Extractor.extractDestination(section)
            let sectionClass = Extractor.extractClass(section)
            let sectionCommission = Extractor.extractCommission(section);
    
            let originCheck = Checker.checkOrigin(itinerary, sectionOrigin);
            let destinationCheck = Checker.checkDestination(itinerary, sectionDestination);

            let transAtlanticAirpots = Extractor.extractTransAtlanticAirports(UA_TATL);
            let northAmericanAirports = Extractor.extractNorthAmericanAirports(UA_TATL);
            let transAtlanticCheck = Checker.transAtlanticCheck(itinerary, northAmericanAirports, transAtlanticAirpots);

            let cabinCheck;
            if (section.Section === '1' || section.Section === '4'){
                cabinCheck = Checker.checkClassWithUA(itinerary, sectionClass);
            } else if (section.Section === '3'){
                cabinCheck = Checker.checkClassWithLHG(itinerary, sectionClass);
            } else {
                cabinCheck = Checker.checkClassBasic(itinerary, sectionClass)
            }

            if (originCheck === true && destinationCheck === true && cabinCheck === true && transAtlanticCheck === true){
                itinerary["CommissionPercentage"] = sectionCommission;
                break;
            }
        }
        if (itinerary["CommissionPercentage"] === null){
            itinerary["CommissionPercentage"] = 0;
        };
        return itinerary;
    }
}

module.exports = BFMValidator;