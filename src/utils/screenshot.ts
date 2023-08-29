import * as puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

export default async function screenshot(url: string) {
  const options = {
    // args: [],
    // executablePath:
    //   process.platform === 'win32'
    //     ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    //     : process.platform === 'linux'
    //     ? '/usr/bin/google-chrome'
    //     : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',

    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  };
  console.log(123123, chrome);
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 2000, height: 1000 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  return await page.screenshot({ type: 'png' });
}
