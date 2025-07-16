const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*string, include number pages with interval: "7, 20, 22, 30-32, 33, 36-40, 46"*/
    /*const numPages = "1-3";*/
    /*array, array of number pages*/
    /*const numPages = [1,3];*/
    /*number, number page*/
    const numPages = 1;
    /*Delete pages from a PDF-file and save the "ResultDeletePages.pdf"*/
    const json = AsposePdfModule.AsposePdfDeletePages(pdf_file, "ResultDeletePages.pdf", numPages);
    console.log("AsposePdfDeletePages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});