<script>
    export let label;
    export let checked;
    export let isDark;
</script>
<label>
    <input bind:checked type="checkbox" class="nes-checkbox" class:is-dark={isDark} />
    <span>{label}</span>
</label>