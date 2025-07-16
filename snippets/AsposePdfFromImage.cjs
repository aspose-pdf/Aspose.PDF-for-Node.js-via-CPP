const AsposePdf = require('asposepdfnodejs');
const aspose_file = '../Aspose.jpg';
AsposePdf().then(AsposePdfModule => {
    /*Convert a Image-file to PDF and save the "ResultPDFFromImage.pdf"*/
    const json = AsposePdfModule.AsposePdfFromImage(aspose_file, AsposePdfModule.PdfPageSize.A4, 10, false, "ResultPdfFromImage.pdf");
    console.log("AsposePdfFromImage => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});