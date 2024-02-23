import puppeteer from "puppeteer";


/**
 * Converts a webpage to a PDF file.
 * 
 * @param {string} site - The URL of the webpage to convert to PDF.
 * @param {string} outputPath - The file path where the generated PDF will be saved.
 * @returns {Promise<void>} - A promise that resolves when the PDF generation is complete.
 */
async function toPDF(site: string, outputPath: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(site)
    await page.pdf({ path: outputPath, format: 'A4' });
    await browser.close();
}

module.exports = toPDF;