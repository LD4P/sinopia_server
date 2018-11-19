# SinopiaServer.LDPApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupIDDelete**](LDPApi.md#groupIDDelete) | **DELETE** /{groupID} | 
[**groupIDHead**](LDPApi.md#groupIDHead) | **HEAD** /{groupID} | 
[**groupIDOptions**](LDPApi.md#groupIDOptions) | **OPTIONS** /{groupID} | 
[**groupIDPatch**](LDPApi.md#groupIDPatch) | **PATCH** /{groupID} | 
[**groupIDPost**](LDPApi.md#groupIDPost) | **POST** /{groupID} | Create new Group.
[**groupIDPut**](LDPApi.md#groupIDPut) | **PUT** /{groupID} | 
[**resourcesDelete**](LDPApi.md#resourcesDelete) | **DELETE** /resources | 
[**resourcesHead**](LDPApi.md#resourcesHead) | **HEAD** /resources | 
[**resourcesOptions**](LDPApi.md#resourcesOptions) | **OPTIONS** /resources | 
[**resourcesPatch**](LDPApi.md#resourcesPatch) | **PATCH** /resources | 
[**resourcesPost**](LDPApi.md#resourcesPost) | **POST** /resources | Create new Group within the base container.
[**resourcesPut**](LDPApi.md#resourcesPut) | **PUT** /resources | Create new Group within the baseline container.


<a name="groupIDDelete"></a>
# **groupIDDelete**
> groupIDDelete(groupID)



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
apiInstance.groupIDDelete(groupID, callback);
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

<a name="groupIDHead"></a>
# **groupIDHead**
> groupIDHead(groupID)



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
apiInstance.groupIDHead(groupID, callback);
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

<a name="groupIDOptions"></a>
# **groupIDOptions**
> groupIDOptions(groupID)



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
apiInstance.groupIDOptions(groupID, callback);
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

<a name="groupIDPatch"></a>
# **groupIDPatch**
> groupIDPatch(groupID, resource)



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
apiInstance.groupIDPatch(groupID, resource, callback);
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

<a name="groupIDPost"></a>
# **groupIDPost**
> groupIDPost(groupID, resource, opts)

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
apiInstance.groupIDPost(groupID, resource, opts, callback);
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

<a name="groupIDPut"></a>
# **groupIDPut**
> groupIDPut(groupID, resource, opts)



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
apiInstance.groupIDPut(groupID, resource, opts, callback);
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

<a name="resourcesDelete"></a>
# **resourcesDelete**
> resourcesDelete(groupID)



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
apiInstance.resourcesDelete(groupID, callback);
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

<a name="resourcesHead"></a>
# **resourcesHead**
> resourcesHead(groupID)



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
apiInstance.resourcesHead(groupID, callback);
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

<a name="resourcesOptions"></a>
# **resourcesOptions**
> resourcesOptions(groupID)



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
apiInstance.resourcesOptions(groupID, callback);
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

<a name="resourcesPatch"></a>
# **resourcesPatch**
> resourcesPatch(resource)



Updates LDP container

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var resource = new SinopiaServer.Resource(); // Resource | Group to insert into baseline container.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resourcesPatch(resource, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | [**Resource**](Resource.md)| Group to insert into baseline container. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="resourcesPost"></a>
# **resourcesPost**
> resourcesPost(groupID, groupMD, opts)

Create new Group within the base container.

Create a new Group (defined via JSON-LD in payload) within the baseline container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group (ldp:Container) who is defining it's own entities or graph within Sinopia.

var groupMD = new SinopiaServer.Resource(); // Resource | Group metadata to insert into base container and describe the group.

var opts = { 
  'contentType': "contentType_example" // String | Content-Type of resource, with preference for JSON-LD.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resourcesPost(groupID, groupMD, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group (ldp:Container) who is defining it&#39;s own entities or graph within Sinopia. | 
 **groupMD** | [**Resource**](Resource.md)| Group metadata to insert into base container and describe the group. | 
 **contentType** | **String**| Content-Type of resource, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json+ld
 - **Accept**: application/json+ld

<a name="resourcesPut"></a>
# **resourcesPut**
> resourcesPut(groupID, resource, opts)

Create new Group within the baseline container.

Create a new Group (defined via JSON-LD in payload) within the baseline container.

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
apiInstance.resourcesPut(groupID, resource, opts, callback);
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

