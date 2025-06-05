# FACTORY

## Author

Tommaso Ferrero SWD

## Text of the exercise

Write car.json, a JSON that represents a car object  
    - Make your object complete, having at least one property of the following types
    - Number, String, Boolean, Array, Object, Null
Write a factory.json that represents a car factory  
    - Follow the same rules above
Transform car.json into cars.json with 5 cars  
Cars should belong to a factory  
    -  Write two variants of factory.json
    - One that has cars directly embedded in the factory JSON structure
    - Another that uses cars referring to their IDs

## Description of the solution of the exercise

The solution consists of five JSON files created according to the exercise instructions:

- `car.json`: contains a single, fully detailed car object with properties of all required data types (Number, String, Boolean, Array, Object, Null).
- `factory.json`: represents a car factory, including relevant information and structured properties.
- `cars.json`: contains an array of five car objects, each with an assigned `factoryId` to indicate the factory they belong to.
- `factory_with_embedded_cars.json`: a version of the factory object that directly embeds the related car objects inside the factory structure.
- `factory_with_car_ids.json`: a factory object that references related cars using their unique IDs.
