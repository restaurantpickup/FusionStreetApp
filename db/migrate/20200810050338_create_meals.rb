class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.integer :price
      t.string :count_type
      t.string :image_url
      t.string :meal_type
      t.string :slug

      t.timestamps
    end
  end
end
