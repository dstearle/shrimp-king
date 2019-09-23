export default [
    
    // ******* Neocaridina shrimp *******

        // Cherry Shrimp
        { 
            id: 1, 
            name: 'Cherry Shrimp',
            photo: require("./../assets/images/shrimpPhotos/cherryShrimp.png"),
            alt: 'Cherry Shrimp Image',

            // Icons
            overlayText: 'The original cherry shrimp!',
            tags: ['#Neocaridina', '#Red', '#Common'],
            favorited: true,
            
            // Pricing
            price: 110,
            priceMin: 60,
            priceMax: 180,

            // Quantity
            quantity: 10,
            quantityMin: 4,
            quantityMax: 16,
            
            // Styling
            text: 'text-danger',
            button: 'btn-outline-danger',
            border: 'border-danger'
        },
        
        // Lemon Shrimp
        { 
            id: 2, 
            name: 'Lemon Shrimp',
            photo: require("./../assets/images/shrimpPhotos/lemonShrimp.jpg"),
            alt: 'Lemon Shrimp Image',

            // Icons
            overlayText: 'Will brighten up any tank!',
            tags: ['#Neocaridina', '#Yellow', '#Common'],
            favorited: false,
            
            // Pricing
            price: 200,
            priceMin: 120,
            priceMax: 230,

            // Quantity
            quantity: 8,
            quantityMin: 2,
            quantityMax: 14,
            
            // Styling
            text: 'text-warning',
            button: 'btn-outline-warning',
            border: 'border-warning'
        },
        
        // Blueberry Shrimp
        { 
            id: 3, 
            name: 'Blueberry Shrimp',
            photo: require("./../assets/images/shrimpPhotos/blueberryShrimp.jpg"),
            alt: 'Blueberry Shrimp Image',

            // Icons
            overlayText: 'Also known as "blue dream" or "blue velvet" shrimps.',
            tags: ['#Neocaridina', '#Blue', '#Common'],
            favorited: false,
            
            // Pricing
            price: 250,
            priceMin: 145,
            priceMax: 320,

            // Quantity
            quantity: 6,
            quantityMin: 1,
            quantityMax: 10,
            
            // Styling
            text: 'text-info',
            button: 'btn-outline-info',
            border: 'border-info'
        },

        // Kiwi Shrimp
        { 
            id: 4, 
            name: 'Kiwi Shrimp',
            photo: require("./../assets/images/shrimpPhotos/kiwiShrimp.jpg"),
            alt: 'Kiwi Shrimp Image',

            // Icons
            overlayText: 'Formerly known as "Jade" shrimp, this morph is quite rare.',
            tags: ['#Neocaridina', '#Green', '#Uncommon'],
            favorited: false,

            // Pricing
            price: 240,
            priceMin: 160,
            priceMax: 350,

            // Quantity
            quantity: 4,
            quantityMin: 0,
            quantityMax: 6,

            // Styling
            text: 'text-success',
            button: 'btn-outline-success',
            border: 'border-success'
        },

        // Coconut Shrimp
        { 
            id: 5, 
            name: 'Coconut Shrimp',
            photo: require("./../assets/images/shrimpPhotos/coconutShrimp.jpg"),
            alt: 'Coconut Shrimp Image',

            // Icons
            overlayText: 'Not as popular as other color morphs, but very prolific.',
            tags: ['#Neocaridina', '#Brown', '#Common'],
            favorited: false,

            // Pricing
            price: 100,
            priceMin: 20,
            priceMax: 110,

            // Quantity
            quantity: 12,
            quantityMin: 4,
            quantityMax: 18,

            // Styling
            text: 'text-dark',
            button: 'btn-outline-dark',
            border: 'border-dark'
        },

        // Red Rili Shrimp
        { 
            id: 6, 
            name: 'Red Rili',
            photo: require("./../assets/images/shrimpPhotos/redRili.jpg"),
            alt: 'Red Rili Shrimp Image',

            // Icons
            overlayText: 'The most prestigious morph of cherry shrimp. Both rare and pricey!',
            tags: ['#Neocaridina', '#Red', '#Markings', '#Uncommon'],
            favorited: false,

            // Pricing
            price: 320,
            priceMin: 220,
            priceMax: 400,

            // Quantity
            quantity: 3,
            quantityMin: 0,
            quantityMax: 4,

            // Styling
            text: 'text-danger',
            button: 'btn-outline-danger',
            border: 'border-danger'
        },

    // ******* Caridina shrimp *******

        // Red Crystal Shrimp
        { 
            id: 7, 
            name: 'Red Crystal Shrimp',
            photo: require("./../assets/images/shrimpPhotos/redCrystal.jpg"),
            alt: 'Red Crystal Shrimp Image',

            // Icons
            overlayText: 'One of the thoroughbreds of shrimp. Has exquisite white markings!',
            tags: ['#Caridina', '#Red', '#Crystal', '#Markings', '#Uncommon'],
            favorited: false,

            // Pricing
            price: 400,
            priceMin: 260,
            priceMax: 500,

            // Quantity
            quantity: 3,
            quantityMin: 0,
            quantityMax: 4,

            // Styling
            text: 'text-danger',
            button: 'btn-outline-danger',
            border: 'border-danger'
        },

        // Black Crystal Shrimp
        { 
            id: 8, 
            name: 'Black Crystal Shrimp',
            photo: require("./../assets/images/shrimpPhotos/blackCrystal.jpg"),
            alt: 'Black Crystal Shrimp Image',

            // Icons
            overlayText: 'One of the thoroughbreds of shrimp. Has exquisite white markings!',
            tags: ['#Caridina', '#Black', '#Crystal', '#Markings', '#Uncommon'],
            favorited: false,

            // Pricing
            price: 400,
            priceMin: 240,
            priceMax: 480,

            // Quantity
            quantity: 3,
            quantityMin: 0,
            quantityMax: 4,

            // Styling
            text: 'text-dark',
            button: 'btn-outline-dark',
            border: 'border-dark'
        },

        // Blue Bolt Shrimp
        { 
            id: 9, 
            name: 'Blue Bolt Shrimp',
            photo: require("./../assets/images/shrimpPhotos/blueBolt.jpg"),
            alt: 'Blue Bolt Shrimp Image',

            // Icons
            overlayText: 'One of the thoroughbreds of shrimp. A mixture of blue and turquoise.',
            tags: ['#Caridina', '#Blue', '#Rare'],
            favorited: false,

            // Pricing
            price: 550,
            priceMin: 550,
            priceMax: 800,

            // Quantity
            quantity: 1,
            quantityMin: 0,
            quantityMax: 2,

            // Styling
            text: 'text-info',
            button: 'btn-outline-info',
            border: 'border-info'
        },

        // Taiwan Tiger Shrimp
        { 
            id: 10, 
            name: 'Taiwan Tiger Shrimp',
            photo: require("./../assets/images/shrimpPhotos/taiwanTiger.jpg"),
            alt: 'Taiwan Tiger Shrimp Image',

            // Icons
            overlayText: 'A bright red shrimp with white tiger stripes.',
            tags: ['#Caridina', '#Red','#Tiger', '#Markings', '#Rare'],
            favorited: false,

            // Pricing
            price: 680,
            priceMin: 680,
            priceMax: 900,

            // Quantity
            quantity: 1,
            quantityMin: 0,
            quantityMax: 2,

            // Styling
            text: 'text-danger',
            button: 'btn-outline-danger',
            border: 'border-danger'
        },

        // OE Blue Tiger Shrimp
        { 
            id: 11, 
            name: 'OE Blue Tiger Shrimp',
            photo: require("./../assets/images/shrimpPhotos/oeBlueTiger.jpg"),
            alt: 'OE Blue Tiger Shrimp Image',

            // Icons
            overlayText: 'A dark blue tiger shrimp with glowing orange eyes.',
            tags: ['#Caridina', '#Blue', '#Tiger', '#Markings', '#Uncommon'],
            favorited: false,

            // Pricing
            price: 630,
            priceMin: 630,
            priceMax: 850,

            // Quantity
            quantity: 1,
            quantityMin: 0,
            quantityMax: 3,

            // Styling
            text: 'text-info',
            button: 'btn-outline-info',
            border: 'border-info'
        },

        // Gold Bee Shrimp
        { 
            id: 12, 
            name: 'Gold Bee Shrimp',
            photo: require("./../assets/images/shrimpPhotos/goldBee.jpg"),
            alt: 'Gold Bee Shrimp Image',

            // Icons
            overlayText: 'A rare shrimp with flakes of gold.',
            tags: ['#Caridina', '#Yellow', '#Rare'],
            favorited: false,

            // Pricing
            price: 800,
            priceMin: 800,
            priceMax: 1200,

            // Quantity
            quantity: 1,
            quantityMin: 0,
            quantityMax: 1,

            // Styling
            text: 'text-warning',
            button: 'btn-outline-warning',
            border: 'border-warning'
        },
        
];