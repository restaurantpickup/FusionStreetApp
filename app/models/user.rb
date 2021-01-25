class User < ApplicationRecord
    has_many :orders

    before_create :slugify

    attr_accessor :order

    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        return 0 if orders.count.positive?
        orders.average(:score).to_f.round(2)
    end
end
