import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Validate PDF/A compatibility a PDF-file and save result in the "ResultPdfValidatePDFA.xml"*/
const json = AsposePdfModule.AsposePdfValidatePDFA(pdf_file, AsposePdfModule.PdfFormat.PDF_A_1A, "ResultPdfValidatePDFA.xml");
console.log("AsposePdfValidatePDFA => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
