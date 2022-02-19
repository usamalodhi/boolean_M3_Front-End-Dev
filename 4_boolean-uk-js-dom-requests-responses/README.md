# Understanding the Request / Response Cycle or The Client Server Architecture

![alt text](request_resp_cycle_v1.png 'Title')

| HTTP Method | Crud Operation |     | Entire Collection (e.g. Users)                                                           | Specific item (e.g. /users/id)                                             |
| ----------- | -------------- | --- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| GET         | Read           | Y   | 200 (OK), list of entities. Use pagination, sorting and filtering to navigate big lists. | 200 (OK), single entity. 404 (Not Found), if ID not found or invalid.      |
| POST        | Create         | N   | 201 (Created), Response contains response similar to GET /user/{id} containing new ID.   | not applicable                                                             |
| PATCH       | Update         | N   | 2xx type status e.g. 204 = no payload body, 200 may contain payload body, new Todo Items | 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid. |
| DELETE      | delete         | Y   | 204 (No Content), 400(Bad Request) if no filter is specified.                            | 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid. |

An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. ... Implemented correctly, the GET and DELETE methods are idempotent, but not the POST method. All safe methods are also idempotent.

# Understanding the Request / Response Cycle

### Learning Objectives

- Explain how to diagram a request/response cycle for a user interaction
- Create and use a diagram to follow the flow of data from a user interaction
- Use a client to make HTTP requests to a server
- Evaluate the differences using a core library, a 3rd party library, a command line app, a web or desktop application, or the browser as a client to make HTTP requests.

### Quickstart

Fork and clone this repository to your local machine

```sh
$ git clone git@github.com:[username]/js-dom-requests-responses.git && cd js-dom-requests-responses
$ npm ci # to install dependencies
$ node app.js # run the server
# then point your browser to `localhost:3000`
```

### Instructions

# Part 1 - Process Modelling

## Why model a process?

- It's a quick way to figure out and cement your understanding of how a process works.
- It's much quicker than writing the code that enacts the process.
- It's much easier to iterate on a process model than the code that enacts the process.
- It's much easier to add detail to a process model than to add it to code.
- It's a great way to communicate and discuss a process with another person.

#### Instructions

**While your server is running...**

Model each of the processes in the [processes to model](README.md#processes-to-model) section below.

- Prioritise the clarity and detail of your model over getting through all the processes listed below.

- Make sure that your models include the following:

  - The order that things happen in.
  - The HTTP **requests** and the data they carry. (Resources for this at the bottom of this readme.)
  - The HTTP **responses** and the data they carry. (Resources for this at the bottom of this readme.)
  - The movement of requests between client and server.
  - Mouse clicks.
  - What is displayed in the browser.

You can use chrome dev-tools to monitor what is happening on the network.

## Processes to model

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

### 4. A user uses each of the three forms to type text and submit using the button.

Don't forget to model each of the three form submissions - each interaction is different.

## Resources

- [Example HTTP GET request and response](https://www.jmarshall.com/easy/http/#sample)
- [Example HTTP POST request](https://www.jmarshall.com/easy/http/#postmethod)

# Part 2

### Instructions

Make GET and POST requests to the Name API endpoint

1. Use the Fetch API from your browser console
2. Use the Axios API from a nodejs script
3. Use your browser directly - can it make both kinds of requests?
4. Use a command line app like `curl`, `httpie`
5. Use an application like insomnia

# Name API spec

# GET `/api/name`

## Example Requests

#### Fetch API

```js
fetch('http://localhost:3000/api/name')
  .then((res) => res.json())
  .then((data) => console.log(data));
```

#### Axios API

```js
axios
  .get(`http://localhost:3000/api/name`)
  .then((res) => console.log(res.data));
```

#### curl

```sh
curl localhost:3000/api/name
```

## Example Response

```
{
  "name":"Ed"
}
```

# POST `/api/name`

#### Fetch API

```js
const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Ed' }),
};
fetch(`http://localhost:3000/api/name`, opts)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

#### Axios API

```js
axios
  .post(`http://localhost:3000/api/name`, {
    name: 'Ed',
  })
  .then((res) => console.log(res.data));
```

#### curl

```sh
curl -X POST -d "name=Ed" localhost:3000/api/name
```

## Example Response

```
{
  "name":"Ed"
}
```
