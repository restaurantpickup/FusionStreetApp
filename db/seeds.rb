
users = User.create([
    {name: 'Michael', first_name: "Michael", last_name: "Coon", address: "456 Yahoo Ln.", office_address: "Same as before", phone: "456-555-6666", location: "homeless", email: "test@gmail.com", password: "password", image_url: "http://4.bp.blogspot.com/_Euy8x6BaKxY/SxLul034IKI/AAAAAAAAEQI/OdteUvNglAw/s1600/Mick-%26-Annie_112109_0065-baseC.jpg"}
])

#Pagoda Meal and Ingredient table

meals = Meal.create([

    #Full Menu
    {name: "Chafer Set", price: 10, count_type:'1', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingSet.jpg?raw=true", meal_type:'Catering'},
    {name: "Chafer Full Pan", price:25, count_type:'25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingPan.jpg?raw=true", meal_type:'Catering'},
    {name: "Chafer Half Pan", price: 15, count_type:'25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingHalfPan.jpg?raw=true", meal_type:'Catering'},
    {name: "Chafer Full Pan(lid)", price: 15, count_type:'25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingCover.jpg?raw=true", meal_type:'Catering'},
    {name: "Chafer Half Pan(lid)", price: 10, count_type:'25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingHalfCover.jpg?raw=true", meal_type:'Catering'},
    {name: "Wire Chafer Stand", price: 5, count_type:'1', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChaferRack.jpg?raw=true", meal_type:'Catering'},
    {name: "4 hour wick chafing dish fuel", price: 8, count_type:'5', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingFuel.jpg?raw=true", meal_type:'Catering'},
    {name: "1 Compartment Takeout Box", price: 15, count_type:'25', image_url: "https://github.com/restaurantpickup/Store/blob/main/TakeOut.jpg?raw=true", meal_type:'Packing'},
    {name: 'Choice 48 oz. Black 9" Round Microwavable', price: 10, count_type: '25', image_url: "https://cdnimg.webstaurantstore.com/images/products/large/217729/994926.jpg", meal_type:'Packing'},
    {name: "2 Piece Shaker", price: 10, count_type:'1', image_url: "https://github.com/restaurantpickup/Store/blob/main/Shaker.jpg?raw=true", meal_type:'Bar'},
    {name: "Practice Bottle", price: 12, count_type:'1', image_url: "https://github.com/restaurantpickup/Store/blob/main/PracticeBottle.jpg?raw=true", meal_type:'Bar'},
    {name: "Muddler", price: 15, count_type:'1', image_url: "https://github.com/restaurantpickup/Store/blob/main/Muddler.jpg?raw=true", meal_type:'Bar'},
    {name: "Pourer", price: 2, count_type:'1', image_url: "https://github.com/restaurantpickup/Store/blob/main/Pourer.jpg?raw=true", meal_type:'Bar'},

])
ingredients = Ingredient.create([
    #Catering
    {title: 'Chafer Set', description: "This chafer stand kit is an inexpensive alternative to traditional chafers. It can be disposed of after use, saving you labor costs, precious storage space, and time as you don't have to worry about washing and caring for your chafer. This chafer stand kit is a cost effective but extremely efficient option for your business.", score: 0,  meal: meals[0]},
    {title: 'Chafer Full Pan', description: "", score: 0,  meal: meals[0]},
    {title: '(2) Chafer Half Pan', description: "", score: 0,  meal: meals[0]},
    {title: 'Wire Chafer Stand', description: "", score: 0,  meal: meals[0]},
    {title: '(2) 4 hour wick chafing fuel', description: "", score: 0,  meal: meals[0]},

    {title: 'Chafer Full Pan', description: "Great for cooking, storing, and serving all your entrees, sides, appetizers, and desserts, this versatile pan is perfect for banquets and events of any size. It provides unparalleled temperature retention and can hold up to 228 fl. oz. of your signature menu items.", score: 0,  meal: meals[1]},
    {title: 'Chafer Half Pan', description: "Great for cooking, storing, and serving all your entrees, sides, appetizers, and desserts, this versatile pan is perfect for banquets and events of any size. It provides unparalleled temperature retention and can hold up to 120 fl. oz. of your signature menu items.", score: 0,  meal: meals[2]},
    {title: 'Chafer Full Pan(lid)', description: "Conserve your food's hot temperature with this Choice full size foil steam table pan lid. Perfectly sized to fit your full size steam table pan (sold separately), this lid provides a tight seal for your sides, appetizers, and desserts! All you need to do is press the foil around the pan's rim in order to keep your food at its ideal temperature.", score: 0,  meal: meals[3]},
    {title: 'Chafer Half Pan(lid)', description: "Conserve your food's hot temperature with this Choice full size foil steam table pan lid. Perfectly sized to fit your full size steam table pan (sold separately), this lid provides a tight seal for your sides, appetizers, and desserts! All you need to do is press the foil around the pan's rim in order to keep your food at its ideal temperature.", score: 0,  meal: meals[4]},
    {title: 'Wire Chafer Stand', description: "This chafer stand is an inexpensive alternative to traditional chafers. It can be disposed of after use, saving you labor costs, precious storage space, and time as you don't have to worry about washing and caring for your chafer. A superior solution to buffet-style service on a budget, this Choice chrome chafer stand is perfect for your catered event.", score: 0,  meal: meals[5]},
    {title: '4 hour wick chafing dish fuel', description: "Delivering a consistent, long-lasting flame, this Choice wick fuel is essential for reliable chafer heating. Its wick design and non-flammable liquid diethylene glycol fuel promote safe burning that is also easy to light. Great for any restaurant buffet line or catered event, this series of Choice wick chafing fuels serves as the hottest and safest burning fuel on the market. ", score: 0,  meal: meals[6]},
    {title: '1 Compartment Takeout Box', description: "1 compartment takeout box is perfect for restaurants, caterers, and sandwich shops that serve anything from hot entrees to cold salads. Package up takeout orders or leftovers for your customers while also taking a step toward going green with this environmentally smart option! ", score: 0,  meal: meals[7]},
    {title: 'Choice 48 oz. Black 9" Round Microwavable', description: "Both the container and lid are recyclable and simple to clean, making them easy to reuse or dispose of once your guests have finished their meal. Use this versatile Choice container and lid to package your signature to-go items and ensure mess-free transportation.  ", score: 0,  meal: meals[8]},
    {title: '2 Piece Shaker', description: "Whether you need to concoct specialty martinis, mojitos, long island iced teas, whiskey sours, or screwdrivers, this shaker set is an ideal addition to any mixologist's arsenal! This shaker tin set allows you to effectively mix and chill cocktails prior to serving.", score: 0,  meal: meals[9]},
    {title: 'Practice Bottle', description: "Designed to fit standard 750mL liquor bottles, this collar-less, angled liquor speed pourer is perfect for busy bartenders who are constantly pouring shots and creating signature mixed drinks. It fits snugly onto bottles so your bartenders will always have immediate, simple access to any liquor they need. ", score: 0,  meal: meals[10]},
    {title: 'Muddler', description: "Made of lacquered hardwood, this wooden muddler has a dark brown color and its highly polished finish gives this bar utensil a very sleek and upscale appeal! Alcohol-proof, this muddler will stand up to multiple concoction creations! Impress your guests with a cocktail using only the freshest of ingredients!", score: 0,  meal: meals[11]},
    {title: 'Pourer', description: "Designed to fit standard 750mL liquor bottles, this collar-less, angled liquor speed pourer is perfect for busy bartenders who are constantly pouring shots and creating signature mixed drinks. It fits snugly onto bottles so your bartenders will always have immediate, simple access to any liquor they need.", score: 0,  meal: meals[12]},
  
])




















