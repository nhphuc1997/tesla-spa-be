curl -X 'POST' \
  'http://13.213.88.50/backend/categories/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "Mercedes-Benz"
    },
    {
      "name": "lexus"
    },
    {
      "name": "Audi"
    },
    {
      "name": "Bentley"
    },
    {
      "name": "BMW"
    }
  ]
}'


curl -X 'POST' \
  'http://13.213.88.50/backend/color-groups/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "white"
    },
    {
      "name": "Red"
    },
    {
      "name": "Grey"
    },
    {
      "name": "Blue"
    },
    {
      "name": "Titan"
    },
    {
      "name": "Black"
    }
  ]
}'
