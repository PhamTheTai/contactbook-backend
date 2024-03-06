const app = require("./app");
const config = require("./app/config");
const MongoBD = require("./app/utils/mongodb.util");


async function startSever() {
    try {
        await MongoBD.connect(config.db.uri);
        console.log("Connected to the database!");
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on post ${PORT}.`);
        });
    }catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}
startSever();

