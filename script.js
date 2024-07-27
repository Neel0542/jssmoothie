document.addEventListener('DOMContentLoaded', () => {
    // Smoothie class definition
    class Smoothie {
        constructor(name, size, base, fruits, extras) {
            this.name = name;
            this.size = size;
            this.base = base;
            this.fruits = fruits;
            this.extras = extras;
            // Prices for different components
            this.prices = {
                small: 3,
                medium: 5,
                large: 7,
                water: 0,
                milk: 1,
                yogurt: 1.5,
                juice: 1,
                banana: 0.5,
                strawberry: 0.75,
                mango: 1,
                blueberry: 1,
                apple: 0.5,
                'chia seeds': 0.5,
                'protein powder': 1,
                honey: 0.5,
                spinach: 0.75
            };
        }

        // Method to calculate the total price of the smoothie
        calculatePrice() {
            let total = this.prices[this.size] + this.prices[this.base];
            this.fruits.forEach(fruit => {
                total += this.prices[fruit];
            });
            this.extras.forEach(extra => {
                total += this.prices[extra];
            });
            return total.toFixed(2);
        }

        // Method to get a description of the smoothie
        getDescription() {
            return `
                Name: ${this.name}<br>
                Size: ${this.size}<br>
                Base: ${this.base}<br>
                Fruits: ${this.fruits.join(', ')}<br>
                Extras: ${this.extras.join(', ')}<br>
                <strong>Total Price: $${this.calculatePrice()}</strong>
            `;
        }

        // Method to get the image source for the smoothie
        getImage() {
            return './smoothie.jpg'; 
        }
    }

    // Event listener for the order button
    const orderButton = document.getElementById('order-button');
    orderButton.addEventListener('click', () => {
        // Capture the form values
        const name = document.getElementById('name').value;
        const size = document.getElementById('size').value;
        const base = document.getElementById('base').value;
        const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
        const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value);

        // Create a new Smoothie object
        const smoothie = new Smoothie(name, size, base, fruits, extras);
        
        // Display the smoothie description in the order summary
        document.getElementById('order-summary').innerHTML = `<div>${smoothie.getDescription()}</div>`;

        // Display the smoothie image
        const smoothieImage = document.getElementById('smoothie-image');
        smoothieImage.src = smoothie.getImage();
        smoothieImage.style.display = 'block';
    });
});
