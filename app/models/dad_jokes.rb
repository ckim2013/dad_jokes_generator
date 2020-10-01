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

  def generate_random_joke(accuracy:)
    existing_jokes = if cue_word.empty?
                      Rails.cache.fetch('existing_jokes', expires_in: 5.minutes) do
                        DadJokes.order('RANDOM()').limit(100).to_a
                      end
                    else
                      Rails.cache.fetch(cue_word, expires_in: 5.minutes) do
                        DadJokes.where(cue_word: cue_word).order('RANDOM()').limit(100).to_a
                      end
                    end

    MarkovGenerator.new(existing_jokes: existing_jokes, accuracy: accuracy).generate_random_joke
  end
end
