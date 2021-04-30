
const CabinInfoExtractor = {
    getCabin: (itinerary, index) => {
        let isFare = itinerary.AirItineraryPricingInfo[0].FareReturned;
        if (isFare) {
            let fareInfos = itinerary.AirItineraryPricingInfo[0].FareInfos.FareInfo;
            return fareInfos[index].TPA_Extensions.Cabin.Cabin;
        } else {
            return 'Cabin Not Specified'
        }
    }
}

module.exports = CabinInfoExtractor;
