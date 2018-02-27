Rails.application.routes.draw do
  root to: 'restaurants#index'
  resources :restaurants, only: [:index, :create, :update, :new]
  namespace :api, format: 'json' do
    resources :restaurants, only: [:index, :create, :update, :new]
  end
end
