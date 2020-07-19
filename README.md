# Netlify Forms + Svelte Example
There are two forms, 
1. one is found in public/index.html
2. The other is in a svelte app which needs to be hidden and put in the .html file (in this case, app.html). So basically there is a copy of the form in app.html and in Form.svelte. In App.svelte I remove the hidden form.
See: `https://docs.netlify.com/forms/setup/#work-with-javascript-rendered-forms`    
      
Is probably better to just use Sapper or Routify with SSR.