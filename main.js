// TODO
document.getElementById('send-requests').addEventListener('click', sendRequest);
const resultsDiv = document.getElementById('results');
function sendRequest() {
  resultsDiv.innerHTML = '';

  let requests = document.getElementById('urls').value;
  requests = requests.trim();
  const splitReq = requests.split(/\n+|\s+/);
  splitReq.map((request) => {
    const resDiv = document.createElement('div');
    const hr = document.createElement('hr');
    myFetch(request)
      .then((jsonResponse) => {
        resDiv.innerHTML = JSON.stringify(jsonResponse);
      })
      .catch(() => (resDiv.innerHTML = 'error'));

    resultsDiv.appendChild(resDiv);
    resultsDiv.appendChild(hr);
  });

  async function myFetch(request) {
    let response = await fetch(request);
    if (!response.ok) {
      throw new Error('error');
    }
    return await response.json();
  }
}
