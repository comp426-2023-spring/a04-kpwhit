import minimist from "minimist";
import rpsls, { rps } from "./a03-kpwhit/lib/rpsls.js"

async function main() {
    const args = minimist(process.argv.slice(2));
    if (!args.port) {
        args.port = 5000;
        console.log(rpsls)
    }
    console.log(args.port)
}

main()