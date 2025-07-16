const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Delete JavaScripts from a PDF-file and save the "ResultPdfDeleteJavaScripts.pdf"*/
    const json = AsposePdfModule.AsposePdfDeleteJavaScripts(pdf_file, "ResultPdfDeleteJavaScripts.pdf");
    console.log("AsposePdfDeleteJavaScripts => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});