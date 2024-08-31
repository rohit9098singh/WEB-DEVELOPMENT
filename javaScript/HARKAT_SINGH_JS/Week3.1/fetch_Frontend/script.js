//  function getAnimalData(){
//     alert("i am working here only i will be using the fetch function");

//======================= mutliple ways are there to fetch the api =====================================
// 1ST WAY     
    // fetch("https://fakerapi.it/api/v2/person")
    // .then(function(response){
    //   response.json()// this is also returning a promise so add another then at here 
    //    .then(function(finalData){
    //        console.log(finalData);
           
    //    })
       
    // })

// 2ND ANOTHER WAY TO DO SO
async function getAnimalData() {
    try {
        // Await the fetch promise
        const resp = await fetch("https://fakerapi.it/api/v2/person");

        // Check if the response is OK (status in the range 200-299)
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        // Await the JSON conversion
        const finaldata = await resp.json();

        // Log the final data
        console.log(finaldata);
    } catch (error) {
        // Handle any errors that occur during fetch or JSON conversion
        console.error('Error fetching data:', error);
    }
}
