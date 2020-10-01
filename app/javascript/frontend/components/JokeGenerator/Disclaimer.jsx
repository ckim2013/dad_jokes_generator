import React from 'react';

const Disclaimer = () => {
  return (
    <div>
      <ul>
        <li>These dad jokes are generated using Markov chains.</li>
        <li>The jokes will be more coherent as you raise the accuracy (1-9, default 5).</li>
        <li>You can input a cue word in the text box for a butchered joke related to the cue word.</li>
        <li>Due to caching, you might get jokes you've already seen. Wait ~5 minutes to see a new variety.</li>
        <li>Use with caution!</li>
      </ul>
    </div>
  );
}

export default Disclaimer;