class JokesController < ApplicationController
  def send_api_request
    url = params[:cue_word].empty? ? 'https://icanhazdadjoke.com' : "https://icanhazdadjoke.com/search?term=#{ params[:cue_word] }"
    uri = URI(url)
    req = Net::HTTP::Get.new(uri)
    req['Accept'] = 'application/json'
    res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }

    if params[:cue_word].empty?
      render json: { joke: JSON.parse(res.body)['joke'] }
    else
      render json: { joke: JSON.parse(res.body)['results'].sample['joke']   }
    end
  end

  def send_markov_request
    render json: { joke: 'Made it inside markov request' }
  end
end
