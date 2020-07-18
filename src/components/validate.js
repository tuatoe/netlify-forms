export default function (node) {
    node.addEventListener('blur', () => {
        if(!node.checkValidity()) {
            node.classList.add('is-error');
        } else {
            node.classList.remove('is-error');
        }
    })
}