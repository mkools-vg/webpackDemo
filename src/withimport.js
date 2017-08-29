import * as process from "process"

const print = () => {
    console.log(process.env.NODE_ENV)
}

export {
    print
}