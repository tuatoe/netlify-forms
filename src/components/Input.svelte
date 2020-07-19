<script>
    import validate from './validate';

    export let label;
    export let name;
    export let isDark;
    export let type = 'text';
    export let required = true;
</script>

<div class="nes-field">
    <label for={name}>{label}</label>
    <input use:validate {required} {type} id={name} {name} class="nes-input" class:is-dark={isDark}>
</div>