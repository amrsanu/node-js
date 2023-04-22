const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        // ---
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head><title>Assignment 1</title></head>
            <body>
                <p>Welcome to my page</p>
                <form method="post" action="/create-user"> 
                    <input type="text" name="username"> <button type="submit">Send</button>
                </form>
            </body>
            </html>
        `);

        return res.end();
    }
    if (url === '/users'){
        // ---
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Assignment 1</title></head>
            <body>
                <ul><li>User1</li><li>User2</li><li>User3</li></ul>
            </body>
            </html>
        `);    
        return res.end();

    }

    if (url === '/create-user'){
        const body  = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]); // username=<some name by user>
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }

    // Send a html response with some "Page not found" error.
});



server.listen(3000);