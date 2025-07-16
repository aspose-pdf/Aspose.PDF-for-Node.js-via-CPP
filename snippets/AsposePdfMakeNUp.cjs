const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const columns = 2
    const rows = 2
    /*Make N-Up document from a PDF-file and save the "ResultMakeNUp.pdf"*/
    const json = AsposePdfModule.AsposePdfMakeNUp(pdf_file, columns, rows, "ResultMakeNUp.pdf");
    console.log("AsposePdfMakeNUp => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});