module JokesApi
  URL = 'https://icanhazdadjoke.com'.freeze

  private

  def fetch_dad_joke_via_api(cue_word:)
    url = cue_word.empty? ? URL : "#{ URL }/search?term=#{ cue_word }"
    uri = URI(url)
    req = Net::HTTP::Get.new(uri)
    req['Accept'] = 'application/json'
    res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |https| https.request(req) }
    cue_word.empty? ? JSON.parse(res.body)['joke'] : JSON.parse(res.body)['results'].sample['joke']
  end
end
