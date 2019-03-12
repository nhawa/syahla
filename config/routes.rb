Rails.application.routes.draw do
  get 'page/index2', to: 'page#index2'
  get 'page2', to: 'page#index3'

  get 'static', to: 'static#index'

  root to: 'page#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
