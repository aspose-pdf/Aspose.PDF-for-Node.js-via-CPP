import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Embed fonts a PDF-file and save the "ResultEmbedFonts.pdf"*/
const json = AsposePdfModule.AsposePdfEmbedFonts(pdf_file, "ResultEmbedFonts.pdf");
console.log("AsposePdfEmbedFonts => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
