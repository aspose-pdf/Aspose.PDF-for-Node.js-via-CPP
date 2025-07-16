import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Get words and characters count in a PDF-file*/
const json = AsposePdfModule.AsposePdfGetWordsCharactersCount(pdf_file);
/* JSON
   Words count      : json.words
   Characters count : json.characters
*/
console.log("AsposePdfGetWordsCharactersCount => %O", json.errorCode == 0 ? 'Words count: ' + json.words : json.errorText);
