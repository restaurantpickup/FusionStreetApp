class Ticket < ApplicationRecord
  belongs_to :meal


  def orders
    tickets = Ticket.all

    return 0 if !tickets.length
    tickets.length
  end
  def total_orders
      array = Ticket.all
      return 0 if !array.length
      array.length
      
  end

  def receipt
    tickets = Ticket.all
      return 0 if !tickets.length
      tickets.sum(:price)
  end
  def sub_total
      array = Ticket.all
      return 0 if !array.length
      array.sum(:price).to_f.round(1)
  end
end
