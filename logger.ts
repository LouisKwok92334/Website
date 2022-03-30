import winston from "winston";
import {format} from "date-fns";

const logFormat = winston.format.printf(function (info) {
    let date = format(new Date(), "MM/dd/yyyy HH:mm:ss");
    return `${date} [${info.level}]: ${info.message}`;
});

// Singleton <-- only one instance in whole application
export const logger = winston.createLogger({
    level: "info", // process.env.NODE_ENV === "development" ? "development" : "info"
    format: winston.format.combine(winston.format.colorize(), logFormat),
    transports: [new winston.transports.Console()],
});
