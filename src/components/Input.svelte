<script>
    import validate from './validate';

    export let label;
    export let isDark;
    export let type = 'text';
    export let required = true;
</script>

<div class="nes-field">
    <label for={label}>{label}</label>
    <input use:validate {required} {type} id={label} name={label} class="nes-input" class:is-dark={isDark}>
</div>