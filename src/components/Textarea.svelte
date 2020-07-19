<script>
    import validate from './validate';

    export let label;
    export let name;
    export let isDark;
    export let required = true;
</script>

<label for={name}>{label}</label>
<textarea use:validate {required} id={name} {name} class="nes-textarea" class:is-dark={isDark}></textarea>
