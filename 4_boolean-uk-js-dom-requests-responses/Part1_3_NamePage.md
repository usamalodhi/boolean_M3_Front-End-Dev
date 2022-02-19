### 1. Visiting the home page

### 3. Name page

A user navigates to the homepage, and then clicks the link 'Name me!' and is shown this HTML:

```
<h1 class="main"></h1>

<p>Using default form submission (GET)</p>
<form action="/name" method="get">
  <input type="text" name="name">
  <input type="submit" value="go!">
</form>

<p>Using default form submission (POST)</p>
<form action="/name" method="post">
  <input type="text" name="name">
  <input type="submit" value="go!">
</form>

<p>Using AJAX</p>
<form class="name-form">
  <input class="name-input" type="text"></input>
  <input type="submit" value="go!"></input>
</form>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="http-requests.js"></script>
```

Don't forget to model the script requests and responses.

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
```

```
Request URL: https://i.inews.co.uk/content/uploads/2021/11/PRI_209429745-e1636480034415.jpg
Request Method: GET
Status Code: 200  (from memory cache)
Remote Address: [2a02:26f0:5d00:13::5f65:ee2a]:443
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: http://localhost:3000/cat.png
Request Method: GET
Status Code: 304 Not Modified
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

url address change to:
http://localhost:3000/name

```
Request URL: http://localhost:3000/name
Request Method: GET
Status Code: 304 OK
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
Request Method: GET
Status Code: 200  (from disk cache)
Remote Address: [2a04:4e42:4::485]:443
Referrer Policy: strict-origin-when-cross-origin
```

```
Request URL: http://localhost:3000/http-requests.js
Request Method: GET
Status Code: 304 OK
Remote Address: [::1]:3000
Referrer Policy: strict-origin-when-cross-origin
```
