const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Delete text headers from a PDF-file and save the "ResultPdfDeleteTextHeaders.pdf"*/
    const json = AsposePdfModule.AsposePdfDeleteTextHeaders(pdf_file, "ResultPdfDeleteTextHeaders.pdf");
    console.log("AsposePdfDeleteTextHeaders => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});