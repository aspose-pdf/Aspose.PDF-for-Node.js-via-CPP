const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Merge two PDF-files and save the "ResultMerge.pdf"*/
    const json = AsposePdfModule.AsposePdfMerge2Files(pdf_file, pdf_file, "ResultMerge.pdf");
    console.log("AsposePdfMerge2Files => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});