### 4. A user uses each of the three forms to type text and submit using the button.

Don't forget to model each of the three form submissions - each interaction is different.

- The order that things happen in.
- The HTTP **requests** and the data they carry. (Resources for this at the bottom of this readme.)
- The HTTP **responses** and the data they carry. (Resources for this at the bottom of this readme.)
- The movement of requests between client and server.
- Mouse clicks.
- What is displayed in the browser.

### Using default form submission (GET)

Input default form submission (GET)

```
Request URL: http://localhost:3000/name?name=Input+default+form+submission+%28GET%29
Request Method: GET
Status Code: 200 OK
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
Request Method: GET
Status Code: 200  (from memory cache)
Remote Address: [2a04:4e42:4::485]:443
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: http://localhost:3000/http-requests.js
Request Method: GET
Status Code: 304 Not Modified
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

### Using default form submission (POST)

Input default form submission (POST)

```
Request URL: http://localhost:3000/name
Request Method: POST
Status Code: 302 Found
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: http://localhost:3000/name
Request Method: GET
Status Code: 200 OK
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
Request Method: GET
Status Code: 200  (from memory cache)
Remote Address: [2a04:4e42:4::485]:443
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: http://localhost:3000/http-requests.js
Request Method: GET
Status Code: 304 Not Modified
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

### Using AJAX ()
