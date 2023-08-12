const puppeteer = require('puppeteer');
const mail = "happymittal203@gmail.com";
const password = "neha@neha123";
(async function(){
    let browser = await puppeteer.launch({ headless : false ,defaultViewport: null,args: ['--start-fullscreen']});
    let page = await browser.newPage();
    await page.goto("https://www.linkedin.com/");
    // await waitAndClick("ul.menu a",page);
    // await page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    // await page.evaluate(function(){
    //     let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
    //     btns[1].click();
    //     return;
    // });
    await page.waitForSelector("#session_key");
    await page.type("#session_key",mail,{ delay: 100 });
    await page.type("#session_password",password,{ delay: 100 });
    await waitAndClick(".sign-in-form__submit-button", page);
    await page.waitForSelector("#ember18");
    await waitAndClick("#ember18", page);
    await page.waitForSelector(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width");
    await page.evaluate(function(){
        let allConnects = document.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width");
        for(let i = 0; i < 5; i++){
            let connect = allConnects[i];
            // let clickSelector = connect.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width");
            // clickSelector.click();
            connect.click();
        }
        return;
    });
})();
async function waitAndClick(selector, page){
    await page.waitForSelector(selector);
    await page.click(selector);
}
// (async function(){
//     let browser = await puppeteer.launch({ headless : false ,defaultViewport: null,args: ['--start-fullscreen']});
//     let page = await browser.newPage();
//     await page.goto("https://www.hackerrank.com/");
//     await waitAndClick("ul.menu a",page);
//     await page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
//     await page.evaluate(function(){
//         let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
//         btns[1].click();
//         return;
//     });
//     await page.waitForSelector("#input-1");
//     await page.type("#input-1",mail,{ delay: 100 });
//     await page.type("#input-2",password,{ delay: 100 });
//     await waitAndClick('button[data-analytics="LoginPassword"]',page);
//     await waitAndClick('[data-automation="algorithms"]',page);
//     await page.waitForSelector(".filter-group");
//     await page.evaluate(function(){
//         let allDivs = document.querySelectorAll(".filter-group");
//         let div = allDivs[3];
//         let clickSelector = div.querySelector(".ui-checklist-list-item input");
//         clickSelector.click();
//         return;
//     });
//     await page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
//     let questionArr = await page.evaluate(function(){
//         let arr = [];
//         let questionLink = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
//         for(let i = 0; i < questionLink.length; i++){
//             let eachQuestionLink = questionLink[i].href;
//             arr.push(eachQuestionLink);
//         }
//         return arr;
//     });
//     for(let i = 0; i < questionArr.length; i++){
//         await questionSolver(questionArr[i],code.answers[i],page);
//     }
// })();
// async function waitAndClick(selector, page){
//     await page.waitForSelector(selector);
//     await page.click(selector);
// }
// async function questionSolver(question,answer,page){
//     await page.goto(question);
//     await waitAndClick(".checkbox-input",page90p);
//     await waitAndClick(".input-wrap",page);
//     await page.type(".input-wrap", answer);
//     await page.keyboard.down("Control");
//     await page.keyboard.press('A');
//     await page.keyboard.press('X');
//     await page.keyboard.up("Control");
//     await waitAndClick(".monaco-editor.no-user-select.vs",page);
//     await page.keyboard.down("Control");
//     await page.keyboard.press('A');
//     await page.keyboard.press("V");
//     await await page.keyboard.up("Control");
//     await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
// }