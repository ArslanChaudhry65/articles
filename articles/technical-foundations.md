---
title: "Technical Foundations"
confluence_url: "https://arslan-chaudhry.atlassian.net/wiki/spaces/PS/pages/4554753/Technical+Foundations"
confluence_version: 26
last_updated: "2025-07-31T21:02:18.113Z"
labels: ["prd", "research", "technical-skills", "software-architecture", "sdlc", "sprint", "technical-tradeoffs", "application-architecture", "api", "roadmaps"]
synced_at: "2026-08-14T08:58:45.454697Z"
---

# Technical Foundations

/**/

- 1 [Software / Application Architecture - Summary](#TechnicalFoundations-Software/ApplicationArchitecture-Summary)

- 2 [API (Application Programming Interface) - Summary](#TechnicalFoundations-API(ApplicationProgrammingInterface)-Summary)

- 3 [SDLC (Software Development Life Cycle) - Summary](#TechnicalFoundations-SDLC(SoftwareDevelopmentLifeCycle)-Summary)

- 4 [Data Model - Summary](#TechnicalFoundations-DataModel-Summary)

- 5 [Technical Tradeoffs - Summary](#TechnicalFoundations-TechnicalTradeoffs-Summary)

- 6 [Roadmaps, PRDs and Sprint - Summary](#TechnicalFoundations-Roadmaps,PRDsandSprint-Summary)

Software / Application Architecture Material- [Application Architecture : Module Overview auf Vimeo](https://vimeo.com/887404365/2a93dd5637) 
- [Application Architecture : Three Tier Architecture auf Vimeo](https://vimeo.com/887404375/5ed3a5f86f?turnstile=0.ylL95S7MVQthL-zPM0AwXJynK58o2B3jIk6XlXODZcoonOfOP_Mx04H0g-kGaZ1EHS9Cv6J5aGzKP4WUlyH-c1m9ZCaf7W4kpwWwukNuopQW8oSGo0WtwsAXwFaPonRQrr3WIf2q3ob7nVOsYb2ZfEWB9AGDMKHvmr1pWeYzNh7feqaS5hg1pCT6gC8au5THZqgogcutMFswGb7ICnAbFY7E7boy7QcEOyAxVy1lwDf32LGe3GMTsxooy4QrGm5r4P-KoNEZ2yIC3RtaBZgYyMHOrnaJxH_J0zw_nhFWBlckeCqFRoSB3jmznWhqASy6P8kpQth7N-udgwBWwjFLEjMVttnUarfErQBmQ_dOUwsp8DkaBaRGAFY-5E5dtq0MaNp86flW5iG7YVJThAYjOvBpRjpTmpDxl53b64rhiWsESceVfjEtL5qYOzmdF7tZ3EUdxvD2jetVqWaSh84V_dNum8J5lDwYcR258c_MXR_OeFhCzWDAon8nbhjfd0ApwrG2qj8vQyR6RR1h1bzZGlSQ6nynrZTSm5btuIsYreM9DmW8ekpuN-EKswitnkAtVDax9ymT4fmmzBtBULVm7X2B6nhlMfGotWGnJgTlQiJwa7GPc0rjvACICGNTG-4GvJA9yAH-hbDPoplk_4FhHSRoqhpdsJ-xkHgcktOiPQ8EKmXfkJStOBtMnN-w8YBfk_Edx-bUUDSrE8MWtU8g9O4UnEnq0NS-6iP-c4bHstdu7XPWm1lbpMxZFAdrDv_SGqi-GwGitUKEWmXt5iioHdf_u3cOqDEXMYLF6pDCUNClkAEgcImmjwsTsas8vfUmXy2Hyf-6tHnHAGZhmKTBw6s7xz3GPkwwGdsjCsw02hjELYdcMrBkn71jPdbKRYGe.gdr1Vz7FXjv0SBveA1zPTQ.519ba5acff3eec8876ef38ca4c7f6ea1a8b34885d50bb8a2b817ab7d6e5e9da9)  
- [Application Architecture : Request Lifecycle auf Vimeo](https://vimeo.com/887405847/d7c82de47a) 
- [Application Architecture : Relational Databases auf Vimeo](https://vimeo.com/887404403/4156ffb001)
- [Application Architecture : Goal of System Design auf Vimeo](https://vimeo.com/887404421/8c6e6757a2)
- [Application Architecture : Modern Application Architecture auf Vimeo](https://vimeo.com/887404473/4d38589236)
- [Application Architecture : Exploring Microservices for Twitter Example auf Vimeo](https://vimeo.com/887404058/6336daddd1) 
- [Application Architecture : Cloud Computing auf Vimeo](https://vimeo.com/887404507/b99b7735e5) 
- [Application Architecture : Exploring Data Analytics Example auf Vimeo](https://vimeo.com/887404032/26aaaa9e4a) 
- [Application Architecture : Module Summary auf Vimeo](https://vimeo.com/887404563/15638945e0) 

Extra: 

- [What are Microservices?](https://www.youtube.com/watch?v=j3XufmvEMiM) 
- [Application Architecture : Excalidraw Tutorial auf Vimeo](https://vimeo.com/887404017/9d596828ec) 
- [Tech PM's - Technical Fo…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4554920%2FTech+PM%27s+-+Technical+Foundations+for+Product+Managers+Slideshow.pdf) 
- [App Arch - Technical Fou…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4554914%2FApp+Arch+-+Technical+Foundations+for+Product+Managers+Slideshow.pdf) 
- [[Basic] Application Arch…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4718613%2F%5BBasic%5D+Application+Architecture+Assignment+Reference.pdf) 
- [[Advanced 1] Application…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4653146%2F%5BAdvanced+1%5D+Application+Architecture+Assignment+Reference.pdf) 
- [[Advanced 2] Application…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4718607%2F%5BAdvanced+2%5D+Application+Architecture+Assignment+Reference.pdf) 

---
## Software / Application Architecture - Summary
### Classical application architecture (three tiered)
- client (frontend) - user facing e.g. mobile devices, websites

- server (backend)

receives request from client

- hosting and apply business logic (SELECT = look information up, INSERT = add information to database)

- looks up information from storage

- server have different ways of communicating e.g. via Internet using HTTP

- endpoint = specific location on a server

- cloud computing is a server provided by another company like Amazon (e.g. EC2), MS Azure and Google “infrastructure as a service”.

- serverless = a server is started up quickly for a request and once the job is done immediately deleted

- database - stores information and responds back to server 

different types: **relational** **db (e.g. SQL)**, non-relational db (Mongo db by Google), graph db…

- basically a set of Excel files/tables

- primary key (id) = unique identifier for a row, foreign key = for relationship between tables meaning a reference

- database as a service also available - the db scales as needed

### Microservices architecture
- microservices can better scale on demand 

when monoliths scale, simply more instances of the monolith are added by the company

pro: monoliths centralize the code → devs can step through any part of the code when debugging

- pro: user requests completely served by monolith don’t have to make calls across a network → reduced chance of network failures

- con: code is tightly coupled which is hard to break up

- con: too big monoliths can’t run on a typical machine

- when microservices scale, it is easier to scale the part of an application which is under high load

### Container
- a set of every dependency needed to run the software - a file that when it is run brings in all the dependencies and installs them and runs the software immediately

microservices often run in a container (e.g. Docker for container)

containers run in a virtual (or physical) machine (e.g. container orchestration taken care of by Kubernetes)

virtual machines run on a hypervisor (e.g. Xen, Amazon EC2 offer vm’s with their own hypervisor)

hypervisor runs on a physical server (e.g. taken care of by Amazon EC2) that is part of data center → part of a data center network → this network is the cloud

### Docker
- software that creates the container

### Kubernetes
- software hosts the server that is running the container

- pod = a server that is running a container 

### Managed services
- API gateway: receives requests from clients and send it to wherever is wanted internally

- file storage: example s3 

- using AI models e.g. GPT 

AssignmentLook at a popular web application of your choice. It can be any web service you regularly use like Facebook, Instagram, or even an online store.

- For each tier (client, server, and database), briefly describe its responsibilities for a specific feature or set of features. (eg: Get my location’s weather)

**BBC News Website**

Feature: Display Local News

Client:

The Client website identifies the user’s country. The user must then select the region whose news stories they wish to see. The client passes that parameter to the server and renders the results on the screen for the user to view.

NewsStories location:Region

Server:The server hosts the API NewsStories. When the API is called using a Get function with a specific region passed as a parameter, it will return the list of news stories that are applicable to that region.

Business logic within the API ensures that the stories are within the last 24 hours. This is a default setting that can be overridden by passing an additional parameter relating to TimePeriod. In addition logic also exists that determines the rank of the news stories depending on the values set by the organization. This can be overridden by passing a parameter relating to the desired sort (alphabetical, datetime etc.).

Database:

News Table Contains all local news stories

Columns:

ID, DateTime, Location (ID), Subject General (ID), Subject Detail (ID), Headline, Author (ID), T ext Content, Image (ID), Video Link(ID)

- Draw a diagram representing the request/response cycle for this feature, indicating where each tier comes into play. You can use Excalidraw. Export it and paste it below.

- Discuss how adding a new feature to the client might affect the client, server, and database. Write your thoughts below.

**Addition of Videos**

Client:

New Get API Call to /Videos passing Location as a parameter

Server:

API to fetch all relevant Videos for Location

Database:

Addition of ‘Media’ column to News Database Table. This column would contain an indicator of the type of media (video, image, text) that was being provided.

Adding this column, rather than creating a whole new table, makes the solution scalable. We can extend the News table with multiple different media types as opposed to creating a Video, Image, News table and linking with primary/foreign keys.

- Research Google Cloud Platform products.

List some of the products offered by the cloud service

provider and how they could be used in the web application you chose.

CloudSQL: Database managed in the cloud by Google. Backups, replication, patches, encryption, and storage capacity increases are all automated and insights and recommendations for performance, security, reliability, and cost.

Video Stitcher API: Stitches together content and adverts that are relevant to the consumer together. Keeps track of the adverts that a consumer may already have seen. Enables monetization of service.

Update your diagram using the products you found:

---
API (Application Programming Interface) - Material- [API's : Module Overview auf Vimeo](https://vimeo.com/887404585/adc81ec8c0)
- [API's : API's Explained auf Vimeo](https://vimeo.com/887404615/f20f3aa556)
- [API's : Get Requests auf Vimeo](https://vimeo.com/887404701/c9c0d71b1c)
- [API's : GET Requests Example auf Vimeo](https://vimeo.com/887404121/6b29a468f4)
- [API's : POST Request auf Vimeo](https://vimeo.com/887404738/2c4abfaa99)
- [API's : POST Requests Example auf Vimeo](https://vimeo.com/887405815/9258406ddc)
- [API's : PUT Requests auf Vimeo](https://vimeo.com/887404768/a6b7d648c8)
- [API's : PUT Requests Example auf Vimeo](https://vimeo.com/887405829/bc4727795e)
- [API's : Delete Requests auf Vimeo](https://vimeo.com/887404795/cfa1f71487)
- [API's : Delete Requests Example auf Vimeo](https://vimeo.com/887403979/4602d94015)
- [API's : Authentication auf Vimeo](https://vimeo.com/887404160/21a6f96851)
- [API's : Authentication Example](https://vimeo.com/887403757/2758740e5e)
- [API's : Types of API's auf Vimeo](https://vimeo.com/887404821/037232fe8f)

Zusatz:

- [GraphQL Explained in 100 Seconds](https://www.youtube.com/watch?v=eIQh02xuVw4)
- [Top 6 Most Popular API Architecture Styles](https://www.youtube.com/watch?v=4vLxWqE94l4)
- [Best practices for building a secure and scalable API | MuleSoft](https://www.mulesoft.com/api-university/best-practices-building-secure-and-scalable-api)
- [APIs - Technical Foundat…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4653154%2FAPIs+-+Technical+Foundations+For+Product+Managers+Slideshow+.pdf) 
- [APIs Live Content.pdf](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4587591%2FAPIs+Live+Content.pdf) 
- [APIs-Infographic.pdf](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4587585%2FAPIs-Infographic.pdf)  

## API (Application Programming Interface) - Summary
API = method of interaction with another software application, made by devs for external devs to make requests/changes 

What is a web API?

-  it sits in the server

--> the method for the server to understand requests is an API

- a set of endpoints / routes where the client can make a request and expect an answer

- server responds with a status code

ok = 200

- not authorized = 401

- not found = 404

- server error (server had a problem processing request) = 500 

### REST API requests
#### GET (**R**ead)
consists of base URL + endpoint + query parameters (optional)

#### POST (**C**reate)
- consists of base URL + endpoint

- for creating resources

- used for logging in as they are secure (username and password won’t be in the url for the request but encrypted as a part of the JSON body)

#### PUT (**U**pdate)
- consists of base URL + endpoint + reference to a resource

- similar to POST with the difference that they have to reference a resource

#### DELETE (**D**elete)
- consists of base URL + endpoint + reference to resource

- no body is sent as it is not necessary 

#### Securing APIs (Authentication)
- method: API keys

most common (especially pure API products)

- set of random characters that is assigned to an account

- when request is made the characters are checked to see if the user is authorized 

- string of characters has to be added to every request (via header) -->**each header has a key and value pair**

- commonly used for API to API authentation

- method: oAuth 

very secure because of two steps

first step to send request to generate temporary token, to which the server will respond (AJWT or JSON web token)

- once server responds token can be used to make requests in the future → **token is time limited **

- commonly used for user logins

- method: custom authentication

#### SOAP API
- older method and relies on reutrning XML (looks similar to HTML but is similar to JSON as content represents stuctured data)

- used especially by legacy applications

#### Graph QL API
- more modern API that solves a problem of REST API (query language)

problem: GET request of REST API gives **all** information associated with that resource which leads to increased network load

→ each request underfetching if information is split between different endpoints

- → overfetching if an endpoint has too much information associated 

- Graph QL allows on client side to define which specific data is needed

- Consists of **only** POST Request

- every request gets the status code 200 (ok) even errors → errors can be found inside the response back from server

- the query/fetch mirrors the response shape of the JSON

frontend defines the data wanted

- backend writes code to resolve the request

Request Exercises**GET**

- Practice: [Click here to open Postman in a new tab.](https://stackblitz.com/edit/github-18edst?file=README.md)

Make a GET request to[ https://fakestoreapi.com/products](https://fakestoreapi.com/products).

- Include no query parameters.

- Make a GET requests to[ https://fakestoreapi.com/products](https://fakestoreapi.com/products).

- Include limit=5 as a query parameter.

- Make a GET requests to[ https://fakestoreapi.com/products/1](https://fakestoreapi.com/products/1).

- Include no query parameters.

**POST**

- Practice: [Click here to open Postman in a new tab.](https://stackblitz.com/edit/github-18edst?file=README.md)

Make a POST request to[ https://fakestoreapi.com/products](https://fakestoreapi.com/products)

- Format the body as JSON 

key:value pair with "" for strings numbers without "" → **use " not “** looks similar but causes error when using JSON

- a comma after each line expect the last

- header: Content-type - application/JSON

{
"title": "Watermelon Water Bottle",
"price": 13.5,
"description": "A water bottle with a watermelon print",
"image": "https://placehold.co/600x400",
"category": "electronic"
}
**PUT**

- Practice: [Click here to open Postman in a new tab.](https://stackblitz.com/edit/github-18edst?file=README.md)

Make a GET requests to[ https://fakestoreapi.com/products/5](https://fakestoreapi.com/products/5)

- Make a PUT request to[ https://fakestoreapi.com/products/5](https://fakestoreapi.com/products/5)

Format the body as JSON.

{
"price":1050,
"category": "jewelry"
}
Describe what happens when this request is received (what changed?) 

→ I get status code 200 + json response with id and updated info in the body:

- 
{
    "id": 5,
    "price": 1050,
    "category": "jewelry"
}

**DELETE**

- Practice: 

Make a DELETE requests to[ https://fakestoreapi.com/products/](https://fakestoreapi.com/products/)

- Describe what happens when this requests is received.

error 404 not found → can not delete (all) products

- Make a DELETE request to[ https://fakestoreapi.com/products/5](https://fakestoreapi.com/products/5)

- Describe what happens when this requests is received.

status 200 + response contains what is deleted:

{
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}
**Authentication Example**

What type of request should you use for sending username and passwords?

- Should use POST request as it encodes information in request itself (not in URL like GET)

Using the correct request type, make a request to [https://fakestoreapi.com/auth/login](https://fakestoreapi.com/auth/login)

**Headers:**

Content-Type: application/json

**Body:**

{
"username": "johnd",
"password": "m38rmF$"
}
Explain the response.

A JSON webtoken with the for oAuth is sent:

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTc1MzgyMzM4Nn0.0ovVXWizTcptLktSYqFwzVzcnXwFA_51tu2gz0pAEY0"
}
- The token holds information about how long it is valid for and what the user is allowed to do

- The token could be used with the header Authentication (key) + Bearer (value) *token input here*

---

## SDLC (Software Development Life Cycle) - Summary

### Scaling & System Design - Material
- [S+SD : Module Overview auf Vimeo](https://vimeo.com/887405134/06943a7008)

- [S+SD : System Design Explained auf Vimeo](https://vimeo.com/887405152/5a2867be62)

- [S+SD : Caches auf Vimeo](https://vimeo.com/887405217/7c01960d3e)

- [S+SD : Queues auf Vimeo](https://vimeo.com/887405247/6e484b4613)

- [S+SD : Load Balancers auf Vimeo](https://vimeo.com/887405274/2b5b61dcc8)

- [Building a URL Shortener Example auf Vimeo](https://vimeo.com/887403897/6517afcb57)

- [S+SD : Youtube Example auf Vimeo](https://vimeo.com/887405857/0f25ec5c34)

Zusatz:

- [GitHub - ByteByteGoHq/system-design-101: Explain complex systems using visuals and simple terms. Help you prepare for system design interviews.](https://github.com/ByteByteGoHq/system-design-101)

- [GitHub - karanpratapsingh/system-design: Learn how to design systems at scale and prepare for system design interviews](https://github.com/karanpratapsingh/system-design)

- [Scaling A REST Application. What is scaling? | by Samuel Kehinde Ayo | Medium](https://albusdd.medium.com/scaling-a-rest-application-b50b3d9c3b10)

- [Eliminating Task Processing Outages by Replacing RabbitMQ with Apache Kafka Without Downtime - DoorDash](https://careersatdoordash.com/blog/eliminating-task-processing-outages-with-kafka/)

- [https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product](https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product)

[Colin's PRD Template - E…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4653173%2FColin%27s+PRD+Template+-+Etsy.pdf) 

[Colin's Roadmap Template…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4718625%2FColin%27s+Roadmap+Template+-+Etsy.pdf)[SDLC -  Technical Founda…](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4587597%2FSDLC+-++Technical+Foundations+for+Product+Managers+Slideshow.pdf)

 [SDLC Infographic.pdf](/wiki/spaces/PS/pages/4554753/Technical+Foundations?preview=%2F4554753%2F4587603%2FSDLC+Infographic.pdf) 

## Data Model - Summary

### Data Model - Material
- [Data Models : Module Overview auf Vimeo](https://vimeo.com/887405297/4d01485cb9)

- [Data Models : What Is A Data Model auf Vimeo](https://vimeo.com/887405313/f085ca351e)

- [Data Models : Data Models 101 auf Vimeo](https://vimeo.com/887405347/b7ec8c42fa)

- [Data Models : Data Types + Normalization auf Vimeo](https://vimeo.com/887405665/bf4f0cf199)

- [Normalizing a Data Model auf Vimeo](https://vimeo.com/887405799/fd9f911f25)

- [Data Models : One-To-One auf Vimeo](https://vimeo.com/887405492/e19674941e)

- [Data Models : One-To-Many auf Vimeo](https://vimeo.com/887405530/7a51c3ef72)

- [Draw SQL Tutorial auf Vimeo](https://vimeo.com/887404002/044479ea9c)

- [Create a One-to-many relationship auf Vimeo](https://vimeo.com/887403930/9ca9be6d80)

- [Data Models : Many-To-Many auf Vimeo](https://vimeo.com/887405556/cf353cd661)

- [Data Models : Many-To-Many Practice Example : Building a Data Model for WhatsApp auf Vimeo](https://vimeo.com/887403884/11bd890188)

- [Data Models : SQL Basics auf Vimeo](https://vimeo.com/887405585/1baf902f0d)

- [Basic SQL Practice auf Vimeo](https://vimeo.com/887403833/80c9b5132e)

- [Data Models : Joins auf Vimeo](https://vimeo.com/887405627/3eb35017e1)

- [Data Models : Joins Practice auf Vimeo](https://vimeo.com/887404139/a8a9a00387)

- Types of Joins

- [Data Models : Indexes auf Vimeo](https://vimeo.com/887405749/a60e5f200a)

- [Data Models : Module Summary auf Vimeo](https://vimeo.com/887405778/0fa1087368)

Zusatz:

- [NoSQL- Im Vergleich Zu SQL-Datenbanken | MongoDB](https://www.mongodb.com/de-de/resources/basics/databases/nosql-explained/nosql-vs-sql)

- [Databases Vs. Data Warehouses Vs. Data Lakes | MongoDB](https://www.mongodb.com/resources/basics/databases/data-lake-vs-data-warehouse-vs-database)

- [Was ist OLAP? – Analytische Online-Verarbeitung erklärt – AWS](https://aws.amazon.com/what-is/olap/)

## Technical Tradeoffs - Summary

### Technical Tradeoffs - Material
[https://tech-for-product.circle.so/feed](https://tech-for-product.circle.so/feed)[https://techforproduct.sana.ai/](https://techforproduct.sana.ai/)

## Roadmaps, PRDs and Sprint - Summary

### Roadmaps, PRDs and Sprint - Material
[https://tech-for-product.circle.so/feed](https://tech-for-product.circle.so/feed)[https://techforproduct.sana.ai/](https://techforproduct.sana.ai/)