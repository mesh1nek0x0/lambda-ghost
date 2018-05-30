'use strict';

const phantom = require('phantom');
const sleep = require('sleep-promise');

module.exports.handler = async (event, context, callback) => {
    console.log('lambda is started');
    let result = null;
    // to quit finally
    let instance;
    instance = await phantom.create();
    try{
        const page = await instance.createPage();
        let status = await page.open('https://httpbin.org/');
        console.log(status);
        if (status != 'success') {
            throw new Error('page is not opend');
        }

        /*** page.evaluate return element data to nodejs scope ***/
        const title = await page.evaluate(function() {
            return document.title;
        });
        console.log(title);

        // wait page has loading
        await sleep(3000);

        /*** you can pass node js variable to evaluating by Template Literals.
        (notice) coulud't pass normal variable. ***/
        let id = 'operations-tag-Request_inspection';
        const element = await page.evaluate(function(s) {
            return document.querySelector(s).innerHTML;
        }, `#${id} > small > div > p`);
        console.log(element);

        /*** you can post data with form. ***/
        status = await page.open('https://httpbin.org/forms/post');
        console.log(status);
        if (status != 'success') {
            throw new Error('page is not opend');
        }
        console.log('input custname "hoge"');
        await page.evaluate(function() {
            document.forms[0].custname.value = 'hoge';
            document.querySelector('body > form > p:nth-child(8) > button').click();
            // you can also like beloow
            // document.forms[0].submit();
        });
        // wait 2sec
        await sleep(2000);
        // it can be accessd
        const custname = await page.evaluate(function () {
            return JSON.parse(document.querySelector('body > pre').innerHTML).form.custname;
        });
        console.log('your custname:', custname);

    } catch (error) {
        console.log(error);
        result = error;
    } finally {
        console.log('finally started');
        await instance.exit();
    }
    callback(result);
}
