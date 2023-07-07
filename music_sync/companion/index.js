import { inbox } from "file-transfer";
 
//     fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       body: `grant_type=client_credentials&client_id=6c67e8ff563849ddac5941a66120b418&client_secret=24d055e6038b4c45ba2c2c1927cacc51`,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     })
//     .then((response) => response.json())
//   .then((json) => {
//     console.log("Data: " & json);
//   })



    // var client_id = '6c67e8ff563849ddac5941a66120b418';
    // var client_secret = '24d055e6038b4c45ba2c2c1927cacc51';

    // var authOptions = {
    // url: 'https://accounts.spotify.com/api/token',
    // headers: {
    //     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    // },
    // form: {
    //     grant_type: 'client_credentials'
    // },
    // json: true
    // };

    // request.post(authOptions, function(error, response, body) {
    // if (!error && response.statusCode === 200) {
    //     var token = body.access_token;
    //     console.log("Access Token: " & token);
    // }
    // });



//     var client_id = '6c67e8ff563849ddac5941a66120b418';
// var redirect_uri = 'http://localhost:8888/callback';

// var app = express();

// app.get('/login', function(req, res) {

//   var state = generateRandomString(16);
//   var scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
  

// Process the inbox queue for files, and read their contents as text
async function processAllFiles() {
    let file;
    while ((file = await inbox.pop())) {
      const payload = await file.json();
      console.log(`file contents: ${payload.heartRate}`);
    }
 }
 
 
 // Process new files as they are received
 inbox.addEventListener("newfile", processAllFiles);
 
 // Also process any files that arrived when the companion wasn’t running
 processAllFiles()