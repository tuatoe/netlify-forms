<script>
    import validate from './validate';

    export let label;
    export let id;
    export let isDark;
    export let required = true;
</script>

<label for={id}>{label}</label>
<textarea use:validate {required} id={id} name={id} class="nes-textarea" class:is-dark={isDark}></textarea>
