const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const findText = 'Aspose';
    const replaceText = 'ASPOSE';
    /*Replace text in a PDF-file and save the "ResultPdfReplaceText.pdf"*/
    const json = AsposePdfModule.AsposePdfReplaceText(pdf_file, findText, replaceText, "ResultPdfReplaceText.pdf");
    console.log("AsposePdfReplaceText => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});
