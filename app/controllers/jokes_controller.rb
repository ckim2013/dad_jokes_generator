class JokesController < ApplicationController
  def generate
    generated_joke = MarkovGenerator.new(
      accuracy: params[:accuracy].to_i,
      cue_word: params[:cue_word]
    ).generate_random_joke

    render json: { joke: generated_joke }
  rescue
    render json: { error: 'Oops, something went wrong!' }, status: 422
  end
end
