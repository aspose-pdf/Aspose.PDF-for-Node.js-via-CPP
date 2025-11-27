const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const margin = 1.5;
    /*Crop PDF-pages and save the "ResultPdfCropPages.pdf"*/
    const json = AsposePdfModule.AsposePdfCropPages(pdf_file, margin, "ResultPdfCropPages.pdf");
    console.log("AsposePdfCropPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});