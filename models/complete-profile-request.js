const  {createCompleProfileTestData} = require('../utils/user-test-data')
const {loadState} = require('../utils/shared-state')
function getCompleteProfileRequest(compleProfileTestData){
    //const args = getUserProfileArgs();
    const userProfileTestData = loadState('UserProfile');
  const args = userProfileTestData?.argValue;

  /* const userProfileTestData = loadState('UserProfile');
  const argsValue = userProfileTestData?.argsValue;*/
    const graphqlMutation = `mutation {
        completeSignUpProcess(updateUserProfileRequest: {
          newPassword: "${compleProfileTestData.password}",
          address: {
            addressLine1: "${compleProfileTestData.streetAddress1}",
            city: "${compleProfileTestData.locality}",
            postalCode: "${compleProfileTestData.postalCode}",
            stateCode: "${compleProfileTestData.stateCode}",
            countryCode: "${compleProfileTestData.country}"
          },
          phones: {
            mobile: "${compleProfileTestData.mobileNumber}"
          },
          args: "${args}"
        }) {
          message,
          statusCode,
          email
        }
      }`;



const requestBody = {
    query: graphqlMutation,
    variables: {}
};
return requestBody;
}

module.exports= {getCompleteProfileRequest}
