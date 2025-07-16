const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Export from a PDF-file with AcroForm to FDF and save the "ResultPdfExportFdf.fdf"*/
    const json = AsposePdfModule.AsposePdfExportFdf(pdf_file, "ResultPdfExportFdf.fdf");
    console.log("AsposePdfExportFdf => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});