const {createUserTestData}= require('../utils/user-test-data')

function getUserProfileRequestBody() {
    // Create test data
const userData= createUserTestData();
const graphqlMutation = `mutation {
    insertOrUpdateUserProfile(updateUserProfileRequest: {
        email: "${userData.email}",
        firstName: "${userData.firstName}",
        lastName: "${userData.lastName}",
        source: "${userData.source}",
        enrollment: {
            hotel_id: "${userData.hotelId}",
            hotel_name: ""
        }
    }) {
        message,
        statusCode,
        email,
        guestId,
        args
    }
}`;

    const requestBody= {
        query: graphqlMutation
    }
    return requestBody;
}

// Example usage
module.exports= {getUserProfileRequestBody}
