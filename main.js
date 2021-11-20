// TODO
document.getElementById('send-requests').addEventListener('click', sendRequest);

function sendRequest() {
  document.getElementById('results').innerHTML = '';

  let requests = document.getElementById('urls').value;
  requests = requests.trim();
  const splitReq = requests.split(/\n+|\s+/);
  splitReq.map((request) => {
    const resDiv = document.createElement('div');
    myFetch(request)
      .then((jsonResponse) => {
        resDiv.innerHTML = JSON.stringify(jsonResponse);
      })
      .catch(() => (resDiv.innerHTML = 'error'));
    document.getElementById('results').appendChild(resDiv);
  });

  async function myFetch(request) {
    let response = await fetch(request);
    if (!response.ok) {
      throw new Error('error');
    }
    return await response.json();
  }
}
