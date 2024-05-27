import { test, expect } from "@playwright/test"
const { faker } = require('@faker-js/faker');
const { getUserProfileRequestBody } = require('../../models/user-profile-request')
const { getRequestHeaders } = require('../../utils/get-request-headers')
const { getToken } = require('../../utils/get-access-token')
const {saveState}= require('../../utils/shared-state')
const {getCompleteProfileRequest} = require('../../models/complete-profile-request');
const{createCompleProfileTestData}= require('../../utils/user-test-data')

test.describe('Insert or  Update User Profile and Complete Profile', async () => {
    var access_token
    test.beforeAll('token generation', async ({ request }) => {
        access_token = await getToken(request)
       // process.env.TEST_RESULTS = access_token;
        expect(access_token).toBeDefined();
        
    })
     test('Insert or Update User Profile and Complete Profile with random data', async ({ request }) => {
         const response = await request.post('https://gateway-dev-sonesta.azure-api.net/guest/graphql', {
             headers: getRequestHeaders(access_token),
             
             data: JSON.stringify(getUserProfileRequestBody())
         });
         const responseData = await response.json();
         console.log(responseData);
         expect(responseData.data.insertOrUpdateUserProfile.message).toEqual("Email sent successfully!")
         expect(responseData.data.insertOrUpdateUserProfile.statusCode).toBe("200");
        const argValue = responseData.data.insertOrUpdateUserProfile.args;
        saveState('UserProfile', {argValue});
        const compleProfileTestData = createCompleProfileTestData();
        const completeProfileResponse = await request.post('https://gateway-dev-sonesta.azure-api.net/guest/graphql', {
            headers: getRequestHeaders(access_token),
            data: JSON.stringify(getCompleteProfileRequest(compleProfileTestData))
        });

        const responseBody = await completeProfileResponse.json();
        console.log(responseBody);
        expect(response.ok()).toBeTruthy();

        expect(responseBody.data.completeSignUpProcess.statusCode).toBe("200");
        expect(responseBody.data.completeSignUpProcess.message).toEqual("Profile Completed Successfully!");
        const email= responseBody.data.completeSignUpProcess.email;
        const password = compleProfileTestData.password;
        saveState('CompleteProfilePassword', {password});
        saveState('CompleteProfileEmail', {email});

    
     })
})

