curl -X GET \
  http://localhost:3000/login \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 5b45f9e9-1e9f-495a-8265-d7737ddca90e' \
  -H 'cache-control: no-cache'
  
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
  
curl -X GET \
  http://localhost:3000/profile/0 \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 8f615d96-7c94-6088-e5e6-fa3f8cabe34c'

curl -X GET \
  http://localhost:3000/events/2 \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 7419d0a3-d7d1-4dbf-a357-bc72a9bef8d1' \
  -H 'cache-control: no-cache'

curl -X GET \
  http://localhost:3000/events/1 \
  -H 'Postman-Token: aaef2018-d7b0-4258-bf24-e4bc6ef60bb6' \
  -H 'cache-control: no-cache'