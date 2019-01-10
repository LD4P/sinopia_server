# SinopiaServer.DefaultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheck**](DefaultApi.md#healthCheck) | **GET** /healthcheck | Health Check


<a name="healthCheck"></a>
# **healthCheck**
> HealthCheckResponse healthCheck()

Health Check

The healthcheck endpoint provides information about the health of the service.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.DefaultApi();
apiInstance.healthCheck().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

