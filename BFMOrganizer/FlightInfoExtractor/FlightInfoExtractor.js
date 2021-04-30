const LegExtractor = require('./LegInfoExtractor/LegExtractor');
const CabinExtractor = require('./CabinInfoExtractor/CabinInfoExtractor');

const FlightInfoExtractor = {
    getFlightSegments: (itinerary) => {
        let segments = itinerary.AirItinerary.OriginDestinationOptions.OriginDestinationOption;

        let segmentsArr = [];
        let legNum = 0;
        let segNum = 0;
        for (let segment of segments) {
            let legs = segment.FlightSegment;

            let segObj = {};
            let segmentLegs = [];
            for (let leg of legs) {
                let legObj = {};

                let departureDate = LegExtractor.getDepartureDate(leg);    
                let arrivalDate = LegExtractor.getArrivalDate(leg);                
                let departureAirport = LegExtractor.getDepartureAirport(leg);                
                let arrivalAirport = LegExtractor.getArrivalAirport(leg);           
                let operatingAirline = LegExtractor.getOperatingAirline(leg);   
                let operatingCarrier = LegExtractor.getOperatingCarrier(leg);
                let marketingCarrier = LegExtractor.getMarketingCarrier(leg); 
                let cabinClass = CabinExtractor.getCabin(itinerary, legNum);
                legObj['DepartureDate'] = departureDate;
                legObj['ArrivalDate'] = arrivalDate;
                legObj['DepartureAirport'] = departureAirport;
                legObj['ArrivalAirport'] = arrivalAirport;
                legObj['OperatingAirline'] = operatingAirline;
                legObj['OperatingCarrier'] = operatingCarrier;
                legObj['MarketingCarrier'] = marketingCarrier;
                legObj['CabinClass'] = cabinClass;

                segmentLegs.push(legObj);
                legNum += 1;
            }
            segObj['SegmentNumber'] = segNum + 1;
            segObj['SegmentInfo'] = segmentLegs;
            segmentsArr.push(segObj);
            segNum += 1;
        }
        return segmentsArr;
    }
}

module.exports = FlightInfoExtractor