class MarkovGenerator
  CACHE_EXPIRATION_MINUTES = 5.freeze
  DEFAULT_ACCURACY = 5.freeze
  EXISTING_JOKES = 'existing_jokes'.freeze
  LIMIT_SIZE = 200.freeze
  MAX_LENGTH_OF_JOKE = 200.freeze
  VARIETY_LIMIT = 5.freeze

  def initialize(accuracy:, cue_word:)
    @accuracy = accuracy == 0 ? DEFAULT_ACCURACY : accuracy
    @beginnings = []
    @cue_word = cue_word
    @ngrams = Hash.new([])
  end

  def generate_random_joke
    generate_existing_jokes
    generate_ngrams
    generate_string
  end

  private

  def generate_existing_jokes
    @existing_jokes = if @cue_word.empty?
                        Rails.cache.fetch(EXISTING_JOKES, expires_in: CACHE_EXPIRATION_MINUTES.minutes) do
                          DadJokes.order('RANDOM()').limit(LIMIT_SIZE).to_a
                        end
                      else
                        Rails.cache.fetch(@cue_word, expires_in: CACHE_EXPIRATION_MINUTES.minutes) do
                          cue_word_jokes = DadJokes.where('joke ILIKE ?', "%#{@cue_word}%").order('RANDOM()').limit(LIMIT_SIZE)
                          cue_word_jokes + DadJokes.order('RANDOM()').limit(VARIETY_LIMIT)
                        end
                      end
  end

  def generate_ngrams
    @existing_jokes.each do |existing_joke|
      joke = existing_joke.joke
      i = 0

      while i <= joke.length - @accuracy
        gram = joke[i..i + @accuracy - 1]
        @beginnings << gram if i == 0
        @ngrams[gram] += [joke[i + @accuracy]]

        i += 1
      end
    end
  end

  def generate_string
    current_gram = @beginnings.sample
    string = current_gram

    MAX_LENGTH_OF_JOKE.times do |i|
      next_character = @ngrams[current_gram].sample
      break unless next_character
      string += next_character

      current_gram = string[i + 1..-1]
    end

    string
  end
end
