﻿//CdnPath=http://ajax.aspnetcdn.com/ajax/4.5/6/MicrosoftAjaxApplicationServices.js
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjaxApplicationServices.js
Type._registerScript("MicrosoftAjaxApplicationServices.js",["MicrosoftAjaxWebServices.js"]);Type.registerNamespace("Sys.Services");Sys.Services._ProfileService=function(){Sys.Services._ProfileService.initializeBase(this);this.properties={}};Sys.Services._ProfileService.DefaultWebServicePath="";Sys.Services._ProfileService.prototype={_defaultLoadCompletedCallback:null,_defaultSaveCompletedCallback:null,_path:"",_timeout:0,get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_defaultSaveCompletedCallback:function(){return this._defaultSaveCompletedCallback},set_defaultSaveCompletedCallback:function(a){this._defaultSaveCompletedCallback=a},get_path:function(){return this._path||""},load:function(c,d,e,f){var b,a;if(!c){a="GetAllPropertiesForCurrentUser";b={authenticatedUserOnly:false}}else{a="GetPropertiesForCurrentUser";b={properties:this._clonePropertyNames(c),authenticatedUserOnly:false}}this._invoke(this._get_path(),a,false,b,Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[d,e,f])},save:function(d,b,c,e){var a=this._flattenProperties(d,this.properties);this._invoke(this._get_path(),"SetPropertiesForCurrentUser",false,{values:a.value,authenticatedUserOnly:false},Function.createDelegate(this,this._onSaveComplete),Function.createDelegate(this,this._onSaveFailed),[b,c,e,a.count])},_clonePropertyNames:function(e){var c=[],d={};for(var b=0;b<e.length;b++){var a=e[b];if(!d[a]){Array.add(c,a);d[a]=true}}return c},_flattenProperties:function(a,i,j){var b={},e,d,g=0;if(a&&a.length===0)return {value:b,count:0};for(var c in i){e=i[c];d=j?j+"."+c:c;if(Sys.Services.ProfileGroup.isInstanceOfType(e)){var k=this._flattenProperties(a,e,d),h=k.value;g+=k.count;for(var f in h){var l=h[f];b[f]=l}}else if(!a||Array.indexOf(a,d)!==-1){b[d]=e;g++}}return {value:b,count:g}},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._ProfileService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoadComplete:function(a,e,g){if(typeof a!=="object")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,g,"Object"));var c=this._unflattenProperties(a);for(var b in c)this.properties[b]=c[b];var d=e[0]||this.get_defaultLoadCompletedCallback()||this.get_defaultSucceededCallback();if(d){var f=e[2]||this.get_defaultUserContext();d(a.length,f,"Sys.Services.ProfileService.load")}},_onLoadFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.ProfileService.load")}},_onSaveComplete:function(a,b,f){var c=b[3];if(a!==null)if(a instanceof Array)c-=a.length;else if(typeof a==="number")c=a;else throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Array"));var d=b[0]||this.get_defaultSaveCompletedCallback()||this.get_defaultSucceededCallback();if(d){var e=b[2]||this.get_defaultUserContext();d(c,e,"Sys.Services.ProfileService.save")}},_onSaveFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.ProfileService.save")}},_unflattenProperties:function(e){var c={},d,f,h=0;for(var a in e){h++;f=e[a];d=a.indexOf(".");if(d!==-1){var g=a.substr(0,d);a=a.substr(d+1);var b=c[g];if(!b||!Sys.Services.ProfileGroup.isInstanceOfType(b)){b=new Sys.Services.ProfileGroup;c[g]=b}b[a]=f}else c[a]=f}e.length=h;return c}};Sys.Services._ProfileService.registerClass("Sys.Services._ProfileService",Sys.Net.WebServiceProxy);Sys.Services.ProfileService=new Sys.Services._ProfileService;Sys.Services.ProfileGroup=function(a){if(a)for(var b in a)this[b]=a[b]};Sys.Services.ProfileGroup.registerClass("Sys.Services.ProfileGroup");Sys.Services._AuthenticationService=function(){Sys.Services._AuthenticationService.initializeBase(this)};Sys.Services._AuthenticationService.DefaultWebServicePath="";Sys.Services._AuthenticationService.prototype={_defaultLoginCompletedCallback:null,_defaultLogoutCompletedCallback:null,_path:"",_timeout:0,_authenticated:false,get_defaultLoginCompletedCallback:function(){return this._defaultLoginCompletedCallback},set_defaultLoginCompletedCallback:function(a){this._defaultLoginCompletedCallback=a},get_defaultLogoutCompletedCallback:function(){return this._defaultLogoutCompletedCallback},set_defaultLogoutCompletedCallback:function(a){this._defaultLogoutCompletedCallback=a},get_isLoggedIn:function(){return this._authenticated},get_path:function(){return this._path||""},login:function(c,b,a,h,f,d,e,g){this._invoke(this._get_path(),"Login",false,{userName:c,password:b,createPersistentCookie:a},Function.createDelegate(this,this._onLoginComplete),Function.createDelegate(this,this._onLoginFailed),[c,b,a,h,f,d,e,g])},logout:function(c,a,b,d){this._invoke(this._get_path(),"Logout",false,{},Function.createDelegate(this,this._onLogoutComplete),Function.createDelegate(this,this._onLogoutFailed),[c,a,b,d])},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._AuthenticationService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoginComplete:function(e,c,f){if(typeof e!=="boolean")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Boolean"));var b=c[4],d=c[7]||this.get_defaultUserContext(),a=c[5]||this.get_defaultLoginCompletedCallback()||this.get_defaultSucceededCallback();if(e){this._authenticated=true;if(a)a(true,d,"Sys.Services.AuthenticationService.login");if(typeof b!=="undefined"&&b!==null)window.location.href=b}else if(a)a(false,d,"Sys.Services.AuthenticationService.login")},_onLoginFailed:function(d,b){var a=b[6]||this.get_defaultFailedCallback();if(a){var c=b[7]||this.get_defaultUserContext();a(d,c,"Sys.Services.AuthenticationService.login")}},_onLogoutComplete:function(f,a,e){if(f!==null)throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,e,"null"));var b=a[0],d=a[3]||this.get_defaultUserContext(),c=a[1]||this.get_defaultLogoutCompletedCallback()||this.get_defaultSucceededCallback();this._authenticated=false;if(c)c(null,d,"Sys.Services.AuthenticationService.logout");if(!b)window.location.reload();else window.location.href=b},_onLogoutFailed:function(c,b){var a=b[2]||this.get_defaultFailedCallback();if(a)a(c,b[3],"Sys.Services.AuthenticationService.logout")},_setAuthenticated:function(a){this._authenticated=a}};Sys.Services._AuthenticationService.registerClass("Sys.Services._AuthenticationService",Sys.Net.WebServiceProxy);Sys.Services.AuthenticationService=new Sys.Services._AuthenticationService;Sys.Services._RoleService=function(){Sys.Services._RoleService.initializeBase(this);this._roles=[]};Sys.Services._RoleService.DefaultWebServicePath="";Sys.Services._RoleService.prototype={_defaultLoadCompletedCallback:null,_rolesIndex:null,_timeout:0,_path:"",get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_path:function(){return this._path||""},get_roles:function(){return Array.clone(this._roles)},isUserInRole:function(a){var b=this._get_rolesIndex()[a.trim().toLowerCase()];return !!b},load:function(a,b,c){Sys.Net.WebServiceProxy.invoke(this._get_path(),"GetRolesForCurrentUser",false,{},Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[a,b,c],this.get_timeout())},_get_path:function(){var a=this.get_path();if(!a||!a.length)a=Sys.Services._RoleService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_get_rolesIndex:function(){if(!this._rolesIndex){var b={};for(var a=0;a<this._roles.length;a++)b[this._roles[a].toLowerCase()]=true;this._rolesIndex=b}return this._rolesIndex},_onLoadComplete:function(a,c,f){if(a&&!(a instanceof Array))throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Array"));this._roles=a;this._rolesIndex=null;var b=c[0]||this.get_defaultLoadCompletedCallback()||this.get_defaultSucceededCallback();if(b){var e=c[2]||this.get_defaultUserContext(),d=Array.clone(a);b(d,e,"Sys.Services.RoleService.load")}},_onLoadFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.RoleService.load")}}};Sys.Services._RoleService.registerClass("Sys.Services._RoleService",Sys.Net.WebServiceProxy);Sys.Services.RoleService=new Sys.Services._RoleService;

// SIG // Begin signature block
// SIG // MIIaqQYJKoZIhvcNAQcCoIIamjCCGpYCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFH0G9FNzPyis
// SIG // H+S0CimxNiw9p8zroIIVeTCCBLowggOioAMCAQICCmEC
// SIG // kkoAAAAAACAwDQYJKoZIhvcNAQEFBQAwdzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRp
// SIG // bWUtU3RhbXAgUENBMB4XDTEyMDEwOTIyMjU1OVoXDTEz
// SIG // MDQwOTIyMjU1OVowgbMxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // DTALBgNVBAsTBE1PUFIxJzAlBgNVBAsTHm5DaXBoZXIg
// SIG // RFNFIEVTTjpCOEVDLTMwQTQtNzE0NDElMCMGA1UEAxMc
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCCASIw
// SIG // DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAM1jw/ei
// SIG // tUfZ+TmUU6xrj6Z5OCH00W49FTgWwXMsmY/74Dxb4aJM
// SIG // i7Kri7TySse5k1DRJvWHU7B6dfNHDxcrZyxk62DnSozg
// SIG // i17EVmk3OioEXRcByL+pt9PJq6ORqIHjPy232OTEeAB5
// SIG // Oc/9x2TiIxJ4ngx2J0mPmqwOdOMGVVVJyO2hfHBFYX6y
// SIG // cRYe4cFBudLSMulSJPM2UATX3W88SdUL1HZA/GVlE36V
// SIG // UTrV/7iap1drSxXlN1gf3AANxa7q34FH+fBSrubPWqzg
// SIG // FEqmcZSA+v2wIzBg6YNgrA4kHv8R8uelVWKV7p9/ninW
// SIG // zUsKdoPwQwTfBkkg8lNaRLBRejkCAwEAAaOCAQkwggEF
// SIG // MB0GA1UdDgQWBBTNGaxhTZRnK/avlHVZ2/BYAIOhOjAf
// SIG // BgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7syuwwzWzDzBU
// SIG // BgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNyb3Nv
// SIG // ZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsGAQUFBwEBBEww
// SIG // SjBIBggrBgEFBQcwAoY8aHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRUaW1lU3Rh
// SIG // bXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMIMA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQBRHNbfNh3cgLwCp8aZ3xbI
// SIG // kAZpFZoyufNkENKK82IpG3mPymCps13E5BYtNYxEm/H0
// SIG // XGGkQa6ai7pQ0Wp5arNijJ1NUVALqY7Uv6IQwEfVTnVS
// SIG // iR4/lmqPLkAUBnLuP3BZkl2F7YOZ+oKEnuQDASETqyfW
// SIG // zHFJ5dod/288CU7VjWboDMl/7jEUAjdfe2nsiT5FfyVE
// SIG // 5x8a1sUaw0rk4fGEmOdP+amYpxhG7IRs7KkDCv18elId
// SIG // nGukqA+YkqSSeFwreON9ssfZtnB931tzU7+q1GZQS/DJ
// SIG // O5WF5cFKZZ0lWFC7IFSReTobB1xqVyivMcef58Md7kf9
// SIG // J9d/z3TcZcU/MIIE7DCCA9SgAwIBAgITMwAAALARrwqL
// SIG // 0Duf3QABAAAAsDANBgkqhkiG9w0BAQUFADB5MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQg
// SIG // Q29kZSBTaWduaW5nIFBDQTAeFw0xMzAxMjQyMjMzMzla
// SIG // Fw0xNDA0MjQyMjMzMzlaMIGDMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMQ0wCwYDVQQLEwRNT1BSMR4wHAYDVQQDExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEB
// SIG // AQUAA4IBDwAwggEKAoIBAQDor1yiIA34KHy8BXt/re7r
// SIG // dqwoUz8620B9s44z5lc/pVEVNFSlz7SLqT+oN+EtUO01
// SIG // Fk7vTXrbE3aIsCzwWVyp6+HXKXXkG4Unm/P4LZ5BNisL
// SIG // QPu+O7q5XHWTFlJLyjPFN7Dz636o9UEVXAhlHSE38Cy6
// SIG // IgsQsRCddyKFhHxPuRuQsPWj/ov0DJpOoPXJCiHiquMB
// SIG // Nkf9L4JqgQP1qTXclFed+0vUDoLbOI8S/uPWenSIZOFi
// SIG // xCUuKq6dGB8OHrbCryS0DlC83hyTXEmmebW22875cHso
// SIG // AYS4KinPv6kFBeHgD3FN/a1cI4Mp68fFSsjoJ4TTfsZD
// SIG // C5UABbFPZXHFAgMBAAGjggFgMIIBXDATBgNVHSUEDDAK
// SIG // BggrBgEFBQcDAzAdBgNVHQ4EFgQUWXGmWjNN2pgHgP+E
// SIG // Hr6H+XIyQfIwUQYDVR0RBEowSKRGMEQxDTALBgNVBAsT
// SIG // BE1PUFIxMzAxBgNVBAUTKjMxNTk1KzRmYWYwYjcxLWFk
// SIG // MzctNGFhMy1hNjcxLTc2YmMwNTIzNDRhZDAfBgNVHSME
// SIG // GDAWgBTLEejK0rQWWAHJNy4zFha5TJoKHzBWBgNVHR8E
// SIG // TzBNMEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NybC9wcm9kdWN0cy9NaWNDb2RTaWdQQ0Ff
// SIG // MDgtMzEtMjAxMC5jcmwwWgYIKwYBBQUHAQEETjBMMEoG
// SIG // CCsGAQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NlcnRzL01pY0NvZFNpZ1BDQV8wOC0zMS0y
// SIG // MDEwLmNydDANBgkqhkiG9w0BAQUFAAOCAQEAMdduKhJX
// SIG // M4HVncbr+TrURE0Inu5e32pbt3nPApy8dmiekKGcC8N/
// SIG // oozxTbqVOfsN4OGb9F0kDxuNiBU6fNutzrPJbLo5LEV9
// SIG // JBFUJjANDf9H6gMH5eRmXSx7nR2pEPocsHTyT2lrnqkk
// SIG // hNrtlqDfc6TvahqsS2Ke8XzAFH9IzU2yRPnwPJNtQtjo
// SIG // fOYXoJtoaAko+QKX7xEDumdSrcHps3Om0mPNSuI+5PNO
// SIG // /f+h4LsCEztdIN5VP6OukEAxOHUoXgSpRm3m9Xp5QL0f
// SIG // zehF1a7iXT71dcfmZmNgzNWahIeNJDD37zTQYx2xQmdK
// SIG // Dku/Og7vtpU6pzjkJZIIpohmgjCCBbwwggOkoAMCAQIC
// SIG // CmEzJhoAAAAAADEwDQYJKoZIhvcNAQEFBQAwXzETMBEG
// SIG // CgmSJomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixkARkW
// SIG // CW1pY3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0IFJv
// SIG // b3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MB4XDTEwMDgz
// SIG // MTIyMTkzMloXDTIwMDgzMTIyMjkzMloweTELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWljcm9zb2Z0IENv
// SIG // ZGUgU2lnbmluZyBQQ0EwggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQCycllcGTBkvx2aYCAgQpl2U2w+
// SIG // G9ZvzMvx6mv+lxYQ4N86dIMaty+gMuz/3sJCTiPVcgDb
// SIG // NVcKicquIEn08GisTUuNpb15S3GbRwfa/SXfnXWIz6pz
// SIG // RH/XgdvzvfI2pMlcRdyvrT3gKGiXGqelcnNW8ReU5P01
// SIG // lHKg1nZfHndFg4U4FtBzWwW6Z1KNpbJpL9oZC/6SdCni
// SIG // di9U3RQwWfjSjWL9y8lfRjFQuScT5EAwz3IpECgixzdO
// SIG // PaAyPZDNoTgGhVxOVoIoKgUyt0vXT2Pn0i1i8UU956wI
// SIG // APZGoZ7RW4wmU+h6qkryRs83PDietHdcpReejcsRj1Y8
// SIG // wawJXwPTAgMBAAGjggFeMIIBWjAPBgNVHRMBAf8EBTAD
// SIG // AQH/MB0GA1UdDgQWBBTLEejK0rQWWAHJNy4zFha5TJoK
// SIG // HzALBgNVHQ8EBAMCAYYwEgYJKwYBBAGCNxUBBAUCAwEA
// SIG // ATAjBgkrBgEEAYI3FQIEFgQU/dExTtMmipXhmGA7qDFv
// SIG // pjy82C0wGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEw
// SIG // HwYDVR0jBBgwFoAUDqyCYEBWJ5flJRP8KuEKU5VZ5KQw
// SIG // UAYDVR0fBEkwRzBFoEOgQYY/aHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvbWljcm9z
// SIG // b2Z0cm9vdGNlcnQuY3JsMFQGCCsGAQUFBwEBBEgwRjBE
// SIG // BggrBgEFBQcwAoY4aHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jZXJ0cy9NaWNyb3NvZnRSb290Q2VydC5j
// SIG // cnQwDQYJKoZIhvcNAQEFBQADggIBAFk5Pn8mRq/rb0Cx
// SIG // MrVq6w4vbqhJ9+tfde1MOy3XQ60L/svpLTGjI8x8UJiA
// SIG // IV2sPS9MuqKoVpzjcLu4tPh5tUly9z7qQX/K4QwXacul
// SIG // nCAt+gtQxFbNLeNK0rxw56gNogOlVuC4iktX8pVCnPHz
// SIG // 7+7jhh80PLhWmvBTI4UqpIIck+KUBx3y4k74jKHK6BOl
// SIG // kU7IG9KPcpUqcW2bGvgc8FPWZ8wi/1wdzaKMvSeyeWNW
// SIG // RKJRzfnpo1hW3ZsCRUQvX/TartSCMm78pJUT5Otp56mi
// SIG // LL7IKxAOZY6Z2/Wi+hImCWU4lPF6H0q70eFW6NB4lhhc
// SIG // yTUWX92THUmOLb6tNEQc7hAVGgBd3TVbIc6YxwnuhQ6M
// SIG // T20OE049fClInHLR82zKwexwo1eSV32UjaAbSANa98+j
// SIG // Zwp0pTbtLS8XyOZyNxL0b7E8Z4L5UrKNMxZlHg6K3RDe
// SIG // ZPRvzkbU0xfpecQEtNP7LN8fip6sCvsTJ0Ct5PnhqX9G
// SIG // uwdgR2VgQE6wQuxO7bN2edgKNAltHIAxH+IOVN3lofvl
// SIG // RxCtZJj/UBYufL8FIXrilUEnacOTj5XJjdibIa4NXJzw
// SIG // oq6GaIMMai27dmsAHZat8hZ79haDJLmIz2qoRzEvmtzj
// SIG // cT3XAH5iR9HOiMm4GPoOco3Boz2vAkBq/2mbluIQqBC0
// SIG // N1AI1sM9MIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDAN
// SIG // BgkqhkiG9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYD
// SIG // Y29tMRkwFwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0w
// SIG // KwYDVQQDEyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEw
// SIG // NDAzMTMwMzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEw
// SIG // HwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Ew
// SIG // ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCf
// SIG // oWyx39tIkip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FM
// SIG // rXQwIBHrB9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cO
// SIG // BJjwicwfyzMkh53y9GccLPx754gd6udOo6HBI1PKjfpF
// SIG // zwnQXq/QsEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VS
// SIG // DOQDLPtqkJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21S
// SIG // tEWQn0gASkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1V
// SIG // eP4Bmh1QCIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuD
// SIG // k6FhArUdDbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGr
// SIG // MIIBpzAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQj
// SIG // NPjZUkZwCu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYw
// SIG // EAYJKwYBBAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAU
// SIG // DqyCYEBWJ5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJ
// SIG // kiaJk/IsZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFglt
// SIG // aWNyb3NvZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290
// SIG // IENlcnRpZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1M
// SIG // c1j0BxMuZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9taWNyb3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUH
// SIG // AQEESDBGMEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJv
// SIG // b3RDZXJ0LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDAN
// SIG // BgkqhkiG9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vO
// SIG // eVFNAbEudHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQ
// SIG // md16QOJXu69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I
// SIG // 4vBTFd1Pq5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4
// SIG // mS4N9wficLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsg
// SIG // P+IHGjL5zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfr
// SIG // Tot/xTUrXqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S
// SIG // 2hSY9Ty5ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6
// SIG // YinvopspNAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146So
// SIG // dDW4TsVxIxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGA
// SIG // nhUwZuhCEl4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRf
// SIG // WupW76bemZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2
// SIG // YbRuoROmv6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9
// SIG // La9Zj7jkIeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmS
// SIG // hxN1Ii8yqAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+J
// SIG // C33Iacjmbuqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kT
// SIG // o/0xggScMIIEmAIBATCBkDB5MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgQ29kZSBTaWdu
// SIG // aW5nIFBDQQITMwAAALARrwqL0Duf3QABAAAAsDAJBgUr
// SIG // DgMCGgUAoIG+MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MCMGCSqGSIb3DQEJBDEWBBQJlT+ixTCm/8VgcVaP2EKA
// SIG // I8nwxjBeBgorBgEEAYI3AgEMMVAwTqAmgCQATQBpAGMA
// SIG // cgBvAHMAbwBmAHQAIABMAGUAYQByAG4AaQBuAGehJIAi
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL2xlYXJuaW5n
// SIG // IDANBgkqhkiG9w0BAQEFAASCAQCE4lJVJ/GtoYXdoWpl
// SIG // bLPoW8oi8S62f4j5p0dK9jAXBMf1TryY8bsi2C27ReEw
// SIG // oAvzp2ytt7DekljPBaEVmW+jt3gH2F5QwWbqzi0hcdaa
// SIG // hT6Fu2Q0bIMQAC5+j9hUWWDx/YZRvgwWmpO/89nf79D1
// SIG // JFoC9ELAJrjOV1Gaf7Hgiuz3n3ZAAgPG8K/QAA+ybQQA
// SIG // qK9tYPm+ZxEA7G9Hm7jg9y1FfmDIpVwSBVAnNFWMBKY3
// SIG // 5kQRlS/sjkmN1FdS794mFdxAfr/gwAs14Odv4ukLgNXS
// SIG // cvsea1QzWKDEVwMkp+RKXe7eN6wjlfG8x+z7GhmIio/b
// SIG // 8k5TNOIjJFGzaFb7oYICHzCCAhsGCSqGSIb3DQEJBjGC
// SIG // AgwwggIIAgEBMIGFMHcxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // ITAfBgNVBAMTGE1pY3Jvc29mdCBUaW1lLVN0YW1wIFBD
// SIG // QQIKYQKSSgAAAAAAIDAJBgUrDgMCGgUAoF0wGAYJKoZI
// SIG // hvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUx
// SIG // DxcNMTMwMzI3MTkxMjU2WjAjBgkqhkiG9w0BCQQxFgQU
// SIG // Ct4v6UikTGs8CJufiiIx/67j/gMwDQYJKoZIhvcNAQEF
// SIG // BQAEggEAZ6wJ3Qf+frZ67WDEbP88ZFA/e+rh3KcRQZTc
// SIG // wr8SUl2CJBc0cNt6RyZvydQb7wWJFlUVFXPilIiJ5nm7
// SIG // pJDYjxJ1StyvMVbH6eppTjcsQDve+bdm+zQuBvgsaP90
// SIG // BcojVo7Ow6/sB0/xmcnDtPQskwXtiQzkvT8SayKCav0D
// SIG // Al4WSbL0VER2jeDFPjMKtf+IS7GoWg/xTDzSMuTWMCpG
// SIG // /TtvKjoREM35oeoTokrtMlLnDVGEz6xL/4ZplPX1PjIG
// SIG // Lc5KwuXcRzxFjR2UXY5aW3H2j0VB+j6JIgFLgsdXmOnN
// SIG // blRDejEJJXyQ8IadXv24qbqtHgPYWpsm1zww1CtXrA==
// SIG // End signature block
