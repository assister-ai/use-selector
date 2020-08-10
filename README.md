[![npm version](https://badge.fury.io/js/use-selector.svg)](https://www.npmjs.com/package/use-selector)

# useSelector

useSelector hook for computing a state from another state

## Instal

```bash
npm i --save use-selector
```

## Usage

```js
const newState = useSelector(() => {
  /* return newState's value here */
}, [dependingState1, dependingState2] /* dependencies */);
```

Detailed example:

```js
import React, { useState } from 'react';
import { useSelector } from 'use-selector';

function Form() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const isFormValid = useSelector(() => title !=== '' && text !== '', [title, text]);

  return (
    <form>
      <input onChange={e => setTitle(e.target.value)} value={title} />
      <input onChange={e => setText(e.target.value)} value={text} />

      <button disabled={isFormValid} />
    </form>
  );
}

export default Form;
```

## License

[MIT](https://github.com/assister-ai/use-selector/blob/master/LICENSE)
