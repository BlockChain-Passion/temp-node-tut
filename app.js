// npm -global command, comes with node
// npm --version 

// local dependency -use it only in this Project.
// npm i <package_name>

// global dependency - use it any project 
// npm install -g <package_name>

// npm init -y  :- will do every thing by default.
//              :- this include craeting the package.json

const _= require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);