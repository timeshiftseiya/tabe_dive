Rails.application.routes.draw do
  devise_for :users

  root to: 'restaurants#index'
  # resources :restaurants, only: [:index, :create, :update, :new]
  namespace :api, defaults: {format: 'json'} do

    mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks], controllers: {
      registrations:      'api/registrations',
      sessions:           'api/sessions',
      token_validations:  'api/token_validations'
    }

    resources :restaurants, only: [:index, :create, :update, :new]
  end
end
