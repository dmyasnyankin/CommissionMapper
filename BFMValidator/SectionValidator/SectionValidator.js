const HelperValidators = require('./HelperValidatorMethods/HelperValidators');

const SectionChecker = {
    checkOrigin: (itinerary, sectionOrigins) => {
        let itineraryOrigin = itinerary.TrueOrigin;
        let result = sectionOrigins.find(obj => {
            return obj.code === itineraryOrigin;
        })
        if (result === undefined){
            return false;
        } else {
            return true;
        }
    },
    checkDestination: (itinerary, sectionDestinations) => {
        let itineraryDestination = itinerary.TrueDestination;
        let result = sectionDestinations.find(obj => {
            return obj.code === itineraryDestination;
        })
        if (result === undefined){
            return false;
        } else {
            return true;
        }
    },
    transAtlanticCheck: (itinerary, validOrigins, validDestinations) => {
        let segments = itinerary.FlightSegments;
        for (let seg of segments) {
            let legArr = seg.SegmentInfo;
            for (let leg of legArr){
                let carrier = leg.OperatingAirline;
                let isCarrier = HelperValidators.singleCarrierCheck(carrier);

                let departure = leg.DepartureAirport;
                let isDeparture = validOrigins.find(obj => {
                    return obj.code === departure;
                });

                let arrival = leg.ArrivalAirport;
                let isArrival = validDestinations.find(obj => {
                    return obj.code === arrival;
                });

                if (isArrival !== undefined && isDeparture !== undefined && isCarrier) {
                    return true;
                }
            }
        }
        return false;
    },
    checkClassBasic: (itinerary, sectionClasses) => {
        let segments = itinerary.FlightSegments;
        let result = false;
        for (let seg of segments) {
            let legArr = seg.SegmentInfo;
            for (let leg of legArr){
                let cabin = leg.CabinClass;
                let carrier = leg.OperatingAirline;

                if (cabin === 'A') {
                    let isAC = HelperValidators.checkAC(carrier);
                    if (isAC === true) {
                        return false;
                    }
                }

                if (sectionClasses.includes(cabin)) {
                    result = true;
                    continue;
                }
            }
        } 
        return result;
    },
    checkClassWithUA: (itinerary, sectionClasses) => {
        let segments = itinerary.FlightSegments;
        let result = false;
        for (let seg of segments) {
            let legArr = seg.SegmentInfo;
            for (let leg of legArr){
                let cabin = leg.CabinClass;
                let carrier = leg.OperatingAirline;

                if ( cabin === 'A') {
                    let carrierCheck = HelperValidators.checkUA(carrier);
                    if (carrierCheck === false) {
                        return false;
                    }
                }

                if (sectionClasses.includes(cabin)) {
                    result = true;
                    continue;
                }
            }
        } 
        return result;
    },
    checkClassWithLHG: (itinerary, sectionClasses) => {
        let segments = itinerary.FlightSegments;
        for (let seg of segments) {
            let legArr = seg.SegmentInfo;
            for (let leg of legArr){
                let cabin = leg.CabinClass;
                let carrier = leg.OperatingAirline;

                if (sectionClasses.includes(cabin)) {
                    let carrierCheck = HelperValidators.checkLHG(carrier);
                    if (carrierCheck === false) {
                        return false;
                    }
                    continue;
                } else {
                    return false;
                }
            }
        }
        return true;
    },
}

module.exports = SectionChecker;