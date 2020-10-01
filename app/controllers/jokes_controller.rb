class JokesController < ApplicationController
  def send_api_request
    dad_joke = DadJokes.fetch_and_save_joke!(cue_word: params[:cue_word])
    render json: { joke: dad_joke.generate_random_joke   }
  end

  def send_markov_request
    render json: { joke: 'Made it inside markov request' }
  end
end
