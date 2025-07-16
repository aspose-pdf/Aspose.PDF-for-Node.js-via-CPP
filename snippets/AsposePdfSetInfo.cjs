const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Set PDF info: title, creator, author, subject, keywords, creation (date), mod (date modify)*/
    /*If not need to set value, use undefined or "" (empty string)*/
    /*Set info (metadata) in a PDF-file and save the "ResultSetInfo.pdf"*/
    const json = AsposePdfModule.AsposePdfSetInfo(pdf_file, "Setting PDF Document Information", "", "Aspose", undefined, "Aspose.Pdf, DOM, API", undefined, "05/05/2023 11:55 PM", "ResultSetInfo.pdf");
    console.log("AsposePdfSetInfo => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});