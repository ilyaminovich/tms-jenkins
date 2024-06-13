import * as log4js from "log4js";
//import log4js from "log4js";
const dateFormat = '%d{[dd/MM/yyyy] [hh:mm:ss]} [%p] - %m'

log4js.configure({
    appenders: {
        fullLog: {
            type: 'file',
            filename: 'HW_22/reports/logger/fullLog.log',
            layout: {
                type: 'pattern',
                pattern: dateFormat,
            }
        },
        console: {
            type: 'console',
            layout: {
                type: 'basic',
            }
        }
    },
    categories: {
        default: { appenders: ["fullLog","console"], level: "debug"}
    },
})

const logger = log4js.getLogger()

export {
    logger
}