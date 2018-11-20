# SinopiaServer.DefaultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroup**](DefaultApi.md#getGroup) | **GET** /resources/{groupID} | Query for RDF about a Group.
[**healthCheck**](DefaultApi.md#healthCheck) | **GET** /healthcheck | Health Check


<a name="getGroup"></a>
# **getGroup**
> LDPContainer getGroup(groupID)

Query for RDF about a Group.

Get the RDF (default, JSON-LD) for a Group.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure API key authorization: RemoteUser
var RemoteUser = defaultClient.authentications['RemoteUser'];
RemoteUser.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//RemoteUser.apiKeyPrefix = 'Token';

var apiInstance = new SinopiaServer.DefaultApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia. LDP Container to get.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroup(groupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. LDP Container to get. | 

### Return type

[**LDPContainer**](LDPContainer.md)

### Authorization

[RemoteUser](../README.md#RemoteUser)

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="healthCheck"></a>
# **healthCheck**
> HealthCheckResponse healthCheck()

Health Check

The healthcheck endpoint provides information about the health of the service.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.healthCheck(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

