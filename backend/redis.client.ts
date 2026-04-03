import { createClient } from 'redis';

const client = createClient({
    url : "rediss://default:gQAAAAAAASSFAAIncDJmZjRiODM0ZjcxZDM0MTgxOTllZjU0OTIwNjViZDhkZnAyNzQ4ODU@touched-squirrel-74885.upstash.io:6379"
});

client.on('error', (err) => {
    console.log("Redis Client Error", err);
})

client.connect().then(() => { console.log("Redis Connected") });

export default client;