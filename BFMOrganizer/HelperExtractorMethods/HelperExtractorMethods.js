
const HelperExtractorMethods = {
    getSequenceNum: (itinerary) => {
        return itinerary.SequenceNumber;
    },
    getTripType: (itinerary) => {
        return itinerary.AirItinerary.DirectionInd;
    },
    getTrueOrigin: (flightSegments) => {
        let firstAirport = flightSegments[0].SegmentInfo[0].DepartureAirport;
        return firstAirport;
    },
    getTrueDestination: (flightSegments) => {
        let lastLegIndex = Object.keys(flightSegments[0].SegmentInfo).length - 1;
        let lastAirport = flightSegments[0].SegmentInfo[lastLegIndex].ArrivalAirport;
        return lastAirport;
    }
}

module.exports = HelperExtractorMethods;