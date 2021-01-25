class Meal < ApplicationRecord
    has_many :ingredients
    has_many :tickets, :dependent => :destroy

    before_create :slugify
    

    accepts_nested_attributes_for :ingredients, :tickets


    def slugify
        self.slug = name.parameterize
    end


    def orders
        return 0 if !tickets.length
        tickets.length
    end
    def total_orders
        array = Ticket.all
        return 0 if !array.length
        array.length
        
    end

    def receipt
        return 0 if !tickets.length
        tickets.sum(:price)
    end
    def sub_total
        array = Ticket.all
        return 0 if !array.length
        array.sum(:price).to_f.round(1)
    end
    def ingredient_list
        array = Ticket.all
        return 0 if !array.length
        array.sum(:price).to_f.round(1)
    end


    
end
