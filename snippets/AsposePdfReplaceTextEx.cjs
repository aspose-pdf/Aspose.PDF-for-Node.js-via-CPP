const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const findReplaceSpec = [
            {
            findText: 'Aspose',
            replaceText: 'ASPOSE'
            },
            {
            findText: 'Node',
            replaceText: 'NODE'
            },
            {
            findText: 'ECMAScript',
            replaceText: '\u200FScript'
            }
    ];
    const optionsText = {numPages: 1, alignment: "auto"};
    /*Replace multiple text fragments in a PDF-file with alignment control and save the "ResultPdfReplaceTextEx.pdf"*/
    const json = AsposePdfModule.AsposePdfReplaceTextEx(pdf_file, findReplaceSpec, optionsText, "ResultPdfReplaceTextEx.pdf");
    console.log("AsposePdfReplaceTextEx => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});
