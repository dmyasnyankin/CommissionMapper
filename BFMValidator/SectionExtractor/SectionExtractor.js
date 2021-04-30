const SectionExtractor = {
    extractOrigin: (section) => {
        return section['Origin'];
    },
    extractDestination: (section) => {
        return section['Destination'];
    },
    extractClass: (section) => {
        return section['Class'];
    },
    extractCommission: (section) => {
        return section['Commission'];
    },
    extractTransAtlanticAirports: (sectionMap) => {
        let section = sectionMap.filter(obj => {
            return obj.Section === '3';
        })
        return section[0].Destination;
    },
    extractNorthAmericanAirports: (sectionMap) => {
        let section = sectionMap.filter(obj => {
            return obj.Section === '6';
        })
        return section[0].Destination;
    }
}

module.exports = SectionExtractor;