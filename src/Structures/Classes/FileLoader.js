const { glob } = require("glob")
const { promisify } = require("util")
const PG = promisify(glob)

/**
 * @param {String} folderName 
 */

async function loadFiles(folderName) {
    const files = await PG(`${process.cwd().replace(/\\/g, "/")}/Src/${folderName}/*/*.js`)
    files.forEach(file => delete require.cache[require.resolve(file)])
    return files;
}

module.exports = { loadFiles }
/**
 * ======================================================
 * Developed by ASH Development | https://dsc.gg/ash_gaming
 * ======================================================
 * Mention ASH or ASH Development when you use this Handler
 * ======================================================
 * Give a wonderfull start to this repositories
 * ======================================================
 */