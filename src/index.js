import app from './server/app';

app.listen(3000, () => console.log(`Listening on port: ${app.get('port')}`));
