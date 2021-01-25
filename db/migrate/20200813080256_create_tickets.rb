class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.string :title
      t.string :description
      t.integer :price
      t.string :image_url
      t.belongs_to :meal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
