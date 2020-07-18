<script>
    import {Input, Textarea} from '../components';

    export let isDark;
</script>

<form name="nice" method="POST" netlify netlify-honeypot="bot-field">
    <p style="display: none">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </p>
    <Input label="How are you today?" {isDark} />
    <Textarea label="Thoughts on Svelte?" {isDark} />
    <Textarea label="Thoughts on my videos?" {isDark} />
    <button type="submit" class="nes-btn is-primary">Submit</button>
</form>

<style>
    form {
        position: relative;
        max-width: 500px;
        margin: 0 auto;
    }
    button[type="submit"] {
        display: block;
        margin: 0 auto;
        margin-top: 15px;
    }
</style>