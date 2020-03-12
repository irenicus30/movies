# movies

# usage
curl -X GET http://movies54698.herokuapp.com/movies
\
curl --data "t=Superman" -X POST http://movies54698.herokuapp.com/movies


curl -X GET http://movies54698.herokuapp.com/comments
\
curl --data "i=tt0100669&text=first comment" -X POST http://movies54698.herokuapp.com/comments

Docker image is available on dockerhub as irenicus30/movies
Run below commands to start REST API

docker pull irenicus30/movies
\
docker run -p 8080:8080 irenicus30/movies 

it will be available on your local machine at port 8080

