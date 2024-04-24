//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                     LIGHT-WEIGHT WHATSAPP BOT                                        //
//                                                                                                      //
//                                             𝚅.1.2.7                                                  // 
//                                                                                                      //
//                                                                                                      //
//                                          BY: DANUPA-X.z                                              //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : spy-x-md
* @Developer : Danupa-Xz
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : Danupa-Xz

**/

const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const toBool = (x) => x === 'true';
const DATABASE_URL = process.env.DATABASE_URL || './lib/database.db';
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

//=========================[REQUIRED MODULES, USE IT AS U LIKE!]===================//

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '',
    HANDLERS: process.env.HANDLERS || '.',
    INFO: process.env.INFO || 'SPY-X-MD;DanupaX;https://telegra.ph/file/105f7645688f80ccec88f.jpg',
    URL: process.env.URL || 'https://chat.whatsapp.com/DuHkJmKQTqhDzUbc19zykJ',
    SUDO: process.env.SUDO || '94775478099',
    AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || 'true',
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'true',
    MODE: process.env.MODE || 'public',
    STICKER_DATA: process.env.STICKER_DATA || '️ᴍᴀᴅᴇ ʙʏ; SPY-X-MD',
    HAPP: process.env.HAPP || '', // IF NOT HEROKU THEN KEEP IT BLANK
    HKEY: process.env.HKEY || '', // IF NOT HEROKU THEN KEEP IT BLANK
    DATABASE_URL: DATABASE_URL,
    DATABASE:
     DATABASE_URL === "./lib/database.db"
       ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
