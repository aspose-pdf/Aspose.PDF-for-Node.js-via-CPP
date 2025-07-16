import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Add text in Header/Footer of a PDF-file and save the "ResultAddHeaderFooter.pdf"*/
const json = AsposePdfModule.AsposePdfAddTextHeaderFooter(pdf_file, "Aspose.PDF for Node.js via C++", "ASPOSE", "ResultAddHeaderFooter.pdf");
console.log("AsposePdfAddTextHeaderFooter => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
