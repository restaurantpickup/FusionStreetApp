module Api
    module V1
        class IngredientsController < ApplicationController
            protect_from_forgery with: :null_session

            
            
            def create
                ingredient = meal.ingredients.new(ingredient_params)

                if ingredient.save
                    render json: IngredientSerializer.new(ingredient).serialized_json
                else
                    render json: { error: ingredient.errors.messages }, status: 422
                end
            end
            def destroy
                ingredient = Ingredient.find(params[:id])

                if ingredient.destroy
                    head :no_content
                else
                    render json: { error: ingredient.errors.messages }, status: 422
                end
            end
            
            
            private

            def meal
                @meal ||= Meal.find(params[:meal_id])
            end

            def ingredient_params
                params.require(:ingredient).permit(:title, :description, :score, :meal_id)
            end
        end
    end
end