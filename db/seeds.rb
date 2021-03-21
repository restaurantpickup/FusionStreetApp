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

#Tapas
{name: "Tariq Guadalete", price: 10, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Tapas'},
{name: "Frijole On Fire", price: 9, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Tapas'},


#Phat AZZ
{name: "F'D Begavior", price: 13, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'PhatAzz'},
{name: "Spudz-Ma-Frenzy", price: 11, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'PhatAzz'},


#Sliders
{name: "Country Gramma", price: 13.50, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Sliders'},
{name: "9th Island", price: 12.50, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Sliders'},
{name: "Konnichiwa Homie", price: 12.50, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Sliders'},
{name: "Raider Street", price: 11.50, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Sliders'},
{name: "Arnold Kulakofski", price: 11.50, count_type:"Fry", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Sliders'},
{name: "Vaca Gorda", price: 9.50, count_type:"", image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Sliders'},


#Tacos
{name: "Tropical Clucker", price: 13, count_type:'', image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Tacos'},
{name: "Piggy Smalls ", price: 11.50, count_type:'', image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Tacos'},
{name: "Lil Shawty ", price: 10, count_type:'', image_url: "https://github.com/restaurantpickup/FusionStreet/blob/main/img/menu/promo_slide_3.jpg?raw=true", meal_type: 'Tacos'},

])
ingredients = Ingredient.create([

{title: 'TARIQ GUADALETE ', description: 'Smoked Brisket Empanadas on a bed of spicy black Frijoles topped with candied jalapeno cream slaw. SAY "WORD"!', score: 0,  meal: meals[0]},
{title: 'FRIJOLE ON FIRE', description: '2 Perfectly seasoned black bean mini-sammies topped with a shredded cheddar-Manchego-gouda blend or vegan cheese. OFF DA CHIZZLE!', score: 0,  meal: meals[1]},
{title: "F'D UP BEHAVIOR", description: "Our smoked Brisket Chili on top a Chargrill Kosher Dog with deep fried cheese curds, our smoked pork-belly, shredded cheddar-Manchego-gouda blend, Pico De Gallo, WTF'S Sexy Diablo Sauce. GLUTTING IS ALLOWED!", score: 0,  meal: meals[2]},
{title: 'SPUDZ-MA-FRENZY', description: "Our Smoked Brisket Chili on top of corkscrew fries, shredded cheddar-Manchego-gouda blend, Pico De Gallo, and WTF'S Sexy Diablo Sauce and WTF'S Drool Sauce. GO AHEAD AND LICK YOUR FINGERS HUR!", score: 0,  meal: meals[3]},
{title: 'COUNTRY GRAMMA', description: "2 STL Style smoked pulled brisket sliders topped with Chef's Gran-momma's potato salad and pickled red onions. IT'S HA WE DO MY DUDE!", score: 0,  meal: meals[4]},
{title: 'KONNICHIWA HOMIE', description: "2 Deep fried Bao buns stuffed with Chef's filipino Adobo pork belly, topped with our creamy wasabi slaw and drizzled with WTF'S Onyx Aioli.
WEIWEI DE!", score: 0,  meal: meals[5]},
{title: '9th ISLAND', description: "2 Smoked pulled pork sliders drenched in WTF'S Umpa Lumpa BBQ Sauce topped with candied Jalapeno cream slaw. THAT BBQ SAUCE THOUGH... WEW! ONO", score: 0,  meal: meals[6]},
{title: 'RAIDER STREET', description: "2 Charbroiled Angus beef sliders on a toasted Brioche bun topped with our smoked porkbelly, WTF'S Sexy Diablo sauce, black bean spread, guacamole, and cheddar or gouda.
MUY CALIENTE!", score: 0,  meal: meals[7]},
{title: 'ARNOLD KULAKOFSKI', description: "2 Charbroiled Angus beef sliders topped with swiss cheese, lean pastrami, pickles, sauerkraut, and our Russian-island aioli. MAZEL TOV!", score: 0,  meal: meals[8]},
{title: 'VACA GORDA', description: "2 Charbroiled Angus beef sliders on a toasted Brioche bun with a side of lettuce, tomatoes, and pickles. 454 GRAMS OF SINFULLNESS!", score: 0,  meal: meals[9]},
{title: 'TROPICAL CLUCKER', description: "3 Jerk chicken tacos topped with our Honey-pineapple and fresno salsa and drizzled with sweet and spicy crema. Mon-Fire", score: 0,  meal: meals[10]},
{title: 'PIGGY SMALLS', description: "3 Smoked pulled pork tacos topped with our WTF'S Sexy Diablo aioli, shredded cheddar-Manchego-gouda blend and Pico De Gallo. PIGGY AIN'T GOT NO BEEF WIT CHA ", score: 0,  meal: meals[11]},
{title: 'LIL SHAWTY', description: "3 adobada jackfruit tacos topped with vegan cheese, Pico De Gallo and WTF'S Sexy Diablo (made with vegan mayo). PRETTY HOT AND TEMPTING!", score: 0,  meal: meals[12]},


])
















