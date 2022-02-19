### 1. Visiting the home page

A user visits `http://localhost:3000` and they are shown this HTML:

```
<h1>Welcome!</h1>

<a href="/name">Name Me!</a>

<h3>Cats!</h3>
<img width="500px" src="https://i.inews.co.uk/content/uploads/2021/11/PRI_209429745-e1636480034415.jpg" alt="beauty1">
<img width="500px" src="cat.png" alt="beauty2">
```

Don't forget to model the image requests and responses.

- The order that things happen in.
- The HTTP **requests** and the data they carry. (Resources for this at the bottom of this readme.)
- The HTTP **responses** and the data they carry. (Resources for this at the bottom of this readme.)
- The movement of requests between client and server.
- Mouse clicks.
- What is displayed in the browser.

```
Request URL: http://localhost:3000/
Request Method: GET
Status Code: 304 OK
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin

HTTP GET request to localhost:3000 has been received and resulted in a 304 (OK) response. Different from 200 (OK).

The GET request


A 304 Not Modified message is an HTTP response status code indicating that the requested resource has not been modified since the previous transmission, so there is no need to retransmit the requested resource to the client
```

```
Request URL: https://i.inews.co.uk/content/uploads/2021/11/PRI_209429745-e1636480034415.jpg
Request Method: GET
Status Code: 200  (from memory cache)
Remote Address: [2a02:26f0:5d00:13::5f65:ee2a]:443
Referrer Policy: strict-origin-when-cross-origin

Response from server is sending image
```

```
Request URL: http://localhost:3000/cat.png
Request Method: GET
Status Code: 304 Not Modified
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin

Response from server is sending image
```
