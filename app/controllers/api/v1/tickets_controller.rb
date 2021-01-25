module Api
    module V1
        class TicketsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                tickets = Ticket.all 
             render json:  TicketSerializer.new(tickets).serialized_json
            end

            
            def create
                ticket = meal.tickets.new(ticket_params)

                if ticket.save
                    render json: TicketSerializer.new(ticket).serialized_json
                else
                    render json: { error: ticket.errors.messages }, status: 422
                end
            end
            def destroy
                ticket = Ticket.find(params[:id])

                if ticket.destroy
                    head :no_content
                else
                    render json: { error: ticket.errors.messages }, status: 422
                end
            end
            
            
            private

            def meal
                @meal ||= Meal.find(params[:meal_id])
            end

            def ticket_params
                params.require(:ticket).permit(:title, :description, :price, :image_url, :meal_id)
            end
        end
    end
end