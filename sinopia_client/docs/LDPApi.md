# SinopiaServer.LDPApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](LDPApi.md#createGroup) | **POST** /repository | Create new Group within the base container.
[**createResource**](LDPApi.md#createResource) | **POST** /repository/{groupID} | Create a resource within a Group.
[**createUser**](LDPApi.md#createUser) | **POST** /repository/users | Create a user within Sinopia.
[**deleteGroup**](LDPApi.md#deleteGroup) | **DELETE** /repository/{groupID} | Delete an Group.
[**deleteResource**](LDPApi.md#deleteResource) | **DELETE** /repository/{groupID}/{resourceID} | Delete a Resource.
[**deleteUser**](LDPApi.md#deleteUser) | **DELETE** /repository/users/{userID} | Delete a User.
[**getBase**](LDPApi.md#getBase) | **GET** /repository | Get metadata for the base container.
[**getGroup**](LDPApi.md#getGroup) | **GET** /repository/{groupID} | Get metadata (RDF) for a given Group.
[**getResource**](LDPApi.md#getResource) | **GET** /repository/{groupID}/{resourceID} | Get metadata (RDF) for a given resource.
[**getUser**](LDPApi.md#getUser) | **GET** /repository/users/{userID} | Get metadata (RDF) for a given user.
[**getUsers**](LDPApi.md#getUsers) | **GET** /repository/users | Get metadata (RDF) for the Sinopia users container.
[**headBase**](LDPApi.md#headBase) | **HEAD** /repository | Get headers only for base container GET request.
[**headGroup**](LDPApi.md#headGroup) | **HEAD** /repository/{groupID} | Get headers only for a group GET request.
[**headResource**](LDPApi.md#headResource) | **HEAD** /repository/{groupID}/{resourceID} | Get headers only for a resource GET request.
[**headUser**](LDPApi.md#headUser) | **HEAD** /repository/users/{userID} | Get headers only for a user GET request.
[**headUsers**](LDPApi.md#headUsers) | **HEAD** /repository/users | Get headers only for a Sinopia users&#39; container GET request.
[**optionsBase**](LDPApi.md#optionsBase) | **OPTIONS** /repository | HTTP Options for base container.
[**optionsGroup**](LDPApi.md#optionsGroup) | **OPTIONS** /repository/{groupID} | HTTP Options for group.
[**optionsResource**](LDPApi.md#optionsResource) | **OPTIONS** /repository/{groupID}/{resourceID} | HTTP Options for resource.
[**optionsUser**](LDPApi.md#optionsUser) | **OPTIONS** /repository/users/{userID} | HTTP Options for user.
[**optionsUsers**](LDPApi.md#optionsUsers) | **OPTIONS** /repository/users | HTTP Options for Sinopia users&#39; container.
[**updateBase**](LDPApi.md#updateBase) | **PUT** /repository | Update metadata on base container.
[**updateGroup**](LDPApi.md#updateGroup) | **PUT** /repository/{groupID} | Update metadata on a group.
[**updateResource**](LDPApi.md#updateResource) | **PUT** /repository/{groupID}/{resourceID} | Update metadata on a resource.
[**updateUser**](LDPApi.md#updateUser) | **PUT** /repository/users/{userID} | Update metadata on a user.
[**updateUsers**](LDPApi.md#updateUsers) | **PUT** /repository/users | Update metadata on the Sinopia users&#39; container.


<a name="createGroup"></a>
# **createGroup**
> createGroup(slug, group, opts)

Create new Group within the base container.

Create a new Group (defined via JSON-LD in payload) within the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var slug = "slug_example"; // String | The suggested URI path for the group.

var group = new SinopiaServer.LDPContainer(); // LDPContainer | Group metadata to insert into base container and describe the group.

var opts = { 
  'link': "<http://www.w3.org/ns/ldp#BasicContainer>; rel=\"type\"", // String | specifies container type.  you probably shouldn't override this parameter for this operation.
  'contentType': "contentType_example" // String | Content-Type of Group metadata, with preference for JSON-LD.
};
apiInstance.createGroup(slug, group, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The suggested URI path for the group. | 
 **group** | [**LDPContainer**](LDPContainer.md)| Group metadata to insert into base container and describe the group. | 
 **link** | **String**| specifies container type.  you probably shouldn&#39;t override this parameter for this operation. | [optional] [default to &lt;http://www.w3.org/ns/ldp#BasicContainer&gt;; rel&#x3D;&quot;type&quot;]
 **contentType** | **String**| Content-Type of Group metadata, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="createResource"></a>
# **createResource**
> createResource(groupID, resource, opts)

Create a resource within a Group.

Create a new resource (defined via JSON-LD in payload) within a supplied Group.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

var resource = new SinopiaServer.Resource(); // Resource | Resource to insert into container

var opts = { 
  'slug': "slug_example", // String | The suggested URI path for the resource.
  'link': "link_example", // String | specifies container type.
  'contentType': "contentType_example" // String | Content-Type for the resource, with preference for JSON-LD.
};
apiInstance.createResource(groupID, resource, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 
 **resource** | [**Resource**](Resource.md)| Resource to insert into container | 
 **slug** | **String**| The suggested URI path for the resource. | [optional] 
 **link** | **String**| specifies container type. | [optional] 
 **contentType** | **String**| Content-Type for the resource, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json

<a name="createUser"></a>
# **createUser**
> createUser(user, opts)

Create a user within Sinopia.

Create a new user (defined via JSON-LD in payload) within Sinopia.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var user = new SinopiaServer.Resource(); // Resource | User to insert into Sinopia users' container.

var opts = { 
  'slug': "slug_example", // String | The suggested URI path for the user.
  'contentType': "contentType_example" // String | Content-Type for the resource, with preference for JSON-LD.
};
apiInstance.createUser(user, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**Resource**](Resource.md)| User to insert into Sinopia users&#39; container. | 
 **slug** | **String**| The suggested URI path for the user. | [optional] 
 **contentType** | **String**| Content-Type for the resource, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupID)

Delete an Group.

Deletes an existing Group container. This Group URI cannot be reused.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

apiInstance.deleteGroup(groupID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="deleteResource"></a>
# **deleteResource**
> deleteResource(groupID, resourceID)

Delete a Resource.

Deletes an existing Resource. This Resource URI cannot be reused.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

var resourceID = "resourceID_example"; // String | The UUID for the resource defined and managed within Sinopia.

apiInstance.deleteResource(groupID, resourceID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 
 **resourceID** | **String**| The UUID for the resource defined and managed within Sinopia. | 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userID)

Delete a User.

Deletes an existing User. This User URI cannot be reused.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var userID = "userID_example"; // String | The ID for the User defined and managed within Sinopia.

apiInstance.deleteUser(userID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**| The ID for the User defined and managed within Sinopia. | 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="getBase"></a>
# **getBase**
> SinopiaBasicContainer getBase()

Get metadata for the base container.

Get the RDF metadata (default serialization is JSON-LD) for the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();
apiInstance.getBase().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SinopiaBasicContainer**](SinopiaBasicContainer.md)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="getGroup"></a>
# **getGroup**
> SinopiaBasicContainer getGroup(groupID)

Get metadata (RDF) for a given Group.

Get the RDF (default serialization is JSON-LD) for a given Group.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

apiInstance.getGroup(groupID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 

### Return type

[**SinopiaBasicContainer**](SinopiaBasicContainer.md)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="getResource"></a>
# **getResource**
> Resource getResource(groupID, resourceID, opts)

Get metadata (RDF) for a given resource.

Get the RDF (default serialization is JSON-LD) for a given resource.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

var resourceID = "resourceID_example"; // String | The UUID for the resource defined and managed within Sinopia.

var opts = { 
  'accept': "accept_example" // String | The MIME type of the desired resource.  Callers wanting non-RDF should ask for application/json, those wanting RDF should ask for application/ld+json.
};
apiInstance.getResource(groupID, resourceID, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 
 **resourceID** | **String**| The UUID for the resource defined and managed within Sinopia. | 
 **accept** | **String**| The MIME type of the desired resource.  Callers wanting non-RDF should ask for application/json, those wanting RDF should ask for application/ld+json. | [optional] 

### Return type

[**Resource**](Resource.md)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: Not defined

<a name="getUser"></a>
# **getUser**
> Resource getUser(userID)

Get metadata (RDF) for a given user.

Get the RDF (default serialization is JSON-LD) for a given Sinopia user.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var userID = "userID_example"; // String | The ID for the User defined and managed within Sinopia.

apiInstance.getUser(userID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**| The ID for the User defined and managed within Sinopia. | 

### Return type

[**Resource**](Resource.md)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="getUsers"></a>
# **getUsers**
> LDPContainer getUsers()

Get metadata (RDF) for the Sinopia users container.

Get the RDF (default serialization is JSON-LD) for the Sinopia users&#39; container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();
apiInstance.getUsers().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LDPContainer**](LDPContainer.md)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="headBase"></a>
# **headBase**
> headBase()

Get headers only for base container GET request.

Gets the header values that would normally be found in the header of GET request on the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();
apiInstance.headBase().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="headGroup"></a>
# **headGroup**
> headGroup(groupID)

Get headers only for a group GET request.

Gets the header values that would normally be found in the header of GET request on the given group.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

apiInstance.headGroup(groupID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="headResource"></a>
# **headResource**
> headResource(groupID, resourceID)

Get headers only for a resource GET request.

Gets the header values that would normally be found in the header of GET request on the given resource.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

var resourceID = "resourceID_example"; // String | The UUID for the resource defined and managed within Sinopia.

apiInstance.headResource(groupID, resourceID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 
 **resourceID** | **String**| The UUID for the resource defined and managed within Sinopia. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="headUser"></a>
# **headUser**
> headUser(userID)

Get headers only for a user GET request.

Gets the header values that would normally be found in the header of GET request on the given user.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();

var userID = "userID_example"; // String | The ID for the User defined and managed within Sinopia.

apiInstance.headUser(userID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**| The ID for the User defined and managed within Sinopia. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="headUsers"></a>
# **headUsers**
> headUsers()

Get headers only for a Sinopia users&#39; container GET request.

Gets the header values that would normally be found in the header of GET request on the Sinopia users&#39; container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');

var apiInstance = new SinopiaServer.LDPApi();
apiInstance.headUsers().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="optionsBase"></a>
# **optionsBase**
> optionsBase()

HTTP Options for base container.

Gets the available options for HTTP methods to utilize on the base container.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();
apiInstance.optionsBase().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="optionsGroup"></a>
# **optionsGroup**
> optionsGroup(groupID)

HTTP Options for group.

Gets the available options for HTTP methods to utilize on the given group.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

apiInstance.optionsGroup(groupID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="optionsResource"></a>
# **optionsResource**
> optionsResource(groupID, resourceID)

HTTP Options for resource.

Gets the available options for HTTP methods to utilize on the given resource.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

var resourceID = "resourceID_example"; // String | The UUID for the resource defined and managed within Sinopia.

apiInstance.optionsResource(groupID, resourceID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 
 **resourceID** | **String**| The UUID for the resource defined and managed within Sinopia. | 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="optionsUser"></a>
# **optionsUser**
> optionsUser(userID)

HTTP Options for user.

Gets the available options for HTTP methods to utilize on the given user.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var userID = "userID_example"; // String | The ID for the User defined and managed within Sinopia.

apiInstance.optionsUser(userID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**| The ID for the User defined and managed within Sinopia. | 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="optionsUsers"></a>
# **optionsUsers**
> optionsUsers()

HTTP Options for Sinopia users&#39; container.

Gets the available options for HTTP methods to utilize on the Sinopia users&#39; container

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();
apiInstance.optionsUsers().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="updateBase"></a>
# **updateBase**
> updateBase(base, opts)

Update metadata on base container.

Update metadata of base container with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var base = new SinopiaServer.SinopiaBasicContainer(); // SinopiaBasicContainer | New base container metadata to assert on the container.

var opts = { 
  'link': "<http://www.w3.org/ns/ldp#BasicContainer>; rel=\"type\"", // String | specifies container type.  you probably shouldn't override this parameter for this operation.
  'contentType': "contentType_example" // String | Content-Type of Group metadata, with preference for JSON-LD.
};
apiInstance.updateBase(base, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **base** | [**SinopiaBasicContainer**](SinopiaBasicContainer.md)| New base container metadata to assert on the container. | 
 **link** | **String**| specifies container type.  you probably shouldn&#39;t override this parameter for this operation. | [optional] [default to &lt;http://www.w3.org/ns/ldp#BasicContainer&gt;; rel&#x3D;&quot;type&quot;]
 **contentType** | **String**| Content-Type of Group metadata, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="updateGroup"></a>
# **updateGroup**
> updateGroup(groupID, group, opts)

Update metadata on a group.

Update metadata of a given group container with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia. LDP Container to create the new resource within.

var group = new SinopiaServer.LDPContainer(); // LDPContainer | Group metadata to replace existing description of the given group.

var opts = { 
  'contentType': "contentType_example" // String | Content-Type of Group metadata, with preference for JSON-LD.
};
apiInstance.updateGroup(groupID, group, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. LDP Container to create the new resource within. | 
 **group** | [**LDPContainer**](LDPContainer.md)| Group metadata to replace existing description of the given group. | 
 **contentType** | **String**| Content-Type of Group metadata, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="updateResource"></a>
# **updateResource**
> updateResource(groupID, resourceID, resource, opts)

Update metadata on a resource.

Update metadata of a given resource with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var groupID = "groupID_example"; // String | The group who is defining it's own resources or graph within Sinopia.

var resourceID = "resourceID_example"; // String | The UUID for the resource defined and managed within Sinopia.

var resource = new SinopiaServer.Resource(); // Resource | Resource metadata to replace existing description of the given group.

var opts = { 
  'contentType': "contentType_example" // String | Content-Type of Group metadata, with preference for JSON-LD.
};
apiInstance.updateResource(groupID, resourceID, resource, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupID** | **String**| The group who is defining it&#39;s own resources or graph within Sinopia. | 
 **resourceID** | **String**| The UUID for the resource defined and managed within Sinopia. | 
 **resource** | [**Resource**](Resource.md)| Resource metadata to replace existing description of the given group. | 
 **contentType** | **String**| Content-Type of Group metadata, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="updateUser"></a>
# **updateUser**
> updateUser(userID, user, opts)

Update metadata on a user.

Update metadata of a given Sinopua user with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var userID = "userID_example"; // String | The ID for the User defined and managed within Sinopia.

var user = new SinopiaServer.Resource(); // Resource | User resource metadata to replace existing description of the given user.

var opts = { 
  'contentType': "contentType_example" // String | Content-Type of Group metadata, with preference for JSON-LD.
};
apiInstance.updateUser(userID, user, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | **String**| The ID for the User defined and managed within Sinopia. | 
 **user** | [**Resource**](Resource.md)| User resource metadata to replace existing description of the given user. | 
 **contentType** | **String**| Content-Type of Group metadata, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

<a name="updateUsers"></a>
# **updateUsers**
> updateUsers(users, opts)

Update metadata on the Sinopia users&#39; container.

Update metadata of the Sinopia users&#39; container with new metadata defined via JSON-LD in payload. Performs overwrite, not partial update.

### Example
```javascript
var SinopiaServer = require('sinopia_server');
var defaultClient = SinopiaServer.ApiClient.instance;

// Configure OAuth2 access token for authorization: CognitoUser
var CognitoUser = defaultClient.authentications['CognitoUser'];
CognitoUser.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SinopiaServer.LDPApi();

var users = new SinopiaServer.LDPContainer(); // LDPContainer | Sinopia users' container metadata to replace existing description of the Sinopia users' container.

var opts = { 
  'contentType': "contentType_example" // String | Content-Type of Sinopia users' container metadata, with preference for JSON-LD.
};
apiInstance.updateUsers(users, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **users** | [**LDPContainer**](LDPContainer.md)| Sinopia users&#39; container metadata to replace existing description of the Sinopia users&#39; container. | 
 **contentType** | **String**| Content-Type of Sinopia users&#39; container metadata, with preference for JSON-LD. | [optional] 

### Return type

null (empty response body)

### Authorization

[CognitoUser](../README.md#CognitoUser)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json

