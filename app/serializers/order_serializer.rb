class OrderSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :description, :score, :user_id
  
    belongs_to :user
  end
  