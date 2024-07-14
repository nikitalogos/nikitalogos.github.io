```js

async load_content_by_url(url) {
  let response = await fetch(url)
  let text = await response.text()
  return text
},

// str.replace() can't handle asynchronous requests, so we need a wrapper
// source: https://stackoverflow.com/questions/33631041/javascript-async-await-in-replace
async replaceAsync(str, regex, asyncFn) {
  const promises = [];
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args);
    promises.push(promise);
  });
  const data = await Promise.all(promises);
  return str.replace(regex, () => data.shift());
},

async load_content_with_includes(url) {
  let file_dir = url.substring(0, url.lastIndexOf("/"))

  let text = await load_content_by_url(url)

  let out_text = await replaceAsync(
    text,
    /^@include\s*"(.+)"\s*$/mg, // regex for file includes
    async (...match) => {
      let url = match[1]
      url = url.replace(/^\./, file_dir) // if relative path -> make absolute

      let included_text = await load_content_with_includes(url) // get data by url
      return included_text
    }
  )
  return out_text
},

```
