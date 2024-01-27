import 'dotenv/config'
import * as http from "http"

const domain = process.env.NGROK_DOMAIN || ''
const forwardPort = process.env.NGROK_FORWARD_PORT

const httpServer = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Hello");
    res.end();
});

import * as ngrok from "@ngrok/ngrok";
ngrok.consoleLog();

const run = async (): Promise<void> => {
    await standardConfig()
};

const standardConfig = async () => {
    ngrok.loggingCallback(function (level, target, message) {
        console.log(level, target, "-", message);
    });
    const sessionBuilder = new ngrok.SessionBuilder()
        .authtokenFromEnv()
        .handleStopCommand(() => {
            console.log("stop command");
        })
        .handleRestartCommand(() => {
            console.log("restart command");
        })
        .handleUpdateCommand((update) => {
            console.log(
                "update command, version: " +
                update.version +
                " permitMajorVersion: " +
                update.permitMajorVersion
            );
        });
    const session = await sessionBuilder.connect();
    const listener = await session.httpEndpoint().domain(domain).listen();
    console.log("Ingress established at:", listener.url());
    httpServer.listen(8080);
    listener.forward(`localhost:${forwardPort}`);

    // unregister logging callback
    ngrok.loggingCallback()
}

run()
