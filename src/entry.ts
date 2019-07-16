import server from './server';

server.set('port', process.env.APP_PORT || 3007)
server.listen(3007, () => {
    console.log(`[SERVER] Running at http://localhost:3007`);
});