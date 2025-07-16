const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Optimize a PDF-file and save the "ResultOptimize.pdf"*/
    const json = AsposePdfModule.AsposePdfOptimize(pdf_file, "ResultOptimize.pdf");
    console.log("AsposePdfOptimize => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});