const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const findText = 'Aspose';
    const replaceText = 'ASPOSE';

    /*string, include number pages with interval: "7, 20, 22, 30-32, 33, 36-40, 46"*/
    /*const numPages = "1-3";*/
    /*array, array of number pages*/
    /*const numPages = [1,3];*/
    /*number, number page*/
    const numPages = 1;

    /*Replace text on first page in a PDF-file and save the "ResultPdfReplaceTextPages.pdf"*/
    const json = AsposePdfModule.AsposePdfReplaceTextPages(pdf_file, findText, replaceText, numPages, "ResultPdfReplaceTextPages.pdf");
    console.log("AsposePdfReplaceTextPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});
