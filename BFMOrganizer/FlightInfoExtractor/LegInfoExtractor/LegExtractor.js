
const LegInfoExtractor = {
    getDepartureDate: (leg) => {
        return leg.DepartureDateTime;
    },
    getArrivalDate: (leg) => {
        return leg.ArrivalDateTime;
    },
    getDepartureAirport: (leg) => {
        return leg.DepartureAirport.LocationCode;
    },
    getArrivalAirport: (leg) => {
        return leg.ArrivalAirport.LocationCode;
    },
    getOperatingAirline: (leg) => {
        return leg.OperatingAirline.Code;
    },
    getOperatingCarrier: (leg) => {
        let operatingAirline = leg.OperatingAirline.Code;
        let operatingFlightNumber = leg.OperatingAirline.FlightNumber;
        const operatingCarrier = `${operatingAirline} ${operatingFlightNumber}`;
        return operatingCarrier;

    },
    getMarketingCarrier: (leg) => {
        let marketingAirline = leg.MarketingAirline.Code;
        let marketingFlightNumber = leg.FlightNumber;
        const marketingCarrier = `${marketingAirline} ${marketingFlightNumber}`;
        return marketingCarrier;
    }
}

module.exports = LegInfoExtractor;
