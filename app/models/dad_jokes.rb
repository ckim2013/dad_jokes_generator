class DadJokes < ApplicationRecord
  self.table_name = 'dad_jokes'

  extend JokesApi

  def self.fetch_and_save_joke!(cue_word:)
    joke = fetch_dad_joke(cue_word: cue_word)
    create!(joke: joke)
  end

  def generate_random_joke
    MarkovGenerator.new(existing_jokes: DadJokes.all).generate_random_joke
  end
end
