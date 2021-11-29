<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?hl={$locale}" async defer></script>
</svelte:head>

<script>
    import { locale, t } from '../i18n/i18n';
    import { onMount, onDestroy } from 'svelte';

    const verifyUser = function(response) {
        // console.log("Verified");
        let element = document.querySelector("[data-recaptcha='true']");
        element.value = response;
        // element.dispatchEvent(new Event("change"));
    }

    const recaptchaExpired = function() {
        let element = document.querySelector("[data-recaptcha='true']");
        element.value = ""
        // element.dispatchEvent(new Event("change"));
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
        <label for="tckn" class="form-label">{$t('genel.tckn')}</label>
        <input
        required
            type="number"
            class="form-control"
            id="tckn"
            aria-describedby="tcknHelp"
        />
        <div id="tcknHelp" class="mt-n1 form-text">
            <small>{$t('validasyon.sadeceRakam')}</small>
        </div>
    </div>
    <div class="mb-3">
        <label for="dogumTarihi" class="form-label">{$t('kisi.dogumTarihi')}</label>
        <input
            type="date"
            lang="en_US"
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
            data-error={$t('validasyon.robotDegil')} /> 
        <div class="help-block with-errors" />
    </div>
    <button type="submit" class="btn btn-primary">{$t('oturum.oturumAc')}</button>
</form>

<style>
    form#login-form {
        width: 303px;
        margin: auto;
    }
</style>