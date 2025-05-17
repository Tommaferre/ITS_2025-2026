// Global variables
const flightsData = [];
const UPDATE_INTERVAL = 10000; // 10 seconds
const REMOVE_AFTER_ARRIVAL = 60000; // 60 seconds
let nextFlightId = 1;

// Airport data
const airports = [
    { code: 'LHR', name: 'London Heathrow' },
    { code: 'CDG', name: 'Paris Charles de Gaulle' },
    { code: 'FCO', name: 'Rome Fiumicino' },
    { code: 'MAD', name: 'Madrid Barajas' },
    { code: 'AMS', name: 'Amsterdam Schiphol' },
    { code: 'FRA', name: 'Frankfurt' },
    { code: 'IST', name: 'Istanbul' },
    { code: 'BCN', name: 'Barcelona' },
    { code: 'ZRH', name: 'Zurich' },
    { code: 'MUC', name: 'Munich' },
    { code: 'BRU', name: 'Brussels' },
    { code: 'LIS', name: 'Lisbon' },
    { code: 'VIE', name: 'Vienna' },
    { code: 'ATH', name: 'Athens' },
    { code: 'CPH', name: 'Copenhagen' }
];

// Airlines data
const airlines = [
    { code: 'AZ', name: 'ITA Airways' },
    { code: 'LH', name: 'Lufthansa' },
    { code: 'AF', name: 'Air France' },
    { code: 'BA', name: 'British Airways' },
    { code: 'IB', name: 'Iberia' },
    { code: 'KL', name: 'KLM' },
    { code: 'LX', name: 'Swiss' },
    { code: 'TK', name: 'Turkish Airlines' },
    { code: 'SN', name: 'Brussels Airlines' },
    { code: 'OS', name: 'Austrian Airlines' }
];

// Status cycle order
const statusCycle = ['SCHEDULED', 'ON_TIME', 'BOARDING', 'LANDED', 'ARRIVED'];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    // Update flights every 10 seconds
    setInterval(() => {
        updateFlights();
        renderFlights();
        updateLastUpdated();
    }, UPDATE_INTERVAL);
    
    // Add new flight every 10 seconds
    setInterval(() => {
            addNewFlight();
            renderFlights();
    }, 10000);
    
    // Initial render
    renderFlights();
});

// Format time
function formatTime(date) {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// Format date
function formatDate(date) {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
}

// Update current time display
function updateCurrentTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = 
        formatDate(now) + ' ' + formatTime(now);
}

// Update last updated time
function updateLastUpdated() {
    document.getElementById('last-updated').textContent = 'Just now';
    
    // After 3 seconds, show the actual time
    setTimeout(() => {
        const now = new Date();
        document.getElementById('last-updated').textContent = formatTime(now);
    }, 3000);
}

// Generate random flight number
function generateFlightNumber(airlineCode) {
    const number = Math.floor(1000 + Math.random() * 9000);
    return `${airlineCode}${number}`;
}

// Get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate scheduled arrival time
function generateScheduledTime() {
    const now = new Date();
    // Random time in next 3 hours
    const minutes = Math.floor(Math.random() * 180);
    now.setMinutes(now.getMinutes() + minutes);
    return now;
}

// Create a new flight object
function createFlight() {
    const airline = getRandomItem(airlines);
    const origin = getRandomItem(airports);
    const scheduled = generateScheduledTime();
    
    // Sometimes create a delayed flight
    const isDelayed = Math.random() < 0.2; // 20% chance of being delayed
    let estimated;
    let status;
    
    if (isDelayed) {
        // Delay between 15 and 90 minutes
        const delayMinutes = 15 + Math.floor(Math.random() * 76);
        estimated = new Date(scheduled);
        estimated.setMinutes(estimated.getMinutes() + delayMinutes);
        status = 'DELAYED';
    } else {
        estimated = new Date(scheduled);
        status = 'SCHEDULED';
    }
    
    // Determine which terminal
    const terminal = Math.random() < 0.7 ? '1' : '2';
    
    return {
        id: nextFlightId++,
        flightNumber: generateFlightNumber(airline.code),
        airline: airline.name,
        origin: origin.name,
        originCode: origin.code,
        scheduled: scheduled,
        estimated: estimated,
        terminal: terminal,
        status: status,
        statusIndex: isDelayed ? -1 : 0, // If delayed, use special case
        addedAt: new Date(),
        highlighted: true
    };
}

// Generate initial flights
function generateInitialFlights(count) {
    for (let i = 0; i < count; i++) {
        const flight = createFlight();
        
        // For initial flights, randomly assign different statuses
        const randomStatusIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
        flight.statusIndex = randomStatusIndex;
        flight.status = statusCycle[randomStatusIndex];
        
        if (Math.random() < 0.2) { // 20% chance of delay
            flight.status = 'DELAYED';
            flight.statusIndex = -1;
            flight.estimated = new Date(flight.scheduled);
            flight.estimated.setMinutes(flight.estimated.getMinutes() + 20 + Math.floor(Math.random() * 60));
        }
        
        flight.highlighted = false; // Don't highlight initial flights
        flightsData.push(flight);
    }
    
    // Sort flights by scheduled time
    sortFlights();
}

// Add a new flight
function addNewFlight() {
    const flight = createFlight();
    flightsData.push(flight);
    sortFlights();
}

// Sort flights by scheduled time
function sortFlights() {
    flightsData.sort((a, b) => a.scheduled - b.scheduled);
}

// Update flight statuses
function updateFlights() {
    const now = new Date();
    
    flightsData.forEach((flight, index) => {
        // Remove highlight class
        flight.highlighted = false;
        
        // Handle delayed flights
        if (flight.status === 'DELAYED') {
            // 30% chance to resolve delay and move to next status
            if (Math.random() < 0.3) {
                flight.statusIndex = Math.min(2, statusCycle.length - 1); // Jump ahead in status
                flight.status = statusCycle[flight.statusIndex];
            }
        } 
        // Normal status progression
        else {
            // If it's time to move to next status (higher probability as time passes)
            const minutesSinceAdded = (now - flight.addedAt) / 60000;
            const baseChance = 0.2 + (minutesSinceAdded / 30) * 0.4; // Increases over time
            
            if (Math.random() < baseChance && flight.statusIndex < statusCycle.length - 1) {
                flight.statusIndex++;
                flight.status = statusCycle[flight.statusIndex];
            }
            
            // Small chance to get delayed if not already in later stages
            if (flight.statusIndex < 2 && Math.random() < 0.05) {
                flight.status = 'DELAYED';
                flight.statusIndex = -1;
                flight.estimated = new Date(flight.scheduled);
                flight.estimated.setMinutes(flight.estimated.getMinutes() + 15 + Math.floor(Math.random() * 45));
            }
        }
        
        // Mark flights for removal after being in ARRIVED status for 60 seconds
        if (flight.status === 'ARRIVED') {
            const arrivedTime = flight.arrivedTime || now;
            if (!flight.arrivedTime) {
                flight.arrivedTime = now;
            }
            
            if (now - arrivedTime > REMOVE_AFTER_ARRIVAL) {
                flight.toRemove = true;
            }
        }
    });
    
    // Remove flights marked for removal
    for (let i = flightsData.length - 1; i >= 0; i--) {
        if (flightsData[i].toRemove) {
            flightsData.splice(i, 1);
        }
    }
    
    // Occasionally add a special status flight
    if (Math.random() < 0.05 && flightsData.length > 0) { // 5% chance
        const randomFlight = flightsData[Math.floor(Math.random() * flightsData.length)];
        const specialStatus = Math.random() < 0.5 ? 'DIVERTED' : 'CANCELLED';
        randomFlight.status = specialStatus;
        randomFlight.statusIndex = -2; // Special status
    }
}

// Render flights to the table
function renderFlights() {
    const tbody = document.getElementById('arrivals-body');
    const noFlightsMessage = document.getElementById('no-flights-message');
    
    // Clear current table
    tbody.innerHTML = '';
    
    if (flightsData.length === 0) {
        noFlightsMessage.style.display = 'block';
        return;
    } else {
        noFlightsMessage.style.display = 'none';
    }
    
    flightsData.forEach(flight => {
        const row = document.createElement('tr');
        row.className = 'flight-row';
        
        if (flight.highlighted) {
            row.classList.add('highlight-new');
        }
        
        if (flight.status === 'DELAYED') {
            row.classList.add('delayed');
        }
        
        // Format flight info
        const scheduledTime = formatTime(flight.scheduled);
        const estimatedTime = flight.estimated ? formatTime(flight.estimated) : scheduledTime;
        
        row.innerHTML = `
            <td><strong>${flight.flightNumber}</strong></td>
            <td>${flight.origin} (${flight.originCode})</td>
            <td>${flight.airline}</td>
            <td>${scheduledTime}</td>
            <td>${estimatedTime}</td>
            <td>T${flight.terminal}</td>
            <td><span class="status status-${flight.status.toLowerCase()}">${formatStatus(flight.status)}</span></td>
        `;
        
        tbody.appendChild(row);
    });
}

// Format status for display
function formatStatus(status) {
    switch (status) {
        case 'SCHEDULED': return 'Scheduled';
        case 'ON_TIME': return 'On Time';
        case 'DELAYED': return 'Delayed';
        case 'BOARDING': return 'Landing';
        case 'LANDED': return 'Landed';
        case 'ARRIVED': return 'Arrived';
        case 'DIVERTED': return 'Diverted';
        case 'CANCELLED': return 'Cancelled';
        default: return status;
    }
}