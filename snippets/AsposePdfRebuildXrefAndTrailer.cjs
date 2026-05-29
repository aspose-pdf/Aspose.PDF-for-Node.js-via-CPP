const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Rebuild a PDF-file cross-reference table and trailer structures and save the "ResultPdfRebuildXrefAndTrailer.pdf"*/
    const json = AsposePdfModule.AsposePdfRebuildXrefAndTrailer(pdf_file, "ResultPdfRebuildXrefAndTrailer.pdf");
    console.log("AsposePdfRebuildXrefAndTrailer => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});