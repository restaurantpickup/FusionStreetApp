module Api
    module V1
        class OrdersController < ApplicationController
            protect_from_forgery with: :null_session

            
            def create
                order = user.orders.new(order_params)

                if order.save
                    render json: OrderSerializer.new(order).serialized_json
                else
                    render json: { error: order.errors.messages }, status: 422
                end
            end
            def destroy
                order = Order.find(params[:id])

                if order.destroy
                    head :no_content
                else
                    render json: { error: order.errors.messages }, status: 422
                end
            end
            
            
            private

            def user
                @user ||= User.find(params[:user_id])
            end

            def order_params
                params.require(:order).permit(:title, :description, :score, :user_id)
            end
        end
    end
end