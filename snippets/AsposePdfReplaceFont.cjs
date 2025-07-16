const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const findFont = 'Helvetica';
    const replaceFont = 'Times';
    /*Replace font Helvetica to Times in a PDF-file and save the "ResultPdfReplaceFont.pdf"*/
    const json = AsposePdfModule.AsposePdfReplaceFont(pdf_file, findFont, replaceFont, "ResultPdfReplaceFont.pdf");
    console.log("AsposePdfReplaceFont => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});
