const marginImage = 10;
const widthImage = (1024-10*4)/4;
console.log(widthImage);

let amountImage = +prompt('сколько  изображений в галерее?', 0);
let widthImageUser = +prompt('какова ширина каждого изображения?', 0);
if (amountImage && widthImageUser) {
    const amountImageInRow = Math.floor(1024/(widthImageUser+marginImage));
    const amountFullRows = Math.floor(amountImage/amountImageInRow);
    const amountImageInLastRow = amountImage - amountFullRows*amountImageInRow;
    alert(`количество изображений в ряду ${amountImageInRow}`);
    alert(`количество полных рядов ${amountFullRows}`)
    alert(`количество изображений в последнем ряду ${amountImageInLastRow}`)
}
else alert ('некорректные параметры')
