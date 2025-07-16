const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
const txt_file = '../ReadMe.txt';
AsposePdf().then(AsposePdfModule => {
    /*Add attachment to a PDF-file and save the "ResultPdfAddAttachment.pdf"*/
    const json = AsposePdfModule.AsposePdfAddAttachment(pdf_file, txt_file, 'Description', "ResultPdfAddAttachment.pdf");
    console.log("AsposePdfAddAttachment => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});