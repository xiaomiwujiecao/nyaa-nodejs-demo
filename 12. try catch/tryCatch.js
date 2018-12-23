function get(obj, key) {
  try {
    return obj[key]
  } catch (e) {
    throw e
  }
}