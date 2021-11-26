<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<script>
    import { onMount, onDestroy } from 'svelte';

    const verifyUser = function(response) {
        console.log("Verified");
        let element = document.querySelector("[data-recaptcha='true']");
        console.log(element);
        element.value = response
        element.dispatchEvent(new Event("change"));
        console.log(element.value);
        // document.getElementById("login-form").submit();
    }

    const recaptchaExpired = function() {
        let element = document.querySelector("[data-recaptcha='true']");
        console.log(element);
        element.value = ""
        element.dispatchEvent(new Event("change"));
        console.log(element.value);
    }

    onMount(() => {
        window.verifyUser = verifyUser;
        window.recaptchaExpired = recaptchaExpired;
    })

    onDestroy(() => {
        window.verifyUser = null;
        window.recaptchaExpired = null;
    })
</script>

<form id="login-form" method="get" action="/yardim">
    <div class="mb-3">
        <label for="tckn" class="form-label">TC Kimlik Numarası</label>
        <input
        required
            type="number"
            class="form-control"
            id="tckn"
            aria-describedby="tcknHelp"
        />
        <div id="tcknHelp" class="form-text">
            Lütfen sadece rakam kullanınız
        </div>
    </div>
    <div class="mb-3">
        <label for="dogumTarihi" class="form-label">Doğum Tarihi</label>
        <input
            type="date"
            class="form-control"
            id="dogumTarihi"
        />
    </div>

    <div class="form-group">
        <div
            class="g-recaptcha"
            data-sitekey={import.meta.env.VITE_RC_KEY}
            data-callback="verifyUser"
            data-expired-callback="recaptchaExpired"
            data-action="submit"></div>
        <input
            class="form-control d-none"
            data-recaptcha="true"
            required
            value=""
            type="hidden"
            name="recaptval"
            data-error="Lütfen robot olmadığınızı doğrulayınız" /> 
        <div class="help-block with-errors" />
    </div>
    <button type="submit" class="btn btn-primary">Oturum Aç</button>
</form>