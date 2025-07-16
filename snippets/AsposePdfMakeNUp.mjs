import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
const columns = 2
const rows = 2
/*Make N-Up document from a PDF-file and save the "ResultMakeNUp.pdf"*/
const json = AsposePdfModule.AsposePdfMakeNUp(pdf_file, columns, rows, "ResultMakeNUp.pdf");
console.log("AsposePdfMakeNUp => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
