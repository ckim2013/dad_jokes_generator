class JokesController < ApplicationController
  def generate
    dad_joke = DadJokes.fetch_and_save_joke!(cue_word: params[:cue_word])
    render json: { joke: dad_joke.generate_random_joke   }
  end
end
