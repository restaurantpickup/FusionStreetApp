module Api
    module V1
        class MealsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                meals = Meal.all 
             render json:  MealSerializer.new(meals).serialized_json
            end

            def show
                meal = Meal.find_by(slug: params[:slug])

                render json:  MealSerializer.new(meal, options).serialized_json
            end

            def create
                meal = Meal.new(meal_params)

                if meal.save
                    render json:  MealSerializer.new(meal).serialized_json
                else
                    render json: { error: meal.errors.messages }, status: 422
                end
            end

            def update
                meal = Meal.find_by(slug: params[:slug])

                if meal.update(meal_params)
                    render json:  MealSerializer.new(meal, options).serialized_json
                else
                    render json: { error: meal.errors.messages }, status: 422
                end
            end

            def destroy
                meal = Meal.find_by(slug: params[:slug])

                if meal.destroy
                    head :no_content
                else
                    render json: { error: meal.errors.messages }, status: 422
                end
            end


            private

            def meal_params
                params.require(:meal).permit(:name, :price, :count_type, :image_url, :meal_type)
            end

            def options
                @options ||= {include: %i[ingredients]}
            end
        end
    end
end