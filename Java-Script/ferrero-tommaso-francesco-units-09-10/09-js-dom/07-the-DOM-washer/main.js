class DishwasherSystem {
    constructor() {
        this.dirtyStacks = [[], [], []];
        this.cleanStack = [];
        this.isRunning = false;

        // Initialize random number of plates in each dirty stack
        this.dirtyStacks.forEach((stack, index) => {
            const plateCount = Math.floor(Math.random() * 6) + 5; // 5-10 plates per stack
            for(let i = 0; i < plateCount; i++) {
                stack.push(`Plate ${index + 1}-${i + 1}`);
            }
        });

        this.drawStacks();
    }

    async washDish() {
        for(let i = 0; i < 2; i++) { // Wash 2 dishes at once
            for(let stack of this.dirtyStacks) {
                if(stack.length > 0) {
                    const dish = stack.pop();
                    this.cleanStack.push(dish);
                    break;
                }
            }
        }
    }

    drawStacks() {
        this.dirtyStacks.forEach((stack, index) => {
            const stackElement = document.getElementById(`dirtyStack${index + 1}`);
            stackElement.innerHTML = `<h2>Dirty Stack ${index + 1}</h2>`;
            stack.forEach(dish => {
                const plateDiv = document.createElement('div');
                plateDiv.className = 'plate dirty';
                plateDiv.textContent = dish;
                stackElement.appendChild(plateDiv);
            });
        });

        const cleanStackElement = document.getElementById('cleanStack');
        cleanStackElement.innerHTML = '<h2>Clean Stack</h2>';
        this.cleanStack.forEach(dish => {
            const plateDiv = document.createElement('div');
            plateDiv.className = 'plate clean';
            plateDiv.textContent = dish;
            cleanStackElement.appendChild(plateDiv);
        });
    }

    async runSimulation() {
        if(this.isRunning) return;
        this.isRunning = true;
        document.getElementById('startBtn').disabled = true;

        while(this.dirtyStacks.some(stack => stack.length > 0)) {
            await this.washDish();
            this.drawStacks();
            await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        }

        this.isRunning = false;
        document.getElementById('startBtn').disabled = false;
    }
}

const dishwasher = new DishwasherSystem();

function runSimulation() {
    dishwasher.runSimulation();
}
