Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :meals, param: :slug
      resources :ingredients, only: [:create, :destroy]
      resources :tickets, only: [ :index, :create, :destroy]
      resources :users, param: :slug
      resources :orders, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
