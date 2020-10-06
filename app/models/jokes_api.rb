class JokesApi
  URL = 'https://icanhazdadjoke.com'.freeze

  def self.fetch_jokes(page:)
    url = "#{ URL }/search?limit=30&page=#{ page }"
    uri = URI(url)
    req = Net::HTTP::Get.new(uri)
    req['Accept'] = 'application/json'
    res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |https| https.request(req) }
    JSON.parse(res.body)['results'].map { |res| { joke: res['joke'] } }
  end
end
