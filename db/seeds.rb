# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)







users = User.create([
    {name: 'Michael', first_name: "Michael", last_name: "Coon", address: "456 Yahoo Ln.", office_address: "Same as before", phone: "456-555-6666", location: "homeless", email: "test@gmail.com", password: "password", image_url: "http://4.bp.blogspot.com/_Euy8x6BaKxY/SxLul034IKI/AAAAAAAAEQI/OdteUvNglAw/s1600/Mick-%26-Annie_112109_0065-baseC.jpg"}
])

#Pagoda Meal and Ingredient table

meals = Meal.create([

    #Full Menu
    {name: "Chafer Set", price: 10, count_type: '1', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingSet.jpg?raw=true", meal_type: 'Catering'},
    {name: "Chafer Full Pan", price:25, count_type: '25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingPan.jpg?raw=true", meal_type: 'Catering'},
    {name: "Chafer Half Pan", price: 15, count_type: '25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingHalfPan.jpg?raw=true", meal_type: 'Catering'},
    {name: "Chafer Full Pan(lid)", price: 15, count_type: '25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingCover.jpg?raw=true", meal_type: 'Catering'},
    {name: "Chafer Half Pan(lid)", price: 10, count_type: '25', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingHalfCover.jpg?raw=true", meal_type: 'Catering'},
    {name: "Wire Chafer Stand", price: 5, count_type: '1', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChaferRack.jpg?raw=true", meal_type: 'Catering'},
    {name: "4 hour wick chafing dish fuel", price: 8, count_type: '5', image_url: "https://github.com/restaurantpickup/Store/blob/main/ChafingFuel.jpg?raw=true", meal_type: 'Catering'},
    {name: "1 Compartment Takeout Box", price: 15, count_type: '25', image_url: "https://github.com/restaurantpickup/Store/blob/main/TakeOut.jpg?raw=true", meal_type: 'Packing'},
    {name: 'Choice 48 oz. Black 9" Round Microwavable', price: 10, count_type: '25', image_url: "https://cdnimg.webstaurantstore.com/images/products/large/217729/994926.jpg", meal_type: 'Packing'},
    {name: "2 Piece Shaker", price: 10, count_type: '1', image_url: "https://github.com/restaurantpickup/Store/blob/main/Shaker.jpg?raw=true", meal_type: 'Bar'},
    {name: "Practice Bottle", price: 12, count_type: '1', image_url: "https://github.com/restaurantpickup/Store/blob/main/PracticeBottle.jpg?raw=true", meal_type: 'Bar'},
    {name: "Muddler", price: 15, count_type: '1', image_url: "https://github.com/restaurantpickup/Store/blob/main/Muddler.jpg?raw=true", meal_type: 'Bar'},
    {name: "Pourer", price: 2, count_type: '1', image_url: "https://github.com/restaurantpickup/Store/blob/main/Pourer.jpg?raw=true", meal_type: 'Bar'},
    {name: "Website", price: 100, count_type: '1', image_url: "https://github.com/restaurantpickup/VirtualRestaurant/blob/main/links/VR.jpeg?raw=true", meal_type: 'Website'},
   


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
    {title: 'Website', description: "We will build you a mobile responsive website with contact/schedule/sign-up forms.", score: 0,  meal: meals[13]},
    

])




















# users = User.create([
#     {name: 'Michael', first_name: "Michael", last_name: "Coon", address: "456 Yahoo Ln.", office_address: "Same as before", phone: "456-555-6666", location: "homeless", email: "test@gmail.com", password: "password", image_url: "http://4.bp.blogspot.com/_Euy8x6BaKxY/SxLul034IKI/AAAAAAAAEQI/OdteUvNglAw/s1600/Mick-%26-Annie_112109_0065-baseC.jpg"}
# ])

# #Pagoda Meal and Ingredient table

# meals = Meal.create([

#     #Breakfast
#     {name: "Baker Biscuits & Sausage Gravy", price: 3, count_type: 1, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/80394264_170796430946812_2407150262545285120_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=8ZG-z3pBXeMAX-Z5drC&_nc_ht=scontent-sea1-1.xx&oh=f88213c0e7fdb3685d3af22dea143b1f&oe=603122A5", meal_type: 'Breakfast'},
#     {name: "Baker’s Breakfast Wrap", price: 5.25, count_type: 2, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/90059667_223595362333585_8352101362099552256_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=TJVN6PmGm6QAX-GAaoM&_nc_oc=AQnq4jjOkRqkX9-ZBKOamwz8V3vMx0Q4OlJZC52GNayX7DsmsDG9zkLxNFoWJ7A-waVI0gt3s_JocEfiwzrVOZSd&_nc_ht=scontent-sea1-1.xx&oh=fa1c4f5281f0c62162a8e05cf2e674e3&oe=6033F7C8", meal_type: 'Breakfast'},
#     {name: "Baker’s Breakfast Bowl", price: 12, count_type: 3, image_url: "https://lh3.googleusercontent.com/p/AF1QipOgmsoj9-7o0DMMEMr_qLLzxd0oRI5ZpbryEyff=h305-no", meal_type: 'Breakfast'},
#     {name: "The Brancher", price: 5, count_type: 4, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/116875385_321938055832648_2222617260957730355_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=K_T6MRcqBCAAX9YZFnM&_nc_ht=scontent-sea1-1.xx&oh=70db2fea3dff066a5d480e4e33f0f307&oe=60327803", meal_type: 'Breakfast' },
#     {name: "Breakfast Sandwhich", price: 4, count_type: 5, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72223620_143316837028105_8656961370585038848_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=-EbXjLs4vUMAX-uO6ER&_nc_ht=scontent-sea1-1.xx&oh=b5c1ac615b98a7f2252e8c6193b21ad1&oe=603201AA", meal_type: 'Breakfast'},
#     {name: "Egg Sandwhich", price: 3, count_type: 6, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72223620_143316837028105_8656961370585038848_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=-EbXjLs4vUMAX-uO6ER&_nc_ht=scontent-sea1-1.xx&oh=b5c1ac615b98a7f2252e8c6193b21ad1&oe=603201AA", meal_type: 'Breakfast'},
#     {name: "Quiche of the Day", price: 4.25 , count_type: 7, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/80674387_166233298069792_2784744086194618368_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ldreM9SPPK4AX-W7JqZ&_nc_ht=scontent-sea1-1.xx&oh=b3d005a4eac1da7aee995e73634d5957&oe=60335B4D", meal_type: 'Breakfast'},
#     {name: "Crispy Tater Tots", price: 2.25, count_type: 8, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/81542971_170459500980505_5192573447493910528_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=IsDPA8vmvFEAX_U4oDJ&_nc_ht=scontent-sea1-1.xx&oh=9a169cccd527d4e74413fdae716854b9&oe=6032F96A", meal_type: 'Breakfast' },
   
#     #Lunch
#     {name: "BLTC Wrap", price: 7.25, count_type: 1, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/90357384_223595375666917_8885800595370278912_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=zMNNozUVLpMAX9iloL0&_nc_ht=scontent-sea1-1.xx&oh=a4bb67ab28cbcc14d876d154cab02b1e&oe=6030646C", meal_type: 'Lunch'},
#     {name: "Baker’s Chicken Salad Wrap", price: 7.25, count_type: 2, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/116190665_321938049165982_1199595278806619328_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=mgUrR7n592QAX-9jTCS&_nc_ht=scontent-sea1-1.xx&oh=7b0d52cc9ee009ad94a97ebd27de7f66&oe=60337E3D", meal_type: 'Lunch'},
#     {name: "Mexi Chicken Wrap", price: 6.75, count_type: 3, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/104633938_293888861970901_7237535798161473355_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ozHcc9eoW1QAX9RLfZZ&_nc_ht=scontent-sea1-1.xx&oh=93e522339a797944830b20c79e59b6e1&oe=60345D01", meal_type: 'Lunch'},
#     {name: "Mexi Ground Beef Wrap", price: 7.25, count_type: 4, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/104013288_287921805900940_4254266120677848684_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=VzjgKbXr3EwAX9DQoAn&_nc_ht=scontent-sea1-1.xx&oh=c243878a4f2c49e8a46ae919b406b027&oe=60340E7D", meal_type: 'Lunch'},
#     {name: "Bacon Cheeseburger Wrap", price: 7.25, count_type: 5, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/136323287_440873657272420_6986080092378415729_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=z0f0pYnLvA4AX-Vmr13&_nc_ht=scontent-sea1-1.xx&oh=5ca19c0cf9001f2461d66bc258c1ae2b&oe=60315D3E", meal_type: 'Lunch'},
#     {name: "Chicken Burger Sandwich", price: 5.50, count_type: 6, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/90662555_225150598844728_9212061674272456704_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=VPrK6KhLHS8AX-wJ0rG&_nc_ht=scontent-sea1-1.xx&oh=2da0a2f05f89a4bb69ef5ed04302bbb1&oe=6033EFAF", meal_type: 'Lunch'},
#     {name: "BLT Croissant", price: 5.75, count_type: 7, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/139994646_449286596431126_5243047238044030482_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=AaaWerF7puwAX_XANJg&_nc_ht=scontent-sea1-1.xx&oh=0eec92d06805c6222f70f653aa739f70&oe=60338020", meal_type: 'Lunch'},
#     {name: "Veggie Wrap", price: 5, count_type: 8, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/121232396_377751073584679_4492436743304370459_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=HrjYTEhxE1oAX-EqAy5&_nc_ht=scontent-sea1-1.xx&oh=e54c7c7242bf0ed5cac17a7a7e878766&oe=6030FDE1", meal_type: 'Lunch'},

#     #Sides
#     {name: "Crispy French Fries", price: 2.25, count_type: 1, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/81853564_175733170453138_8538800442245644288_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=8mwZY6YPoy4AX_6oZ2X&_nc_ht=scontent-sea1-1.xx&oh=4af9414f7bedf50009dae1f5d19bbabf&oe=6033F0C5", meal_type: 'Sides'},
#     {name: "Chips", price: 0.5, count_type: 2, image_url: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", meal_type: 'Sides'},
#     {name: "Applesauce", price: 0.85, count_type: 3, image_url: "https://images.unsplash.com/photo-1600984177310-c86c8f8fa9c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGVzYXVjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", meal_type: 'Sides'},
#     {name: "Soup of the Day", price: 3.25, count_type: 4, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/120875781_374215973938189_5432831709272047255_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=FGfEh44ghFgAX_cEjM9&_nc_ht=scontent-sea1-1.xx&oh=85e8c25f022be40606fd8a14eb60ab7d&oe=6031A605", meal_type: 'Sides'},
#     {name: "Sauce", price: 0.5, count_type: 5, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/140428703_452181602808292_6207389758065808831_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=hhx3I13WcrkAX_buWpd&_nc_ht=scontent-sea1-1.xx&oh=8a296b36dd13d64a266d82fd7419cc4a&oe=6033F7CF", meal_type: 'Sides'},
#     {name: "Sausage Gravy", price: 1, count_type: 6, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/140428703_452181602808292_6207389758065808831_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=hhx3I13WcrkAX_buWpd&_nc_ht=scontent-sea1-1.xx&oh=8a296b36dd13d64a266d82fd7419cc4a&oe=6033F7CF", meal_type: 'Sides'},
#     {name: "Biscotti", price: 2.50, count_type: 7, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/80704078_168300164529772_3590161620833140736_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=DhYxvfAVMUgAX9f85Sb&_nc_ht=scontent-sea1-1.xx&oh=6ec44cf0dfb230351862a30d09dc930d&oe=603328DC", meal_type: 'Sides'},
#     {name: "Pastry of the Day", price: 3, count_type: 8, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/118473818_342889060404214_2218742110192135062_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Nq2ZMdUzUKsAX-glrbp&_nc_ht=scontent-sea1-1.xx&oh=e207f67b3a1cd4be78fc7e38f1b282ba&oe=603434F6", meal_type: 'Sides'},

#     #Kid Friendly Choices
#     {name: "Mini Corn Dog", price: 7.25, count_type: 1, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/89080380_211960066830448_4212466420262371328_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=oCgO4eJhIp0AX_g2xZv&_nc_ht=scontent-sea1-1.xx&oh=e051fae9378749643cb49a64a7fe982d&oe=6031DFF5", meal_type: 'KM'},
#     {name: "Popcorn Chicken Meal ", price: 7.25, count_type: 2, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/89080380_211960066830448_4212466420262371328_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=oCgO4eJhIp0AX_g2xZv&_nc_ht=scontent-sea1-1.xx&oh=e051fae9378749643cb49a64a7fe982d&oe=6031DFF5", meal_type: 'KM'},

#     #Beverages
#     {name: "Drip Coffee", price: 2, count_type: 1, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/80242881_167513014608487_5754197488676372480_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=bovF2EUlMXsAX8LlJNK&_nc_ht=scontent-sea1-1.xx&oh=6868a9940b8789ea957382b95a9091a6&oe=6030CA4C", meal_type: 'Beverages'},
#     {name: "Hot Chocolate", price: 1.5, count_type: 2, image_url: "https://images.unsplash.com/photo-1512035986687-f3cc6aefba8d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwY2hvY29sYXRlfGVufDB8fDB8&w=1000&q=80", meal_type: 'Beverages'},
#     {name: "Orange Juice", price: 1.25, count_type: 3, image_url: "https://images.unsplash.com/photo-1602684045042-34233dd5aa58?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", meal_type: 'Beverages'},
#     {name: "Juice Box", price: 0.85, count_type: 4, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72223620_143316837028105_8656961370585038848_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=-EbXjLs4vUMAX-uO6ER&_nc_ht=scontent-sea1-1.xx&oh=b5c1ac615b98a7f2252e8c6193b21ad1&oe=603201AA", meal_type: 'Beverages'},
#     {name: "Pepsi Products", price: 1.75, count_type: 5, image_url: "https://images.unsplash.com/photo-1502389743708-d00f658638bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVwc2l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", meal_type: 'Beverages'},
#     {name: "Original Red Bull ", price: 2.35, count_type: 6, image_url: "https://images.unsplash.com/photo-1582843949086-3a58dc7408fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlZCUyMGJ1bGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", meal_type: 'Beverages'},
#     {name: "Austrian Coffee", price: 3, count_type: 7, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/80458050_167513017941820_5391731068124528640_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=lfKs3iWWaVEAX-X1-Y4&_nc_ht=scontent-sea1-1.xx&oh=e7144dc9b4cc137ecf2a70bc55f2107b&oe=6032CCCD", meal_type: 'Beverages'},
#     {name: "London Fog", price: 2.5, count_type: 8, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/106418497_298156788210775_940977021389890455_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=HBXFRlnwt94AX8RoUbi&_nc_ht=scontent-sea1-1.xx&oh=cef12d11dbefc8069d2156ed5100c851&oe=60321F10", meal_type: 'Beverages'},
#     {name: "Red Bull Charger", price: 4, count_type: 9, image_url: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/81220719_170459354313853_8559887705171820544_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=IXjoEQYkiQ8AX-n6OC3&_nc_ht=scontent-sea1-1.xx&oh=e269663661879cc05d4a521864cb3a26&oe=603305DE", meal_type: 'Beverages'},

# ])
# ingredients = Ingredient.create([

#     #Breakfast
#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[0]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[0]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[0]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[0]},
   

#     {title: 'Meat', description: '', score: 0,  meal: meals[1]},
#     {title: 'Egg', description: '', score: 0, meal: meals[1]},
#     {title: 'Crispy Tater Tots', description: '', score: 0, meal: meals[1]},
#     {title: 'Cheese Sauce', description: '', score: 0, meal: meals[1]},

#     {title: 'Meat', description: '', score: 0,  meal: meals[2]},
#     {title: 'Egg', description: '', score: 0, meal: meals[2]},
#     {title: 'Crispy Tater Tots', description: '', score: 0, meal: meals[2]},
#     {title: 'Cheese Sauce', description: '', score: 0, meal: meals[2]},

#     {title: 'American Cheese', description: '', score: 0,  meal: meals[3]},
#     {title: 'Sausage', description: '', score: 0, meal: meals[3]},
#     {title: 'Bacon', description: '', score: 0, meal: meals[3]},
#     {title: 'Canadian Bacon', description: '', score: 0, meal: meals[3]},
#     {title: 'Egg', description: '', score: 0, meal: meals[3]},
#     {title: 'Cheese Sauce', description: '', score: 0, meal: meals[3]},
#     {title: 'English Muffin', description: '', score: 0, meal: meals[3]},

#     {title: 'Egg', description: '', score: 0,  meal: meals[4]},
#     {title: 'American  Cheese', description: '', score: 0, meal: meals[4]},
#     {title: 'Cheese Sauce', description: '', score: 0, meal: meals[4]},
#     {title: 'English Muffin', description: '', score: 0, meal: meals[4]},

#     {title: 'American Cheese', description: '', score: 0,  meal: meals[5]},
#     {title: 'Cheese Sauce', description: '', score: 0, meal: meals[5]},
#     {title: 'English Muffin', description: '', score: 0, meal: meals[5]},
  

#     #Lunch
#     {title: 'Shredded Chicken', description: '', score: 0,  meal: meals[8]},
#     {title: 'Bacon', description: '', score: 0, meal: meals[8]},
#     {title: 'Lettuce', description: '', score: 0, meal: meals[8]},
#     {title: 'Tomato', description: '', score: 0, meal: meals[8]},
#     {title: 'American Cheese', description: '', score: 0, meal: meals[86]},
#     {title: 'Ranch Dressing', description: '', score: 0, meal: meals[8]},

#     {title: 'Shredded Chicken', description: '', score: 0,  meal: meals[9]},
#     {title: 'Walnuts', description: '', score: 0, meal: meals[9]},
#     {title: 'Mayo', description: '', score: 0, meal: meals[9]},
#     {title: 'Dried Cranberries', description: '', score: 0, meal: meals[9]},

#     {title: 'Shredded Chicken', description: '', score: 0,  meal: meals[10]},
#     {title: 'Crispy Fried Onions', description: '', score: 0, meal: meals[10]},
#     {title: 'American Cheese', description: '', score: 0, meal: meals[10]},
#     {title: 'Mexi Sauce', description: '', score: 0, meal: meals[10]},
   
#     {title: 'Seasoned Beef', description: '', score: 0,  meal: meals[11]},
#     {title: 'Crispy Fried Onions', description: '', score: 0, meal: meals[11]},
#     {title: 'Lettuce', description: '', score: 0, meal: meals[11]},
#     {title: 'American Cheese', description: '', score: 0, meal: meals[11]},
#     {title: 'Mexi Sauce', description: '', score: 0, meal: meals[11]},

#     {title: 'Seasoned Ground Beef', description: '', score: 0,  meal: meals[12]},
#     {title: 'Bacon', description: '', score: 0, meal: meals[12]},
#     {title: 'Lettuce', description: '', score: 0, meal: meals[12]},
#     {title: 'American Cheese', description: '', score: 0, meal: meals[12]},
#     {title: 'Cheese Sauce', description: '', score: 0, meal: meals[12]},


#     {title: 'Breaded Chicken Patty', description: '', score: 0,  meal: meals[13]},
#     {title: 'Lettuce', description: '', score: 0, meal: meals[13]},
#     {title: 'American Cheese', description: '', score: 0, meal: meals[13]},
#     {title: 'Mayo & Pickles', description: '', score: 0, meal: meals[13]},

#     {title: 'Bacon', description: '', score: 0,  meal: meals[14]},
#     {title: 'Lettuce', description: '', score: 0, meal: meals[14]},
#     {title: 'Tomato', description: '', score: 0, meal: meals[14]},
#     {title: 'Mayo', description: '', score: 0, meal: meals[14]},

#     {title: 'Cream Cheese', description: '', score: 0,  meal: meals[15]},
#     {title: 'Lettuce', description: '', score: 0, meal: meals[15]},
#     {title: 'Tomato', description: '', score: 0, meal: meals[15]},
#     {title: 'Seasonal Veggies', description: '', score: 0, meal: meals[15]},
    
#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[14]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[14]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[14]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[14]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[15]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[15]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[15]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[15]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[16]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[16]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[16]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[16]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[17]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[17]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[17]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[17]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[18]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[18]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[18]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[18]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[19]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[19]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[19]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[19]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[20]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[20]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[20]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[20]},


#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[21]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[21]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[21]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[21]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[22]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[22]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[22]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[22]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[23]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[23]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[23]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[23]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[24]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[24]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[24]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[24]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[25]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[25]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[25]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[25]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[26]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[26]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[26]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[26]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[27]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[27]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[27]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[27]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[28]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[28]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[28]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[28]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[29]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[29]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[29]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[29]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[30]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[30]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[30]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[30]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[31]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[31]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[31]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[31]},

#     # {title: 'Feature 1', description: '', score: 0,  meal: meals[32]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[32]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[32]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[32]},

#     {title: 'Earl Grey Tea', description: '', score: 0,  meal: meals[33]},
#     {title: 'Cream', description: '', score: 0, meal: meals[33]},
#     {title: 'Vanilla', description: '', score: 0, meal: meals[33]},
#     {title: 'Honey', description: '', score: 0, meal: meals[33]},
#     {title: 'Whipped Cream', description: '', score: 0, meal: meals[33]},


#     # {title: 'Cherry', description: '', score: 0,  meal: meals[34]},
#     # {title: 'Feature 2', description: '', score: 0, meal: meals[34]},
#     # {title: 'Feature 3', description: '', score: 0, meal: meals[34]},
#     # {title: 'Feature 4', description: '', score: 0, meal: meals[34]},


   
    
# ])
