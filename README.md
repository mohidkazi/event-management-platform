# Event Management Platform

## Approach
- create CRUD api endpoints along with controller layer to handle request and response. service layer to handle the logic
- we read the data from the source and push the incoming data to the list and then store the list to the destination
- same understanding is applied while updating, fetching and deleting the data

## Setup & Installation
- clone the branch
- cd into branch
- install dependencies
- run the server

```shell
git clone git@github.com:mohidkazi/event-management-platform.git
cd event-management-platform
pnpm install
pnpm dev
```

## API
- Import insomnia collection `Insomnia_2024-11-19.json`

or

- Add an event
```shell
curl --request POST \
  --url 'http://127.0.0.1:3333/add?id=1&=' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.1.1' \
  --data '{
	"eventName": "Lorem Ipsum",
	"eventDate": "Lorem Ipsum",
	"organizer": "Lorem",
	"email": "Lorem@ipsum.com",
	"phone": "Lorem",
	"location": {
		"street": "Lorem",
		"city": "Lorem",
		"state": "Lorem",
		"zip": "Lorem"
	},
}'
```
- Update an Event
```shell
curl --request POST \
  --url 'http://127.0.0.1:3333/update?=' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/10.1.1' \
  --data '{
	"id": "1732032458232597",
	"eventName": "Lorem Ipsum 2",
	"eventDate": "Lorem Ipsum",
	"organizer": "Lorem",
	"email": "Lorem@ipsum.com",
	"phone": "Lorem",
	"location": {
		"street": "Lorem",
		"city": "Lorem",
		"state": "Lorem",
		"zip": "Lorem"
	},
}'
```
- Delete an Event
```shell
curl --request POST \
  --url 'http://127.0.0.1:3333/delete?id=1732032458232597' \
  --header 'User-Agent: insomnia/10.1.1'
```
- Fetch an Event
```shell
curl --request GET \
  --url 'http://127.0.0.1:3333/fetch?id=1732032458232597&=' \
  --header 'User-Agent: insomnia/10.1.1'
```
- Fetch All Events
```shell
curl --request GET \
  --url http://127.0.0.1:3333/fetch-all \
  --header 'User-Agent: insomnia/10.1.1'
```