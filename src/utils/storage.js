const storage = window.localStorage

export function save (key, value) {
  storage.setItem(key, value)
}

export function saves (datas) {
  datas.forEach(data => save(data.key, data.value))
}

export function read (key) {
  return storage.getItem(key)
}

export function reads (keys) {
  return keys.map(key => read(key))
}

export function clear (key) {
  storage.removeItem(key)
}

export function clears (keys) {
  keys.forEach(key => clear(key))
}
