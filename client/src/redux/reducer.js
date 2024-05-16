import { createSlice } from "@reduxjs/toolkit";
import properties from "../db.json";

export const propertiesSlice = createSlice({
    name: "properties",
    initialState: {
        all: properties,
        combineFilters: [],
        propertiesFiltered: [],

    },
    reducers: {
        getProperties: (state) => {
            state.all = properties
        },
        filterByApts: (state) => {

            const aptsFiltered = properties.filter(property => property.type === 1)
            state.all = aptsFiltered
            // state.combineFilters = [...state.combineFilters, ...aptsFiltered]//--> combinacion filtros
            // state.all = state.combineFilters

        },
        filterByHouses: (state) => {
            const housesFiltered = properties.filter(property => property.type === 0)
            state.all = housesFiltered
            // state.combineFilters = [...state.combineFilters, ...housesFiltered]
            // state.all = state.combineFilters
        },
        filterByOffices: (state) => {
            const officesFiltered = properties.filter(property => property.type === 2)
            state.all = officesFiltered
            // state.combineFilters = [...state.combineFilters, ...officesFiltered]
            // state.all = state.combineFilters
        },
        filterByCommercial: (state) => {
            const comercialFiltered = properties.filter(property => property.type === 3)
            state.all = comercialFiltered
            // state.combineFilters = [...state.combineFilters, ...comercialFiltered]
            // state.all = state.combineFilters
        }
    },
})

export const { getProperties, filterByApts, filterByHouses, filterByOffices, filterByCommercial } = propertiesSlice.actions;

export default propertiesSlice.reducer





// let initialState = {
//     properties: [],
//     property: [],
//     propertiesFiltered: [],
//     combineFilters: [],
// };

// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case "GET_PROPERTIES":
//             return {
//                 ...state,
//                 properties: action.payload
//             };
//         case "GET_PROPERTY":
//             return {
//                 ...state,
//                 property: action.payload
//             };
//         case "FILTER_BY_APTS":
//             // const aptToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
//             const aptsFiltered = properties.filter(property => property.type === 1)
//             return {
//                 ...state,
//                 properties: aptsFiltered
//             };
//         case "FILTER_BY_HOUSES":
//             // const housesToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
//             const housesFiltered = properties.filter(property => property.type === 0)
//             return {
//                 ...state,
//                 properties: housesFiltered
//             };
//         case "FILTER_BY_OFFICES":
//             // const officesToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
//             const officesFiltered = properties.filter(property => property.type === 2)
//             return {
//                 ...state,
//                 properties: officesFiltered
//             };
//         case "FILTER_BY_COMMERCIAL":
//             // const comercialToFilter = state.combineFilters ? state.propertiesFiltered:state.properties
//             const comercialFiltered = properties.filter(property => property.type === 3)
//             return {
//                 ...state,
//                 properties: comercialFiltered
//             };
//         default:
//             return state;
//     }
// }
