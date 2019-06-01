// fifo
const queue = [];
const checkboxs = document.getElementsByTagName('input');

const optionsMap = [
    ['Work', 'Social Life', 'Sleep'],
    ['Consistency', 'Availability', 'Partition tolerance'],
    ['Умная', 'Красивая', 'Спортивная'],
    ['Умный', 'Красивый', 'Спортивный'],
];

if (qs['option']) {
    let index = +qs['option'];
    if (optionsMap[index]) {
        for (let i in checkboxs) {
            if (checkboxs[i].addEventListener) {
                checkboxs[i].parentElement.getElementsByTagName('label')[0].innerHTML = optionsMap[index][i];
            }
        }
    }
}


for (let i in checkboxs) {
    if (checkboxs[i].addEventListener) {
        checkboxs[i].addEventListener('change', (e) => {
            if (e.target.checked) {
                queue.push(e.target.attributes.id.value);
                if (queue.length > 2) {
                    document.getElementById(queue.shift()).click();
                }
            } else {
                let index = queue.indexOf(e.target.attributes.id.value);

                if (index > -1) {
                    queue.splice(index, 1);
                }
            }
        })
    }
}