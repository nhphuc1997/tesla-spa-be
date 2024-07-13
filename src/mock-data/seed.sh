curl -X 'POST' \
  'http://13.213.88.50/backend/categories/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "Mercedes-Benz",
      "value": "mercedes"
    },
    {
      "name": "lexus",
      "value": "lexus"
    },
    {
      "name": "Audi",
      "value": "audi"
    },
    {
      "name": "Bentley",
      "value": "bentley"
    },
    {
      "name": "BMW",
      "value": "bmw"
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

curl -X 'POST' \
  'http://13.213.88.50/backend/option-color/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "Premium",
      "imageUrl": "http://google.com",
      "price": "3000000",
      "categoryId": 1,
      "description": "Premium"
    },
    {
      "name": "Limit Edition",
      "imageUrl": "http://google.com",
      "price": "5000000",
      "categoryId": 1,
      "description": "Limit Edition"
    },
    {
      "name": "Standard",
      "imageUrl": "http://google.com",
      "price": "1000000",
      "categoryId": 1,
      "description": "Standard"
    },
    {
      "name": "Premium",
      "imageUrl": "http://google.com",
      "price": "13500000",
      "categoryId": 2,
      "description": "Premium"
    },
    {
      "name": "Limit Edition",
      "imageUrl": "http://google.com",
      "price": "13700000",
      "categoryId": 2,
      "description": "Limit Edition"
    },
    {
      "name": "Standard Basic",
      "imageUrl": "http://google.com",
      "price": "13400000",
      "categoryId": 2,
      "description": "Standard Basic"
    },
    {
      "name": "Standard Ultra",
      "imageUrl": "http://google.com",
      "price": "9000000",
      "categoryId": 2,
      "description": "Standard Ultra"
    },
    {
      "name": "Premium",
      "imageUrl": "http://google.com",
      "price": "13500000",
      "categoryId": 3,
      "description": "Premium"
    },
    {
      "name": "Limit Edition",
      "imageUrl": "http://google.com",
      "price": "12000000",
      "categoryId": 3,
      "description": "Limit Edition"
    },
    {
      "name": "Limit Edition",
      "imageUrl": "http://google.com",
      "price": "20000000",
      "categoryId": 4,
      "description": "Limit Edition"
    },
    {
      "name": "Premium",
      "imageUrl": "http://google.com",
      "price": "13000000",
      "categoryId": 5,
      "description": "Premium"
    },
    {
      "name": "Limit Edition",
      "imageUrl": "http://google.com",
      "price": "50000000",
      "categoryId": 5,
      "description": "Limit Edition"
    },
    {
      "name": "Standard",
      "imageUrl": "http://google.com",
      "price": "10000000",
      "categoryId": 5,
      "description": "Standard"
    },
    {
      "name": "Premium Ultra",
      "imageUrl": "http://google.com",
      "price": "13000000",
      "categoryId": 6,
      "description": "Premium Ultra"
    },
    {
      "name": "Limit Edition",
      "imageUrl": "http://google.com",
      "price": "50000000",
      "categoryId": 6,
      "description": "Limit Edition"
    },
    {
      "name": "Limit Ultra",
      "imageUrl": "http://google.com",
      "price": "150000000",
      "categoryId": 6,
      "description": "Limit Ultra"
    },
    {
      "name": "Premium",
      "imageUrl": "http://google.com",
      "price": "25000000",
      "categoryId": 6,
      "description": "Premium"
    },
    {
      "name": "Instinct Edition",
      "imageUrl": "http://google.com",
      "price": "350000000",
      "categoryId": 6,
      "description": "Instinct Edition"
    }
  ]
}'

curl -X 'POST' \
  'http://13.213.88.50/backend/option-interator/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "white",
      "imageUrl": "http://google.com",
      "price": "3500000",
      "categoryId": 1,
      "description": "white"
    },
    {
      "name": "black",
      "imageUrl": "http://google.com",
      "price": "7500000",
      "categoryId": 1,
      "description": "black"
    },
    {
      "name": "beige",
      "imageUrl": "http://google.com",
      "price": "7500000",
      "categoryId": 1,
      "description": "beige"
    },
    {
      "name": "white",
      "imageUrl": "http://google.com",
      "price": "27500000",
      "categoryId": 2,
      "description": "white"
    },
    {
      "name": "black",
      "imageUrl": "http://google.com",
      "price": "75000000",
      "categoryId": 2,
      "description": "black"
    },
    {
      "name": "white",
      "imageUrl": "http://google.com",
      "price": "27500000",
      "categoryId": 3,
      "description": "white"
    },
    {
      "name": "black",
      "imageUrl": "http://google.com",
      "price": "175000000",
      "categoryId": 3,
      "description": "black"
    },
    {
      "name": "white",
      "imageUrl": "http://google.com",
      "price": "105000000",
      "categoryId": 4,
      "description": "white"
    },
    {
      "name": "black",
      "imageUrl": "http://google.com",
      "price": "72000000",
      "categoryId": 4,
      "description": "black"
    },
    {
      "name": "Đỏ",
      "imageUrl": "http://google.com",
      "price": "20000000",
      "categoryId": 4,
      "description": "Đỏ"
    },
    {
      "name": "white",
      "imageUrl": "http://google.com",
      "price": "37500000",
      "categoryId": 5,
      "description": "white"
    },
    {
      "name": "black",
      "imageUrl": "http://google.com",
      "price": "72000000",
      "categoryId": 5,
      "description": "black"
    },
    {
      "name": "white",
      "imageUrl": "http://google.com",
      "price": "37500000",
      "categoryId": 6,
      "description": "white"
    },
    {
      "name": "beige",
      "imageUrl": "http://google.com",
      "price": "72000000",
      "categoryId": 6,
      "description": "beige"
    }
  ]
}'

curl -X 'POST' \
  'http://13.213.88.50/backend/option-wheel/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "18\"\" Photon Wheels Included All-Season Tires Range (EPA est.) : 341mi.",
      "imageUrl": true,
      "price": "12000000",
      "categoryId": 1,
      "description": "18\"\" Photon Wheels Included All-Season Tires Range (EPA est.) : 341mi."
    },
    {
      "name": "19\"\" Photon Wheels Included All-Season Tires Range (EPA est.) : 341mi.",
      "imageUrl": true,
      "price": "19000000",
      "categoryId": 1,
      "description": "19\"\" Photon Wheels Included All-Season Tires Range (EPA est.) : 341mi."
    },
    {
      "name": "18\"\" Photon Wheels",
      "imageUrl": true,
      "price": "15000000",
      "categoryId": 2,
      "description": "18\"\" Photon Wheels"
    },
    {
      "name": "19\"\" Photon Wheels",
      "imageUrl": true,
      "price": "27000000",
      "categoryId": 2,
      "description": "19\"\" Photon Wheels"
    },
    {
      "name": "20\"\" Photon Wheels Titan",
      "imageUrl": true,
      "price": "35000000",
      "categoryId": 3,
      "description": "20\"\" Photon Wheels Titan"
    },
    {
      "name": "20\"\" Photon Wheels",
      "imageUrl": true,
      "price": "27400000",
      "categoryId": 3,
      "description": "20\"\" Photon Wheels"
    },
    {
      "name": "19\"\" Photon Wheels Included All-Season Tires Range",
      "imageUrl": true,
      "price": "27400000",
      "categoryId": 3,
      "description": "19\"\" Photon Wheels Included All-Season Tires Range"
    },
    {
      "name": "19\"\" Photon Wheels Included All-Season Tires Range",
      "imageUrl": true,
      "price": "25400000",
      "categoryId": 4,
      "description": "19\"\" Photon Wheels Included All-Season Tires Range"
    },
    {
      "name": "19\"\" Photon Wheels Included All-Season Tires Range",
      "imageUrl": true,
      "price": "22400000",
      "categoryId": 4,
      "description": "19\"\" Photon Wheels Included All-Season Tires Range"
    },
    {
      "name": "19\"\" Photon Wheels Included All-Season Tires Range",
      "imageUrl": true,
      "price": "52400000",
      "categoryId": 5,
      "description": "19\"\" Photon Wheels Included All-Season Tires Range"
    },
    {
      "name": "17\"\" Photon Wheels Included All-Season Tires Range",
      "imageUrl": true,
      "price": "12400000",
      "categoryId": 5,
      "description": "17\"\" Photon Wheels Included All-Season Tires Range"
    },
    {
      "name": "19\"\" Photon Wheels Tires Range",
      "imageUrl": true,
      "price": "52400000",
      "categoryId": 6,
      "description": "19\"\" Photon Wheels Tires Range"
    },
    {
      "name": "17\"\" Photon Wheels Included All-Season",
      "imageUrl": true,
      "price": "12400000",
      "categoryId": 6,
      "description": "17\"\" Photon Wheels Included All-Season"
    }
  ]
}'


curl -X 'POST' \
  'http://13.213.88.50/backend/product-basic-engines/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "CITY G| CITY L | CITY RS",
      "code": "1.5L i-VTEC DOHC 4 xi lanh thẳng hàng, 16 van",
      "type": "Vô cấp CVT",
      "displacementVol": "1498",
      "maxRound": "119 (89 kW)/6.600",
      "maxMoment": "145/4.300",
      "standH2O": "EURO 5,6",
      "gear": "Phun xăng điện tử/ PGM-FI",
      "moveSystem": "AWD",
      "driverMode": "Eco/Normal/Sport"
    },
    {
      "name": "BR-V G | BR-V L",
      "code": "1,5L DOHC i-VTEC, 4 xi lanh thẳng hàng, 16 van",
      "type": "Vô cấp CVT",
      "displacementVol": "1498",
      "maxRound": "119 (89 kW)/6.600",
      "maxMoment": "145/4.300",
      "standH2O": "EURO 42",
      "gear": "Phun xăng điện tử/ PGM-FI",
      "moveSystem": "AWD",
      "driverMode": "Eco/Normal/Sport"
    },
    {
      "name": "HR-V G | HR-V L | HR-V RS",
      "code": "1.5L i-VTEC, 4 kỳ,  4 xi-lanh thẳng hàng ",
      "type": "Vô cấp CVT",
      "displacementVol": "1498",
      "maxRound": "119 (89 kW)/6.600",
      "maxMoment": "145/4.300",
      "standH2O": "EURO 42",
      "gear": "Phun xăng điện tử/ PGM-FI",
      "moveSystem": "AWD",
      "driverMode": "Eco/Normal/Sport"
    },
    {
      "name": "CIVIC E | CIVIC G | CIVIC RS ",
      "code": "1.5L DOHC VTEC TURBO, 4 xi-lanh thẳng hàng, 16 van",
      "type": "Vô cấp CVT",
      "displacementVol": "1498",
      "maxRound": "176 (131 kW)/6.000",
      "maxMoment": "240/1.700-4.500",
      "standH2O": "EURO 47",
      "gear": "PGM-FI (Phun xăng trực tiếp)",
      "moveSystem": "AWD",
      "driverMode": "Eco/Normal/Sport"
    }
  ]
}'

curl -X 'POST' \
  'http://13.213.88.50/backend/product-basic-sizes/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "CITY G| CITY L | CITY RS",
      "width": "1467",
      "length": "1748",
      "height": "4580",
      "widthBasic": "2600"
    },
    {
      "name": "BR-V G | BR-V L",
      "width": "4.490",
      "length": "1780",
      "height": "1685",
      "widthBasic": "2700"
    },
    {
      "name": "HR-V G | HR-V L | HR-V RS",
      "width": "4.490",
      "length": "1780",
      "height": "1685",
      "widthBasic": "2700"
    },
    {
      "name": "HR-V G | HR-V L | HR-V RS",
      "width": "4678",
      "length": "1802",
      "height": "1415",
      "widthBasic": "2735"
    }
  ]
}'

curl -X 'POST' \
  'http://13.213.88.50/backend/product-basic-params/bulk' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "bulk": [
    {
      "name": "CITY G | CITY L | CITY RS",
      "total_capacity": "402mi",
      "moment": "145/4.300",
      "acceleration": "3.1sec"
    },
    {
      "name": "BR-V G | BR-V L",
      "total_capacity": "402mi",
      "moment": "145/4.300",
      "acceleration": "3.1sec"
    },
    {
      "name": "HR-V G | HR-V L | HR-V RS",
      "total_capacity": "402mi",
      "moment": "145/4.300",
      "acceleration": "3.1sec"
    },
    {
      "name": "HR-V G | HR-V L | HR-V RS",
      "total_capacity": "402mi",
      "moment": "145/4.300",
      "acceleration": "3.1sec"
    }
  ]
}'
