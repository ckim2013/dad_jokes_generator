class DadJokes < ApplicationRecord
  self.table_name = 'dad_jokes'

  extend JokesApi

  def self.fetch_and_save_joke!(cue_word:)
    joke = fetch_dad_joke_via_api(cue_word: cue_word)
    if joke
      find_or_create_by(joke: joke, cue_word: cue_word)
    else
      order('RANDOM()').first
    end
  end

  def generate_random_joke
    existing_jokes = if cue_word.empty?
                      DadJokes.order('RANDOM()').limit(100)
                    else
                      DadJokes.where(cue_word: cue_word).order('RANDOM()').limit(100)
                    end

    MarkovGenerator.new(existing_jokes: existing_jokes).generate_random_joke
  end
end
