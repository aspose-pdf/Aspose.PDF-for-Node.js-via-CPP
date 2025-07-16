const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to DICOM with template "ResultPdfToDICOM{0:D2}.dcm" ({0}, {0:D2}, {0:D3}, ... format page number), resolution 150 DPI and save*/
    const json = AsposePdfModule.AsposePdfPagesToDICOM(pdf_file, "ResultPdfToDICOM{0:D2}.dcm", 150);
    console.log("AsposePdfPagesToDICOM => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);
});