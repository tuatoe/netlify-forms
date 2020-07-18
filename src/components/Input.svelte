<script>
    import validate from './validate';

    export let label;
    export let id;
    export let isDark;
    export let type = 'text';
    export let required = true;
</script>

<div class="nes-field">
    <label for={id}>{label}</label>
    <input use:validate {required} {type} id={id} name={id} class="nes-input" class:is-dark={isDark}>
</div>