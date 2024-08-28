document.getElementById('send-requests').addEventListener('click', sendRequest);

const resultsDiv = document.getElementById('results');

function sendRequest() {
  resultsDiv.innerHTML = '';

  let urls = document.getElementById('urls').value.trim();
  const urlArray =urls.split(/\n+|\s+/);
  
  urlArray.forEach((request) => {
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
}

async function myFetch(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}
