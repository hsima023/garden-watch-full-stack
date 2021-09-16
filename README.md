# garden-watch-full-stack

## Introduction

In this project, I construct a simple to-do app for learning purposes using Python, JavaScript, Html, Css and PostgreSQL. I choose this stack  because I want to use programming languages that I have learned in University. I have learned above languages in University except JavaScript. I choose JavaScript to utilize React.js, a popular framework that seems to be in demand. 

I utilize Python Django technology to build the model on the backend web app. The Django app is connected to PSQL database to store informations. I utilize React.js technology to build the frontend web app. Additionally, I use Django Rest Framework, and CORS headers to allow interactions between client-side and server-side web app. For authorization, I utilize Knox technology. Knox allows clients to sign in on multiple devices. Authorized users are able to retrieve and modify data in the database dynamically, within its authority that is specified on the backend server. 

This project is being done over Summer 2021.

### Technology
- Django : being used to construct server-side web app.
- React.js : being used to construct client-side web app.
- React/Redux : being used for predictable states and easier debugging.
- Axios : being used to make request calls to an API(web server API).
- CORS headers : being used to allow cross domains communications with the REST API server.
- Django rest framework : being used to build a REST API on the backend.
- Knox(Django-rest-Knox) : being used for users authentications on the backend.
- Gunicorn : being used as a WSGI http server for Python.
- Nginx : being used as a web server for reverse proxy. Static pages of the backend web is stored in here.
- Docker : being used as a container for consistent enviroments across various servers.

### Services 
- Amazon S3 (Simple Storage Service) : hosts the static pages of the client-side web application.
- Amazon EC2 (Elastic Compute Cloud) : virtual machine where the codes for backend and frontend are hosted. Backend server is hosted on this instance as well.
- Amazon RDS (Relational Database Service) : host PostgreSQL database server where informations are being stored.
- Amazon Route 53 : regiters domains and setup DNS settings. Routes traffics from certain subdomains to appropriate targets. Routes requests from web client subdomain to Amazon S3 instance. Routes requests from web server subdomain to Amazon ELB with Amazon EC2 as its target.
- Amazon Cloudfront : delivers the content of the web app through a worldwide network. Adds caching layer to Amazon S3 for optimal performance.SSL certification for the client-side subdomain is installed in here.
- Amazon Elastic Load Balancing : accepts incoming traffic from clients and routes requests to Amazon EC2 instance. SSL certification for the server-side subdomain is registered in here.

### Docker-compose

In this project, I utilize Docker-compose with Nginx and Gunicorn to serve the web server. I decide to use Docker-compose so that I have the liberty to host my web app on many servers and they will run on the same environment. With docker-compose, I simply need to pull my codes to the new server and run the docker-compose.

## Conclusion
On this project I learn how to:
1. Set up PostgreSQL database on AWS RDS.
2. Build a server web app and create a model using Django.
3. Build a REST API using Django rest framework.
4. Set up permissions/authorizations using Django-Rest-Knox framework.
5. Connect the web app with the AWS RDS PostgreSQL database.
6. Set up CORS headers for cross domains connections.
7. Configure the web app with Docker and Gunicorn.
8. Host a REST API on AWS EC2 instance.
9. Create a reverse proxy server with Nginx.
10. Deploy the server web app on Nginx with docker-compose.
11. Build a client-side web app using React.js.
12. Implement React-Redux framework for consistent predictable states.
13. Use third-party components such as bootstrap and material-ui.
14. Retrieve data from server REST API using axios library.
15. Deploy client-side web app on AWS S3.
16. Route traffics to appropriate subdomains using AWS Route 53.
17. Install SSL certificates to appropriate subdomains using AWS CloudFront and AWS Load Balancing.
