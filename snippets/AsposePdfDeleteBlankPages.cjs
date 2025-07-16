const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Delete blank pages from a PDF-file and save the "ResultDeleteBlankPages.pdf"*/
    const json = AsposePdfModule.AsposePdfDeleteBlankPages(pdf_file, "ResultDeleteBlankPages.pdf");
    console.log("AsposePdfDeleteBlankPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});