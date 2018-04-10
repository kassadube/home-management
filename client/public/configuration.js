
var URL_PROTOCOL_TYPE = {
    HTTP: "http://",
    HTTPS: "https://"
};

var API_IP = {
    DEVALORE: "194.90.199.243",
    POINTER: "207.232.46.92"
} 

var URL_RESOURCE_NAME = {
    LOCAL:"localhost:51819/",
    TEST: API_IP.POINTER+"/fleet.core.api/",
    DEV: API_IP.DEVALORE+"/fleet.core.api/",
    QA: "10.169.1.5/fleetcore.api/",
    PROD: API_IP.POINTER+"/fleet.core.api/"
};

var CURRENT_URL_PROTOCOL_TYPE = URL_PROTOCOL_TYPE.HTTP;
var CURRENT_URL_RESOURCE_NAME = URL_RESOURCE_NAME.TEST; 

function getFullUrlPath (relativePath){
    return CURRENT_URL_PROTOCOL_TYPE + CURRENT_URL_RESOURCE_NAME + relativePath;
}


var config = {
    LOGIN_ERROR_MESSAGE: "txtLoginError",
    URL: {
        SIGNIN: getFullUrlPath("token"),
        SIGNUP: getFullUrlPath("token/signup"),
        TEST: getFullUrlPath("token/test"),        
        GENERAL:{
            ACCOUNT:getFullUrlPath('api/site/definition')
        }
    },
    SiteURL:{
        HOME : "/",
        MESSAGES : "/messages",
        FLEET: "/fleet"
    },
    MAP:{
        KEY:"client=gme-pointerlocalizacion",
        VERSION:"v=3"
    }
};