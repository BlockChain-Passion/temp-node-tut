const os = require('os')

console.log(`the System up time is ${os.uptime()}`);

const currentOS = {
    name:os.type(),
    version: os.release(),
    arch : os.arch(),
    nosCPU : os.cpus(),
    homedir : os.homedir(),
    hostname : os.hostname(),
    platform : os.platform()
}

console.log(currentOS);