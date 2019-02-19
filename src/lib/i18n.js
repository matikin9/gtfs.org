const langs = [
  'en',
  'es'
]

exports.langs = langs

exports.getPathForLanguage = (path, lang) => {
  const urlParts = path.split('/')

  if (langs.includes(urlParts[1])) {
    urlParts.splice(1, 1)
  }

  if (lang !== 'en') {
    urlParts.splice(1, 0, lang)
  }

  return urlParts.join('/')
}
