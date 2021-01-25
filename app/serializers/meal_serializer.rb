class MealSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :count_type, :image_url, :meal_type, :slug, :receipt, :sub_total, :orders, :total_orders , :ingredients, :tickets
  
  has_many :tickets
  has_many :ingredients
end
