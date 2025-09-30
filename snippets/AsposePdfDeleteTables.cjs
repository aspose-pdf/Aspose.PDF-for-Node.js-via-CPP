const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Delete tables from a PDF-file and save the "ResultPdfDeleteTables.pdf"*/
    const json = AsposePdfModule.AsposePdfDeleteTables(pdf_file, "ResultPdfDeleteTables.pdf");
    console.log("AsposePdfDeleteTables => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});