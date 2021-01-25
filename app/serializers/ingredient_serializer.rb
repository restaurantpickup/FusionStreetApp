class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :meal_id

  belongs_to :meal
end
