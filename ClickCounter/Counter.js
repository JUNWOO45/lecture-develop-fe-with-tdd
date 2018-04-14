var App = App || {}

App.Counter = _data => {
  if (!_data) throw Error()
  
  const data = _data
  data.value = data.value || 0

  const counter = {
    count () { data.value++ },
    getValue () { return data.value },
  }

  return counter
}