


//action para filtro por apartamentos
export function filterByApts(payload){
    return {
        type: "FILTER_BY_APTS",
        payload
    }
}



//action para filtro por casas


export function filterByHouses(payload){
    console.log(payload)
    return {
        type: "FILTER_BY_HOUSES",
        payload
    }
}





//action para filtro por comercial

export function filterByComercial(payload){
    return {
        type: "FILTER_BY_COMMERCIAL",
        payload
    }
}

   




// action para filtro por oficinas

export function filterByOffices(payload){
    return {
        type: "FILTER_BY_OFFICES",
        payload
    }
}

