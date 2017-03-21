export function fetchListData(component, additionalArgs) {
  console.log('fetchListData');
  return fetch('http://jsonplaceholder.typicode.com/posts/', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'get'
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(response)
      } else {
        return response.json()
      }
    })
    .then(function (apiData) {
      let newState = !apiData.length ? [apiData] : apiData;
      console.log('newState:', newState);
      component.setState({
        listData: newState
      })
    })
    .catch(error => error);
}