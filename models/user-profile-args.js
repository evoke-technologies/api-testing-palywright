
var user_profile_args = '';

function getUserProfileArgs(){
    user_profile_args = localStorage.getItem('args');
    return user_profile_args;
}

function setUserProfileArgs(args){
    user_profile_args = args;
}
module.exports = {getUserProfileArgs , setUserProfileArgs};