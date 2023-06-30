

function createDaiconElements(json) {
    let daicons_placeholder = document.querySelector('#daicons');
    daicons_placeholder.innerHTML = '';

    for (let p of json) {
        if (p.show) {
            let div1 = buildElement('div', '', 'col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-4', '', daicons_placeholder);
            div1.id = `daicon_card_${p.id}`;
            let div_card = buildElement('div', '', 'card', '', div1);
            let div2 = buildElement('div', `<h6 class="card-subtitle text-muted">${p.id}</h6>`, 'card-body', '', div_card);
            let div3 = buildElement('div', '', 'text-center', 'font-size:5em', div2);
            div3.id = `${p.id}_placeholder`;

            let i = buildElement('i', '', '', '', div3);
            i.setAttribute(`data-dc-id`, p.id);
            let div_row = buildElement('div', '', 'row g-1', '', div2);


            let p1 = buildElement('p', '', 'border card-text p-2 mt-4 mb-0 pe-4 small text-muted', 'font-size:0.6rem;', div2);
            p1.id = `${p.id}_code`;
            p1.innerText = `<i data-dc-id="${p.id}"></i>`;
            let div_grid = buildElement('div', '', 'd-grid mb-2 gap-2 d-md-flex justify-content-end', 'margin-top:-2.05em;margin-right:0.1em;', div2);
            let button1 = buildElement('button', `<i data-dc-id="copy_line"></i>`, 'btn btn-light btn-sm rounded-circle', '', div_grid);
            button1.setAttribute('data-clipboard-target', `#${p.id}_code`)
            button1.id = 'btn-copy';


            div_grid = buildElement('div', '', 'd-grid  gap-2 d-md-flex justify-content-end', '', div2);
            {
                let button = buildElement('button', '<i data-dc-id="copy_line"></i> SVG', 'btn btn-light btn-sm', '', div_grid);
                button.value = p.html;
                button.setAttribute('data-clipboard-target', `#${p.id}_svg`)
                button.id = 'btn-copy-svg';
            }
            {
                let button = buildElement('button', '<i data-dc-id="download_line"></i> SVG', 'btn btn-light btn-sm', '', div_grid);
                button.value = p.html;
                button.setAttribute('filename', `${p.id}`)
                button.setAttribute('data-clipboard-target', `#${p.id}_svg`)
                button.id = 'btn-download-svg';
            }
        }
        else {

        }




        // let p2 = buildElement('p', '', 'border p-2 m-0', 'font-size:0.5em', div2);
        // p2.id = `${p.id}_svg`;
        // let div_grid2 = buildElement('div', '', 'd-grid gap-2 d-md-flex justify-content-md-end', '', div2);
        // let button2 = buildElement('button', 'copy', 'btn btn-secondary btn-sm', '', div_grid2);
        // button2.setAttribute('data-clipboard-target', `#${p.id}_svg`);
        // button2.id = `btn-copy`;


        // for (let dom of p.doms) {
        //     let div_col = buildElement('div', '', 'col-md-6', '', div_row);
        //     let div_form = buildElement('div', '', 'form-floating', '', div_col);
        //     if (dom.type == 'select') {
        //         let select = buildElement('select', '', 'form-select', '', div_form);
        //         select.setAttribute('data-pc-parameter', `${dom.name}`);
        //         select.setAttribute('data-pc-target-name', `${p.id}`);
        //         select.value = 'false';
        //         for (let o of dom.values) {
        //             buildElement('option', `${o}`, '', '', select);
        //         }
        //         select.options[0].selected = true;
        //         select.addEventListener('change', function () {
        //             updateInput(this);
        //         })

        //     }
        //     else {
        //         let input = buildElement('input', '', 'form-control', '', div_form);
        //         input.setAttribute('type', dom.type);
        //         input.setAttribute('data-pc-target-name', `${p.id}`);
        //         input.setAttribute('data-pc-parameter', `${dom.name}`);
        //         input.value = dom.value;
        //         input.addEventListener('change', function () {
        //             updateInput(this);
        //         })
        //     }

        //     buildElement('label', `data-pc-${dom.name}`, '', '', div_form);
        // }
        // let p1 = buildElement('p', '', 'border card-text small p-2 mt-4 mb-0', '', div2);
        // p1.id = `${p.id}_code`;
        // let div_grid = buildElement('div', '', 'd-grid mb-4 gap-2 d-md-flex justify-content-md-end', '', div2);
        // let button1 = buildElement('button', 'copy', 'btn btn-secondary btn-sm', '', div_grid);
        // button1.setAttribute('data-clipboard-target', `#${p.id}_code`)
        // button1.id = 'btn-copy';

        // let p2 = buildElement('p', '', 'border p-2 m-0', 'font-size:0.5em', div2);
        // p2.id = `${p.id}_svg`;
        // let div_grid2 = buildElement('div', '', 'd-grid gap-2 d-md-flex justify-content-md-end', '', div2);
        // let button2 = buildElement('button', 'copy', 'btn btn-secondary btn-sm', '', div_grid2);
        // button2.setAttribute('data-clipboard-target', `#${p.id}_svg`);
        // button2.id = `btn-copy`;

        // let button3 = buildElement('button', 'download', 'btn btn-secondary btn-sm', '', div_grid2);
        // button3.addEventListener('click', function () {
        //     // p2.id にsvgタグがある
        //     let content = document.querySelector(`#${p2.id}`).textContent;
        //     let blob = new Blob([content], { "type": "image/svg+xml" });
        //     let a = document.createElement('a');
        //     a.href = window.URL.createObjectURL(blob);
        //     a.setAttribute('download', `picon_${p.id}.svg`);
        //     a.click();

        // })


    }

    let es = document.querySelectorAll('#btn-copy');
    for (let element of es) {
        let clipboard = new ClipboardJS(element);
        clipboard.on('success', function (e) {
            const currentLabel = element.innerHTML;

            // Exit label update when already in progress
            if (element.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            // element.innerHTML = 'Copied!';
            element.classList.replace('btn-secondary', 'btn-success');

            // Revert button label after 3 seconds
            setTimeout(function () {
                element.innerHTML = currentLabel;
                element.classList.replace('btn-success', 'btn-secondary');
            }, 1000)
        })
    }

    es = document.querySelectorAll('#btn-copy-svg');
    for (let element of es) {
        element.addEventListener('click', function () {
            const currentLabel = element.innerHTML;
            copyToClipboard(element.value)
            element.classList.replace('btn-secondary', 'btn-success');
            // Revert button label after 3 seconds
            setTimeout(function () {
                element.innerHTML = currentLabel;
                element.classList.replace('btn-success', 'btn-secondary');
            }, 1000)
        })
    }

    es = document.querySelectorAll('#btn-download-svg');
    for (let element of es) {
        element.addEventListener('click', function () {
            const currentLabel = element.innerHTML;
            copyToClipboard(element.value)
            element.classList.replace('btn-secondary', 'btn-success');

            // p2.id にsvgタグがある
            let content = element.value;
            let blob = new Blob([content], { "type": "image/svg+xml" });
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.setAttribute('download', `${element.getAttribute('filename')}.svg`);
            a.click();

            // Revert button label after 3 seconds

            setTimeout(function () {
                element.innerHTML = currentLabel;
                element.classList.replace('btn-success', 'btn-secondary');
            }, 1000)
        })
    }
}

// クリップボードAPIへのアクセスを許可する関数
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log(`'${text}' has been copied to clipboard`);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

window.addEventListener('DOMContentLoaded', function () {

    for (let j of json_daicons) {
        j.show = true;
    }
    createDaiconElements(json_daicons);
    loadDaiconTags();


    setTimeout(function () {
        updateMasonry();
    }, 2000);



})

function buildElement(name_tag, innerHTML, str_class, str_style, element_appended) {
    let element = document.createElement(name_tag);
    if (innerHTML != '') element.innerHTML = innerHTML;
    if (str_class != '') element.classList = str_class;
    if (str_style != '') element.setAttribute('style', str_style);
    element_appended.appendChild(element);
    return element;
}



var msnry_topics;
function updateMasonry() {
    var elem_picons = document.querySelector('#daicons');
    msnry_topics = new Masonry(elem_picons, {
        // options
        percentPosition: true,
        originLeft: true,
    });
}

function search(dom) {


    for (let j of json_daicons) {
        if (j.id.indexOf(dom.value) > -1) {
            j.show = true;
        }
        else {
            j.show = false;
        }
    }


    createDaiconElements(json_daicons);
    loadDaiconTags();
    updateMasonry();

}