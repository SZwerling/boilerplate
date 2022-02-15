//getCurrentCountry
//returns a promise for country object for current location
//like getLocation but less stuff, like getPuzzle

const getPuzzle = async (wordcount) => {
   const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
   if(response.status === 200){
      const data = await response.json()
      return data.puzzle
   } else {
      throw new Error('Unable to get puzzle.')
   }
}

const getCurrentCountry = async () => {
   const location = await getLocation()
   const country = await getCountry(location.country)
   return country
}

//using only fetch which has promisws built in
// const getPuzzle = (wordcount) => {
//    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordcount}`).then((response) => {
//       if(response.status === 200){
//          return response.json()
//       } else {
//          throw new Error('unable to fetch puzzle')
//       }
//    }).then((data) => {
//       return data.puzzle
//    })
// }




const getCountry = async (countryCode)  => {
      const response = await fetch("http://restcountries.eu/rest/v2/all")
      if (response.status === 200) {
         const data = await response.json()
         return data.find((country) => country.alpha2Code === countryCode)
      } else {
         throw new Error("an error has taken place for country");
      }
   }
   

   const getLocation = async () => {
      const response = await fetch('https://ipinfo.io/json/?token=4014b33fc82808')
         if(response.status === 200) {
            return await response.json()
         } else {
            throw new Error('Could not fetch location')
         }
   }

   export { getPuzzle as default };
   

   
