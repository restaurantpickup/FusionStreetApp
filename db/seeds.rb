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

  {title: 'Tariq Guadalete', description: '2 Smoked brisket empanadason a bed of red and black frijoles and topped with our candied jalapeno crema slaw.', score: 0,  meal: meals[0]},
  {title: 'FriJole On Fire', description: '2 Perfectly seasoned black bean sliders topped with your choice of chedder manchego, swiss, gouda, or began cheese DA CHEEZLE FA SHEEZLE!', score: 0,  meal: meals[1]},
  {title: "F'D UP BEHAVIOR", description: "Bacon wrapped kosher dog topped with spicy deep fried cheese curds and  smothered in WTF'S Smoked Brisket Chili.", score: 0,  meal: meals[2]},
  {title: 'SPUDZ-MA-FRENZY', description: "Seasoned to perfection, sidewinder cut fries topped with our amazing WTF'S Smoked Brisket Chili. GO AHEAD AND LICK YO FINGERS HUR!", score: 0,  meal: meals[3]},
  {title: 'COUNTRY GRAMMA', description: "2 BBQ Angus brisket sliders rubbed and smoked to perfection. Topped with Granny's potato salad on toasted Gouda cheese Brioche. IT'S HA WE DO MY DUDE!", score: 0,  meal: meals[4]},
  {title: 'KONNICHIWA HOMIE', description: "2 Deep fried Bao buns stuffed with our homemade Filipino Adobo pork belly, and Chef's wasabi slaw.", score: 0,  meal: meals[5]},
  {title: '9th ISLAND', description: "2  Smoked Kalua pork sliders drenched in our homemade WTF'S UMPA to perfection. Topped with Granny's potato salad on toasted Gouda cheese Brioche LUMPA BBQ sauce. THAT BBQ SAUCE THOUGH...WEW! ONO! ", score: 0,  meal: meals[6]},
  {title: 'RAIDER STREET', description: "2 quarter pound Charbroiled Angus beef sliders. to perfection. Topped with  Granny's potato salad on toasted Gouda cheese Brioche. IT'S HA WE DO MY DUDE!", score: 0,  meal: meals[7]},
  {title: 'ARNOLD KULAKOFSKI', description: " 2  quarter pound Charbroiled Angus beef Reuben sliders. Topped with our black and red frijole spread, our smoked porkbelly, Cheddar cheese, bed of guacamole spread. Generously drizzled with WTF'S Sexy Diablo aioli on toasted Cheddar Brioche. MUY CALIENTE!!! ", score: 0,  meal: meals[8]},
  {title: 'VACA GORDA', description: "2  quarter pound, charbroiled Angus beef sliders on toasted Brioche. Sided with lettuce, tomatoes, pickles and topped with any of our WTF'S  burger and fry sauces. 454 GRAMS OF SINFULLNESS!", score: 0,  meal: meals[9]},
  {title: 'TROPICAL CLUCKER', description: "Chef's sinfully delicious Jerk chicken tacos. Topped with a honey, pineapple, mango, and Fresno salsa. MON FIRE! ", score: 0,  meal: meals[10]},
  {title: 'PIGGY SMALLS', description: "3 Smoked and seasoned to perfection, our pulled pork tacos with  shredded Gouda, Cheddar, and Manchega cheese blend. Drizzled with WTF'S Sexy Diablo and topped with candied jalapeno crema slaw. IGGY AIN'T GOT NO BEEF WIT CHA ", score: 0,  meal: meals[11]},
  {title: 'LIL SHAWTY', description: "3 Spicy Jackfruit tacos on red and black frijoles, candied jalapeno crema slaw. Topped with vegan cheese, and our Pico de Gallo. PRETTY HOT & TEMPTING!", score: 0,  meal: meals[12]},


])
















