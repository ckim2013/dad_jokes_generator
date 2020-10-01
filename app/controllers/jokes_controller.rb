class JokesController < ApplicationController
  def send_api_request
    render json: { joke: 'Made it inside api request' }
  end

  def send_markov_request
    render json: { joke: 'Made it inside markov request' }
  end
end
