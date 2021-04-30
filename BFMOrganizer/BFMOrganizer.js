const FlightExtractor = require('./FlightInfoExtractor/FlightInfoExtractor');
const PriceExtractor = require('./PriceInfoExtractor/PriceInfoExtractor');
const ExtractorHelpers = require('./HelperExtractorMethods/HelperExtractorMethods');

const BFMOrganizer = {
    getItinerariesFromJSON: (json) => {
        try {
            return json.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary;
        } catch (err) {
            throw 'Invalid Search Payload Entered.';
        }
    },
    transformItinerary: (itinerary) => {
        let transformedItin = {};

        let seqNum = ExtractorHelpers.getSequenceNum(itinerary);
        let tripType = ExtractorHelpers.getTripType(itinerary);

        let flightInfo = FlightExtractor.getFlightSegments(itinerary);
        let trueOrigin = ExtractorHelpers.getTrueOrigin(flightInfo);
        let trueDestination = ExtractorHelpers.getTrueDestination(flightInfo);

        let baseFare = PriceExtractor.getBaseFare(itinerary);
        let totalTaxes = PriceExtractor.getTotalTaxes(itinerary);
        let totalFare = PriceExtractor.getTotalFare(itinerary);

        transformedItin['SequenceNumber'] = seqNum;
        transformedItin['TripType'] = tripType;

        transformedItin['TrueOrigin'] = trueOrigin;
        transformedItin['TrueDestination'] = trueDestination;
        transformedItin['FlightSegments'] = flightInfo;

        transformedItin['BaseFare'] = baseFare;
        transformedItin['TotalTaxes'] = totalTaxes;
        transformedItin['TotalFare'] = totalFare;
        transformedItin['CommissionPercentage'] = null;

        return transformedItin;
    }
}

module.exports = BFMOrganizer;
