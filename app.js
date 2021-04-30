const BFMOrganizer = require('./BFMOrganizer/BFMOrganizer');
const BFMValidator = require('./BFMValidator/BFMValidator');
const CommissionCalc = require('./CommissionCalc/CommissionCalc');
const fs = require('fs');

const Payload = require('./tests/examplePayload.json');

const CommissionMapper = {
    run: (json) => {
        let searchResults = BFMOrganizer.getItinerariesFromJSON(json);

        let transformedResults = [];
        for (let result of searchResults) {
            let transformedRes = BFMOrganizer.transformItinerary(result);
            transformedResults.push(transformedRes);
        }

        let validatedResults = [];
        for (let itinerary of transformedResults){
            validatedResults.push(BFMValidator.validate(itinerary));
        }

        let commissionedResults = [];
        for (let itinerary of validatedResults){
            let fare = CommissionCalc.getBaseFare(itinerary);
            let percentage = CommissionCalc.getCommissionPercentage(itinerary);

            let payout = CommissionCalc.calcCommissionAmount(fare, percentage);
            (payout) ? itinerary['Payout'] = payout : itinerary['Payout'] = 0;
            
            commissionedResults.push(itinerary);
        }

        let commissionedJSON = JSON.stringify(validatedResults);
        fs.writeFileSync('./output/output.json', commissionedJSON);
        }
}

CommissionMapper.run(Payload);

module.exports = CommissionMapper;