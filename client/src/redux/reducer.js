let initialState = {
    properties: [],
    property: [],
    propertiesFiltered: [],
    combineFilters: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PROPERTIES":
            return {
                ...state,
                properties: action.payload
            };
        case "GET_PROPERTY":
            return {
                ...state,
                property: action.payload
            };
        case "FILTER_BY_APTS":
            // const aptToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
            const aptsFiltered = properties.filter(property => property.type === 1)
            return {
                ...state,
                properties: aptsFiltered
            };
        case "FILTER_BY_HOUSES":
            // const housesToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
            const housesFiltered = properties.filter(property => property.type === 0)
            return {
                ...state,
                properties: housesFiltered
            };
        case "FILTER_BY_OFFICES":
            // const officesToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
            const officesFiltered = properties.filter(property => property.type === 2)
            return {
                ...state,
                properties: officesFiltered
            };
        case "FILTER_BY_COMMERCIAL":
            // const comercialToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
            const comercialFiltered = properties.filter(property => property.type === 3)
            return {
                ...state,
                properties: comercialFiltered
            };
        default:
            return state;
    }
}
