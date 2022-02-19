Make GET requests to the Name API endpoint using fetch

1. Use the Fetch API from your browser console
2. Use the Axios API from a nodejs script
3. Use your browser directly - can it make both kinds of requests?
4. Use a command line app like `curl`, `httpie`
5. Use an application like insomnia

#### Fetch API

#### GET

```js
fetch('https://ghibliapi.herokuapp.com/people')
  .then((res) => res.json())
  .then((data) => console.log(data));
```

output in chrome dev console

```
VM1332:3
(57) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
age: "12"
eye_color: "Green"
films: ['https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c']
gender: "Male"
hair_color: "Green"
id: "267649ac-fb1b-11eb-9a03-0242ac130003"
name: "Haku"
species: "https://ghibliapi.herokuapp.com/species/e2cfaa78-fb19-11eb-9a03-0242ac130003"
url: "https://ghibliapi.herokuapp.com/people/267649ac-fb1b-11eb-9a03-0242ac130003"
[[Prototype]]: Object
1: {id: 'fe93adf2-2f3a-4ec4-9f68-5422f1b87c01', name: 'Pazu', gender: 'Male', age: '13', eye_color: 'Black', …}
2: {id: '598f7048-74ff-41e0-92ef-87dc1ad980a9', name: 'Lusheeta Toel Ul Laputa', gender: 'Female', age: '13', eye_color: 'Black', …}
```

#### POST

input into chrome dev console

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

output seen after entering above input into chrome dev console

```Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
VM17:8
{name: 'Ed'}
name: "Ed"
[[Prototype]]: Object
```
