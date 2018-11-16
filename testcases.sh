curl -X GET \
  http://localhost:3000/login \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 514c45b9-57d0-4907-b840-b834949b9dee' \
  -H 'cache-control: no-cache' \
  -d 'username=user1%40ucla.edu&password=incorrect'
  
curl -X POST \
  http://localhost:3000/login \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 4a75fbae-67af-444c-9ed3-0d31e409fb13' \
  -H 'cache-control: no-cache' \
  -d 'username=user1%40ucla.edu&password=incorrect'

curl -X POST \
  http://localhost:3000/login \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: d92d8286-0b95-4248-be8b-f6a89f7b3d86' \
  -H 'cache-control: no-cache' \
  -d 'username=user1%40ucla.edu&password=password'