class MarkovGenerator
  DEFAULT_ACCURACY = 5.freeze
  MAX_LENGTH_OF_JOKE = 200.freeze

  def initialize(accuracy:, existing_jokes:)
    @accuracy = accuracy == 0 ? DEFAULT_ACCURACY : accuracy
    @existing_jokes = existing_jokes
    @beginnings = []
    @ngrams = Hash.new([])
  end

  def generate_random_joke
    generate_ngrams
    generate_string
  end

  private

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
