# SinopiaServer.LDPApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBase**](LDPApi.md#getBase) | **GET** /repository | Get metadata for the base container.
[**repositoryGroupIDDelete**](LDPApi.md#repositoryGroupIDDelete) | **DELETE** /repository/{groupID} | 
[**repositoryGroupIDHead**](LDPApi.md#repositoryGroupIDHead) | **HEAD** /repository/{groupID} | 
[**repositoryGroupIDOptions**](LDPApi.md#repositoryGroupIDOptions) | **OPTIONS** /repository/{groupID} | 
[**repositoryGroupIDPatch**](LDPApi.md#repositoryGroupIDPatch) | **PATCH** /repository/{groupID} | 
[**repositoryGroupIDPost**](LDPApi.md#repositoryGroupIDPost) | **POST** /repository/{groupID} | Create new Group.
[**repositoryGroupIDPut**](LDPApi.md#repositoryGroupIDPut) | **PUT** /repository/{groupID} | 
[**repositoryHead**](LDPApi.md#repositoryHead) | **HEAD** /repository | Get headers only of base container request.
[**repositoryOptions**](LDPApi.md#repositoryOptions) | **OPTIONS** /repository | 
[**repositoryPost**](LDPApi.md#repositoryPost) | **POST** /repository | Create new Group within the base container.
[**repositoryPut**](LDPApi.md#repositoryPut) | **PUT** /repository | Update metadata on base container.


<a name="getBase"></a>
# **getBase**
> LDPContainer getBase()

Get metadata for the base container.

Get the RDF metadata (default serialization is JSON-LD) for the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure API key authorization: RemoteUser
var RemoteUser = defaultClient.authentications['RemoteUser'];
RemoteUser.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//RemoteUser.apiKeyPrefix = 'Token';

var apiInstance = new SinopiaServer.LDPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBase(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LDPContainer**](LDPContainer.md)

### Authorization

[RemoteUser](../README.md#RemoteUser)

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryGroupIDDelete"></a>
# **repositoryGroupIDDelete**
> repositoryGroupIDDelete(groupID)



Deletes LDP container 

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = 56; // Number | LDP Container to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryGroupIDDelete(groupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **Number**| LDP Container to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryGroupIDHead"></a>
# **repositoryGroupIDHead**
> repositoryGroupIDHead(groupID)



Gets the header values that would normally be found in the header of GET

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = 56; // Number | LDP Container to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryGroupIDHead(groupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **Number**| LDP Container to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryGroupIDOptions"></a>
# **repositoryGroupIDOptions**
> repositoryGroupIDOptions(groupID)



Gets options for HTTP methods to utilize for this container

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = 56; // Number | LDP Container to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryGroupIDOptions(groupID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **Number**| LDP Container to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryGroupIDPatch"></a>
# **repositoryGroupIDPatch**
> repositoryGroupIDPatch(groupID, resource)



Updates LDP container 

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = 56; // Number | LDP Container to get

var resource = new SinopiaServer.Resource(); // Resource | Resource to insert into container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryGroupIDPatch(groupID, resource, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **Number**| LDP Container to get | 
 **resource** | [**Resource**](Resource.md)| Resource to insert into container | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryGroupIDPost"></a>
# **repositoryGroupIDPost**
> repositoryGroupIDPost(groupID, resource, opts)

Create new Group.

Create a resource (defined via JSON-LD in payload) within a Group.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group (ldp:Container) who is defining it's own resources or graph within Sinopia.

var resource = new SinopiaServer.Resource(); // Resource | Resource to insert into container

var opts = { 
  'slug': "slug_example", // String | Suggested URI for resource
  'contentType': "contentType_example" // String | Content-Type of resource
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryGroupIDPost(groupID, resource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group (ldp:Container) who is defining it&#39;s own resources or graph within Sinopia. | 
 **resource** | [**Resource**](Resource.md)| Resource to insert into container | 
 **slug** | **String**| Suggested URI for resource | [optional] 
 **contentType** | **String**| Content-Type of resource | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryGroupIDPut"></a>
# **repositoryGroupIDPut**
> repositoryGroupIDPut(groupID, resource, opts)



Updates the group description.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = 56; // Number | LDP Container to get

var resource = new SinopiaServer.Resource(); // Resource | Resource to insert into container

var opts = { 
  'slug': "slug_example", // String | Suggested URI for resource
  'contentType': "contentType_example" // String | Content-Type of resource
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryGroupIDPut(groupID, resource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **Number**| LDP Container to get | 
 **resource** | [**Resource**](Resource.md)| Resource to insert into container | 
 **slug** | **String**| Suggested URI for resource | [optional] 
 **contentType** | **String**| Content-Type of resource | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryHead"></a>
# **repositoryHead**
> repositoryHead()

Get headers only of base container request.

Gets the header values that would normally be found in the header of GET on base container

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryHead(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryOptions"></a>
# **repositoryOptions**
> repositoryOptions()



Gets options for HTTP methods to utilize for the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryPost"></a>
# **repositoryPost**
> repositoryPost(groupMD, opts)

Create new Group within the base container.

Create a new Group (defined via JSON-LD in payload) within the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupMD = new SinopiaServer.Resource(); // Resource | Group metadata to insert into base container and describe the group.

var opts = { 
  'slug': "slug_example", // String | The group (ldp:Container) who is defining it's own entities or graph within Sinopia.
  'contentType': "contentType_example" // String | Content-Type of resource, with preference for JSON-LD.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryPost(groupMD, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupMD** | [**Resource**](Resource.md)| Group metadata to insert into base container and describe the group. | 
 **slug** | **String**| The group (ldp:Container) who is defining it&#39;s own entities or graph within Sinopia. | [optional] 
 **contentType** | **String**| Content-Type of resource, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="repositoryPut"></a>
# **repositoryPut**
> repositoryPut(metadata, opts)

Update metadata on base container.

Update metadata of base container with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var metadata = new SinopiaServer.Resource(); // Resource | New base container metadata to assert on the container.

var opts = { 
  'contentType': "contentType_example" // String | Content-Type of resource
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.repositoryPut(metadata, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metadata** | [**Resource**](Resource.md)| New base container metadata to assert on the container. | 
 **contentType** | **String**| Content-Type of resource | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

