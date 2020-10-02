class JokesApi
  URL = 'https://icanhazdadjoke.com'.freeze

  def self.fetch_joke(cue_word:)
    url = cue_word.empty? ? URL : "#{ URL }/search?term=#{ cue_word }"
    uri = URI(url)
    req = Net::HTTP::Get.new(uri)
    req['Accept'] = 'application/json'
    res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |https| https.request(req) }
    cue_word.empty? ? JSON.parse(res.body)['joke'] : JSON.parse(res.body)['results'].sample.try(:[], 'joke')
  end
end