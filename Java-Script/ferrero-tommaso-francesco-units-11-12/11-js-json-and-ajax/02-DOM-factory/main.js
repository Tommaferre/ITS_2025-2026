// JSON strings stored in variables
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

// Parse JSON strings
const factory = JSON.parse(factoryJsonString);
const cars = JSON.parse(carsJsonString);

// Function to create factory list item
function createFactoryListItem(factory) {
    const listItem = document.createElement('div');
    listItem.className = 'styled-list';
    
    const li = document.createElement('li');
    li.className = 'factory';
    
    li.innerHTML = `
        <div class="item-content">
            <div class="item-title">${factory.name}</div>
            <div class="item-details">
                <div class="detail-row">
                    <span class="detail-item">ID: ${factory.id}</span>
                    <span class="detail-item">Est. ${factory.established}</span>
                    <span class="status ${factory.isActive ? 'in-stock' : 'out-of-stock'}">
                        ${factory.isActive ? 'Active' : 'Inactive'}
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-item">📍 ${factory.location.city}, ${factory.location.state}</span>
                    <span class="detail-item">👥 ${factory.employees.toLocaleString()} employees</span>
                    <span class="detail-item">🏭 ${factory.productionCapacity.toLocaleString()} capacity</span>
                </div>
                <div class="detail-row">
                    <span class="detail-item">⭐ ${factory.sustainabilityRating}/5</span>
                    <span class="detail-item">📞 ${factory.contact.phone}</span>
                    <span class="detail-item">✉️ ${factory.contact.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-item">🏢 ${factory.parentCompany.name}</span>
                    <span class="detail-item">📋 ${factory.certifications.join(', ')}</span>
                </div>
            </div>
        </div>
    `;
    
    listItem.appendChild(li);
    return listItem;
}

// Function to create car list items
function createCarListItems(cars) {
    const listContainer = document.createElement('div');
    listContainer.className = 'styled-list';
    
    cars.forEach(car => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <div class="item-content">
                <div class="item-title">${car.year} ${car.make} ${car.model}</div>
                <div class="item-details">
                    <div class="detail-row">
                        <span class="detail-item">ID: ${car.id}</span>
                        <span class="price">$${car.price.toLocaleString()}</span>
                        <span class="status ${car.inStock ? 'in-stock' : 'out-of-stock'}">
                            ${car.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                        <span class="status ${car.isElectric ? 'electric' : 'gasoline'}">
                            ${car.isElectric ? 'Electric' : car.engine.fuelType}
                        </span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-item">🔧 ${car.engine.type}</span>
                        <span class="detail-item">⚡ ${car.engine.horsepower} HP</span>
                        <span class="detail-item">🎨 ${car.colors.length} colors</span>
                        <span class="detail-item">📅 ${new Date(car.manufacturedDate).toLocaleDateString()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-item">🛡️ ${car.warranty.basic}</span>
                        <span class="detail-item">🔧 ${car.warranty.powertrain}</span>
                        <span class="detail-item">🏭 ${car.factoryId}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-item">✨ ${car.features.slice(0, 3).join(', ')}${car.features.length > 3 ? '...' : ''}</span>
                    </div>
                </div>
            </div>
        `;
        
        listContainer.appendChild(li);
    });
    
    return listContainer;
}

// Render factory to DOM
const factoryContainer = document.getElementById('factory-list');
factoryContainer.appendChild(createFactoryListItem(factory));

// Render cars to DOM
const carsContainer = document.getElementById('cars-list');
carsContainer.appendChild(createCarListItems(cars));

// Log to console to show the parsing worked
console.log('Parsed Factory:', factory);
console.log('Parsed Cars:', cars);