const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to TeX and save the "ResultPDFtoTeX.tex"*/
    const json = AsposePdfModule.AsposePdfToTeX(pdf_file, "ResultPDFtoTeX.tex");
    console.log("AsposePdfToTeX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});