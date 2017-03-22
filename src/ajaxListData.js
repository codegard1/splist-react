import $ from 'jquery';
const fetchURL = "http://jsonplaceholder.typicode.com/posts/";

export function fetchListData(component, additionalArgs) {
  console.log('fetchListData');
  let response = $.ajax({
    url: fetchURL,
    type: 'GET',
    dataType: 'json'
  });

  response.done(function (data) {
    let newState = !data.length ? [data] : data;
    console.log('newState:', newState);
    component.setState({ listData: newState });
  });

  response.fail(function (jqxhr, status, error) {
    console.log("Error:", error, status, jqxhr);
  });
}