const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, '../userLog.txt');
const log = fs.readFileSync(logsPath, 'utf-8');

function userLogs(req,res,next){
    fs.appendFileSync(logsPath, 'El usuario ingreso en: ' + req.url+ '\n');
    next();
};

module.exports = userLogs;