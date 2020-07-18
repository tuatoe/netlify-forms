<script>
    import {Checkbox, Form} from './components';

    // remove hidden form
    // document.querySelector('#remove-me').remove();

    let isDark = false;
</script>

<div class="nes-container" class:is-dark={isDark}>
    <a class="nes-text is-success" href="/">&lt;- Go home</a>
    <div class="dark-mode-wrapper">
        <Checkbox label={'Dark Mode'} bind:checked={isDark} {isDark} />
    </div>
    <br>
    <br>
    <h1 class="nes-text is-primary" style="text-align:center">Please tell me your thoughts!</h1>
    <br>
    <Form {isDark} />
</div>

<style>
    * {
        box-sizing: border-box;
    }
    :global(html) {
        background-color: #209cee;
    }
    :global(body) {
        border: solid #209cee 5px;
    }
    :global(html, body) {
        height: 100%;
        padding: 0;
        margin: 0;
    }
    .nes-container {
        height: 100%;
        transition: .5s;
    }
    .nes-container.is-dark {
        margin: 0;
    }
    .dark-mode-wrapper {
        position: absolute;
        right: 25px;
        top: 25px;
    }
</style>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
</svelte:head>