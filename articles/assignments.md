---
title: "Assignments"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/5013505/Assignments"
confluence_version: 1
last_updated: "2025-07-23T09:23:53.163Z"
labels: []
synced_at: "2026-06-26T10:43:49.221774Z"
---

# Assignments

/**/

- 1 [Software / Application Architecture - Assignment](#Assignments-Software/ApplicationArchitecture-Assignment)

- 2 [API (Application Programming Interface) - Assignment](#Assignments-API(ApplicationProgrammingInterface)-Assignment)

- 3 [SDLC (Software Development Life Cycle) - Assignment](#Assignments-SDLC(SoftwareDevelopmentLifeCycle)-Assignment)

- 4 [Scaling & System Design - Assignment](#Assignments-Scaling&SystemDesign-Assignment)

## Software / Application Architecture - Assignment
Look at a popular web application of your choice. It can be any web service you regularly use like Facebook, Instagram, or even an online store.

- For each tier (client, server, and database), briefly describe its responsibilities for a specific feature or set of features. (eg: Get my location’s weather)

Gym-Tracker:

- Tracking sets for exercises

Client: User enters a weight and repetition number for a set. The client sends a POST request to the servers.

- Server: Runs business logic and then initiates INSERT to the database. After the database returns success information the server returns 200 status “ok” to the client.

- Database: Data is stored and updated according to the initial user input. Returns success information to the server.

- Draw a diagram representing the request/response cycle for this feature, indicating where each tier comes into play. You can use Excalidraw or [http://Draw.io](http://Draw.io)

- . Export it and paste it below.

- Discuss how adding a new feature to the client might affect the client, server, and database. Write your thoughts below.

- New feature = show maximum possible weight (1-rep max) the user could lift

The 1-rep max is calculated and stored by the server whenever an entry for an exercise is made with weight and repetition number

- As the needed information is already available in the database. The client sends out a GET request, the server runs the business logic and then sends a QUERY for the 1-rep max of the pull-up exercise to the database. The database returns the queried data and the server sends the information to the client where it is then displayed.

- Research Google Cloud Platform products. 

- List some of the products offered by the cloud service provider and how they could be used in the web application you chose. 

Cloud storage

- Cloud database

Update your diagram using the products you found:

GCP Resources:

[https://cloud.google.com/solutions/three-tier-web-app](https://cloud.google.com/solutions/three-tier-web-app)

[https://cloud.google.com/discover](https://cloud.google.com/discover)

---
## API (Application Programming Interface) - Assignment
Use the documentation at [https://github.com/colinmatthews/T4P-FinalServer](https://github.com/colinmatthews/T4P-FinalServer/tree/main)/ to complete the exercises. You can use this [link](https://stackblitz.com/edit/github-18edst?embed=1&file=README.md&hideExplorer=1&view=preview) to make requests.

### Exercises:
- Make a GET request to the root endpoint (/). Make sure you have your Authorization header set to Bearer 123ABC. What is the response?

- "Endpoints supported: orders, customers, order_items.\n\n Methods supported: GET,POST,PUT,DELETE"

- Make a GET request to the /customers endpoint. What is the response?

- An array containing customers (id, name, email, address) e.g. 
{
    "id": 349,
    "name": "Celia45",
    "email": "[celia.glez.revilla@gmail.com](mailto:celia.glez.revilla@gmail.com)",
    "address": "null"
  }

- Make a POST request to the /customers endpoint to create a new customer.

- Update the customer you just created by making a PUT request to /customers/{id} (replace {id} with the ID of the new customer). What is the response?

{
  "id": 959,
  "name": "Satanello Senior",
  "email": "[badstuff@example.com](mailto:badstuff@example.com)",
  "address": "Hellroad 666"
}

- Delete the customer you just updated by making a DELETE request to /customers/{id}. What is the response?

- No response, response field is unchanged. Second time I click:

{
  "error": "Customer not found"
}

- Draw a diagram representing the request/response cycle for the customer calls. You can use a tool like Excalidraw or [http://Draw.io](http://Draw.io)

- . Export it and paste it below.

- This server also supports Orders and Order Items. 

Discuss how these API endpoints could be integrated into an application. For example, what series of calls would you make when a customer signs up and places an order for a t-shirt?

Could be used for when a customer places an order:

- Client API call POST/order_items to have a new order item created e.g.:

{

  "order_id": 66,

  "product_name": "Pitchfork",

  "price": 99,

  "quantity": 1

}

- Client API call POST/orders to add a new order e.g.:

{

  "customer_id": 959,

  "order_date": "2025-01-01",

  "total": 666

}

- (Optional)

Using the skills you learned from this module and the last module, design a simple workflow with an API of your choice. This could be an API offered by your work, or an API you want to integrate with.

For example, you could design a system that gets exports a Spotify user’s playlists: 

- Get user’s playlists

- For each playlist, get items

- Export a list of all items from all playlists

[https://developer.spotify.com/documentation/web-api](https://developer.spotify.com/documentation/web-api)

---
## SDLC (Software Development Life Cycle) - Assignment
### Exercises:
Imagine you are part of a development team working on a new feature for an online store. You are adding a "recommended products" feature which suggests products to users based on their past purchases.

- For this feature, describe each phase of the Software Development Life Cycle (SDLC):

- Requirements 

- Implementation/Coding

- Testing

- Deployment

- Maintenance

- Create a new branch on [https://github.com/colinmatthews/TechnicalFoundations-Server](https://github.com/colinmatthews/TechnicalFoundations-Server)

-  Create a codespace on your branch. Modify the project to always recommend “Logitech MX Keys” if a user requests “keyboards”

- Stage, commit, and push your changes. (Make sure you include a comment!)

- Write a simple unit test to test your changes.

- Create a pull request

Hints:

Add the following to the `/recommend` endpoint:

` case 'keyboards':`

`      recommendation = 'Logitech MX Keys';`

`      break;`

- Add the following test to api.test.js

`test('Testing recommend endpoint', async () => {`

`const res = await request.get('/recommend').query ({'type':'keyboards'})`

`    const message = res.body.recommendation`

`    expect(message).toBe('Logitech MX Keys')`

`})`

Other tips:

- `Npm run test to run unit tests`

- `Control-C to close return to typing in terminal`

---
## Scaling & System Design - Assignment
### Exercises:
Using [https://excalidraw.com/](https://excalidraw.com/)

Create a system design diagram for an application of your choice, or Airbnb. 

Include:

- Features / requirements

- Data model

- API design

- Application architecture 

Make sure you include elements to handle scale, such as queues, load balancers, caches, horizontal scaling, and vertical scaling (where appropriate). If using an external service or API, include its rate limit.