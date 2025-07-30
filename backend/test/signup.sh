#!/bin/bash

curl -X POST http://localhost:3000/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"kccstb", "first_name":"charlie", "last_name":"blair", "password":"willie", "email":"tuckerboi@gmail.com"}'
