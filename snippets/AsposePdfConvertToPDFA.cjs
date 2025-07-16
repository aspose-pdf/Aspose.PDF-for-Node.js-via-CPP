const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to PDF/A(1A) and save the "ResultConvertToPDFA.pdf"*/
    /*During conversion process, the validation is also performed, "ResultConvertToPDFA.xml"*/
    const json = AsposePdfModule.AsposePdfConvertToPDFA(pdf_file, AsposePdfModule.PdfFormat.PDF_A_1A, "ResultConvertToPDFA.pdf", "ResultConvertToPDFALog.xml");
    console.log("AsposePdfConvertToPDFA => %O", json.errorCode == 0 ? [json.fileNameResult, json.fileNameLogResult] : json.errorText);
});