### 2. Home page with typo

A user tries to visit `http://localhost:3000/`, but mistypes the url as `http://localhost:3000/whoops` in their browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Error</title>
  </head>
  <body>
    <pre>Cannot GET /whooops</pre>
  </body>
</html>
```

Don't forget to model the image requests and responses.

- The order that things happen in.
- The HTTP **requests** and the data they carry. (Resources for this at the bottom of this readme.)
- The HTTP **responses** and the data they carry. (Resources for this at the bottom of this readme.)
- The movement of requests between client and server.
- Mouse clicks.
- What is displayed in the browser.

```
Request URL: http://localhost:3000/whoops
Request Method: GET
Status Code: 404 Not Found
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```
