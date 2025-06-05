/**
         * JSON strings stored as variables
         * @type {string}
         */
        const carsJsonString = `[
  {
    "id": "CAR001",
    "make": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 28500.99,
    "isElectric": false,
    "colors": ["White", "Black", "Silver", "Red"],
    "engine": {
      "type": "4-cylinder",
      "displacement": 2.5,
      "horsepower": 203,
      "fuelType": "Gasoline"
    },
    "features": ["Air Conditioning", "Bluetooth", "Backup Camera", "Lane Assist"],
    "warranty": {
      "basic": "3 years / 36,000 miles",
      "powertrain": "5 years / 60,000 miles"
    },
    "recalls": null,
    "inStock": true,
    "manufacturedDate": "2023-05-15T10:30:00Z",
    "factoryId": "FACTORY001"
  },
  {
    "id": "CAR002",
    "make": "Toyota",
    "model": "Prius",
    "year": 2024,
    "price": 32850.00,
    "isElectric": true,
    "colors": ["Blue", "White", "Silver"],
    "engine": {
      "type": "Hybrid",
      "displacement": 1.8,
      "horsepower": 121,
      "fuelType": "Hybrid"
    },
    "features": ["Solar Roof", "Advanced Safety Package", "Wireless Charging", "Smart Key"],
    "warranty": {
      "basic": "3 years / 36,000 miles",
      "powertrain": "5 years / 60,000 miles"
    },
    "recalls": null,
    "inStock": true,
    "manufacturedDate": "2024-02-20T14:15:00Z",
    "factoryId": "FACTORY001"
  },
  {
    "id": "CAR003",
    "make": "Toyota",
    "model": "RAV4",
    "year": 2023,
    "price": 35200.50,
    "isElectric": false,
    "colors": ["Gray", "Black", "Blue", "White"],
    "engine": {
      "type": "4-cylinder",
      "displacement": 2.5,
      "horsepower": 203,
      "fuelType": "Gasoline"
    },
    "features": ["All-Wheel Drive", "Roof Rails", "Apple CarPlay", "Toyota Safety Sense"],
    "warranty": {
      "basic": "3 years / 36,000 miles",
      "powertrain": "5 years / 60,000 miles"
    },
    "recalls": null,
    "inStock": false,
    "manufacturedDate": "2023-08-10T11:45:00Z",
    "factoryId": "FACTORY001"
  },
  {
    "id": "CAR004",
    "make": "Toyota",
    "model": "Corolla",
    "year": 2023,
    "price": 24500.75,
    "isElectric": false,
    "colors": ["Red", "White", "Black"],
    "engine": {
      "type": "4-cylinder",
      "displacement": 2.0,
      "horsepower": 169,
      "fuelType": "Gasoline"
    },
    "features": ["Bluetooth", "USB Ports", "Backup Camera", "Lane Departure Alert"],
    "warranty": {
      "basic": "3 years / 36,000 miles",
      "powertrain": "5 years / 60,000 miles"
    },
    "recalls": null,
    "inStock": true,
    "manufacturedDate": "2023-03-22T16:20:00Z",
    "factoryId": "FACTORY001"
  },
  {
    "id": "CAR005",
    "make": "Toyota",
    "model": "Highlander",
    "year": 2024,
    "price": 42750.25,
    "isElectric": false,
    "colors": ["White", "Silver", "Black", "Bronze"],
    "engine": {
      "type": "V6",
      "displacement": 3.5,
      "horsepower": 295,
      "fuelType": "Gasoline"
    },
    "features": ["Third Row Seating", "Panoramic Sunroof", "Premium Audio", "Navigation System"],
    "warranty": {
      "basic": "3 years / 36,000 miles",
      "powertrain": "5 years / 60,000 miles"
    },
    "recalls": null,
    "inStock": true,
    "manufacturedDate": "2024-01-05T08:30:00Z",
    "factoryId": "FACTORY001"
  }
]`;

        /**
         * Factory JSON data as string
         * @type {string}
         */
        const factoryJsonString = `{
  "id": "FACTORY001",
  "name": "Toyota Motor Manufacturing",
  "location": {
    "address": "1001 Cherry Blossom Way",
    "city": "Georgetown",
    "state": "Kentucky",
    "zipCode": "40324",
    "country": "USA",
    "coordinates": {
      "latitude": 38.2098,
      "longitude": -84.5588
    }
  },
  "established": 1988,
  "isActive": true,
  "productionCapacity": 550000,
  "employees": 8500,
  "certifications": ["ISO 9001", "ISO 14001", "OHSAS 18001"],
  "specialties": ["Sedan Manufacturing", "Hybrid Technology", "Quality Control"],
  "parentCompany": {
    "name": "Toyota Motor Corporation",
    "headquarters": "Toyota City, Japan",
    "founded": 1937
  },
  "contact": {
    "phone": "+1-502-868-3000",
    "email": "info@toyotaky.com",
    "website": "https://www.toyota.com/usa/operations/map/georgetown"
  },
  "sustainabilityRating": 4.2,
  "lastInspection": "2024-11-15T09:00:00Z",
  "complianceViolations": null
}`;


/**
 * Parses JSON strings containing car and factory data.
 * @type {Array<Object>} cars - List of car objects.
 * @type {Object} factory - Factory information object.
 */
const cars = JSON.parse(carsJsonString);
const factory = JSON.parse(factoryJsonString);

/**
 * Displays a list of cars in the DOM element with ID 'cars-container'.
 * Each car is shown as a list item with make, model, year, and price.
 */
function displayCars() {
    const carsContainer = document.getElementById('cars-container');
    
    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = `${car.make} ${car.model} (${car.year}) - ${car.price}$`;
        carsContainer.appendChild(li);
    });
}

/**
 * Displays factory information in the DOM element with ID 'factory-container'.
 * The information includes factory name, city, state, and number of employees.
 */
function displayFactory() {
    const factoryContainer = document.getElementById('factory-container');
    
    const li = document.createElement('li');
    li.textContent = `${factory.name} - ${factory.location.city}, ${factory.location.state} - Employees: ${factory.employees}`;
    factoryContainer.appendChild(li);
}

/**
 * Initializes the page by rendering car and factory data after the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', function() {
    displayCars();
    displayFactory();
});