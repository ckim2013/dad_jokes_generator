# Dad Joke Generator using Markov Chains
  The jokes presented to the user are created using Markov chains. This generator uses the `icanhazdadjoke` API to fetch real dad jokes. With these jokes, the app generates ngrams depending on the accuracy level set by the user. The coherence of the jokes depends on the accuracy level but even then this is not perfect. The user is also able to input a "cue word" that will generate a joke related to that cue word.

  [live](https://dadjokes.ckim.me)

# Tech Used
  - Rails: `6.0.3.3`
  - Node: `v14.5.0`
  - NPM: `6.14.5`
  - React
  - Axios
  - Postgresql

# Instructions for setup
  - Download the repo
  - `bundle`
  - `npm install`
  - `webpack`
  - `rails s`
  - Go to `http://localhost:3000/`
  - You might need to `yarn` if the server does not start up.
