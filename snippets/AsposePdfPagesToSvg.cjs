const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to SVG and save the "ResultPdfToSvg.svg"*/
    const json = AsposePdfModule.AsposePdfPagesToSvg(pdf_file, "ResultPdfToSvg.svg");
    console.log("AsposePdfPagesToSvg => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);
});