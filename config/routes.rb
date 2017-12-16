Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :bios, only: [:index, :create, :update, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy, :show]
    resources :comments, only: [:index, :create, :update, :destroy]
    
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
