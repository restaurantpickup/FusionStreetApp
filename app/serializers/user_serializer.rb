class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :image_url, :slug, :avg_score
  
    has_many :orders
  end
  