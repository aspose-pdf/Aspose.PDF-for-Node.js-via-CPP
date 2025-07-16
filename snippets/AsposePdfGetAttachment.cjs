const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Get attachment from a PDF-file and save with template "ResultPdfGetAttachment_{0}" ({0} - name of attachment)*/
    const json = AsposePdfModule.AsposePdfGetAttachment(pdf_file, "ResultPdfGetAttachment_{0}");
    console.log("AsposePdfGetAttachment => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);
});