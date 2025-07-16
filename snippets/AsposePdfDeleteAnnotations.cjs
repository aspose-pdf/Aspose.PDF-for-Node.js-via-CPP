const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Delete annotations from a PDF-file and save the "ResultPdfDeleteAnnotations.pdf"*/
    const json = AsposePdfModule.AsposePdfDeleteAnnotations(pdf_file, "ResultPdfDeleteAnnotations.pdf");
    console.log("AsposePdfDeleteAnnotations => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});