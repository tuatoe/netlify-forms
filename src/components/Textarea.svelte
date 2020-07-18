<script>
    import validate from './validate';

    export let label;
    export let isDark;
    export let required = true;
</script>

<label for={label}>{label}</label>
<textarea use:validate {required} id={label} name={label} class="nes-textarea" class:is-dark={isDark}></textarea>
