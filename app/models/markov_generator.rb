class MarkovGenerator
  ORDER = 1
  LENGTH_OF_JOKE = 200

  def initialize(jokes:)
    @jokes = jokes
    @beginnings = []
    @ngrams = Hash.new([])
  end

  def generate_ngrams
    @jokes.each do |joke|
      i = 0

      while i <= joke.length - ORDER
        gram = joke[i..i + ORDER - 1]

        @beginnings << gram if i == 0

        @ngrams[gram] += [joke[i + ORDER]]

        i += 1
      end
    end
  end

  def generate_joke
    current_gram = @beginnings.sample
    string = current_gram

    LENGTH_OF_JOKE.times do |i|
      next_character = @ngrams[current_gram].sample
      break unless next_character
      string += next_character
      current_gram = string[i + 1..-1]
    end

    string
  end
end
