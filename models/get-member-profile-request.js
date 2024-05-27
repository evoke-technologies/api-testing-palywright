function getMemberProfileRequest() {
    const graphqlMutation = 
        `query{cDPUserProfile {
          id
          memberId
          email
          firstName
          lastName
          title
          gender
          birthday {
            day
            month
          }
          profileType
          rewardPoints
          createdDate
          phones {
            work
            home
            mobile
          }
          address {
            streetAddress1
            locality
            region
            postalCode
            country
          }
          interests {
            leisureTravel
            businessTravel
          }
          trips {
            itineraryId
            reservations {
              confirmNumber
              startDate
              endDate
              numberOfNights
              guestFirstName
              guestLastName
              visitLogNo
              status
              hotel {
                id
                name
                imageUrl
                address {
                  streetAddress1
                  locality
                  region
                  postalCode
                  country
                }
              }
              reward {
                isEligible
                rewardPoints
              }
            }
          }
          rewards {
            isEligible
            operation
            rewardPoints
            transactionDate
            description
            rewardTransactionNo
          }
        }}`;
    const requestBody = {
      query: graphqlMutation,
      variables: {}
  };
  return requestBody;
}
module.exports = {getMemberProfileRequest}