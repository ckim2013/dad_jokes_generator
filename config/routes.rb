Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  get '/jokes/send_api_request', to: 'jokes#send_api_request'
  get '/jokes/send_markov_request', to: 'jokes#send_markov_request'
end
