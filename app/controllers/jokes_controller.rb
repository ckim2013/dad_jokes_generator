class JokesController < ApplicationController
  def fetch_from_api
    fetched_joke = JokesApi.fetch_joke(cue_word: params[:cue_word])

    if fetched_joke
      DadJokes.find_or_create_by(
        cue_word: params[:cue_word],
        joke: fetched_joke
      )
      head(:ok)
    else
      render json: { error: 'Your cue word aint english.' }, status: 422
    end

    rescue
      render json: { error: 'Oops, something went wrong!' }, status: 422
  end

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
