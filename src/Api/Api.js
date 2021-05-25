const API_KEY="eGqyCxMQPVhK5SVopwjXs1xJ28Z2"

export const getMatches=()=>{
    const url=`https://cricapi.com/api/matches/?apikey=${API_KEY}`
    return fetch(url)
    .then((res)=>res.json())
    .catch((err)=>console.log("Error : ",err))
}

export const getMatchesDetail=(id)=>{
    const url = `https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`
    return fetch(url)
    .then(response=>response.json())
    .catch(err=>console.log(err))
}