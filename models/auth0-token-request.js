const{loadState}= require('../utils/shared-state')

     function getAuthTokenRequest() {
        const email = loadState('CompleteProfileEmail').email;
        const password = loadState('CompleteProfilePassword').password;
    
        const requestBody ={
            query: `query {
              auth0Token(userName: "${email}", password: "${password}")
            }`,
            variables: {}
          };
    
       // console.log('Request Body:', requestBody); // Check the request body in console for debugging
    
        return requestBody;
 };
 module.exports={getAuthTokenRequest}