class TicketSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :description, :price, :image_url, :meal_id, :receipt, :sub_total, :orders, :total_orders
  
    belongs_to :meal
  end
  